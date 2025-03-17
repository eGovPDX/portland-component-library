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
        { name: 'pgov', class: 'pgov-theme-enabled', color: '#0050d8' },
        { name: 'light', class: 'light-theme', color: '#ffffff' },
        { name: 'dark', class: 'dark-theme', color: '#1b1b1b' },
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
        light: 'light-theme',
        dark: 'dark-theme',
      },
      defaultTheme: 'pgov',
    }),
  ],
};

export default preview; 