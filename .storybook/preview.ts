import type { Preview } from '@storybook/react'
import { withThemeByClassName } from '@storybook/addon-themes';
import '../src/styles/index.scss'

const preview: Preview = {
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
        { name: 'pgov-dark', class: 'pgov-dark-theme-enabled', color: '#1b1b1b' },
        { name: 'light', class: 'light-theme', color: '#ffffff' },
        { name: 'dark', class: 'dark-theme', color: '#1b1b1b' },
      ],
    },
  },
  decorators: [
    withThemeByClassName({
      themes: {
        pgov: 'pgov-theme-enabled',
        'pgov-dark': 'pgov-dark-theme-enabled',
        light: 'light-theme',
        dark: 'dark-theme',
      },
      defaultTheme: 'pgov',
    }),
  ],
};

export default preview;