import React from 'react';
import './Button.css';

/**
 * Primary UI component for user interaction
 */
export const Button = ({
  variant = 'primary',
  size = 'medium',
  disabled = false,
  children,
  onClick,
  className = '',
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

export default Button; 