import { useState, useCallback, useRef, useEffect, useId } from 'react';
import { createPopper } from '@popperjs/core';

export const useTooltip = ({
  content,
  position = 'top',
  theme = 'light',
  className,
  offset = [0, 8],
}) => {
  const [isVisible, setIsVisible] = useState(false);
  const [isInitialized, setIsInitialized] = useState(false);
  const triggerRef = useRef(null);
  const tooltipRef = useRef(null);
  const popperInstanceRef = useRef(null);
  const tooltipId = useId();

  const initializePopper = useCallback(() => {
    if (!triggerRef.current || !tooltipRef.current) return;

    if (popperInstanceRef.current) {
      popperInstanceRef.current.destroy();
    }

    popperInstanceRef.current = createPopper(triggerRef.current, tooltipRef.current, {
      placement: position,
      modifiers: [
        {
          name: 'offset',
          options: {
            offset,
          },
        },
        {
          name: 'preventOverflow',
          options: {
            padding: 8,
          },
        },
        {
          name: 'arrow',
          options: {
            element: '[data-popper-arrow]',
            padding: 8,
          },
        },
      ],
    });

    setIsInitialized(true);
  }, [position, offset]);

  const showTooltip = useCallback(() => {
    if (!isInitialized) {
      initializePopper();
    }
    setIsVisible(true);
  }, [initializePopper, isInitialized]);

  const hideTooltip = useCallback(() => {
    setIsVisible(false);
  }, []);

  // Reinitialize Popper when position changes
  useEffect(() => {
    if (isInitialized) {
      initializePopper();
    }
  }, [position, initializePopper, isInitialized]);

  useEffect(() => {
    const handleEscape = (event) => {
      if (event.key === 'Escape') {
        hideTooltip();
      }
    };

    if (isVisible) {
      document.addEventListener('keydown', handleEscape);
    }

    return () => {
      document.removeEventListener('keydown', handleEscape);
    };
  }, [isVisible, hideTooltip]);

  useEffect(() => {
    return () => {
      if (popperInstanceRef.current) {
        popperInstanceRef.current.destroy();
      }
    };
  }, []);

  const tooltipProps = {
    ref: tooltipRef,
    id: tooltipId,
    role: 'tooltip',
    className: `usa-tooltip__body usa-tooltip__body--${theme} ${className || ''}`.trim(),
    style: {
      visibility: isVisible ? 'visible' : 'hidden',
      display: 'block',
    },
    'aria-hidden': !isVisible,
  };

  const triggerProps = {
    ref: triggerRef,
    onMouseEnter: showTooltip,
    onMouseLeave: hideTooltip,
    onFocus: showTooltip,
    onBlur: hideTooltip,
    'aria-describedby': tooltipId,
  };

  return {
    triggerProps,
    tooltipProps,
    content,
    isVisible,
  };
}; 