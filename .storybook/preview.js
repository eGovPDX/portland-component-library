import { withThemeByClassName } from '@storybook/addon-themes';
import '../src/styles/index.scss';
import './storybook.css';

const preview = {
  parameters: {
    layout: 'centered',

    controls: {
      expanded: true,
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i,
      },
    },

    options: {
      storySort: {
        order: [
          'Introduction',
          'Using the Design System',
          'Foundations',
          'Components',
          'Patterns',
          'Guidelines',
          'Templates',
          'Design Tokens',
        ],
      },
    },

    themes: {
      default: 'pgov',
      list: [
        { name: 'PGOV Light', value: 'pgov', class: 'pgov-theme', color: '#2378c3' },
        { name: 'PGOV Dark', value: 'pgov-dark', class: 'pgov-theme pgov-dark-theme-applied', color: '#1b1b1b' },
        { name: 'USWDS Default', value: 'uswds-default', class: 'uswds-default-theme-applied', color: '#005ea2' },
      ],
    },

    a11y: {
      test: 'todo',
    },

    docs: {
      codePanel: true
    }
  },

  decorators: [
    withThemeByClassName({
      themes: {
        pgov: 'pgov-theme',
        'pgov-dark': 'pgov-theme pgov-dark-theme-applied',
        'uswds-default': 'uswds-default-theme-applied',
      },
      defaultTheme: 'pgov',
    }),
  ],

  tags: ['autodocs']
};

export default preview;
