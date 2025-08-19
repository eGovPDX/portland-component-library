import { useTranslation as useI18nTranslation } from 'react-i18next';
import { useCallback, useEffect } from 'react';
import translationManager from '../utils/translationManager';

/**
 * Custom hook for component-specific translations
 * @param {string} componentName - Name of the component for namespace
 * @returns {Object} Translation utilities and current language info
 */
export const useComponentTranslation = (componentName) => {
  const { t, i18n, ready } = useI18nTranslation(`components.${componentName}`);
  
  // Ensure component namespace is loaded
  useEffect(() => {
    if (ready && componentName) {
      // Skip translationManager in test environment since translations are loaded directly
      if (process.env.NODE_ENV !== 'test') {
        // Try to load from component's local i18n folder first
        translationManager.loadComponentTranslations(componentName, i18n.language);
      }
    }
  }, [ready, componentName, i18n.language]);
  
  const changeLanguage = useCallback(async (languageCode) => {
    try {
      await translationManager.changeLanguage(languageCode);
    } catch (error) {
      console.error('Failed to change language:', error);
    }
  }, []);
  
  return {
    t: (key, options) => t(key, options),
    currentLanguage: i18n.language,
    changeLanguage,
    ready,
    isRTL: false, // RTL support disabled per requirements
  };
};

/**
 * Hook for common translations across the application
 * @returns {Object} Common translation utilities
 */
export const useCommonTranslation = () => {
  const { t, i18n, ready } = useI18nTranslation('common');
  
  return {
    t: (key, options) => t(key, options),
    currentLanguage: i18n.language,
    ready,
  };
};

/**
 * Hook for language management
 * @returns {Object} Language management utilities
 */
export const useLanguage = () => {
  const { i18n } = useI18nTranslation();
  
  const changeLanguage = useCallback(async (languageCode) => {
    try {
      await translationManager.changeLanguage(languageCode);
    } catch (error) {
      console.error('Failed to change language:', error);
    }
  }, []);
  
  return {
    currentLanguage: i18n.language,
    changeLanguage,
    supportedLanguages: translationManager.getSupportedLanguages(),
    languageCodes: translationManager.getLanguageCodes(),
  };
};

/**
 * Hook for form-specific translations
 * @param {string} formName - Name of the form for namespace
 * @returns {Object} Form translation utilities
 */
export const useFormTranslation = (formName) => {
  const { t, i18n, ready } = useI18nTranslation(['common', `forms.${formName}`]);
  
  // Ensure form namespace is loaded
  useEffect(() => {
    if (ready && formName) {
      translationManager.loadNamespace(i18n.language, `forms.${formName}`);
    }
  }, [ready, formName, i18n.language]);
  
  return {
    t: (key, options) => t(key, options),
    currentLanguage: i18n.language,
    ready,
  };
};

/**
 * Hook for page-specific translations
 * @param {string} pageName - Name of the page for namespace
 * @returns {Object} Page translation utilities
 */
export const usePageTranslation = (pageName) => {
  const { t, i18n, ready } = useI18nTranslation(['common', `pages.${pageName}`]);
  
  // Ensure page namespace is loaded
  useEffect(() => {
    if (ready && pageName) {
      translationManager.loadNamespace(i18n.language, `pages.${pageName}`);
    }
  }, [ready, pageName, i18n.language]);
  
  return {
    t: (key, options) => t(key, options),
    currentLanguage: i18n.language,
    ready,
  };
};
