import React, { cloneElement } from 'react';
import PropTypes from 'prop-types';
import { useTooltip } from './useTooltip';
import './Tooltip.css';

export const Tooltip = ({
  children,
  content,
  position = 'top',
  theme = 'light',
  className,
  offset,
}) => {
  const {
    triggerProps,
    tooltipProps,
  } = useTooltip({
    content,
    position,
    theme,
    className,
    offset,
  });

  // Clone the child element and merge our trigger props
  const trigger = cloneElement(children, {
    ...children.props,
    ...triggerProps,
    className: `${children.props.className || ''} usa-tooltip`.trim(),
  });

  return (
    <>
      {trigger}
      <div {...tooltipProps}>
        {content}
        <div className="usa-tooltip__arrow" data-popper-arrow />
      </div>
    </>
  );
};

Tooltip.propTypes = {
  children: PropTypes.element.isRequired,
  content: PropTypes.node.isRequired,
  position: PropTypes.oneOf(['top', 'right', 'bottom', 'left']),
  theme: PropTypes.oneOf(['light', 'dark']),
  className: PropTypes.string,
  offset: PropTypes.arrayOf(PropTypes.number),
}; 