import React, { useEffect, useRef, useCallback } from 'react';
import PropTypes from 'prop-types';
import { FocusTrap } from 'focus-trap-react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTimes } from '@fortawesome/free-solid-svg-icons';
import { Card } from '../Card';
import './Modal.css';

export const Modal = ({
  isOpen = false,
  onClose,
  onConfirm,
  heading,
  children,
  confirmButton,
  cancelButton,
  size = 'default',
  forcedAction = false,
  className,
  ariaLabelledBy,
  ariaDescribedBy,
  ...props
}) => {
  const dialogRef = useRef(null);
  const contentRef = useRef(null);

  // Handle opening and closing the modal
  useEffect(() => {
    const dialog = dialogRef.current;
    if (!dialog) return;

    if (isOpen) {
      dialog.showModal();
      // Add class for animations
      dialog.classList.add('usa-modal--visible');
      // Prevent body scroll
      document.body.classList.add('usa-js-modal--active');
    } else {
      dialog.classList.remove('usa-modal--visible');
      // Allow time for closing animation
      const timeoutId = setTimeout(() => {
        if (dialog.open) {
          dialog.close();
        }
        document.body.classList.remove('usa-js-modal--active');
      }, 150);
      
      return () => clearTimeout(timeoutId);
    }
  }, [isOpen]);

  // Handle Escape key for non-forced-action modals
  const handleKeyDown = useCallback((event) => {
    if (event.key === 'Escape' && !forcedAction && onClose) {
      event.preventDefault();
      onClose();
    }
  }, [forcedAction, onClose]);

  // Handle clicking outside modal for non-forced-action modals
  const handleBackdropClick = useCallback((event) => {
    if (event.target === dialogRef.current && !forcedAction && onClose) {
      onClose();
    }
  }, [forcedAction, onClose]);

  // Handle close button click
  const handleCloseClick = useCallback(() => {
    if (onClose) {
      onClose();
    }
  }, [onClose]);

  // Handle confirm button click
  const handleConfirmClick = useCallback(() => {
    if (onConfirm) {
      onConfirm();
    }
  }, [onConfirm]);

  // Create enhanced buttons with click handlers
  const enhancedConfirmButton = confirmButton && React.cloneElement(confirmButton, {
    onClick: (e) => {
      // Call original onClick if it exists
      if (confirmButton.props.onClick) {
        confirmButton.props.onClick(e);
      }
      // Call our confirm handler
      handleConfirmClick();
    },
    tabIndex: 0 // Ensure button is focusable
  });

  const enhancedCancelButton = cancelButton && React.cloneElement(cancelButton, {
    onClick: (e) => {
      // Call original onClick if it exists
      if (cancelButton.props.onClick) {
        cancelButton.props.onClick(e);
      }
      // Call our close handler
      handleCloseClick();
    },
    tabIndex: 0 // Ensure button is focusable
  });

  // Create action button group for Card footer
  const actionButtons = (enhancedConfirmButton || enhancedCancelButton) && (
    <div className="usa-button-group">
      {enhancedConfirmButton && (
        <div className="usa-button-group__item">
          {enhancedConfirmButton}
        </div>
      )}
      {enhancedCancelButton && (
        <div className="usa-button-group__item">
          {enhancedCancelButton}
        </div>
      )}
    </div>
  );

  // Build CSS classes
  const modalClasses = [
    'usa-modal',
    size === 'large' && 'usa-modal--lg',
    forcedAction && 'usa-modal--forced-action',
    className
  ].filter(Boolean).join(' ');

  // Check if we have any focusable elements
  const hasButtons = !!(enhancedConfirmButton || enhancedCancelButton);
  const hasCloseButton = !forcedAction;
  const hasFocusableElements = hasButtons || hasCloseButton;

  return (
    <dialog
      ref={dialogRef}
      className={modalClasses}
      onKeyDown={handleKeyDown}
      onClick={handleBackdropClick}
      aria-labelledby={ariaLabelledBy}
      aria-describedby={ariaDescribedBy}
      aria-modal="true"
      {...props}
    >
      <FocusTrap
        active={isOpen}
        focusTrapOptions={{
          allowOutsideClick: !forcedAction,
          escapeDeactivates: !forcedAction,
          returnFocusOnDeactivate: true,
          clickOutsideDeactivates: !forcedAction,
          initialFocus: () => {
            // Wait for the DOM to be ready and find the best focus target
            const container = contentRef.current;
            if (!container) return false;
            
            // Try to find the first button in the modal
            const firstButton = container.querySelector('button:not([disabled]):not([aria-hidden="true"])');
            if (firstButton) {
              return firstButton;
            }
            
            // Fall back to any focusable element
            const focusableElement = container.querySelector('[tabindex="0"], input, select, textarea, button, a[href]');
            if (focusableElement) {
              return focusableElement;
            }
            
            // Final fallback to the container itself
            return container;
          },
          setReturnFocus: (previousActiveElement) => {
            return previousActiveElement;
          },
          fallbackFocus: () => {
            // Ensure the content container is focusable as fallback
            if (contentRef.current) {
              contentRef.current.setAttribute('tabindex', '0');
              return contentRef.current;
            }
            return false;
          },
        }}
      >
        <div 
          ref={contentRef}
          className="usa-modal__container"
          tabIndex={!hasFocusableElements ? 0 : undefined}
        >
          <Card 
            heading={heading}
            actionButton={actionButtons}
            className="usa-modal__card"
          >
            {!forcedAction && (
              <button
                type="button"
                className="usa-modal__close"
                aria-label="Close this modal"
                onClick={handleCloseClick}
                tabIndex="0"
              >
                <FontAwesomeIcon icon={faTimes} className="usa-icon" />
              </button>
            )}
            {children}
          </Card>
          {!hasFocusableElements && (
            <button
              type="button"
              className="usa-modal__fallback-focus"
              tabIndex="0"
              style={{ 
                position: 'absolute',
                top: 0,
                left: 0,
                width: '1px',
                height: '1px',
                padding: 0,
                margin: '-1px',
                overflow: 'hidden',
                clip: 'rect(0, 0, 0, 0)',
                whiteSpace: 'nowrap',
                border: 0
              }}
              aria-label="Focus target"
              onFocus={(e) => {
                // When this gets focus, try to focus the modal content instead
                if (contentRef.current) {
                  contentRef.current.focus();
                }
              }}
            >
              &nbsp;
            </button>
          )}
        </div>
      </FocusTrap>
    </dialog>
  );
};

Modal.propTypes = {
  /** Whether the modal is open */
  isOpen: PropTypes.bool,
  /** Function called when modal should close */
  onClose: PropTypes.func,
  /** Function called when primary action is confirmed */
  onConfirm: PropTypes.func,
  /** Modal heading text */
  heading: PropTypes.string,
  /** Modal content */
  children: PropTypes.node,
  /** Primary action button element */
  confirmButton: PropTypes.element,
  /** Secondary/cancel button element */
  cancelButton: PropTypes.element,
  /** Size of the modal */
  size: PropTypes.oneOf(['default', 'large']),
  /** Whether user must take action (cannot close with escape or backdrop click) */
  forcedAction: PropTypes.bool,
  /** Additional CSS classes */
  className: PropTypes.string,
  /** ID of element that labels the modal */
  ariaLabelledBy: PropTypes.string,
  /** ID of element that describes the modal */
  ariaDescribedBy: PropTypes.string,
}; 