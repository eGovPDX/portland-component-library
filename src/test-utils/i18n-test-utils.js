import React from 'react';
import { render } from '@testing-library/react';
import { I18nextProvider } from 'react-i18next';
import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

// Initialize i18n for testing
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

// Ensure i18n is ready
i18n.init();

// Load common translations
try {
  const enCommon = require('../i18n/locales/en/common.json');
  i18n.addResourceBundle('en', 'common', enCommon, true, true);
} catch (error) {
  console.log('No common English translations found');
}

try {
  const esCommon = require('../i18n/locales/es/common.json');
  i18n.addResourceBundle('es', 'common', esCommon, true, true);
} catch (error) {
  console.log('No common Spanish translations found');
}

// Load component translations from their local i18n folders
const loadComponentTranslations = (componentName) => {
  try {
    // Try to load English translations
    const enTranslations = require(`../components/${componentName}/i18n/en.json`);
    i18n.addResourceBundle('en', `components.${componentName}`, enTranslations, true, true);
    console.log(`Loaded English translations for ${componentName}`);
  } catch (error) {
    console.log(`No English translations found for ${componentName}:`, error.message);
  }
  
  try {
    // Try to load Spanish translations
    const esTranslations = require(`../components/${componentName}/i18n/es.json`);
    i18n.addResourceBundle('es', `components.${componentName}`, esTranslations, true, true);
    console.log(`Loaded Spanish translations for ${componentName}`);
  } catch (error) {
    console.log(`No Spanish translations found for ${componentName}:`, error.message);
  }
};

// Load all component translations
const componentsWithTranslations = [
  'Header', 'Footer', 'Search', 'Modal', 'Table', 'Pagination', 
  'ProcessSteps', 'StepIndicator', 'SummaryBox', 'Accordion', 
  'Alert', 'Card', 'Dropdown', 'Breadcrumbs', 'Checkbox', 
  'Radio', 'TextInput', 'TextArea', 'Select', 'LanguageSelector', 
  'Person', 'Contacts', 'SideNav', 'HeroGlobal', 'ButtonGroup', 
  'PGOVHeader', 'Banner', 'Button', 'Link', 'Identifier', 'RadioButtons', 'SkipNav'
];

componentsWithTranslations.forEach(loadComponentTranslations);

// Ensure translations are loaded
i18n.loadNamespaces(['common', 'components']);

// Helper function to render components with i18n provider
export const renderWithI18n = (component, options = {}) => {
  // Wait for i18n to be ready
  if (!i18n.isInitialized) {
    i18n.init();
  }
  
  // Debug: Check if Contacts translations are loaded
  const contactsTranslations = i18n.getResourceBundle('en', 'components.Contacts');
  console.log('Contacts translations loaded:', !!contactsTranslations);
  if (contactsTranslations) {
    console.log('Contacts translations content:', contactsTranslations);
  }
  
  return render(
    <I18nextProvider i18n={i18n}>
      {component}
    </I18nextProvider>,
    options
  );
};

// Helper function to change language in tests
export const changeLanguageInTest = async (languageCode) => {
  await i18n.changeLanguage(languageCode);
};

// Helper function to reset language to default
export const resetLanguageInTest = async () => {
  await i18n.changeLanguage('en');
};

// Export i18n instance for direct use in tests
export { i18n };
