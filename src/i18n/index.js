import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import LanguageDetector from 'i18next-browser-languagedetector';

// Portland.gov supported languages based on Factor 1 analysis
const SUPPORTED_LANGUAGES = {
  // Primary languages (1,000+ LEP individuals)
  en: { name: 'English', nativeName: 'English', direction: 'ltr' },
  es: { name: 'Spanish', nativeName: 'Español', direction: 'ltr' },
  vi: { name: 'Vietnamese', nativeName: 'Tiếng Việt', direction: 'ltr' },
  zh: { name: 'Chinese', nativeName: '中文', direction: 'ltr' },
  ru: { name: 'Russian', nativeName: 'Русский', direction: 'ltr' },
  so: { name: 'Somali', nativeName: 'Soomaali', direction: 'ltr' },
  uk: { name: 'Ukrainian', nativeName: 'Українська', direction: 'ltr' },
  ro: { name: 'Romanian', nativeName: 'Română', direction: 'ltr' },
  ne: { name: 'Nepali', nativeName: 'नेपाली', direction: 'ltr' },
  chk: { name: 'Chuukese', nativeName: 'Chuukese', direction: 'ltr' },
  
  // Additional languages
  ja: { name: 'Japanese', nativeName: '日本語', direction: 'ltr' },
  ko: { name: 'Korean', nativeName: '한국어', direction: 'ltr' },
  tl: { name: 'Tagalog', nativeName: 'Tagalog', direction: 'ltr' },
  lo: { name: 'Laotian', nativeName: 'ພາສາລາວ', direction: 'ltr' },
  ar: { name: 'Arabic', nativeName: 'العربية', direction: 'rtl' },
  km: { name: 'Mon-Khmer Cambodian', nativeName: 'ភាសាខ្មែរ', direction: 'ltr' }
};

// Export for use in components
export { SUPPORTED_LANGUAGES };

// Get language codes array
export const LANGUAGE_CODES = Object.keys(SUPPORTED_LANGUAGES);

// Get default language
export const DEFAULT_LANGUAGE = 'en';

i18n
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    fallbackLng: DEFAULT_LANGUAGE,
    debug: process.env.NODE_ENV === 'development',
    
    // Supported languages
    supportedLngs: LANGUAGE_CODES,
    
    // Namespaces for organizing translations
    ns: ['common', 'components'],
    defaultNS: 'common',
    
    // Interpolation
    interpolation: {
      escapeValue: false, // React already escapes values
    },
    
    // Language detection
    detection: {
      order: ['localStorage', 'navigator', 'htmlTag'],
      caches: ['localStorage'],
      lookupLocalStorage: 'portland-gov-language',
    },
    
    // React integration
    react: {
      useSuspense: false,
    },
    
    // Missing key handling
    saveMissing: process.env.NODE_ENV === 'development',
    missingKeyHandler: (lng, ns, key, fallbackValue) => {
      if (process.env.NODE_ENV === 'development') {
        console.warn(`Missing translation key: ${key} for language: ${lng} in namespace: ${ns}`);
      }
    },
  });

export default i18n;
