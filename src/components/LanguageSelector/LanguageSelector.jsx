import React, { useState, useRef, useEffect } from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronDown } from '@fortawesome/free-solid-svg-icons';
import { Button } from '../Button';
import './LanguageSelector.css';

/**
 * Default language options with common languages
 */
const DEFAULT_LANGUAGES = [
  { code: 'en', nativeName: 'English', englishName: 'English' },
  { code: 'es', nativeName: 'Español', englishName: 'Spanish' },
  { code: 'fr', nativeName: 'Français', englishName: 'French' },
  { code: 'ar', nativeName: 'العربية', englishName: 'Arabic' },
  { code: 'zh', nativeName: '简体字', englishName: 'Chinese - Simplified' },
  { code: 'it', nativeName: 'Italiano', englishName: 'Italian' },
];

/**
 * Custom hook for handling click outside
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
 * Language Selector Component
 * 
 * The consistent placement, interface, and behavior of the language selection component 
 * allows users to easily find and access content in the language the user is most 
 * comfortable in.
 * 
 * @param {Object} props - Component props
 * @param {Array} props.languages - Array of language objects with code, nativeName, and englishName
 * @param {string} props.selectedLanguage - Currently selected language code
 * @param {Function} props.onLanguageChange - Callback function when language is changed
 * @param {string} props.variant - Component variant: 'default', 'two-languages', 'unstyled'
 * @param {string} props.buttonText - Text to display on the button (default: 'Languages')
 * @param {string} props.buttonVariant - Button variant for styling
 * @param {string} props.buttonSize - Button size
 * @param {string} props.className - Additional CSS classes
 * @param {string} props.id - Component ID for accessibility
 * @param {boolean} props.disabled - Whether the component is disabled
 * @param {boolean} props.showFooterText - Whether to show "Selected content in additional languages" footer
 * @param {string} props.footerText - Custom footer text
 * @param {string} props.ariaLabel - ARIA label for the component
 * @returns {JSX.Element} LanguageSelector component
 */
export const LanguageSelector = ({
  languages = DEFAULT_LANGUAGES,
  selectedLanguage = 'en',
  onLanguageChange,
  variant = 'default',
  buttonText = 'Languages',
  buttonVariant = 'default',
  buttonSize = 'default',
  className,
  id = 'language-selector',
  disabled = false,
  showFooterText = true,
  footerText = 'Selected content in additional languages',
  ariaLabel = 'Select language',
  ...props
}) => {
  const [isOpen, setIsOpen] = useState(false);
  const [activeIndex, setActiveIndex] = useState(-1);
  const dropdownRef = useRef(null);
  const buttonRef = useRef(null);
  const menuId = `${id}-menu`;
  
  useOutsideClick(dropdownRef, () => setIsOpen(false));
  
  // Handle language selection
  const handleLanguageSelect = (language, index) => {
    setIsOpen(false);
    setActiveIndex(index);
    if (onLanguageChange) {
      onLanguageChange(language.code, language);
    }
  };
  
  // Handle keyboard navigation
  const handleKeyDown = (event) => {
    if (disabled) return;
    
    if (!isOpen && (event.key === 'ArrowDown' || event.key === 'Enter' || event.key === ' ')) {
      event.preventDefault();
      setIsOpen(true);
      setActiveIndex(0);
    } else if (isOpen) {
      switch (event.key) {
        case 'ArrowDown':
          event.preventDefault();
          setActiveIndex(prev => (prev + 1) % languages.length);
          break;
        case 'ArrowUp':
          event.preventDefault();
          setActiveIndex(prev => (prev - 1 + languages.length) % languages.length);
          break;
        case 'Enter':
        case ' ':
          event.preventDefault();
          if (activeIndex >= 0 && activeIndex < languages.length) {
            handleLanguageSelect(languages[activeIndex], activeIndex);
          }
          break;
        case 'Escape':
          event.preventDefault();
          setIsOpen(false);
          setActiveIndex(-1);
          buttonRef.current?.focus();
          break;
        default:
          break;
      }
    }
  };
  
  // Handle button click
  const handleButtonClick = () => {
    if (disabled) return;
    
    if (variant === 'two-languages') {
      // For two languages, directly toggle between them
      const otherLanguage = languages.find(lang => lang.code !== selectedLanguage) || languages[1];
      handleLanguageSelect(otherLanguage, languages.indexOf(otherLanguage));
    } else {
      // For multiple languages, toggle dropdown
      setIsOpen(prev => !prev);
      if (!isOpen) {
        setActiveIndex(0);
      }
    }
  };
  
  // Scroll active option into view
  useEffect(() => {
    if (isOpen && activeIndex >= 0) {
      const activeOption = document.getElementById(`${id}-option-${activeIndex}`);
      if (activeOption && typeof activeOption.scrollIntoView === 'function') {
        activeOption.scrollIntoView({ block: 'nearest' });
      }
    }
  }, [isOpen, activeIndex, id]);
  
  // Component classes
  const wrapperClasses = classNames(
    'usa-language-selector',
    {
      'usa-language-selector--two-languages': variant === 'two-languages',
      'usa-language-selector--unstyled': variant === 'unstyled',
      'usa-language-selector--open': isOpen,
    },
    className
  );
  
  // Render two languages variant
  if (variant === 'two-languages') {
    const otherLanguage = languages.find(lang => lang.code !== selectedLanguage) || languages[1];
    
    return (
      <div className={wrapperClasses} {...props}>
        <Button
          ref={buttonRef}
          id={id}
          variant={buttonVariant}
          size={buttonSize}
          disabled={disabled}
          onClick={handleButtonClick}
          onKeyDown={handleKeyDown}
          aria-label={ariaLabel}
          className="usa-language-selector__button"
        >
          <span lang={otherLanguage.code}>{otherLanguage.nativeName}</span>
          {otherLanguage.englishName !== otherLanguage.nativeName && (
            <span className="usa-language-selector__english-name">
              {` (${otherLanguage.englishName})`}
            </span>
          )}
        </Button>
      </div>
    );
  }
  
  // Render unstyled variant
  if (variant === 'unstyled') {
    return (
      <div className={wrapperClasses} ref={dropdownRef} {...props}>
        <button
          ref={buttonRef}
          id={id}
          type="button"
          className="usa-language-selector__button usa-language-selector__button--unstyled"
          onClick={handleButtonClick}
          onKeyDown={handleKeyDown}
          disabled={disabled}
          aria-label={ariaLabel}
          aria-haspopup="listbox"
          aria-expanded={isOpen}
          aria-controls={menuId}
        >
          {buttonText}
          <FontAwesomeIcon
            icon={faChevronDown}
            className={classNames('usa-language-selector__chevron', {
              'usa-language-selector__chevron--open': isOpen
            })}
            aria-hidden="true"
          />
        </button>
        
        {isOpen && (
          <ul
            id={menuId}
            className="usa-language-selector__menu"
            role="listbox"
            aria-labelledby={id}
          >
            {languages.map((language, index) => (
              <li
                key={language.code}
                id={`${id}-option-${index}`}
                className={classNames('usa-language-selector__option', {
                  'usa-language-selector__option--selected': language.code === selectedLanguage,
                  'usa-language-selector__option--active': activeIndex === index,
                })}
                role="option"
                aria-selected={language.code === selectedLanguage}
                onClick={() => handleLanguageSelect(language, index)}
                tabIndex={-1}
              >
                <span lang={language.code}>{language.nativeName}</span>
                {language.englishName !== language.nativeName && (
                  <span className="usa-language-selector__english-name">
                    {` (${language.englishName})`}
                  </span>
                )}
              </li>
            ))}
            {showFooterText && (
              <li className="usa-language-selector__footer">
                {footerText}
              </li>
            )}
          </ul>
        )}
      </div>
    );
  }
  
  // Render default variant (multiple languages with styled button)
  return (
    <div className={wrapperClasses} ref={dropdownRef} {...props}>
      <Button
        ref={buttonRef}
        id={id}
        variant={buttonVariant}
        size={buttonSize}
        disabled={disabled}
        onClick={handleButtonClick}
        onKeyDown={handleKeyDown}
        aria-label={ariaLabel}
        aria-haspopup="listbox"
        aria-expanded={isOpen}
        aria-controls={menuId}
        className="usa-language-selector__button"
        endIcon={faChevronDown}
      >
        {buttonText}
      </Button>
      
      {isOpen && (
        <ul
          id={menuId}
          className="usa-language-selector__menu"
          role="listbox"
          aria-labelledby={id}
        >
          {languages.map((language, index) => (
            <li
              key={language.code}
              id={`${id}-option-${index}`}
              className={classNames('usa-language-selector__option', {
                'usa-language-selector__option--selected': language.code === selectedLanguage,
                'usa-language-selector__option--active': activeIndex === index,
              })}
              role="option"
              aria-selected={language.code === selectedLanguage}
              onClick={() => handleLanguageSelect(language, index)}
              tabIndex={-1}
            >
              <span lang={language.code}>{language.nativeName}</span>
              {language.englishName !== language.nativeName && (
                <span className="usa-language-selector__english-name">
                  {` (${language.englishName})`}
                </span>
              )}
            </li>
          ))}
          {showFooterText && (
            <li className="usa-language-selector__footer">
              {footerText}
            </li>
          )}
        </ul>
      )}
    </div>
  );
};

LanguageSelector.propTypes = {
  /** Array of language objects with code, nativeName, and englishName */
  languages: PropTypes.arrayOf(
    PropTypes.shape({
      code: PropTypes.string.isRequired,
      nativeName: PropTypes.string.isRequired,
      englishName: PropTypes.string.isRequired,
    })
  ),
  /** Currently selected language code */
  selectedLanguage: PropTypes.string,
  /** Callback function when language is changed */
  onLanguageChange: PropTypes.func,
  /** Component variant */
  variant: PropTypes.oneOf(['default', 'two-languages', 'unstyled']),
  /** Text to display on the button */
  buttonText: PropTypes.string,
  /** Button variant for styling */
  buttonVariant: PropTypes.oneOf([
    'default',
    'secondary',
    'accent-cool',
    'accent-warm',
    'base',
    'outline',
    'outline-inverse'
  ]),
  /** Button size */
  buttonSize: PropTypes.oneOf(['default', 'big']),
  /** Additional CSS classes */
  className: PropTypes.string,
  /** Component ID for accessibility */
  id: PropTypes.string,
  /** Whether the component is disabled */
  disabled: PropTypes.bool,
  /** Whether to show footer text */
  showFooterText: PropTypes.bool,
  /** Custom footer text */
  footerText: PropTypes.string,
  /** ARIA label for the component */
  ariaLabel: PropTypes.string,
};
