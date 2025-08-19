import React from 'react';
import { I18nDemo } from './I18nDemo';
import { I18nextProvider } from 'react-i18next';
import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import '../LanguageSelector/LanguageSelector.css';
import '../Person/Person.css';
import '../Button/Button.css';
import '../Dropdown/Dropdown.css';
import '../../styles/themes/pgov.css';

// Mock translations for Storybook
const mockTranslations = {
  en: {
    common: {
      language: {
        language: 'Language',
        selectLanguage: 'Select language',
        changeLanguage: 'Change language',
        currentLanguage: 'Current language',
        availableLanguages: 'Available languages',
        languageChanged: 'Language changed to {{language}}',
        languageNotSupported: 'Language not supported'
      }
    }
  },
  es: {
    common: {
      language: {
        language: 'Idioma',
        selectLanguage: 'Seleccionar idioma',
        changeLanguage: 'Cambiar idioma',
        currentLanguage: 'Idioma actual',
        availableLanguages: 'Idiomas disponibles',
        languageChanged: 'Idioma cambiado a {{language}}',
        languageNotSupported: 'Idioma no soportado'
      }
    }
  }
};

// Initialize i18n for Storybook
i18n
  .use(initReactI18next)
  .init({
    fallbackLng: 'en',
    debug: false,
    supportedLngs: ['en', 'es'],
    ns: ['common', 'components'],
    defaultNS: 'common',
    interpolation: {
      escapeValue: false,
    },
    react: {
      useSuspense: false,
    },
  });

// Add mock translations
Object.entries(mockTranslations).forEach(([language, namespaces]) => {
  Object.entries(namespaces).forEach(([namespace, translations]) => {
    i18n.addResourceBundle(language, namespace, translations, true, true);
  });
});

// Ensure translations are loaded
i18n.loadNamespaces(['common', 'components']);

export default {
  title: 'Internationalization/I18nDemo',
  component: I18nDemo,
  decorators: [
    (Story) => (
      <I18nextProvider i18n={i18n}>
        <Story />
      </I18nextProvider>
    ),
  ],
  parameters: {
    docs: {
      description: {
        component: 'A demonstration component showcasing the internationalization capabilities of the Portland Component Library. This component allows users to switch between different languages and see how components adapt automatically.'
      }
    },
    layout: 'fullscreen'
  },
  argTypes: {
    // No props for this demo component
  },
  tags: ['autodocs']
};

// Interactive I18nDemo with language switching
export const Default = {
  args: {},
  parameters: {
    docs: {
      description: {
        story: 'Interactive demonstration of internationalization capabilities. Click on different language buttons to see the Person component update in real-time with translated content. Supports English and Spanish with visual feedback showing language changes.'
      }
    },
    a11y: {
      config: {
        rules: [
          {
            id: 'lang-attribute',
            enabled: true
          },
          {
            id: 'button-name',
            enabled: true
          }
        ]
      }
    }
  }
};
