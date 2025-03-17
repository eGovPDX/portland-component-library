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
    "@storybook/experimental-addon-test",
    "@storybook/addon-mdx-gfm"
  ],

  "framework": {
    "name": "@storybook/react-vite",
    "options": {}
  },

  "docs": {},

  typescript: {
    reactDocgen: "react-docgen-typescript"
  }
};
export default config; 