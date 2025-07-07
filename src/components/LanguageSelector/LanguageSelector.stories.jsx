import React, { useState } from 'react';
import { LanguageSelector } from './LanguageSelector';

export default {
  title: 'Components/LanguageSelector',
  component: LanguageSelector,
  parameters: {
    docs: {
      description: {
        component: 'The consistent placement, interface, and behavior of the language selection component allows users to easily find and access content in the language the user is most comfortable in.'
      }
    }
  },
  argTypes: {
    variant: {
      control: 'select',
      options: ['default', 'two-languages', 'unstyled'],
      description: 'Component variant'
    },
    buttonVariant: {
      control: 'select',
      options: ['default', 'secondary', 'accent-cool', 'accent-warm', 'base', 'outline', 'outline-inverse'],
      description: 'Button variant for styling'
    },
    buttonSize: {
      control: 'select',
      options: ['default', 'big'],
      description: 'Button size'
    },
    selectedLanguage: {
      control: 'select',
      options: ['en', 'es', 'fr', 'ar', 'zh', 'it'],
      description: 'Currently selected language code'
    },
    disabled: {
      control: 'boolean',
      description: 'Whether the component is disabled'
    },
    showFooterText: {
      control: 'boolean',
      description: 'Whether to show footer text'
    },
    buttonText: {
      control: 'text',
      description: 'Text to display on the button'
    },
    footerText: {
      control: 'text',
      description: 'Custom footer text'
    },
    ariaLabel: {
      control: 'text',
      description: 'ARIA label for the component'
    }
  }
};

// Template for interactive stories
const Template = (args) => {
  const [selectedLanguage, setSelectedLanguage] = useState(args.selectedLanguage || 'en');
  
  const handleLanguageChange = (languageCode, language) => {
    setSelectedLanguage(languageCode);
    console.log('Language changed to:', language);
  };
  
  return (
    <LanguageSelector
      {...args}
      selectedLanguage={selectedLanguage}
      onLanguageChange={handleLanguageChange}
    />
  );
};

// Default Language Selector with Multiple Languages
export const Default = Template.bind({});
Default.args = {
  variant: 'default',
  buttonText: 'Languages',
  buttonVariant: 'default',
  selectedLanguage: 'en',
  showFooterText: true
};

// Unstyled Variant
export const Unstyled = Template.bind({});
Unstyled.args = {
  variant: 'unstyled',
  buttonText: 'Languages',
  selectedLanguage: 'en',
  showFooterText: true
};
Unstyled.parameters = {
  docs: {
    description: {
      story: 'Use the unstyled version of the language button if your implementation calls for a link, or must be placed in a secondary navigation section with other links.'
    }
  }
};

// Disabled State
export const Disabled = Template.bind({});
Disabled.args = {
  variant: 'default',
  buttonText: 'Languages',
  disabled: true,
  selectedLanguage: 'en'
};

// Custom Languages
export const CustomLanguages = Template.bind({});
CustomLanguages.args = {
  variant: 'default',
  buttonText: 'Select Language',
  languages: [
    { code: 'en', nativeName: 'English', englishName: 'English' },
    { code: 'de', nativeName: 'Deutsch', englishName: 'German' },
    { code: 'ja', nativeName: '日本語', englishName: 'Japanese' },
    { code: 'ko', nativeName: '한국어', englishName: 'Korean' },
    { code: 'ru', nativeName: 'Русский', englishName: 'Russian' },
    { code: 'pt', nativeName: 'Português', englishName: 'Portuguese' }
  ],
  selectedLanguage: 'en',
  showFooterText: true
};
CustomLanguages.parameters = {
  docs: {
    description: {
      story: 'Example with custom set of languages including various scripts and writing systems.'
    }
  }
};

// Without Footer Text
export const WithoutFooterText = Template.bind({});
WithoutFooterText.args = {
  variant: 'default',
  buttonText: 'Languages',
  selectedLanguage: 'en',
  showFooterText: false
};

// Custom Footer Text
export const CustomFooterText = Template.bind({});
CustomFooterText.args = {
  variant: 'default',
  buttonText: 'Languages',
  selectedLanguage: 'en',
  showFooterText: true,
  footerText: 'More languages available online'
};

// In Header Context (Small Button)
export const InHeaderContext = Template.bind({});
InHeaderContext.args = {
  variant: 'default',
  buttonText: 'Languages',
  buttonVariant: 'default',
  buttonSize: 'default',
  selectedLanguage: 'en',
  showFooterText: true
};
InHeaderContext.parameters = {
  docs: {
    description: {
      story: 'Example of how the language selector would appear in a header context.'
    }
  }
};

// Accessibility Example with ARIA Label
export const WithAriaLabel = Template.bind({});
WithAriaLabel.args = {
  variant: 'default',
  buttonText: 'Languages',
  selectedLanguage: 'en',
  ariaLabel: 'Choose your preferred language for this website'
};
WithAriaLabel.parameters = {
  docs: {
    description: {
      story: 'Example with custom ARIA label for enhanced accessibility.'
    }
  }
};

// Multiple Language Selectors
export const MultipleSelectorExample = () => {
  const [lang1, setLang1] = useState('en');
  const [lang2, setLang2] = useState('es');
  const [lang3, setLang3] = useState('fr');
  
  return (
    <div style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap' }}>
      <LanguageSelector
        id="lang-selector-1"
        variant="default"
        buttonText="Languages"
        selectedLanguage={lang1}
        onLanguageChange={setLang1}
      />
      <LanguageSelector
        id="lang-selector-2"
        variant="two-languages"
        languages={[
          { code: 'en', nativeName: 'English', englishName: 'English' },
          { code: 'es', nativeName: 'Español', englishName: 'Spanish' }
        ]}
        selectedLanguage={lang2}
        onLanguageChange={setLang2}
      />
      <LanguageSelector
        id="lang-selector-3"
        variant="unstyled"
        buttonText="Languages"
        selectedLanguage={lang3}
        onLanguageChange={setLang3}
      />
    </div>
  );
};
MultipleSelectorExample.parameters = {
  docs: {
    description: {
      story: 'Multiple language selectors on the same page with different variants.'
    }
  }
};
