import React from 'react';
import { Person } from './Person';
import { Tag } from '../Tag';
import avatarPlaceholder from '../../images/avatar-card-placeholder.png';
import { Button } from '../Button';
import { action } from '@storybook/addon-actions';
import { I18nextProvider } from 'react-i18next';
import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

// Mock translations for Person component in Storybook
const mockPersonTranslations = {
  en: {
    components: {
      Person: {
        accessibility: {
          emailAriaLabel: 'Email {{name}}',
          phoneAriaLabel: 'Call {{name}}{{#if label}} ({{label}}){{/if}}',
          profileLinkAriaLabel: 'View profile for {{name}}'
        }
      }
    }
  },
  es: {
    components: {
      Person: {
        accessibility: {
          emailAriaLabel: 'Enviar correo a {{name}}',
          phoneAriaLabel: 'Llamar a {{name}}{{#if label}} ({{label}}){{/if}}',
          profileLinkAriaLabel: 'Ver perfil de {{name}}'
        }
      }
    }
  }
};

// Initialize i18n for Person component stories
i18n
  .use(initReactI18next)
  .init({
    fallbackLng: 'en',
    debug: false,
    supportedLngs: ['en', 'es'],
    ns: ['components'],
    defaultNS: 'components',
    interpolation: {
      escapeValue: false,
    },
    react: {
      useSuspense: false,
    },
  });

// Add mock translations
Object.entries(mockPersonTranslations).forEach(([language, namespaces]) => {
  Object.entries(namespaces).forEach(([namespace, translations]) => {
    i18n.addResourceBundle(language, namespace, translations, true, true);
  });
});

// Ensure translations are loaded
i18n.loadNamespaces(['components']);

export default {
  title: 'Components/Person',
  component: Person,
  decorators: [
    (Story) => (
      <I18nextProvider i18n={i18n}>
        <Story />
      </I18nextProvider>
    ),
  ],
  parameters: {
    docs: {
      description: {
        component: 'Profile block for individuals with avatar, name, role, department, contact actions, meta, and tags. Not part of USWDS.'
      }
    },
    layout: 'centered'
  },
  argTypes: {
    layout: { 
      control: 'radio', 
      options: ['row', 'column'],
      description: 'Layout direction for the Person component. Row displays avatar and content side-by-side, column stacks them vertically.'
    },
    imageAlign: { 
      control: 'radio', 
      options: ['top', 'center'],
      description: 'Avatar alignment relative to content. Top aligns avatar to the top, center centers it vertically.'
    },
    avatarUrl: { 
      control: 'text', 
      description: 'URL for the avatar image. Leave empty to show initials fallback.',
      defaultValue: '' 
    },
    avatarAlt: { 
      control: 'text', 
      description: 'Alt text for the avatar image. Use descriptive text for accessibility, or empty string if decorative.',
      placeholder: 'e.g., Portrait of Jane Doe'
    },
    avatarPosition: { 
      control: 'radio', 
      options: ['left', 'right'],
      description: 'Horizontal position of avatar in row layout. Left places avatar before content, right places it after.'
    },
    avatarSize: { 
      control: 'radio', 
      options: ['sm', 'md', 'lg'],
      description: 'Size variant for the avatar. Small (40px), medium (64px), or large (133px).'
    },
    bordered: { 
      control: 'boolean',
      description: 'Adds a border and padding for card-like appearance. When true, component has visible border and internal spacing.'
    },
    headingLevel: { 
      control: 'number', 
      options: [2,3,4,5,6],
      description: 'Heading level used for the person\'s name. Controls the semantic HTML heading tag (h2-h6).'
    },
    children: {
      description: 'React node for custom content (e.g., action buttons)',
      control: { disable: true }
    },
    language: {
      control: 'select',
      options: ['en', 'es', 'vi', 'zh', 'ru', 'so', 'uk', 'ro', 'ne', 'chk', 'ja', 'ko', 'tl', 'lo', 'ar', 'km'],
      description: 'Language for the component. Affects accessibility attributes and internationalization.',
      defaultValue: 'en'
    }
  },
  tags: ['autodocs']
};

const phones = [
  { label: 'Office', value: '503-555-1234' },
];

export const Default = {
  args: {
    name: 'Jane Doe',
    title: 'Senior Policy Analyst',
    email: undefined,
    department: 'Bureau of Transportation',
    layout: 'row',
    imageAlign: 'top',
    headingLevel: 3,
    bordered: false,
    avatarAlt: 'Portrait of Jane Doe',
    avatarSize: 'md',
    avatarPosition: 'left',
    avatarUrl: avatarPlaceholder,
    phones: undefined,
    children: <Button onClick={action('View Profile button clicked')}>View Profile</Button>
  }
};

export const DefaultWithCenteredImage = {
  args: {
    ...Default.args,
    imageAlign: 'center'
  }
};

export const NoImageProvided = {
  args: {
    ...Default.args,
    avatarUrl: undefined,
    avatarAlt: ''
  }
};

export const VerticalLayout = {
  args: {
    ...Default.args,
    layout: 'column'
  }
};

export const VerticalCentered = {
  args: {
    ...Default.args,
    layout: 'column',
    imageAlign: 'center'
  }
};

export const Bordered = {
  args: {
    ...Default.args,
    bordered: true
  }
};

export const BorderedVertical = {
  args: {
    ...Default.args,
    bordered: true,
    layout: 'column'
  }
};

export const WithTagsAndMeta = {
  args: {
    ...Default.args,
    email: 'jane.doe@example.com',
    phones,
    meta: ['Speaks: English, Spanish'],
    tags: ['Fallback style', <Tag key="tag1" variant="default">Tag component</Tag>]
  }
};

// Language switching example
export const WithLanguageSwitching = {
  args: {
    ...Default.args,
    email: 'jane.doe@example.com',
    phones,
    meta: ['Speaks: English, Spanish'],
    tags: ['Fallback style', <Tag key="tag1" variant="default">Tag component</Tag>]
  },
  parameters: {
    controls: {
      include: ['language'],
    },
  },
};
