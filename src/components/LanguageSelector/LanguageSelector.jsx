import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import { Dropdown } from '../Dropdown';
import { Button } from '../Button';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLanguage } from '@fortawesome/free-solid-svg-icons';
import './LanguageSelector.css';

/**
 * Default language options with common languages
 * @type {Array<{code: string, nativeName: string, englishName: string}>}
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
 * Language Selector Component
 * 
 * A responsive language selection component that provides users with an intuitive way
 * to switch between different languages. The component automatically adapts to mobile
 * devices by using native select elements, while providing a custom dropdown experience
 * on desktop. It supports multiple variants for different use cases and maintains
 * consistent accessibility features across all platforms.
 * 
 * @param {Object} props - Component props
 * @param {Array<{code: string, nativeName: string, englishName: string}>} [props.languages=DEFAULT_LANGUAGES] - Array of language objects
 * @param {string} [props.selectedLanguage='en'] - Currently selected language code
 * @param {Function} [props.onLanguageChange] - Callback function when language is changed
 * @param {'default'|'two-languages'|'unstyled'} [props.variant='default'] - Component variant
 * @param {string} [props.buttonText='Languages'] - Text to display on the button
 * @param {'default'|'secondary'|'accent-cool'|'accent-warm'|'base'|'outline'|'outline-inverse'} [props.buttonVariant='default'] - Button variant for styling
 * @param {'default'|'big'} [props.buttonSize='default'] - Button size
 * @param {string} [props.className] - Additional CSS classes
 * @param {string} [props.id='language-selector'] - Component ID for accessibility
 * @param {boolean} [props.disabled=false] - Whether the component is disabled
 * @param {boolean} [props.showFooterText=true] - Whether to show footer text
 * @param {string} [props.footerText='Selected content in additional languages'] - Custom footer text
 * @param {string} [props.ariaLabel='Select language'] - ARIA label for the component
 * @param {boolean} [props.showIcon=false] - Whether to show the language icon
 * @returns {JSX.Element} LanguageSelector component
 * 
 * @example
 * ```jsx
 * // Basic usage
 * <LanguageSelector
 *   languages={[
 *     { code: 'en', nativeName: 'English', englishName: 'English' },
 *     { code: 'es', nativeName: 'Español', englishName: 'Spanish' }
 *   ]}
 *   selectedLanguage="en"
 *   onLanguageChange={(code, language) => console.log('Changed to:', code)}
 * />
 * 
 * // With language icon (matches Figma design)
 * <LanguageSelector
 *   showIcon={true}
 *   languages={languages}
 *   onLanguageChange={handleLanguageChange}
 * />
 * 
 * // Two languages variant (toggles between two languages)
 * <LanguageSelector
 *   variant="two-languages"
 *   languages={[
 *     { code: 'en', nativeName: 'English', englishName: 'English' },
 *     { code: 'es', nativeName: 'Español', englishName: 'Spanish' }
 *   ]}
 *   selectedLanguage="en"
 *   onLanguageChange={handleLanguageChange}
 * />
 * 
 * // Unstyled variant
 * <LanguageSelector
 *   variant="unstyled"
 *   buttonText="Choose Language"
 *   languages={languages}
 *   onLanguageChange={handleLanguageChange}
 * />
 * ```
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
  showIcon = false,
  ...props
}) => {
  /**
   * Converts language objects to the format expected by the Dropdown component
   * @type {Array<{value: string, label: string}>}
   */
  const dropdownOptions = languages.map(language => ({
    value: language.code,
    label: language.nativeName !== language.englishName 
      ? `${language.nativeName} (${language.englishName})`
      : language.nativeName
  }));

  // Add footer text option if enabled
  if (showFooterText) {
    dropdownOptions.push({
      value: 'footer',
      label: footerText,
      isFooter: true
    });
  }

  /**
   * Handles language selection from the dropdown
   * @param {string} languageCode - The selected language code
   */
  const handleLanguageSelect = (languageCode) => {
    // Don't trigger callback for footer text
    if (languageCode === 'footer') {
      return;
    }
    
    const selectedLanguageObj = languages.find(lang => lang.code === languageCode);
    if (onLanguageChange && selectedLanguageObj) {
      onLanguageChange(languageCode, selectedLanguageObj);
    }
  };

  /**
   * CSS classes for the component wrapper
   * @type {string}
   */
  const wrapperClasses = classNames(
    'usa-language-selector',
    {
      'usa-language-selector--two-languages': variant === 'two-languages',
      'usa-language-selector--unstyled': variant === 'unstyled',
      'usa-language-selector--with-icon': showIcon,
    },
    className
  );

  // Render two languages variant
  if (variant === 'two-languages') {
    const otherLanguage = languages.find(lang => lang.code !== selectedLanguage) || languages[1];
    
    return (
      <div className={wrapperClasses} {...props}>
        <Button
          id={id}
          variant={buttonVariant}
          size={buttonSize}
          disabled={disabled}
          onClick={() => handleLanguageSelect(otherLanguage.code)}
          aria-label={ariaLabel}
          className="usa-language-selector__button"
        >
          {showIcon && (
            <FontAwesomeIcon 
              icon={faLanguage} 
              className="usa-language-selector__icon"
              aria-hidden="true"
            />
          )}
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
      <div className={wrapperClasses} {...props}>
        <Dropdown
          id={id}
          options={dropdownOptions}
          selectedOptionValue={selectedLanguage}
          onSelect={handleLanguageSelect}
          disabled={disabled}
          className="usa-language-selector__dropdown--unstyled"
          defaultOptionLabel={buttonText}
          aria-label={ariaLabel}
        />
      </div>
    );
  }

  // Render default variant (multiple languages with styled button)
  return (
    <div className={wrapperClasses} {...props}>
      <Dropdown
        id={id}
        options={dropdownOptions}
        selectedOptionValue={selectedLanguage}
        onSelect={handleLanguageSelect}
        disabled={disabled}
        className="usa-language-selector__dropdown"
        defaultOptionLabel={buttonText}
        aria-label={ariaLabel}
      />
    </div>
  );
};

/**
 * PropTypes for the LanguageSelector component
 */
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
  /** Whether to show the language icon */
  showIcon: PropTypes.bool,
};
