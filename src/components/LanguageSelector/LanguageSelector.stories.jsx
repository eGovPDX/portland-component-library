import React, { useState } from 'react';
import { LanguageSelector } from './LanguageSelector';

export default {
  title: 'Components/LanguageSelector',
  component: LanguageSelector,
  parameters: {
    docs: {
      description: {
        component: 'The consistent placement, interface, and behavior of the language selection component allows users to easily find and access content in the language the user is most comfortable in. The component displays the currently selected language name on the button/link.'
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
    showIcon: {
      control: 'boolean',
      description: 'Whether to show the language icon (for two-languages variant)'
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
  buttonVariant: 'default',
  selectedLanguage: 'en',
  showFooterText: true
};
Default.parameters = {
  docs: {
    description: {
      story: 'The default language selector appears as a blue button with white text showing the currently selected language name. When clicked, it opens a dropdown menu with language options. The component does not include a chevron icon for a cleaner appearance.'
    }
  }
};

// Unstyled Variant
export const Unstyled = Template.bind({});
Unstyled.args = {
  variant: 'unstyled',
  selectedLanguage: 'en',
  showFooterText: true
};
Unstyled.parameters = {
  docs: {
    description: {
      story: 'Use the unstyled version of the language selector if your implementation calls for a link, or must be placed in a secondary navigation section with other links. This variant appears as a blue underlined link showing the selected language name instead of a button, without any chevron icon.'
    }
  }
};

// Two Languages Variant
export const TwoLanguages = Template.bind({});
TwoLanguages.args = {
  variant: 'two-languages',
  showIcon: true,
  languages: [
    { code: 'en', nativeName: 'English', englishName: 'English' },
    { code: 'es', nativeName: 'Español', englishName: 'Spanish' }
  ],
  selectedLanguage: 'en'
};
TwoLanguages.parameters = {
  docs: {
    description: {
      story: 'The two-languages variant toggles between exactly two languages. It shows the language that is NOT currently selected, allowing users to quickly switch to the other language. This variant can optionally include a language icon.'
    }
  }
};

// Disabled State
export const Disabled = Template.bind({});
Disabled.args = {
  variant: 'default',
  disabled: true,
  selectedLanguage: 'en'
};

// Custom Languages
export const CustomLanguages = Template.bind({});
CustomLanguages.args = {
  variant: 'default',
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
      story: 'Example with custom set of languages including various scripts and writing systems. The button will display the currently selected language name.'
    }
  }
};

// Without Footer Text
export const WithoutFooterText = Template.bind({});
WithoutFooterText.args = {
  variant: 'default',
  selectedLanguage: 'en',
  showFooterText: false
};

// Multiple Language Selectors
export const MultipleSelectorExample = () => {
  const [lang1, setLang1] = useState('en');
  const [lang2, setLang2] = useState('es');
  const [lang3, setLang3] = useState('fr');
  
  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
      <div>
        <h3>Default Variant (Button Style)</h3>
        <p>Shows selected language name: "{lang1 === 'en' ? 'English' : lang1 === 'es' ? 'Español' : 'Français'}"</p>
        <LanguageSelector
          id="lang-selector-1"
          variant="default"
          selectedLanguage={lang1}
          onLanguageChange={setLang1}
        />
      </div>
      
      <div>
        <h3>Two Languages Variant</h3>
        <p>Shows the language to switch TO: "{lang2 === 'en' ? 'English' : 'Español'}"</p>
        <LanguageSelector
          id="lang-selector-2"
          variant="two-languages"
          showIcon={true}
          languages={[
            { code: 'en', nativeName: 'English', englishName: 'English' },
            { code: 'es', nativeName: 'Español', englishName: 'Spanish' }
          ]}
          selectedLanguage={lang2}
          onLanguageChange={setLang2}
        />
      </div>
      
      <div>
        <h3>Unstyled Variant (Link Style)</h3>
        <p>Shows selected language name as link: "{lang3 === 'en' ? 'English' : lang3 === 'es' ? 'Español' : 'Français'}"</p>
        <LanguageSelector
          id="lang-selector-3"
          variant="unstyled"
          selectedLanguage={lang3}
          onLanguageChange={setLang3}
        />
      </div>
    </div>
  );
};
MultipleSelectorExample.parameters = {
  docs: {
    description: {
      story: 'Multiple language selectors on the same page with different variants. Each variant displays the selected language name in its own style.'
    }
  }
};
