import React, { useState, useEffect, useRef } from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronDown } from '@fortawesome/free-solid-svg-icons';
import './Dropdown.css';

// Device detection utility
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

  // Shared label/hint/error rendering
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

  // Type-to-search logic
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
  hintText: PropTypes.string,
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
  forceCustom: PropTypes.bool,
};

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