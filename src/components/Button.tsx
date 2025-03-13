import React from 'react';
import '../styles/index.scss';

export interface ButtonProps {
  /**
   * Button contents
   */
  children: React.ReactNode;
  /**
   * Optional click handler
   */
  onClick?: () => void;
  /**
   * Button variant
   */
  variant?: 'primary' | 'secondary' | 'tertiary';
  /**
   * Is the button disabled?
   */
  disabled?: boolean;
  /**
   * Button size
   */
  size?: 'small' | 'medium' | 'large';
}

/**
 * Primary UI component for user interaction
 */
export const Button: React.FC<ButtonProps> = ({
  children,
  variant = 'primary',
  size = 'medium',
  disabled = false,
  onClick,
}) => {
  const baseStyles = 'rounded font-medium focus:outline-none transition-colors';
  
  const variantStyles = {
    primary: 'bg-[var(--portland-color-primary)] text-white hover:opacity-90',
    secondary: 'bg-[var(--portland-color-secondary)] text-white hover:opacity-90',
    tertiary: 'bg-transparent border border-[var(--portland-color-primary)] text-[var(--portland-color-primary)] hover:bg-[var(--portland-color-primary-lightest)]',
  };
  
  const sizeStyles = {
    small: 'px-3 py-1 text-sm',
    medium: 'px-4 py-2',
    large: 'px-6 py-3 text-lg',
  };
  
  const className = `${baseStyles} ${variantStyles[variant]} ${sizeStyles[size]} ${disabled ? 'opacity-50 cursor-not-allowed' : ''}`;
  
  return (
    <button
      type="button"
      className={className}
      disabled={disabled}
      onClick={onClick}
    >
      {children}
    </button>
  );
};

export default Button; 