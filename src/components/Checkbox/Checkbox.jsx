import React from 'react';
import PropTypes from 'prop-types';
import './Checkbox.css';

/**
 * Checkbox component based on USWDS.
 * Checkboxes allow users to select one or more options from a list.
 */
export const Checkbox = ({
  name,
  title,
  description,
  options,
  selectedValues = [],
  onChange,
  tiled = false,
  required = false,
  errorMessage,
  className,
}) => {
  const hasError = required && errorMessage;

  const groupClasses = [
    'usa-fieldset',
    'checkbox-group',
    tiled ? 'checkbox-group--tiled' : '',
    hasError ? 'checkbox-group--error' : '',
    className,
  ].filter(Boolean).join(' ');

  const handleCheckboxChange = (value, checked) => {
    let newSelectedValues;
    if (checked) {
      newSelectedValues = [...selectedValues, value];
    } else {
      newSelectedValues = selectedValues.filter(v => v !== value);
    }
    onChange(newSelectedValues);
  };

  return (
    <fieldset className={groupClasses}>
      <legend className="usa-legend">
        {title}
        {required && <span className="checkbox-required-asterisk">&nbsp;*</span>}
      </legend>
      {description && <p className="checkbox-description">{description}</p>}
      {hasError && <p className="checkbox-error-message">{errorMessage}</p>}
      <div className="checkbox-options-wrapper">
        {options.map((option) => {
          const { value, labelText, labelDescription, disabled } = option;
          const isChecked = selectedValues.includes(value);
          const checkboxId = `${name}-${value}`;

          const itemClasses = [
            'usa-checkbox',
            disabled ? 'usa-checkbox--disabled' : '',
          ].filter(Boolean).join(' ');

          const inputClasses = [
            'usa-checkbox__input',
            tiled ? 'usa-checkbox__input--tile' : '',
          ].filter(Boolean).join(' ');

          return (
            <div key={value} className={itemClasses}>
              <input
                className={inputClasses}
                type="checkbox"
                id={checkboxId}
                name={name}
                value={value}
                checked={isChecked}
                onChange={(e) => handleCheckboxChange(value, e.target.checked)}
                disabled={disabled}
              />
              <label className="usa-checkbox__label" htmlFor={checkboxId}>
                {labelText}
                {labelDescription && (
                  <span className="usa-checkbox__label-description">{labelDescription}</span>
                )}
              </label>
            </div>
          );
        })}
      </div>
    </fieldset>
  );
};

Checkbox.propTypes = {
  /**
   * The name for the checkbox group.
   */
  name: PropTypes.string.isRequired,
  /**
   * The title for the checkbox group.
   */
  title: PropTypes.string.isRequired,
  /**
   * Optional description for the checkbox group.
   */
  description: PropTypes.string,
  /**
   * Array of checkbox options.
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
   * Array of currently selected values.
   */
  selectedValues: PropTypes.arrayOf(PropTypes.string),
  /**
   * Callback function when checkbox selection changes.
   */
  onChange: PropTypes.func.isRequired,
  /**
   * If `true`, the tiled variant is used.
   */
  tiled: PropTypes.bool,
  /**
   * If `true`, the checkbox group is required.
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

export default Checkbox; 