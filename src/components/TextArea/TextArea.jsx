import { useEffect, useRef, useState } from 'react';
import './TextArea.css';

/**
 * Resizing textarea with optional character counter and validation helpers.
 *
 * @component
 * @param {Object} props - Component props
 * @param {string} props.id - Textarea id
 * @param {string} [props.name] - Textarea name
 * @param {string} [props.label] - Visible label text
 * @param {string} [props.description] - Helper text under the label
 * @param {string} [props.error] - Error message
 * @param {string} [props.value] - Controlled value
 * @param {function} [props.onChange] - Change handler (receives event)
 * @param {boolean} [props.disabled] - Disabled state
 * @param {boolean} [props.required] - Required attribute
 * @param {string} [props.placeholder] - Placeholder text
 * @param {string} [props.className] - Additional CSS class names
 * @param {number} [props.maxCharacters] - Character limit; shows counter when provided
 * @returns {JSX.Element} Textarea wrapper
 */
const TextArea = ({
  id,
  name,
  label,
  description,
  error,
  value: externalValue,
  onChange,
  disabled,
  required,
  placeholder,
  className,
  maxCharacters,
  ...props
}) => {
  const textAreaRef = useRef(null);
  const [internalValue, setInternalValue] = useState(externalValue || '');

  // Update internal value when external value changes
  useEffect(() => {
    setInternalValue(externalValue || '');
  }, [externalValue]);

  const resizeTextArea = () => {
    if (!textAreaRef.current) return;
    textAreaRef.current.style.height = 'auto';
    textAreaRef.current.style.height = `${textAreaRef.current.scrollHeight}px`;
  };

  useEffect(() => {
    resizeTextArea();
    window.addEventListener('resize', resizeTextArea);
    // important to clean up listener on unmount
    return () => window.removeEventListener('resize', resizeTextArea);
  }, []);

  useEffect(() => {
    resizeTextArea();
  }, [internalValue]);

  const handleChange = (e) => {
    const newValue = e.target.value;
    if (maxCharacters && newValue.length > maxCharacters) {
      return;
    }
    setInternalValue(newValue);
    onChange?.(e);
    resizeTextArea();
  };

  return (
    <div className={`usa-text-area ${className || ''}`}>
      {label && (
        <label htmlFor={id} className="usa-label">
          {label}
          {required && <span className="usa-label--required"> *</span>}
        </label>
      )}
      {description && (
        <span className="usa-text-area__description">{description}</span>
      )}
      {error && <span className="usa-text-area__error-message">{error}</span>}
      <div className={`usa-input-wrapper ${error ? 'usa-input-wrapper--error' : ''} ${disabled ? 'usa-input-wrapper--disabled' : ''}`}>
        <textarea
          ref={textAreaRef}
          id={id}
          name={name}
          value={internalValue}
          onChange={handleChange}
          disabled={disabled}
          required={required}
          placeholder={placeholder}
          maxLength={maxCharacters}
          {...props}
        />
      </div>
      <div className="usa-text-area__footer">
        {maxCharacters && (
          <span className="usa-text-area__character-count">
            {internalValue.length}/{maxCharacters} characters
          </span>
        )}
      </div>
    </div>
  );
};

export default TextArea; 