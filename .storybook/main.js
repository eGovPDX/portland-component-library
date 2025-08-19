const config = {
  stories: [
    "../src/components/**/*.mdx",
    "../src/components/**/*.stories.@(js|jsx|mjs|ts|tsx)"
  ],

  addons: [
    "@storybook/addon-essentials",
    "@chromatic-com/storybook",
    "@storybook/addon-a11y",
    "@storybook/addon-designs",
    "@storybook/addon-actions",
    "@storybook/addon-storysource",
    "@storybook/addon-controls",
    "@storybook/addon-docs",
    "@storybook/addon-viewport",
    "@storybook/addon-themes",
    "@storybook/experimental-addon-test",
    "@whitespace/storybook-addon-html"
    // Temporarily removed: "storybook-react-i18next"
  ],

  framework: {
    name: "@storybook/react-vite",
    options: {}
  },

  docs: {
    autodocs: true
  },

  // Specify the preview file
  preview: "./.storybook/preview.jsx"
};

export default config; 
