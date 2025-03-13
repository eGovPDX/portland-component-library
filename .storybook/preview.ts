import type { Preview } from '@storybook/react'
import { withThemeByClassName } from '@storybook/addon-themes';
import '../src/styles/index.scss'

const preview: Preview = {
  parameters: {
    actions: { argTypesRegex: '^on[A-Z].*' },
    controls: {
      matchers: {
       color: /(background|color)$/i,
       date: /Date$/i,
      },
    },
    themes: {
      default: 'light',
      list: [
        { name: 'light', class: 'light-theme', color: '#ffffff' },
        { name: 'dark', class: 'dark-theme', color: '#1b1b1b' },
      ],
    },
  },
  decorators: [
    withThemeByClassName({
      themes: {
        light: 'light-theme',
        dark: 'dark-theme',
      },
      defaultTheme: 'light',
    }),
  ],
};

export default preview;