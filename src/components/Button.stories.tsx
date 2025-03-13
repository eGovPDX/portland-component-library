import type { Meta, StoryObj } from '@storybook/react';
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
} satisfies Meta<typeof Button>;

export default meta;
type Story = StoryObj<typeof meta>;

// Base stories
export const Primary: Story = {
  args: {
    variant: 'primary',
    children: 'Primary Button',
  },
};

export const Secondary: Story = {
  args: {
    variant: 'secondary',
    children: 'Secondary Button',
  },
};

export const Tertiary: Story = {
  args: {
    variant: 'tertiary',
    children: 'Tertiary Button',
  },
};

export const Small: Story = {
  args: {
    size: 'small',
    children: 'Small Button',
  },
};

export const Large: Story = {
  args: {
    size: 'large',
    children: 'Large Button',
  },
};

export const Disabled: Story = {
  args: {
    disabled: true,
    children: 'Disabled Button',
  },
};

// Theme stories
export const PGOVTheme: Story = {
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

export const PGOVDarkTheme: Story = {
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