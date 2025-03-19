const config = {
  "stories": [
    "../src/components/**/*.mdx",
    "../src/components/**/*.stories.@(js|jsx|mjs|ts|tsx)"
  ],

  "addons": [
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
    "@storybook/experimental-addon-test"
  ],

  "framework": {
    "name": "@storybook/react-vite",
    "options": {}
  },

  "docs": {
    "autodocs": true
  },

  typescript: {
    reactDocgen: "react-docgen-typescript"
  },

  viteFinal: (config) => {
    if (!config.optimizeDeps) {
      config.optimizeDeps = {};
    }
    if (!config.optimizeDeps.exclude) {
      config.optimizeDeps.exclude = [];
    }
    config.optimizeDeps.exclude.push('@storybook/docs-mdx/dist/DocsRenderer');
    return config;
  }
};
export default config; 
