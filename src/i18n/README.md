# Internationalization (i18n) System

The Portland Component Library includes a comprehensive internationalization system that supports multiple languages and follows accessibility best practices.

## Supported Languages

Based on Portland.gov's Factor 1 analysis, the library supports the following languages:

### Primary Languages (1,000+ LEP individuals)
- **English (en)** - Default language
- **Spanish (es)** - Español
- **Vietnamese (vi)** - Tiếng Việt
- **Chinese (zh)** - 中文
- **Russian (ru)** - Русский
- **Somali (so)** - Soomaali
- **Ukrainian (uk)** - Українська
- **Romanian (ro)** - Română
- **Nepali (ne)** - नेपाली
- **Chuukese (chk)** - Chuukese

### Additional Languages
- **Japanese (ja)** - 日本語
- **Korean (ko)** - 한국어
- **Tagalog (tl)** - Tagalog
- **Laotian (lo)** - ພາສາລາວ
- **Arabic (ar)** - العربية
- **Mon-Khmer Cambodian (km)** - ភាសាខ្មែរ

## Architecture

### Core Files
- `src/i18n/index.js` - Main i18n configuration
- `src/i18n/locales/` - Translation files organized by language
- `src/utils/translationManager.js` - Translation loading and management
- `src/hooks/useTranslation.js` - React hooks for components
- `src/contexts/LanguageContext.jsx` - Language state management

### Translation Structure

The library uses a **co-located translation architecture** where translation files are stored alongside their components for better maintainability.

#### Co-located Component Translations
```
src/components/
├── Button/
│   ├── Button.jsx
│   ├── Button.css
│   ├── Button.test.jsx
│   └── i18n/              # Component-specific translations
│       ├── en.json
│       └── es.json
├── Header/
│   ├── Header.jsx
│   ├── Header.css
│   ├── Header.test.jsx
│   └── i18n/
│       ├── en.json
│       └── es.json
└── ...
```

#### Common Translations
```
src/i18n/locales/
├── en/
│   └── common.json       # Shared translations across components
├── es/
│   └── common.json
└── ...                    # Other languages
```

## Usage

### Basic Component Translation

```jsx
import { useComponentTranslation } from '../../hooks/useTranslation';

export const MyComponent = () => {
  const { t, currentLanguage } = useComponentTranslation('MyComponent');
  
  return (
    <div lang={currentLanguage}>
      <h1>{t('title')}</h1>
      <p>{t('description')}</p>
      <button aria-label={t('buttonAriaLabel')}>
        {t('buttonText')}
      </button>
    </div>
  );
};
```

### Translation Files

#### English (en/components/MyComponent.json)
```json
{
  "MyComponent": {
    "title": "Component Title",
    "description": "Component description",
    "buttonText": "Click me",
    "buttonAriaLabel": "Click the button"
  }
}
```

#### Spanish (es/components/MyComponent.json)
```json
{
  "MyComponent": {
    "title": "Título del Componente",
    "description": "Descripción del componente",
    "buttonText": "Haz clic",
    "buttonAriaLabel": "Haz clic en el botón"
  }
}
```

### Language Switching

```jsx
import { useLanguage } from '../../hooks/useLanguage';

export const LanguageSwitcher = () => {
  const { currentLanguage, changeLanguage, supportedLanguages } = useLanguage();
  
  const handleLanguageChange = async (languageCode) => {
    try {
      await changeLanguage(languageCode);
    } catch (error) {
      console.error('Failed to change language:', error);
    }
  };
  
  return (
    <select 
      value={currentLanguage} 
      onChange={(e) => handleLanguageChange(e.target.value)}
    >
      {Object.entries(supportedLanguages).map(([code, lang]) => (
        <option key={code} value={code}>
          {lang.nativeName}
        </option>
      ))}
    </select>
  );
};
```

### Common Translations

```jsx
import { useCommonTranslation } from '../../hooks/useTranslation';

export const MyComponent = () => {
  const { t } = useCommonTranslation();
  
  return (
    <div>
      <button>{t('common.actions.save')}</button>
      <button>{t('common.actions.cancel')}</button>
      <p>{t('common.validation.required')}</p>
    </div>
  );
};
```

## Hooks

### useComponentTranslation(componentName)
Provides component-specific translations and language information.

**Returns:**
- `t(key, options)` - Translation function
- `currentLanguage` - Current language code
- `changeLanguage(code)` - Function to change language
- `ready` - Whether translations are loaded
- `isRTL` - Whether current language is RTL (disabled per requirements)

### useCommonTranslation()
Provides access to common translations across the application.

**Returns:**
- `t(key, options)` - Translation function
- `currentLanguage` - Current language code
- `ready` - Whether translations are loaded

### useLanguage()
Provides language management utilities.

**Returns:**
- `currentLanguage` - Current language code
- `changeLanguage(code)` - Function to change language
- `supportedLanguages` - Object of all supported languages
- `languageCodes` - Array of language codes

### useFormTranslation(formName)
Provides form-specific translations.

### usePageTranslation(pageName)
Provides page-specific translations.

## Context Provider

Wrap your application with the `LanguageProvider` to enable language management:

```jsx
import { LanguageProvider } from './contexts/LanguageContext';
import { I18nextProvider } from 'react-i18next';
import i18n from './i18n';

function App() {
  return (
    <I18nextProvider i18n={i18n}>
      <LanguageProvider>
        {/* Your app components */}
      </LanguageProvider>
    </I18nextProvider>
  );
}
```

## Translation Management

### Adding New Languages

1. Create language directory: `src/i18n/locales/{languageCode}/`
2. Add common translations: `src/i18n/locales/{languageCode}/common.json`
3. Add component translations: `src/i18n/locales/{languageCode}/components/`
4. Update `SUPPORTED_LANGUAGES` in `src/i18n/index.js`

### Adding New Components

1. **Create co-located translation files:**
   ```
   src/components/YourComponent/
   ├── YourComponent.jsx
   ├── YourComponent.css
   └── i18n/
       ├── en.json
       └── es.json
   ```

2. **Use the translation hook:**
   ```jsx
   import { useComponentTranslation } from '../../hooks/useTranslation';
   
   export const YourComponent = () => {
     const { t } = useComponentTranslation('YourComponent');
     // ... component logic
   };
   ```

3. **Add language attribute to root element:**
   ```jsx
   return (
     <div lang={currentLanguage}>
       {/* component content */}
     </div>
   );
   ```

4. **Replace hardcoded strings with translation keys:**
   ```jsx
   // Before
   <button>Submit</button>
   
   // After
   <button>{t('actions.submit')}</button>
   ```

5. **Update test utilities:**
   Add your component to the `componentsWithTranslations` array in `src/test-utils/i18n-test-utils.js`

### Translation Key Naming Convention

- Use descriptive, hierarchical keys
- Separate sections with dots: `actions.save`, `validation.required`
- Use camelCase for consistency
- Group related translations logically

## Accessibility Features

### Language Attributes
- All components automatically include `lang` attributes
- Screen readers announce language changes
- Proper language detection for assistive technologies

### ARIA Labels
- Translation keys support interpolation for dynamic content
- Accessible labels automatically adapt to language
- Maintains semantic meaning across languages

### RTL Support
- Language direction detection (currently disabled per requirements)
- Future-ready for RTL language support

## Testing

### Component Tests
```jsx
import { renderWithI18n } from '../../test-utils';

test('renders in different languages', () => {
  const { container } = renderWithI18n(<MyComponent />);
  expect(container.firstChild).toHaveAttribute('lang');
});
```

### Translation Tests
```jsx
test('translates button text', () => {
  renderWithI18n(<MyComponent />);
  expect(screen.getByText('Click me')).toBeInTheDocument();
});
```

## Performance Considerations

### Lazy Loading
- Component translations load on-demand
- Common translations load with initial bundle
- Efficient memory usage for large translation catalogs

### Caching
- Translations cached in localStorage
- Prevents unnecessary reloading
- Optimized for user experience

### Bundle Optimization
- Tree-shaking support for unused translations
- Code splitting by component namespace
- Minimal impact on bundle size

## Best Practices

### Translation Keys
- Use consistent naming conventions
- Avoid hardcoded strings in components
- Plan for scalability and maintenance

### Content Organization
- Group related translations logically
- Use namespaces for component isolation
- Maintain parallel structure across languages

### Quality Assurance
- Validate translation completeness
- Test with native speakers when possible
- Ensure cultural appropriateness

### Maintenance
- Regular review of translation quality
- Update translations with component changes
- Monitor for missing translation keys

## Troubleshooting

### Common Issues

**Missing Translations**
- Check translation file exists for component
- Verify translation key spelling
- Ensure namespace is properly loaded

**Language Not Changing**
- Verify LanguageProvider is wrapping components
- Check for errors in console
- Ensure translation files are accessible

**Accessibility Issues**
- Verify `lang` attributes are present
- Check ARIA label translations
- Test with screen readers

### Debug Mode
Enable debug mode in development:
```javascript
// Translation keys will be logged to console
i18n.init({ debug: true });
```

## Future Enhancements

- RTL layout support for Arabic and other RTL languages
- Advanced pluralization rules
- Translation memory and suggestions
- Integration with translation management systems
- Machine translation fallbacks
- Cultural adaptation features

## Support

For questions or issues with the i18n system:
1. Check this documentation
2. Review component examples
3. Check test files for usage patterns
4. Consult the I18nDemo component for working examples
