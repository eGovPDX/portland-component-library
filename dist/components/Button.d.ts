import { default as React } from 'react';
export interface ButtonProps {
    /**
     * Button contents
     */
    label: string;
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
}
/**
 * Primary UI component for user interaction
 */
export declare const Button: React.FC<ButtonProps>;
export default Button;
