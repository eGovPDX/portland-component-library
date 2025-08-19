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
              { code: 'km', nativeName: 'ខ្មែរ', englishName: 'Khmer', disabled: true },
              { code: 'ko', nativeName: '한국어', englishName: 'Korean', disabled: true },
              { code: 'lo', nativeName: 'ລາວ', englishName: 'Lao', disabled: true },
              { code: 'ne', nativeName: 'नेपाली', englishName: 'Nepali', disabled: true },
              { code: 'ro', nativeName: 'Română', englishName: 'Romanian', disabled: true },
              { code: 'ru', nativeName: 'Русский', englishName: 'Russian', disabled: true },
              { code: 'so', nativeName: 'Soomaali', englishName: 'Somali', disabled: true },
              { code: 'tl', nativeName: 'Tagalog', englishName: 'Tagalog', disabled: true },
              { code: 'uk', nativeName: 'Українська', englishName: 'Ukrainian', disabled: true },
              { code: 'vi', nativeName: 'Tiếng Việt', englishName: 'Vietnamese', disabled: true },
              { code: 'zh', nativeName: '简体字', englishName: 'Chinese - Simplified', disabled: true }
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
        <h3>Component Example</h3>
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
