import React from 'react';
import { Meta, StoryObj } from '@storybook/react';
import { SkipNav } from './SkipNav';

const meta: Meta<typeof SkipNav> = {
  title: 'Components/SkipNav',
  component: SkipNav,
  parameters: {
    docs: {
      description: {
        component: 'SkipNav component for accessibility. This component provides a way for keyboard users to skip to the main content of a page.',
      },
    },
  },
  tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof SkipNav>;

// Default SkipNav
export const Default: Story = {
  args: {
    skipToId: 'main-content',
    label: 'Skip to main content',
  },
  parameters: {
    docs: {
      description: {
        story: 'The default SkipNav component. Tab to it to see it appear at the top of the viewport.',
      },
    },
  },
  decorators: [
    (Story) => (
      <div>
        <Story />
        <div style={{ marginTop: '20px' }}>
          <p>Tab to see the skip link appear at the top of the viewport.</p>
          <div id="main-content" style={{ marginTop: '20px', padding: '20px', border: '1px solid #ddd' }}>
            <h2>Main Content</h2>
            <p>This is the main content area that the skip link targets.</p>
          </div>
        </div>
      </div>
    ),
  ],
};

// Custom Label
export const CustomLabel: Story = {
  args: {
    skipToId: 'main-content',
    label: 'Skip to content',
  },
  decorators: [
    (Story) => (
      <div>
        <Story />
        <div style={{ marginTop: '20px' }}>
          <p>Tab to see the skip link with custom label appear at the top of the viewport.</p>
          <div id="main-content" style={{ marginTop: '20px', padding: '20px', border: '1px solid #ddd' }}>
            <h2>Main Content</h2>
            <p>This is the main content area that the skip link targets.</p>
          </div>
        </div>
      </div>
    ),
  ],
}; 