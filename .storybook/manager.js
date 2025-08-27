import { addons } from '@storybook/manager-api';
import { create } from '@storybook/theming/create';

// Create a custom theme for the addon panel
const theme = create({
  base: 'light',
  brandTitle: 'Portland Component Library',
  brandUrl: 'https://portland.gov',
  brandImage: undefined,
  brandTarget: '_self',
});

// Configure the addon panel
addons.setConfig({
  theme,
  panelPosition: 'right',
  showRoots: true,
  collapsedRoots: ['components', 'templates', 'internationalization']
});
