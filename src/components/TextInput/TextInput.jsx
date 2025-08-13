import React from 'react';
import PropTypes from 'prop-types';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import './TextInput.css';

/**
 * Text input with size and state variants, optional prefix icon and suffix content.
 *
 * @component
 * @param {Object} props - Component props
 * @param {string} props.id - Input id (required when label is provided)
 * @param {string} [props.label] - Visible label text
 * @param {string} [props.description] - Helper text below the label
 * @param {('default'|'disabled'|'error'|'success')} [props.state='default'] - Visual validation/disabled state
 * @param {('default'|'2xs'|'xs'|'sm'|'md'|'lg'|'xl'|'2xl')} [props.size='default'] - Size variant
 * @param {boolean} [props.disabled=false] - Native disabled attribute
 * @param {string} [props.value] - Controlled value
 * @param {function} [props.onChange] - Change handler
 * @param {import('@fortawesome/fontawesome-svg-core').IconProp} [props.prefixIcon] - Icon rendered as prefix
 * @param {React.ReactNode} [props.suffixContent] - Content rendered as suffix (e.g., units)
 * @param {string} [props.pattern] - HTML pattern attribute
 * @param {string} [props.errorMessage] - Error text shown when state='error'
 * @param {string} [props.className] - Additional CSS classes
 * @returns {JSX.Element} Text input wrapper
 */
export const TextInput = ({
  id,
  label,
  description,
  state = 'default',
  size = 'default',
  disabled = false,
  value,
  onChange,
  prefixIcon,
  suffixContent,
  pattern,
  errorMessage,
  className,
  ...props
}) => {
  // Determine if input should be disabled (either from disabled prop or state)
  const isDisabled = disabled || state === 'disabled';

  // Input classes
  const inputClasses = [
    'usa-input',
    size !== 'default' ? `usa-input--${size}` : '',
    state === 'error' ? 'usa-input--error' : '',
    state === 'success' ? 'usa-input--success' : '',
    isDisabled ? 'usa-input--disabled' : '',
    className
  ].filter(Boolean).join(' ');

  // Wrapper classes
  const wrapperClasses = [
    'usa-input-wrapper',
    size !== 'default' ? `usa-input-wrapper--${size}` : '',
    prefixIcon ? 'usa-input-wrapper--prefix' : '',
    suffixContent ? 'usa-input-wrapper--suffix' : '',
    state === 'error' ? 'usa-input-wrapper--error' : '',
    state === 'success' ? 'usa-input-wrapper--success' : '',
    isDisabled ? 'usa-input-wrapper--disabled' : ''
  ].filter(Boolean).join(' ');

  return (
    <div className="usa-text-input">
      {label && (
        <label className="usa-label" htmlFor={id}>
          {label}
        </label>
      )}
      
      {description && (
        <span className="usa-text-input__description">
          {description}
        </span>
      )}

      {state === 'error' && errorMessage && (
        <span className="usa-text-input__error-message">
          {errorMessage}
        </span>
      )}
      
      <div className={wrapperClasses}>
        {prefixIcon && (
          <div className="usa-input-prefix">
            <FontAwesomeIcon icon={prefixIcon} />
          </div>
        )}
        
        <input
          id={id}
          className={inputClasses}
          disabled={isDisabled}
          value={value}
          onChange={onChange}
          pattern={pattern}
          aria-invalid={state === 'error'}
          {...props}
        />
        
        {suffixContent && (
          <div className="usa-input-suffix">
            {suffixContent}
          </div>
        )}
      </div>
    </div>
  );
};

TextInput.propTypes = {
  id: PropTypes.string.isRequired,
  label: PropTypes.string,
  description: PropTypes.string,
  state: PropTypes.oneOf(['default', 'disabled', 'error', 'success']),
  size: PropTypes.oneOf(['default', '2xs', 'xs', 'sm', 'md', 'lg', 'xl', '2xl']),
  disabled: PropTypes.bool,
  value: PropTypes.string,
  onChange: PropTypes.func,
  prefixIcon: PropTypes.oneOfType([PropTypes.object, PropTypes.array, PropTypes.string]),
  suffixContent: PropTypes.node,
  pattern: PropTypes.string,
  errorMessage: PropTypes.string,
  className: PropTypes.string
}; 