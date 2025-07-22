import { withThemeByClassName } from '@storybook/addon-themes';
import '../src/styles/index.scss'
import './storybook.css'

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

    themes: {
      default: 'pgov',
      list: [
        { name: 'PGOV Light', value: 'pgov', class: 'pgov-theme', color: '#2378c3' },
        { name: 'PGOV Dark', value: 'pgov-dark', class: 'pgov-theme pgov-dark-theme-applied', color: '#1b1b1b' },
        { name: 'USWDS Default', value: 'uswds-default', class: 'uswds-default-theme-applied', color: '#005ea2' },
        { name: 'Project Theme Light', value: 'project-light', class: 'project-theme-light-applied', color: '#4a77b4' },
        { name: 'Project Theme Dark', value: 'project-dark', class: 'project-theme-dark-applied', color: '#4a77b4' }
      ],
    },

    a11y: {
      // 'todo' - show a11y violations in the test UI only
      // 'error' - fail CI on a11y violations
      // 'off' - skip a11y checks entirely
      test: 'todo'
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
};

export default preview; 