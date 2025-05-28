import { withThemeByClassName } from '@storybook/addon-themes';
import '../src/styles/index.scss'

const preview = {
  parameters: {
    controls: {
      matchers: {
       color: /(background|color)$/i,
       date: /Date$/i,
      },
    },

    themes: {
      default: 'pgov',
      list: [
        { name: 'PGOV Light', class: 'pgov-theme-enabled', color: '#0050d8' },
        { name: 'PGOV Dark', class: 'pgov-dark-theme-enabled', color: '#1b1b1b' },
        { name: 'USWDS Default', class: 'uswds-default-theme-applied', color: '#005ea2' }
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
        pgov: 'pgov-theme-enabled',
        'pgov-dark': 'pgov-dark-theme-enabled',
        'uswds-default': 'uswds-default-theme-applied',
      },
      defaultTheme: 'pgov',
    }),
  ],
};

export default preview; 