import { useEffect, useRef, useState } from 'react';
import './TextArea.css';

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