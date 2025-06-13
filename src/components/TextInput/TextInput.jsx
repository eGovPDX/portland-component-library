import React from 'react';
import PropTypes from 'prop-types';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import './TextInput.css';

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
  // Input classes
  const inputClasses = [
    'usa-input',
    size !== 'default' ? `usa-input--${size}` : '',
    state === 'error' ? 'usa-input--error' : '',
    state === 'success' ? 'usa-input--success' : '',
    state === 'disabled' ? 'usa-input--disabled' : '',
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
    disabled ? 'usa-input-wrapper--disabled' : ''
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
          disabled={disabled}
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