import React from 'react';
import { Meta, StoryObj } from '@storybook/react';
import { SpacingDocumentation, SpacingValues, BorderRadiusValues, SpacingExamples } from './Spacing';

const meta: Meta = {
  title: 'Design Tokens/Spacing',
  component: SpacingDocumentation,
  parameters: {
    layout: 'fullscreen',
    docs: {
      description: {
        component: 'Spacing tokens for the PGOV design system. These tokens provide consistent spacing throughout the UI.',
      },
    },
  },
};

export default meta;
type Story = StoryObj<typeof SpacingDocumentation>;

export const Documentation: Story = {
  render: () => (
    <div style={{ padding: '20px' }}>
      <h1>Spacing Tokens</h1>
      <p>
        The PGOV design system includes a comprehensive set of spacing tokens for consistent spacing throughout the UI.
        <br />
        <a 
          href="https://www.figma.com/design/tIoZZeEbUXEbSeYUuQ7Nnr/PGOV-Design-System-(USWDS)?node-id=351-581&m=dev" 
          target="_blank" 
          rel="noopener noreferrer"
          style={{ display: 'inline-flex', alignItems: 'center', gap: '4px' }}
        >
          View in Figma
          <svg width="12" height="12" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M5 5V19H19V12H21V19C21 20.1 20.1 21 19 21H5C3.9 21 3 20.1 3 19V5C3 3.9 3.9 3 5 3H12V5H5Z" fill="currentColor"/>
            <path d="M14 5V3H21V10H19V6.41L9.41 16L8 14.59L17.59 5H14Z" fill="currentColor"/>
          </svg>
        </a>
      </p>

      <h2>Spacing Scale</h2>
      <p>The spacing scale provides a consistent set of values for margins, padding, and layout spacing.</p>
      <SpacingValues />

      <h2>Border Radius</h2>
      <p>Border radius tokens provide consistent corner rounding throughout the UI.</p>
      <BorderRadiusValues />

      <h2>Usage Examples</h2>
      <p>Examples of how spacing tokens are used in UI components.</p>
      <SpacingExamples />
    </div>
  ),
};

export const Spacings: Story = {
  render: () => <SpacingValues />,
};

export const BorderRadius: Story = {
  render: () => <BorderRadiusValues />,
};

export const Examples: Story = {
  render: () => <SpacingExamples />,
}; 