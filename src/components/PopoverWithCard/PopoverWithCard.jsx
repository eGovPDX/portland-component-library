import React, { useState, useEffect, useRef } from 'react';
import PropTypes from 'prop-types';
import { 
  useFloating, 
  useInteractions, 
  useHover, 
  useFocus, 
  offset, 
  flip, 
  shift, 
  autoUpdate, 
  useRole, 
  FloatingPortal, 
  safePolygon 
} from '@floating-ui/react';
import { Card } from '../Card/Card';
import './PopoverWithCard.css';

export const PopoverWithCard = ({
  children,
  cardProps,
  position = 'top',
  className = '',
}) => {
  const [open, setOpen] = useState(false);
  const triggerRef = useRef(null);
  const floatingRef = useRef(null);

  // Detect Storybook environment
  const isStorybook = typeof window !== 'undefined' && !!window.__STORYBOOK_ADDONS_CHANNEL__;

  // Configure floating UI
  const { x, y, strategy, refs, context } = useFloating({
    open,
    onOpenChange: setOpen,
    placement: position,
    middleware: [
      offset(8),
      flip(),
      shift({ padding: 8 }),
    ],
    whileElementsMounted: autoUpdate,
  });

  // Setup interactions
  const hover = useHover(context, { 
    move: false,
    handleClose: safePolygon(),
  });

  const focus = useFocus(context);
  const role = useRole(context, { role: 'dialog' });
  
  const { getReferenceProps, getFloatingProps } = useInteractions([
    hover,
    focus,
    role,
  ]);

  // Prep
  const [mounted, setMounted] = useState(false);
  useEffect(() => {
    setMounted(true);
    return () => setMounted(false);
  }, []);

  // Focus management: focus first focusable element in popover on open, return to trigger on close
  useEffect(() => {
    if (isStorybook) return; // Don't run focus management in Storybook
    if (open && floatingRef.current) {
      const focusable = floatingRef.current.querySelector(
        'button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])'
      );
      if (focusable) {
        focusable.focus();
      } else {
        floatingRef.current.focus();
      }
    } else if (!open && triggerRef.current) {
      triggerRef.current.focus();
    }
  }, [open, isStorybook]);

  // Escape key closes popover
  useEffect(() => {
    if (!open) return;
    const handleKeyDown = (e) => {
      if (e.key === 'Escape') setOpen(false);
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [open]);

  // For aria-labelledby, try to use heading if present
  const headingId = cardProps.heading ? 'popover-card-heading' : undefined;
  const cardWithHeadingId = cardProps.heading
    ? { ...cardProps, heading: <span id={headingId}>{cardProps.heading}</span> }
    : cardProps;

  return (
    <>
      {React.cloneElement(
        children,
        {
          ref: (node) => {
            refs.setReference(node);
            triggerRef.current = node;
          },
          ...getReferenceProps(),
        }
      )}
      {mounted && open && (
        <FloatingPortal>
          <div
            ref={(node) => {
              refs.setFloating(node);
              floatingRef.current = node;
            }}
            className={`popover-card ${className}`}
            style={{
              position: strategy,
              top: y ?? 0,
              left: x ?? 0,
              zIndex: 1000,
            }}
            role="dialog"
            aria-modal="false"
            tabIndex={-1}
            aria-labelledby={headingId}
            {...getFloatingProps()}
          >
            <Card className="popover-card__content" {...cardWithHeadingId} />
          </div>
        </FloatingPortal>
      )}
    </>
  );
};

PopoverWithCard.propTypes = {
  /** The element that triggers the popover */
  children: PropTypes.element.isRequired,
  /** Props to pass to the Card component */
  cardProps: PropTypes.object.isRequired,
  /** Position of the popover relative to the trigger element */
  position: PropTypes.oneOf(['top', 'right', 'bottom', 'left']),
  /** Additional CSS classes to apply to the popover */
  className: PropTypes.string,
}; 