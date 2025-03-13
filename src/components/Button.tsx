import React from 'react';
import './Button.css';

export interface ButtonProps {
  /**
   * Button variant
   */
  variant?: 'primary' | 'secondary' | 'tertiary';
  /**
   * Button size
   */
  size?: 'small' | 'medium' | 'large';
  /**
   * Is the button disabled?
   */
  disabled?: boolean;
  /**
   * Button contents
   */
  children: React.ReactNode;
  /**
   * Optional click handler
   */
  onClick?: () => void;
  /**
   * Optional additional class names
   */
  className?: string;
}

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
}: ButtonProps) => {
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