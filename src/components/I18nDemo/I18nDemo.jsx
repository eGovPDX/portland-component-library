import React, { useState, useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import { Person } from '../Person';
import { Button } from '../Button';
import { Alert } from '../Alert';
import { Card } from '../Card';
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
  const [selectedComponent, setSelectedComponent] = useState('person');
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
    
    // Listen for language changes from external sources (like Storybook)
    const handleLanguageChanged = (lng) => {
      setSelectedLanguage(lng);
    };
    
    i18n.on('languageChanged', handleLanguageChanged);
    
    // Cleanup listener
    return () => {
      i18n.off('languageChanged', handleLanguageChanged);
    };
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

  // Create demo data for other components
  const demoButton = React.useMemo(() => ({
    children: selectedLanguage === 'es' ? 'Hacer Clic' : 'Click Me',
    variant: 'primary',
    size: 'default'
  }), [selectedLanguage]);

  const demoAlert = React.useMemo(() => ({
    type: 'info',
    title: selectedLanguage === 'es' ? 'Información Importante' : 'Important Information',
    children: selectedLanguage === 'es' 
      ? 'Este es un mensaje de alerta de ejemplo que demuestra la internacionalización.'
      : 'This is an example alert message demonstrating internationalization.'
  }), [selectedLanguage]);

  const demoCard = React.useMemo(() => ({
    title: selectedLanguage === 'es' ? 'Tarjeta de Ejemplo' : 'Example Card',
    children: selectedLanguage === 'es'
      ? 'Esta es una tarjeta de ejemplo que muestra contenido internacionalizado.'
      : 'This is an example card showing internationalized content.'
  }), [selectedLanguage]);

  // Function to render the selected component
  const renderSelectedComponent = () => {
    switch (selectedComponent) {
      case 'person':
        return (
          <div className="i18n-demo__person-wrapper">
            <Person {...demoPerson} key={selectedLanguage} />
            <div className="i18n-demo__language-info">
              <small>
                Language: <strong>{selectedLanguage}</strong> | 
                Component re-renders when language changes
              </small>
            </div>
          </div>
        );
      case 'button':
        return (
          <div className="i18n-demo__button-wrapper">
            <Button {...demoButton} />
            <div className="i18n-demo__language-info">
              <small>
                Language: <strong>{selectedLanguage}</strong> | 
                Button text changes with language
              </small>
            </div>
          </div>
        );
      case 'alert':
        return (
          <div className="i18n-demo__alert-wrapper">
            <Alert {...demoAlert} />
            <div className="i18n-demo__language-info">
              <small>
                Language: <strong>{selectedLanguage}</strong> | 
                Alert content changes with language
              </small>
            </div>
          </div>
        );
      case 'card':
        return (
          <div className="i18n-demo__card-wrapper">
            <Card {...demoCard} />
            <div className="i18n-demo__language-info">
              <small>
                Language: <strong>{selectedLanguage}</strong> | 
                Card content changes with language
              </small>
            </div>
          </div>
        );
      default:
        return null;
    }
  };

  return (
    <div className="i18n-demo" lang={selectedLanguage}>
      <div className='secondary-header'>
        <div className="i18n-demo__current-language">
          <h3>Current Language</h3>
          <p>
            <strong>{supportedLanguages[selectedLanguage]?.nativeName}</strong>
            {' '}({supportedLanguages[selectedLanguage]?.name})
          </p>
          <p>Language Code: <code>{selectedLanguage}</code></p>
          <p>Direction: <code>{supportedLanguages[selectedLanguage]?.direction}</code></p>  
        </div>
        <div className="i18n-demo__language-selector-wrapper">
          <h3>Change Language</h3>
          <LanguageSelector
            languages={[
              { code: 'en', nativeName: 'English', englishName: 'English' },
              { code: 'es', nativeName: 'Español', englishName: 'Spanish' },
              { code: 'ar', nativeName: 'العربية', englishName: 'Arabic', disabled: true },
              { code: 'chk', nativeName: 'Chuukese', englishName: 'Chuukese', disabled: true },
              { code: 'ja', nativeName: '日本語', englishName: 'Japanese', disabled: true },
            ]}
            selectedLanguage={selectedLanguage}
            onLanguageChange={handleLanguageChange}
            variant="default"
            showIcon={true}
            buttonText="Select Language"
          />
        </div>
      </div>
      <div className="i18n-demo__component-example">
        <div className="secondary-header">
          <h3>Component Example</h3>
          <div className="i18n-demo__component-selector">
            <select 
              value={selectedComponent}
              placeholder="Select a component"
              onChange={(e) => {
                setSelectedComponent(e.target.value);
              }}
              className="usa-select"
            >
              <option value="person">Person Component</option>
              <option value="button">Button Component</option>
              <option value="alert">Alert Component</option>
              <option value="card">Card Component</option>
            </select>
          </div>
        </div>
        {renderSelectedComponent()}
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
