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
    '@storybook/addon-essentials',
    '@storybook/addon-a11y',
    '@storybook/addon-viewport',
    '@storybook/addon-storysource',
    '@storybook/addon-themes',
    '@chromatic-com/storybook',
    '@storybook/experimental-addon-test',
    '@whitespace/storybook-addon-html',
    '@storybook/addon-designs',
  ],
  docs: { autodocs: true },
};
