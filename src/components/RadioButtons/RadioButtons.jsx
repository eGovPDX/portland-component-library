import React from 'react';
import PropTypes from 'prop-types';
import './RadioButtons.css';

/**
 * RadioButtons component based on USWDS.
 */
export const RadioButtons = ({
  name,
  title,
  description,
  options,
  selectedValue,
  onChange,
  tiled = false,
  required = false,
  errorMessage,
  className,
}) => {
  const hasError = required && errorMessage;

  const groupClasses = [
    'radio-buttons-group',
    tiled ? 'tiled' : '',
    hasError ? 'error' : '',
    className,
  ].filter(Boolean).join(' ');

  return (
    <fieldset className={groupClasses}>
      <legend className="radio-buttons-title">
        {title}
        {required && <span className="required-asterisk">&nbsp;*</span>}
      </legend>
      {description && <p className="radio-buttons-description">{description}</p>}
      {hasError && <p className="error-message">{errorMessage}</p>}
      <div className="options-wrapper">
        {options.map((option) => {
          const { value, labelText, labelDescription, disabled } = option;
          const isChecked = selectedValue === value;
          const radioId = `${name}-${value}`;

          const itemClasses = [
            'radio-button-item',
            disabled ? 'disabled' : '',
            isChecked ? 'selected' : '',
          ].filter(Boolean).join(' ');

          return (
            <div key={value} className={itemClasses}>
              <input
                className="radio-button-input"
                type="radio"
                id={radioId}
                name={name}
                value={value}
                checked={isChecked}
                onChange={() => onChange(value)}
                disabled={disabled}
              />
              <label className="radio-button-label" htmlFor={radioId}>
                <span className="label-text">{labelText}</span>
                {labelDescription && (
                  <span className="label-description">{labelDescription}</span>
                )}
              </label>
            </div>
          );
        })}
      </div>
    </fieldset>
  );
};

RadioButtons.propTypes = {
  /**
   * The name for the radio button group.
   */
  name: PropTypes.string.isRequired,
  /**
   * The title for the radio button group.
   */
  title: PropTypes.string.isRequired,
  /**
   * Optional description for the radio button group.
   */
  description: PropTypes.string,
  /**
   * Array of radio button options.
   */
  options: PropTypes.arrayOf(
    PropTypes.shape({
      value: PropTypes.string.isRequired,
      labelText: PropTypes.string.isRequired,
      labelDescription: PropTypes.string,
      disabled: PropTypes.bool,
    })
  ).isRequired,
  /**
   * The currently selected value.
   */
  selectedValue: PropTypes.string,
  /**
   * Callback function when a radio button is selected.
   */
  onChange: PropTypes.func.isRequired,
  /**
   * If `true`, the tiled variant is used.
   */
  tiled: PropTypes.bool,
  /**
   * If `true`, the radio button group is required.
   */
  required: PropTypes.bool,
  /**
   * The error message to display when required and no option is selected.
   */
  errorMessage: PropTypes.string,
  /**
   * Additional classes for the component.
   */
  className: PropTypes.string,
};

export default RadioButtons; 