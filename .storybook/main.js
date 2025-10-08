export default {
  framework: {
    name: '@storybook/react-vite',
    options: {},
  },

  stories: [
    '../src/**/*.stories.@(js|jsx|ts|tsx)',
    '../src/**/*.docs.mdx',
    '../src/docs/**/*.mdx',
  ],

  addons: [
    '@storybook/addon-a11y',
    '@storybook/addon-themes',
    '@chromatic-com/storybook',
    '@storybook/addon-vitest',
    '@whitespace/storybook-addon-html',
    '@storybook/addon-designs',
    '@storybook/addon-docs'
  ]
};
