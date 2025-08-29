import React from 'react';
import { render } from '@testing-library/react';
import { I18nextProvider } from 'react-i18next';
import i18n from '../i18n';
import { initReactI18next } from 'react-i18next';
import translationManager from '../utils/translationManager';

// Also import the main i18n instance to ensure consistency
import mainI18n from '../i18n';

// Generate namespace list for i18n configuration
const componentsWithTranslations = [
  'Header', 'Footer', 'Search', 'Modal', 'Table', 'Pagination', 
  'ProcessSteps', 'StepIndicator', 'SummaryBox', 'Accordion', 
  'Alert', 'Card', 'Dropdown', 'Breadcrumbs', 'Checkbox', 
  'Radio', 'TextInput', 'TextArea', 'Select', 'LanguageSelector', 
  'Person', 'Contacts', 'SideNav', 'HeroGlobal', 'ButtonGroup', 
  'PGOVHeader', 'Banner', 'Button', 'Link', 'Identifier', 'RadioButtons', 'SkipNav'
];

const componentNamespaces = componentsWithTranslations.map(name => `components.${name}`);
const allNamespaces = ['common', 'components', ...componentNamespaces];

// Re-initialize i18n with all necessary namespaces for testing
// This ensures all component namespaces are recognized
// Force synchronous initialization for testing
i18n
  .use(initReactI18next)
  .init({
    fallbackLng: 'en',
    debug: false,
    supportedLngs: ['en', 'es'],
    ns: allNamespaces,
    defaultNS: 'common',
    interpolation: {
      escapeValue: false,
    },
    react: {
      useSuspense: false,
    },
    initImmediate: false, // Force synchronous initialization
  });

// Also update the main i18n instance to ensure consistency
// This prevents the component from using a different i18n instance
mainI18n
  .use(initReactI18next)
  .init({
    fallbackLng: 'en',
    debug: false,
    supportedLngs: ['en', 'es'],
    ns: allNamespaces,
    defaultNS: 'common',
    interpolation: {
      escapeValue: false,
    },
    react: {
      useSuspense: false,
    },
    initImmediate: false, // Force synchronous initialization
  });



// Ensure we're using English for tests
i18n.changeLanguage('en');

// Load common translations
try {
  const enCommon = require('../i18n/locales/en/common.json');
  i18n.addResourceBundle('en', 'common', enCommon, true, true);
} catch (error) {
  // No common translations found, which is fine
}

try {
  const esCommon = require('../i18n/locales/es/common.json');
  i18n.addResourceBundle('es', 'common', esCommon, true, true);
  
  // Mark as loaded in translation manager to prevent dynamic loading attempts
  translationManager.loadedNamespaces.add('es:common');
} catch (error) {
  // No Spanish common translations found, which is fine
}

// Load component translations from their local i18n folders
const loadComponentTranslations = (componentName) => {
  try {
    // Try to load English translations
    const enTranslations = require(`../components/${componentName}/i18n/en.json`);
    const enContent = enTranslations[componentName] || enTranslations;

    // Register under the library's component namespace convention
    i18n.addResourceBundle('en', `components.${componentName}`, enContent, true, true);

    // Mark as loaded in translation manager to prevent dynamic loading attempts
    translationManager.loadedNamespaces.add(`en:components.${componentName}`);
  } catch (error) {
    // Component doesn't have translations, which is fine
  }

  try {
    // Try to load Spanish translations
    const esTranslations = require(`../components/${componentName}/i18n/es.json`);
    const esContent = esTranslations[componentName] || esTranslations;

    // Register under the library's component namespace convention
    i18n.addResourceBundle('es', `components.${componentName}`, esContent, true, true);

    // Mark as loaded in translation manager to prevent dynamic loading attempts
    translationManager.loadedNamespaces.add(`es:components.${componentName}`);
    // Also mark the general components namespace as loaded
    translationManager.loadedNamespaces.add('es:components');
  } catch (error) {
    // Component doesn't have translations, which is fine
  }
};

// Load component translations immediately
componentsWithTranslations.forEach(loadComponentTranslations);

// Ensure i18n is properly initialized
if (!i18n.isInitialized) {
  i18n.init();
}

// Helper function to render components with i18n provider
export const renderWithI18n = (component, options = {}) => {
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
