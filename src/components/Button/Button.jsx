import PropTypes from 'prop-types';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import './Button.css';

/**
 * Button component based on USWDS Button.
 *
 * Renders a styled button with optional start/end icons and variant/size options.
 *
 * @component
 * @param {Object} props - Component props
 * @param {React.ReactNode} props.children - Button content
 * @param {('default'|'secondary'|'accent-cool'|'accent-warm'|'base'|'outline'|'outline-inverse')} [props.variant='default'] - Visual style variant
 * @param {('default'|'big')} [props.size='default'] - Size variant
 * @param {boolean} [props.disabled=false] - Native disabled attribute
 * @param {boolean} [props.ariaDisabled=false] - ARIA disabled state (non-interactive styling)
 * @param {boolean} [props.unstyled=false] - Use unstyled variant
 * @param {function} [props.onClick] - Click handler
 * @param {('button'|'submit'|'reset')} [props.type='button'] - Button type attribute
 * @param {import('@fortawesome/fontawesome-svg-core').IconProp} [props.startIcon] - Icon shown before content
 * @param {import('@fortawesome/fontawesome-svg-core').IconProp} [props.endIcon] - Icon shown after content
 * @param {string} [props.className] - Additional CSS class names
 * @returns {JSX.Element} Button element
 */
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