import React, { createContext, useContext, useState, useEffect, useCallback } from 'react';
import { useTranslation } from 'react-i18next';
import translationManager from '../utils/translationManager';
import { SUPPORTED_LANGUAGES, DEFAULT_LANGUAGE } from '../i18n';

const LanguageContext = createContext();

/**
 * Language Provider Component
 * Provides language context to the entire application
 */
export const LanguageProvider = ({ children }) => {
  const { i18n } = useTranslation();
  const [currentLanguage, setCurrentLanguage] = useState(DEFAULT_LANGUAGE);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  // Initialize language on mount
  useEffect(() => {
    const initializeLanguage = async () => {
      try {
        setIsLoading(true);
        setError(null);
        
        // Get the detected or stored language
        const detectedLanguage = i18n.language || DEFAULT_LANGUAGE;
        
        // Validate the detected language is supported
        const validLanguage = SUPPORTED_LANGUAGES[detectedLanguage] ? detectedLanguage : DEFAULT_LANGUAGE;
        
        // Set the language
        await translationManager.changeLanguage(validLanguage);
        setCurrentLanguage(validLanguage);
        
        // Update document attributes
        document.documentElement.lang = validLanguage;
        document.documentElement.dir = SUPPORTED_LANGUAGES[validLanguage].direction;
        
      } catch (err) {
        console.error('Failed to initialize language:', err);
        setError(err.message);
        
        // Fall back to default language
        setCurrentLanguage(DEFAULT_LANGUAGE);
        document.documentElement.lang = DEFAULT_LANGUAGE;
        document.documentElement.dir = SUPPORTED_LANGUAGES[DEFAULT_LANGUAGE].direction;
      } finally {
        setIsLoading(false);
      }
    };

    initializeLanguage();
  }, [i18n.language]);

  // Listen for language changes from i18next
  useEffect(() => {
    const handleLanguageChanged = (lng) => {
      setCurrentLanguage(lng);
      setError(null);
    };

    i18n.on('languageChanged', handleLanguageChanged);
    
    return () => {
      i18n.off('languageChanged', handleLanguageChanged);
    };
  }, [i18n]);

  // Change language function
  const changeLanguage = useCallback(async (languageCode) => {
    try {
      setIsLoading(true);
      setError(null);
      
      // Validate language code
      if (!SUPPORTED_LANGUAGES[languageCode]) {
        throw new Error(`Unsupported language: ${languageCode}`);
      }
      
      // Change the language
      await translationManager.changeLanguage(languageCode);
      setCurrentLanguage(languageCode);
      
      // Update document attributes
      document.documentElement.lang = languageCode;
      document.documentElement.dir = SUPPORTED_LANGUAGES[languageCode].direction;
      
    } catch (err) {
      console.error('Failed to change language:', err);
      setError(err.message);
      throw err;
    } finally {
      setIsLoading(false);
    }
  }, []);

  // Get current language info
  const getCurrentLanguageInfo = useCallback(() => {
    return {
      code: currentLanguage,
      ...SUPPORTED_LANGUAGES[currentLanguage]
    };
  }, [currentLanguage]);

  // Get all supported languages
  const getSupportedLanguages = useCallback(() => {
    return SUPPORTED_LANGUAGES;
  }, []);

  // Get language codes array
  const getLanguageCodes = useCallback(() => {
    return Object.keys(SUPPORTED_LANGUAGES);
  }, []);

  // Check if a language is supported
  const isLanguageSupported = useCallback((languageCode) => {
    return !!SUPPORTED_LANGUAGES[languageCode];
  }, []);

  // Get language direction
  const getLanguageDirection = useCallback((languageCode = currentLanguage) => {
    return SUPPORTED_LANGUAGES[languageCode]?.direction || 'ltr';
  }, [currentLanguage]);

  const contextValue = {
    // State
    currentLanguage,
    isLoading,
    error,
    
    // Actions
    changeLanguage,
    
    // Getters
    getCurrentLanguageInfo,
    getSupportedLanguages,
    getLanguageCodes,
    isLanguageSupported,
    getLanguageDirection,
    
    // Computed values
    isRTL: getLanguageDirection() === 'rtl',
    supportedLanguages: SUPPORTED_LANGUAGES,
    languageCodes: Object.keys(SUPPORTED_LANGUAGES),
  };

  return (
    <LanguageContext.Provider value={contextValue}>
      {children}
    </LanguageContext.Provider>
  );
};

/**
 * Hook to use the language context
 * @returns {Object} Language context value
 */
export const useLanguageContext = () => {
  const context = useContext(LanguageContext);
  
  if (!context) {
    throw new Error('useLanguageContext must be used within a LanguageProvider');
  }
  
  return context;
};

/**
 * Higher-order component to wrap components with language context
 * @param {React.Component} Component - Component to wrap
 * @returns {React.Component} Wrapped component
 */
export const withLanguageContext = (Component) => {
  const WrappedComponent = (props) => {
    const languageContext = useLanguageContext();
    return <Component {...props} languageContext={languageContext} />;
  };
  
  WrappedComponent.displayName = `withLanguageContext(${Component.displayName || Component.name})`;
  
  return WrappedComponent;
};
