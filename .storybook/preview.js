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