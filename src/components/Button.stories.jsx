import React from 'react';
import { Button } from './Button';
import '../styles/index.scss';

const meta = {
  title: 'Components/Button',
  component: Button,
  parameters: {
    layout: 'centered',
    design: {
      type: 'figma',
      url: 'https://www.figma.com/design/tIoZZeEbUXEbSeYUuQ7Nnr/PGOV-Design-System-(USWDS)?node-id=165-2532&t=xJOdl0Cp5dzE6Zt7-1',
    },
  },
  tags: ['autodocs'],
  argTypes: {
    variant: {
      control: { type: 'select' },
      options: ['primary', 'secondary', 'tertiary'],
      description: 'The visual style of the button',
    },
    size: {
      control: { type: 'select' },
      options: ['small', 'medium', 'large'],
      description: 'The size of the button',
    },
    disabled: {
      control: 'boolean',
      description: 'Whether the button is disabled',
    },
    children: {
      control: 'text',
      description: 'The content of the button',
    },
    onClick: {
      action: 'clicked',
      description: 'Function called when the button is clicked',
    },
    className: {
      control: 'text',
      description: 'Additional CSS class names to apply',
    },
  },
};

export default meta;

// Base stories
export const Primary = {
  args: {
    variant: 'primary',
    children: 'Primary Button',
  },
};

export const Secondary = {
  args: {
    variant: 'secondary',
    children: 'Secondary Button',
  },
};

export const Tertiary = {
  args: {
    variant: 'tertiary',
    children: 'Tertiary Button',
  },
};

export const Small = {
  args: {
    size: 'small',
    children: 'Small Button',
  },
};

export const Large = {
  args: {
    size: 'large',
    children: 'Large Button',
  },
};

export const Disabled = {
  args: {
    disabled: true,
    children: 'Disabled Button',
  },
};

// Theme stories
export const PGOVTheme = {
  args: {
    children: 'PGOV Theme Button',
  },
  decorators: [
    (Story) => (
      <div className="pgov-theme-enabled" style={{ padding: '2rem' }}>
        <Story />
      </div>
    ),
  ],
};

export const PGOVDarkTheme = {
  args: {
    children: 'PGOV Dark Theme Button',
  },
  decorators: [
    (Story) => (
      <div className="pgov-dark-theme-enabled" style={{ padding: '2rem' }}>
        <Story />
      </div>
    ),
  ],
}; 