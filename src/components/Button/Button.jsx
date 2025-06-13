import React from 'react';
import PropTypes from 'prop-types';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import './Button.css';

export const Button = ({
  children,
  variant = 'default',
  size = 'default',
  disabled = false,
  ariaDisabled = false,
  unstyled = false,
  onClick,
  type = 'button',
  startIcon,
  endIcon,
  className,
  ...props
}) => {
  const baseClass = 'usa-button';
  const variantClass = variant !== 'default' ? `${baseClass}--${variant}` : '';
  const sizeClass = size === 'big' ? `${baseClass}--big` : '';
  const unstyledClass = unstyled ? `${baseClass}--unstyled` : '';
  
  const buttonClasses = [
    baseClass,
    variantClass,
    sizeClass,
    unstyledClass,
    className
  ].filter(Boolean).join(' ');

  return (
    <button
      type={type}
      className={buttonClasses}
      onClick={onClick}
      disabled={disabled}
      aria-disabled={ariaDisabled || disabled}
      {...props}
    >
      {startIcon && (
        <span className="usa-button__icon usa-button__icon--left">
          <FontAwesomeIcon icon={startIcon} />
        </span>
      )}
      {children}
      {endIcon && (
        <span className="usa-button__icon usa-button__icon--right">
          <FontAwesomeIcon icon={endIcon} />
        </span>
      )}
    </button>
  );
};

Button.propTypes = {
  children: PropTypes.node.isRequired,
  variant: PropTypes.oneOf([
    'default',
    'secondary',
    'accent-cool',
    'accent-warm',
    'base',
    'outline',
    'outline-inverse'
  ]),
  size: PropTypes.oneOf(['default', 'big']),
  disabled: PropTypes.bool,
  ariaDisabled: PropTypes.bool,
  unstyled: PropTypes.bool,
  onClick: PropTypes.func,
  type: PropTypes.oneOf(['button', 'submit', 'reset']),
  startIcon: PropTypes.oneOfType([PropTypes.object, PropTypes.array, PropTypes.string]),
  endIcon: PropTypes.oneOfType([PropTypes.object, PropTypes.array, PropTypes.string]),
  className: PropTypes.string
}; 