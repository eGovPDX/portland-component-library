import React from 'react';
import PropTypes from 'prop-types';
import './RadioButtons.css';

/**
 * RadioButtons component based on USWDS design system.
 * 
 * A form component that renders a group of radio buttons with proper accessibility features,
 * error handling, and styling options. The component uses semantic HTML with fieldset and legend
 * for proper form structure and screen reader support.
 * 
 * @component
 * @example
 * ```jsx
 * const options = [
 *   { value: 'option1', labelText: 'Option 1' },
 *   { value: 'option2', labelText: 'Option 2' },
 *   { value: 'option3', labelText: 'Option 3', disabled: true }
 * ];
 * 
 * <RadioButtons
 *   name="preferences"
 *   legend="Select your preference"
 *   description="Choose the option that best fits your needs"
 *   options={options}
 *   selectedValue="option1"
 *   onChange={(value) => console.log('Selected:', value)}
 *   required
 *   errorMessage="Please select an option"
 * />
 * ```
 * 
 * @param {Object} props - Component props
 * @param {string} props.name - The name attribute for the radio button group (required)
 * @param {string} props.legend - The legend text displayed above the radio button group (required)
 * @param {string} [props.description] - Optional description text displayed below the legend
 * @param {Array<Object>} props.options - Array of radio button options (required)
 * @param {string} props.options[].value - The value for the radio button option
 * @param {string} props.options[].labelText - The text label for the radio button option
 * @param {string} [props.options[].labelDescription] - Optional description text for the option
 * @param {boolean} [props.options[].disabled] - Whether the option is disabled
 * @param {string} [props.selectedValue] - The currently selected value
 * @param {Function} props.onChange - Callback function called when a radio button is selected
 * @param {string} props.onChange.value - The value of the selected radio button
 * @param {boolean} [props.tiled=false] - Whether to use the tiled layout variant
 * @param {boolean} [props.required=false] - Whether the radio button group is required
 * @param {string} [props.errorMessage] - Error message to display when required and no option is selected
 * @param {string} [props.className] - Additional CSS classes for the component
 * 
 * @returns {JSX.Element} A fieldset containing the radio button group with proper accessibility attributes
 */
export const RadioButtons = ({
  name,
  legend,
  description,
  options,
  selectedValue,
  onChange,
  tiled = false,
  required = false,
  errorMessage,
  className,
}) => {
  // Determine if error styling should be applied
  const hasError = required && errorMessage;

  // Build CSS classes for the fieldset element
  const groupClasses = [
    'radio-buttons-group',
    tiled ? 'tiled' : '',
    hasError ? 'error' : '',
    className,
  ].filter(Boolean).join(' ');

  return (
    <fieldset className={groupClasses}>
      <legend className="radio-buttons-legend">
        {legend}
        {required && <span className="required-asterisk">&nbsp;*</span>}
      </legend>
      {description && <p className="radio-buttons-description">{description}</p>}
      {hasError && <p className="error-message">{errorMessage}</p>}
      <div className="options-wrapper">
        {options.map((option) => {
          // Destructure option properties
          const { value, labelText, labelDescription, disabled } = option;
          
          // Check if this option is currently selected
          const isChecked = selectedValue === value;
          
          // Generate unique ID for the radio button and its label
          const radioId = `${name}-${value}`;

          // Build CSS classes for the radio button item
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

/**
 * PropTypes for the RadioButtons component
 */
RadioButtons.propTypes = {
  /**
   * The name attribute for the radio button group.
   * This is used to group related radio buttons together and is required for proper form functionality.
   * @required
   */
  name: PropTypes.string.isRequired,
  
  /**
   * The legend text displayed above the radio button group.
   * This provides context and accessibility for the radio button group.
   * @required
   */
  legend: PropTypes.string.isRequired,
  
  /**
   * Optional description text displayed below the legend.
   * Provides additional context or instructions for the radio button group.
   */
  description: PropTypes.string,
  
  /**
   * Array of radio button options to display.
   * Each option should contain a value, labelText, and optionally labelDescription and disabled status.
   * @required
   */
  options: PropTypes.arrayOf(
    PropTypes.shape({
      /**
       * The value for the radio button option.
       * This is what gets passed to the onChange callback when selected.
       * @required
       */
      value: PropTypes.string.isRequired,
      
      /**
       * The text label for the radio button option.
       * This is what users see and what screen readers announce.
       * @required
       */
      labelText: PropTypes.string.isRequired,
      
      /**
       * Optional description text for the option.
       * Provides additional context for the specific option.
       */
      labelDescription: PropTypes.string,
      
      /**
       * Whether the option is disabled.
       * Disabled options cannot be selected and are visually dimmed.
       */
      disabled: PropTypes.bool,
    })
  ).isRequired,
  
  /**
   * The currently selected value.
   * Should match one of the values in the options array.
   */
  selectedValue: PropTypes.string,
  
  /**
   * Callback function called when a radio button is selected.
   * Receives the value of the selected radio button as its parameter.
   * @required
   */
  onChange: PropTypes.func.isRequired,
  
  /**
   * Whether to use the tiled layout variant.
   * When true, radio buttons are displayed in a grid layout instead of a vertical stack.
   * @default false
   */
  tiled: PropTypes.bool,
  
  /**
   * Whether the radio button group is required.
   * When true and no option is selected, error styling and message are displayed.
   * @default false
   */
  required: PropTypes.bool,
  
  /**
   * Error message to display when required is true and no option is selected.
   * This message is displayed below the radio button group with error styling.
   */
  errorMessage: PropTypes.string,
  
  /**
   * Additional CSS classes for the component.
   * These classes are applied to the fieldset element.
   */
  className: PropTypes.string,
};

export default RadioButtons; 