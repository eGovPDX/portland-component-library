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
    layout: { control: 'radio', options: ['row', 'column'] },
    imageAlign: { control: 'radio', options: ['top', 'center'] },
    avatarUrl: { control: 'text', description: 'URL for the avatar image', defaultValue: '' },
    avatarAlt: { control: 'text', description: 'Alt text for the avatar image' },
    avatarPosition: { control: 'radio', options: ['left', 'right'] },
    avatarSize: { control: 'radio', options: ['sm', 'md', 'lg'] },
    bordered: { control: 'boolean' },
    headingLevel: { control: 'number', options: [2,3,4,5,6] },
    children: {
      description: 'React node for custom content (e.g., action buttons)',
      control: { disable: true }
    },
    language: {
      control: 'select',
      options: ['en', 'es', 'vi', 'zh', 'ru', 'so', 'uk', 'ro', 'ne', 'chk', 'ja', 'ko', 'tl', 'lo', 'ar', 'km'],
      description: 'Language for the component',
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
