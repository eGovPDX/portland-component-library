import React from 'react';
import PropTypes from 'prop-types';
import './Button.css';

/**
 * Primary UI component for user interaction
 */
export const Button = ({
  variant,
  size,
  disabled,
  children,
  onClick,
  className,
}) => {
  const buttonClassName = [
    'portland-button',
    `portland-button--${variant}`,
    `portland-button--${size}`,
    className,
  ].join(' ');

  return (
    <button
      type="button"
      className={buttonClassName}
      disabled={disabled}
      onClick={onClick}
    >
      {children}
    </button>
  );
};

Button.propTypes = {
  /**
   * Button variant/style
   */
  variant: PropTypes.oneOf(['primary', 'secondary', 'tertiary']),
  /**
   * Button size
   */
  size: PropTypes.oneOf(['small', 'medium', 'large']),
  /**
   * Is the button disabled?
   */
  disabled: PropTypes.bool,
  /**
   * Button contents
   */
  children: PropTypes.node.isRequired,
  /**
   * Optional click handler
   */
  onClick: PropTypes.func,
  /**
   * Additional CSS class names
   */
  className: PropTypes.string
};

Button.defaultProps = {
  variant: 'primary',
  size: 'medium',
  disabled: false,
  onClick: undefined,
  className: ''
};

export default Button; 