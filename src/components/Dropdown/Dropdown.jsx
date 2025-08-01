import React, { useState, useEffect, useRef } from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronDown } from '@fortawesome/free-solid-svg-icons';
import './Dropdown.css';

/**
 * Detects if the current device is a mobile device
 * @returns {boolean} True if the device is mobile, false otherwise
 */
const isMobileDevice = () => {
  if (typeof window === 'undefined') return false;
  
  // Check if we're in a mobile environment
  const isMobile = /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent);
  
  // Check for touch capability AND coarse pointer (more reliable than just touch events)
  const hasTouchAndCoarsePointer = 
    ('ontouchstart' in window || navigator.maxTouchPoints > 0) &&
    window.matchMedia('(pointer: coarse)').matches;
  
  // Check for small screen (mobile-like)
  const isSmallScreen = window.matchMedia('(max-width: 768px)').matches;
  
  // Only consider it mobile if it's actually a mobile device OR has touch+coarse pointer AND small screen
  return isMobile || (hasTouchAndCoarsePointer && isSmallScreen);
};

/**
 * Custom hook to handle clicks outside of a referenced element
 * @param {React.RefObject} ref - React ref object for the element to monitor
 * @param {Function} handler - Function to call when a click outside occurs
 */
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

/**
 * Dropdown Component
 * 
 * A responsive dropdown component that automatically switches between native select elements
 * on mobile devices and custom dropdown implementation on desktop. Provides full keyboard
 * navigation, type-to-search functionality, and comprehensive accessibility features.
 * 
 * @param {Object} props - Component props
 * @param {string} props.id - Unique identifier for the dropdown (required)
 * @param {string} [props.label] - Label text for the dropdown
 * @param {string} [props.hintText] - Helper text displayed below the label
 * @param {Array<{value: string, label: string}>} props.options - Array of options to display
 * @param {boolean} [props.disabled=false] - Whether the dropdown is disabled
 * @param {boolean|string} [props.error=false] - Error state or error message
 * @param {string} [props.className] - Additional CSS classes
 * @param {string} [props.selectedOptionValue] - Currently selected option value
 * @param {Function} [props.onSelect] - Callback function when an option is selected
 * @param {string} [props.defaultOptionLabel='- Select -'] - Text for the default/placeholder option
 * @param {boolean} [props.forceCustom=false] - Force custom dropdown implementation (for testing)
 * @returns {JSX.Element} Dropdown component
 * 
 * @example
 * ```jsx
 * const options = [
 *   { value: 'option1', label: 'Option 1' },
 *   { value: 'option2', label: 'Option 2' }
 * ];
 * 
 * <Dropdown
 *   id="my-dropdown"
 *   label="Select an option"
 *   options={options}
 *   selectedOptionValue="option1"
 *   onSelect={(value) => console.log('Selected:', value)}
 * />
 * ```
 */
const Dropdown = ({
  id,
  label,
  hintText,
  options,
  disabled,
  error,
  className,
  selectedOptionValue,
  onSelect,
  defaultOptionLabel = '- Select -',
  forceCustom = false, // Allow forcing custom dropdown for testing
}) => {
  // Only check once on mount for device type
  const [isMobile, setIsMobile] = useState(false);
  useEffect(() => {
    setIsMobile(forceCustom ? false : isMobileDevice());
  }, [forceCustom]);

  /**
   * Renders the label, hint text, and error message
   * @returns {JSX.Element|null} Label element or null if no label
   */
  const renderLabel = () =>
    label && (
      <label className="usa-label" htmlFor={id}>
        <span className={classNames("usa-label__text", { "usa-label--error": error })}>{label}</span>
        {hintText && <span className="usa-hint__text">{hintText}</span>}
        {error && typeof error === 'string' && (
          <span className="usa-error-message" role="alert">{error}</span>
        )}
        {error && typeof error !== 'string' && (
          <span className="usa-error-message" role="alert">This field is required.</span>
        )}
      </label>
    );

  // Native select for mobile
  if (isMobile) {
    return (
      <div className={classNames('dropdown__container', className, {
        'usa-form-group': label,
        'usa-form-group--error': error,
      })}>
        {renderLabel()}
        <select
          id={id}
          className={classNames(
            'dropdown__native-select',
            { 'dropdown__native-select--error': error }
          )}
          value={selectedOptionValue || ''}
          onChange={e => onSelect(e.target.value)}
          disabled={disabled}
          aria-label={label}
          aria-invalid={!!error}
        >
          <option value="" disabled>{defaultOptionLabel}</option>
          {options.map(option => (
            <option key={option.value} value={option.value}>{option.label}</option>
          ))}
        </select>
        {error && typeof error === 'string' && !label && (
          <span id={`${id}-error-message`} className="usa-error-message" role="alert">
            {error}
          </span>
        )}
      </div>
    );
  }

  // --- Custom dropdown for desktop (existing code, with improvements) ---

  const [isOpen, setIsOpen] = useState(false);
  const [selectedItem, setSelectedItem] = useState(null);
  const [activeIndex, setActiveIndex] = useState(-1);
  const [typeahead, setTypeahead] = useState('');
  const typeaheadTimeout = useRef(null);

  const dropdownRef = useRef(null);
  const buttonRef = useRef(null);
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

  // Focus management: focus menu when it opens, return focus to button when it closes
  useEffect(() => {
    if (isOpen) {
      // Focus the menu when it opens
      const menu = document.getElementById(menuId);
      if (menu) {
        menu.focus();
      }
    } else if (buttonRef.current) {
      // Return focus to button when menu closes
      buttonRef.current.focus();
    }
  }, [isOpen, menuId]);

  /**
   * Handles type-to-search functionality
   * @param {string} char - Character typed by user
   */
  const handleTypeahead = (char) => {
    const newTypeahead = typeahead + char.toLowerCase();
    setTypeahead(newTypeahead);

    // Find first option that starts with the typed string
    const idx = options.findIndex(opt =>
      opt.label.toLowerCase().startsWith(newTypeahead)
    );
    if (idx !== -1) {
      setActiveIndex(idx);
    }

    // Reset typeahead after 500ms
    if (typeaheadTimeout.current) clearTimeout(typeaheadTimeout.current);
    typeaheadTimeout.current = setTimeout(() => setTypeahead(''), 500);
  };

  /**
   * Handles option selection
   * @param {Object} option - Selected option object
   * @param {number} idx - Index of the selected option
   */
  const handleOptionClick = (option, idx) => {
    setSelectedItem(option);
    setIsOpen(false);
    setActiveIndex(idx);
    if (onSelect) {
      onSelect(option.value);
    }
  };

  /**
   * Handles keyboard events on the dropdown button
   * @param {KeyboardEvent} e - Keyboard event
   */
  const handleButtonKeyDown = (e) => {
    if (!isOpen && (e.key === 'ArrowDown' || e.key === 'Enter' || e.key === ' ')) {
      setIsOpen(true);
      // Focus selected or first option
      const idx = selectedItem
        ? options.findIndex(opt => opt.value === selectedItem.value)
        : 0;
      setActiveIndex(idx);
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
      } else if (e.key === 'Tab') {
        setIsOpen(false);
      } else if (e.key.length === 1 && /^[a-z0-9]$/i.test(e.key)) {
        handleTypeahead(e.key);
      }
    }
  };

  /**
   * Handles keyboard events on the dropdown menu
   * @param {KeyboardEvent} e - Keyboard event
   */
  const handleMenuKeyDown = (e) => {
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
    } else if (e.key === 'Tab') {
      setIsOpen(false);
    } else if (e.key.length === 1 && /^[a-z0-9]$/i.test(e.key)) {
      handleTypeahead(e.key);
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
      'usa-form-group': label,
      'usa-form-group--error': error,
    },
    className
  );

  const buttonClasses = classNames(
    'usa-input',
    {
      'usa-input--error': error,
      'usa-input--disabled': disabled,
    },
    'dropdown__button'
  );

  const dropdownMenuClasses = classNames(
    'dropdown__menu'
  );

  return (
    <div className={containerClasses} ref={dropdownRef}>
      {renderLabel()}
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
        ref={buttonRef}
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
      <ul
        className={dropdownMenuClasses}
        role="listbox"
        id={menuId}
        aria-labelledby={id}
        hidden={!isOpen}
        onKeyDown={handleMenuKeyDown}
        tabIndex={isOpen ? 0 : -1}
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
            data-footer={option.isFooter ? "true" : undefined}
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

/**
 * PropTypes for the Dropdown component
 */
Dropdown.propTypes = {
  /** Unique identifier for the dropdown (required) */
  id: PropTypes.string.isRequired,
  /** Label text for the dropdown */
  label: PropTypes.string,
  /** Helper text displayed below the label */
  hintText: PropTypes.string,
  /** Array of options to display (required) */
  options: PropTypes.arrayOf(
    PropTypes.shape({
      value: PropTypes.string.isRequired,
      label: PropTypes.string.isRequired,
    })
  ).isRequired,
  /** Whether the dropdown is disabled */
  disabled: PropTypes.bool,
  /** Error state or error message */
  error: PropTypes.oneOfType([PropTypes.bool, PropTypes.string]),
  /** Additional CSS classes */
  className: PropTypes.string,
  /** Currently selected option value */
  selectedOptionValue: PropTypes.string,
  /** Callback function when an option is selected */
  onSelect: PropTypes.func,
  /** Text for the default/placeholder option */
  defaultOptionLabel: PropTypes.string,
  /** Force custom dropdown implementation (for testing) */
  forceCustom: PropTypes.bool,
};

/**
 * Default props for the Dropdown component
 */
Dropdown.defaultProps = {
  label: null,
  disabled: false,
  error: false,
  className: '',
  selectedOptionValue: null,
  onSelect: () => {},
  defaultOptionLabel: '- Select -',
  forceCustom: false,
};

export default Dropdown; 