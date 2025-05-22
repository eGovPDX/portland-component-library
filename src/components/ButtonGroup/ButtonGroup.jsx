import React from 'react';
import PropTypes from 'prop-types';
import './ButtonGroup.css';

export const ButtonGroup = ({
  children,
  segmented = false,
  className,
  ...props
}) => {
  const baseClass = 'usa-button-group';
  const segmentedClass = segmented ? `${baseClass}--segmented` : '';
  
  const buttonGroupClasses = [
    baseClass,
    segmentedClass,
    className
  ].filter(Boolean).join(' ');

  return (
    <ul className={buttonGroupClasses} role="group" aria-label={props['aria-label'] || 'Button Group'} {...props}>
      {React.Children.map(children, (child) => (
        <li className="usa-button-group__item">
          {child}
        </li>
      ))}
    </ul>
  );
};

ButtonGroup.propTypes = {
  /**
   * Button elements to be grouped
   */
  children: PropTypes.node.isRequired,
  
  /**
   * Whether the button group should be segmented (no spacing between buttons)
   */
  segmented: PropTypes.bool,
  
  /**
   * Additional CSS class names
   */
  className: PropTypes.string
}; 