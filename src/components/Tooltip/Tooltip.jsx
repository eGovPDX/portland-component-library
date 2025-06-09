import React, { useState, useRef, useEffect } from 'react';
import PropTypes from 'prop-types';
import { 
  useFloating, 
  useInteractions, 
  useHover, 
  useFocus, 
  offset, 
  flip, 
  shift, 
  arrow, 
  autoUpdate, 
  useRole, 
  useClick, 
  FloatingPortal, 
  safePolygon 
} from '@floating-ui/react';
import './Tooltip.css';

export const Tooltip = ({
  children,
  content,
  position = 'top',
  theme = 'dark',
  showArrow = true,
  className = '',
  isPopup = false,
  triggerOnClick = false,
}) => {
  const [open, setOpen] = useState(false);
  const arrowRef = useRef(null);

  // Configure floating UI
  const { x, y, strategy, refs, context, middlewareData, placement } = useFloating({
    open,
    onOpenChange: setOpen,
    placement: position,
    middleware: [
      offset(8),
      flip(),
      shift({ padding: 8 }),
      ...(showArrow ? [arrow({ element: arrowRef })] : []),
    ],
    whileElementsMounted: autoUpdate,
  });

  // Setup interactions
  const hover = useHover(context, { 
    move: false,
    handleClose: safePolygon(),
    enabled: !triggerOnClick
  });
  
  const click = useClick(context, {
    enabled: triggerOnClick,
  });

  const focus = useFocus(context);
  const role = useRole(context, { role: 'tooltip' });
  
  const { getReferenceProps, getFloatingProps } = useInteractions([
    hover,
    focus,
    role,
    ...(triggerOnClick ? [click] : []),
  ]);

  // Handle arrow positioning based on actual placement (which might differ from requested position)
  const arrowX = middlewareData.arrow?.x;
  const arrowY = middlewareData.arrow?.y;
  const staticSide = {
    top: 'bottom',
    right: 'left',
    bottom: 'top',
    left: 'right',
  }[placement.split('-')[0]];

  // Get arrow rotation based on actual placement
  const getArrowRotation = () => {
    switch(placement.split('-')[0]) {
      case 'top': return '225deg';    // Arrow points down (away from trigger at top)
      case 'bottom': return '45deg';  // Arrow points up (away from trigger at bottom)
      case 'left': return '315deg';   // Arrow points right (away from trigger at left)
      case 'right': return '135deg';  // Arrow points left (away from trigger at right)
      default: return '45deg';
    }
  };

  // Prep
  const [mounted, setMounted] = useState(false);
  useEffect(() => {
    setMounted(true);
    return () => setMounted(false);
  }, []);

  return (
    <>
      {React.cloneElement(
        children,
        {
          ref: refs.setReference,
          ...getReferenceProps(),
        }
      )}
      {mounted && open && (
        <FloatingPortal>
          <div
            ref={refs.setFloating}
            className={`tooltip__body tooltip__body--${theme} ${isPopup ? 'tooltip__body--popup' : ''} ${className}`}
            style={{
              position: strategy,
              top: y ?? 0,
              left: x ?? 0,
              zIndex: 1000,
              pointerEvents: isPopup ? 'auto' : 'none',
            }}
            {...getFloatingProps()}
          >
            {content}
            
            {showArrow && (
              <div
                ref={arrowRef}
                className="tooltip__arrow"
                style={{
                  position: 'absolute',
                  left: arrowX != null ? `${arrowX}px` : '',
                  top: arrowY != null ? `${arrowY}px` : '',
                  [staticSide]: '-5px',
                  width: '10px',
                  height: '10px',
                  backgroundColor: theme === 'light' ? '#f0f0f0' : '#181818',
                  transform: `rotate(${getArrowRotation()})`,
                }}
              />
            )}
          </div>
        </FloatingPortal>
      )}
    </>
  );
};

Tooltip.propTypes = {
  children: PropTypes.node.isRequired,
  content: PropTypes.node.isRequired,
  position: PropTypes.oneOf(['top', 'right', 'bottom', 'left']),
  theme: PropTypes.oneOf(['dark', 'light']),
  showArrow: PropTypes.bool,
  className: PropTypes.string,
  isPopup: PropTypes.bool,
  triggerOnClick: PropTypes.bool,
};