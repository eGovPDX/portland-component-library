import { SUPPORTED_LANGUAGES } from '../src/i18n';

export const i18nConfig = {
  locales: Object.keys(SUPPORTED_LANGUAGES).map(code => ({
    code,
    name: SUPPORTED_LANGUAGES[code].name,
    nativeName: SUPPORTED_LANGUAGES[code].nativeName,
    direction: SUPPORTED_LANGUAGES[code].direction || 'ltr'
  })),
  defaultLocale: 'en',
  fallbackLocale: 'en',
  // Enable RTL support for Arabic and other RTL languages
  rtl: ['ar'],
  // Load namespaces for components
  namespaces: ['common', 'components'],
  // Default namespace
  defaultNamespace: 'common'
};
