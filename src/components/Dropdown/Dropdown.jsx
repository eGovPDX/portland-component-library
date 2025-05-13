import React, { useState, useEffect, useRef } from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronDown } from '@fortawesome/free-solid-svg-icons';
import './Dropdown.css';
// We will need an icon for the dropdown, let's assume a chevron icon is available

// Simple useOutsideClick hook implementation (can be moved to a separate file)
const useOutsideClick = (ref, handler) => {
  useEffect(() => {
    const listener = (event) => {
      if (!ref.current || ref.current.contains(event.target)) {
        return;
      }
      handler(event);
    };
    document.addEventListener('mousedown', listener);
    document.addEventListener('touchstart', listener);
    return () => {
      document.removeEventListener('mousedown', listener);
      document.removeEventListener('touchstart', listener);
    };
  }, [ref, handler]);
};

const Dropdown = ({
  id,
  label,
  options,
  disabled,
  error,
  className, // This will be for the main wrapper
  selectedOptionValue,
  onSelect,
  defaultOptionLabel = '- Select -',
}) => {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedItem, setSelectedItem] = useState(null);
  const [activeIndex, setActiveIndex] = useState(-1); // For aria-activedescendant

  const dropdownRef = useRef(null);
  const menuId = `${id}-dropdown-menu`;
  useOutsideClick(dropdownRef, () => setIsOpen(false));

  useEffect(() => {
    if (selectedOptionValue && options) {
      const newSelectedItem = options.find((option) => option.value === selectedOptionValue);
      setSelectedItem(newSelectedItem || null);
    } else {
      setSelectedItem(null);
    }
  }, [selectedOptionValue, options]);

  const handleOptionClick = (option, idx) => {
    setSelectedItem(option);
    setIsOpen(false);
    setActiveIndex(idx);
    if (onSelect) {
      onSelect(option.value);
    }
  };

  const handleButtonKeyDown = (e) => {
    if (!isOpen && (e.key === 'ArrowDown' || e.key === 'Enter' || e.key === ' ')) {
      setIsOpen(true);
      setActiveIndex(0);
      e.preventDefault();
    } else if (isOpen) {
      if (e.key === 'ArrowDown') {
        setActiveIndex((prev) => (prev + 1) % options.length);
        e.preventDefault();
      } else if (e.key === 'ArrowUp') {
        setActiveIndex((prev) => (prev - 1 + options.length) % options.length);
        e.preventDefault();
      } else if (e.key === 'Enter' || e.key === ' ') {
        if (activeIndex >= 0 && activeIndex < options.length) {
          handleOptionClick(options[activeIndex], activeIndex);
        }
        e.preventDefault();
      } else if (e.key === 'Escape') {
        setIsOpen(false);
        e.preventDefault();
      }
    }
  };

  useEffect(() => {
    if (isOpen && activeIndex >= 0) {
      const activeOption = document.getElementById(`${id}-option-${activeIndex}`);
      if (activeOption) {
        activeOption.scrollIntoView({ block: 'nearest' });
      }
    }
  }, [isOpen, activeIndex, id]);

  const containerClasses = classNames(
    'dropdown__container',
    {
      'usa-form-group': label, // Keep for label and error message structure if desired
      'usa-form-group--error': error,
    },
    className // User-provided class for the outermost wrapper
  );

  const buttonClasses = classNames(
      'usa-input', // Use usa-input for basic styling similar to select
      {
          'usa-input--error': error,
          'usa-input--disabled': disabled, // Or handle via disabled attribute directly
      },
      'dropdown__button',
    // Add any other custom classes for the button if needed
  );
  
  const dropdownMenuClasses = classNames(
    'dropdown__menu',
    // Add classes for positioning (e.g., 'dropdown__menu--top-left') if implementing position prop later
  );

  return (
    <div className={containerClasses} ref={dropdownRef}>
      {label && (
        <label className={classNames("usa-label", {"usa-label--error": error})} htmlFor={id}>
          {label}
          {error && typeof error === 'string' && <span className="usa-error-message" role="alert">{error}</span>}
          {error && typeof error !== 'string' && <span className="usa-error-message" role="alert">This field is required.</span>}
        </label>
      )}
      <button
        type="button"
        id={id}
        className={buttonClasses}
        onClick={() => !disabled && setIsOpen(!isOpen)}
        onKeyDown={handleButtonKeyDown}
        disabled={disabled}
        aria-haspopup="listbox"
        aria-expanded={isOpen}
        aria-controls={menuId}
        role="combobox"
        aria-activedescendant={isOpen && activeIndex >= 0 ? `${id}-option-${activeIndex}` : undefined}
        aria-labelledby={label ? undefined : id}
      >
        <span className="dropdown__selected-value">
          {selectedItem ? selectedItem.label : defaultOptionLabel}
        </span>
        <FontAwesomeIcon
          icon={faChevronDown}
          className={classNames("dropdown__custom-chevron", { 'dropdown__custom-chevron--open': isOpen })}
          aria-hidden="true"
        />
      </button>

      {/* Always render the menu for ARIA compliance, toggle visibility with hidden */}
      <ul
        className={dropdownMenuClasses}
        role="listbox"
        id={menuId}
        aria-labelledby={id}
        hidden={!isOpen}
      >
        {options.map((option, idx) => (
          <li
            key={option.value}
            id={`${id}-option-${idx}`}
            className={classNames('dropdown__item', {
              'dropdown__item--selected': selectedItem && selectedItem.value === option.value,
              'dropdown__item--active': activeIndex === idx,
            })}
            onClick={() => handleOptionClick(option, idx)}
            role="option"
            aria-selected={selectedItem && selectedItem.value === option.value}
            tabIndex={-1}
          >
            {option.label}
          </li>
        ))}
      </ul>
      {error && typeof error === 'string' && !label && (
         <span id={`${id}-error-message`} className="usa-error-message" role="alert">
           {error}
         </span>
       )}
    </div>
  );
};

Dropdown.propTypes = {
  id: PropTypes.string.isRequired,
  label: PropTypes.string,
  options: PropTypes.arrayOf(
    PropTypes.shape({
      value: PropTypes.string.isRequired,
      label: PropTypes.string.isRequired,
    })
  ).isRequired,
  disabled: PropTypes.bool,
  error: PropTypes.oneOfType([PropTypes.bool, PropTypes.string]),
  className: PropTypes.string,
  selectedOptionValue: PropTypes.string,
  onSelect: PropTypes.func,
  defaultOptionLabel: PropTypes.string,
};

Dropdown.defaultProps = {
  label: null,
  disabled: false,
  error: false,
  className: '',
  selectedOptionValue: null,
  onSelect: () => {},
  defaultOptionLabel: '- Select -',
};

export default Dropdown; 