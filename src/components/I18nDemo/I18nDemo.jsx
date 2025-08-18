import React, { useState, useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import { Person } from '../Person';
import { LanguageSelector } from '../LanguageSelector';
import { SUPPORTED_LANGUAGES, LANGUAGE_CODES } from '../../i18n';
import './I18nDemo.css';

/**
 * I18nDemo Component
 * Demonstrates the internationalization capabilities of the Portland Component Library
 */
export const I18nDemo = () => {
  const { i18n, t: tCommon } = useTranslation();
  const [selectedLanguage, setSelectedLanguage] = useState(i18n.language);
  const supportedLanguages = SUPPORTED_LANGUAGES;
  const languageCodes = LANGUAGE_CODES;

  const handleLanguageChange = async (languageCode, languageObj) => {
    try {
      await i18n.changeLanguage(languageCode);
      setSelectedLanguage(languageCode);
    } catch (error) {
      console.error('Failed to change language:', error);
    }
  };

  // Update selectedLanguage when i18n language changes
  useEffect(() => {
    setSelectedLanguage(i18n.language);
  }, [i18n.language]);

  // Create demo person data that updates with language
  const demoPerson = React.useMemo(() => ({
    name: 'Jane Doe',
    title: selectedLanguage === 'es' ? 'Analista de Políticas Senior' : 'Senior Policy Analyst',
    department: selectedLanguage === 'es' ? 'Oficina de Transporte' : 'Bureau of Transportation',
    email: 'jane.doe@portland.gov',
    phones: [
      { 
        label: selectedLanguage === 'es' ? 'Oficina' : 'Office', 
        value: '503-555-1234' 
      }
    ],
    meta: selectedLanguage === 'es' 
      ? ['Habla: Inglés, Español'] 
      : ['Speaks: English, Spanish'],
    tags: selectedLanguage === 'es' 
      ? ['Política', 'Transporte', 'Servicio Público'] 
      : ['Policy', 'Transportation', 'Public Service']
  }), [selectedLanguage]);

  return (
    <div className="i18n-demo" lang={selectedLanguage}>
      <div className="i18n-demo__header">
        <h1>{tCommon('language.language')} Demo</h1>
        <p>{tCommon('language.selectLanguage')}</p>
      </div>
      <div className='secondary-header'>
        <div className="i18n-demo__current-language">
          <h3>{tCommon('language.currentLanguage')}</h3>
          <p>
            <strong>{supportedLanguages[selectedLanguage]?.nativeName}</strong>
            {' '}({supportedLanguages[selectedLanguage]?.name})
          </p>
          <p>Language Code: <code>{selectedLanguage}</code></p>
          <p>Direction: <code>{supportedLanguages[selectedLanguage]?.direction}</code></p>
          
          <div className="i18n-demo__language-selector-wrapper">
            <h4>Change Language</h4>
            <LanguageSelector
              languages={[
                { code: 'en', nativeName: 'English', englishName: 'English' },
                { code: 'es', nativeName: 'Español', englishName: 'Spanish' }
              ]}
              selectedLanguage={selectedLanguage}
              onLanguageChange={handleLanguageChange}
              variant="two-languages"
              showIcon={true}
              buttonText="Select Language"
            />
          </div>
        </div>

        <div className="i18n-demo__component-example">
          <h3>Component Example</h3>
          <p>This Person component automatically adapts to the selected language:</p>
          <div className="i18n-demo__person-wrapper">
            <Person {...demoPerson} key={selectedLanguage} />
            <div className="i18n-demo__language-info">
              <small>
                Language: <strong>{selectedLanguage}</strong> | 
                Component re-renders when language changes
              </small>
            </div>
          </div>
        </div>
      </div>




      <div className="i18n-demo__features">
        <h3>i18n Features</h3>
        <ul>
          <li>Automatic language detection</li>
          <li>Component-specific translations</li>
          <li>Accessibility support with proper lang attributes</li>
          <li>Fallback to default language</li>
          <li>Namespace organization</li>
          <li>Type-safe translation keys</li>
        </ul>
      </div>
    </div>
  );
};
