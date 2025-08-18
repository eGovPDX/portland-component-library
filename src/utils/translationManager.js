import i18n from '../i18n';
import { SUPPORTED_LANGUAGES, DEFAULT_LANGUAGE } from '../i18n';

/**
 * Translation Manager Utility
 * Handles loading, caching, and managing translations for the Portland Component Library
 */

class TranslationManager {
  constructor() {
    this.loadedNamespaces = new Set();
    this.loadingPromises = new Map();
  }

  /**
   * Load a namespace for a specific language
   * @param {string} language - Language code
   * @param {string} namespace - Namespace to load
   * @returns {Promise} Promise that resolves when namespace is loaded
   */
  async loadNamespace(language, namespace) {
    const key = `${language}:${namespace}`;
    
    // If already loaded, return immediately
    if (this.loadedNamespaces.has(key)) {
      return Promise.resolve();
    }
    
    // If already loading, return the existing promise
    if (this.loadingPromises.has(key)) {
      return this.loadingPromises.get(key);
    }
    
    // Load the namespace
    const loadPromise = this._loadNamespaceInternal(language, namespace);
    this.loadingPromises.set(key, loadPromise);
    
    try {
      await loadPromise;
      this.loadedNamespaces.add(key);
      this.loadingPromises.delete(key);
    } catch (error) {
      this.loadingPromises.delete(key);
      throw error;
    }
    
    return loadPromise;
  }

  /**
   * Internal method to load a namespace
   * @param {string} language - Language code
   * @param {string} namespace - Namespace to load
   * @returns {Promise} Promise that resolves when namespace is loaded
   */
  async _loadNamespaceInternal(language, namespace) {
    try {
      // For now, we'll use a simple approach with static imports
      // In a production environment, this could be replaced with dynamic imports or API calls
      
      // Try to load the translation file
      const translationModule = await this._importTranslation(language, namespace);
      
      if (translationModule && translationModule.default) {
        // Add the translation to i18next
        i18n.addResourceBundle(language, namespace, translationModule.default, true, true);
        return true;
      }
      
      // If no translation found, fall back to default language
      if (language !== DEFAULT_LANGUAGE) {
        console.warn(`Translation not found for ${language}:${namespace}, falling back to ${DEFAULT_LANGUAGE}`);
        return this._loadNamespaceInternal(DEFAULT_LANGUAGE, namespace);
      }
      
      return false;
    } catch (error) {
      console.error(`Failed to load translation for ${language}:${namespace}:`, error);
      
      // Fall back to default language
      if (language !== DEFAULT_LANGUAGE) {
        return this._loadNamespaceInternal(DEFAULT_LANGUAGE, namespace);
      }
      
      throw error;
    }
  }

  /**
   * Import translation file dynamically
   * @param {string} language - Language code
   * @param {string} namespace - Namespace to load
   * @returns {Promise} Promise that resolves to the translation module
   */
  async _importTranslation(language, namespace) {
    try {
      // This is a placeholder for dynamic imports
      // In a real implementation, you might use:
      // return import(`../locales/${language}/${namespace}.json`);
      
      // For now, return null to trigger fallback
      return null;
    } catch (error) {
      return null;
    }
  }

  /**
   * Preload all namespaces for a language
   * @param {string} language - Language code
   * @param {Array<string>} namespaces - Array of namespaces to load
   * @returns {Promise} Promise that resolves when all namespaces are loaded
   */
  async preloadLanguage(language, namespaces = ['common', 'components']) {
    const loadPromises = namespaces.map(namespace => 
      this.loadNamespace(language, namespace)
    );
    
    return Promise.all(loadPromises);
  }

  /**
   * Change the current language
   * @param {string} language - Language code to change to
   * @returns {Promise} Promise that resolves when language is changed
   */
  async changeLanguage(language) {
    if (!SUPPORTED_LANGUAGES[language]) {
      throw new Error(`Unsupported language: ${language}`);
    }
    
    // Preload the language if not already loaded
    await this.preloadLanguage(language);
    
    // Change the language in i18next
    await i18n.changeLanguage(language);
    
    // Update document language and direction
    document.documentElement.lang = language;
    document.documentElement.dir = SUPPORTED_LANGUAGES[language].direction;
    
    return language;
  }

  /**
   * Get current language information
   * @returns {Object} Current language information
   */
  getCurrentLanguage() {
    const currentLang = i18n.language;
    return {
      code: currentLang,
      ...SUPPORTED_LANGUAGES[currentLang]
    };
  }

  /**
   * Check if a namespace is loaded for a language
   * @param {string} language - Language code
   * @param {string} namespace - Namespace to check
   * @returns {boolean} True if namespace is loaded
   */
  isNamespaceLoaded(language, namespace) {
    const key = `${language}:${namespace}`;
    return this.loadedNamespaces.has(key);
  }

  /**
   * Get all supported languages
   * @returns {Object} Object containing all supported languages
   */
  getSupportedLanguages() {
    return SUPPORTED_LANGUAGES;
  }

  /**
   * Get language codes array
   * @returns {Array<string>} Array of supported language codes
   */
  getLanguageCodes() {
    return Object.keys(SUPPORTED_LANGUAGES);
  }
}

// Create singleton instance
const translationManager = new TranslationManager();

export default translationManager;
