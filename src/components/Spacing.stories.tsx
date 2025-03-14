import type { Meta, StoryObj } from '@storybook/react';
import React from 'react';
import { 
  SpacingTokens,
  SpacingExamples
} from './Spacing';

// Create a dedicated component for the documentation
const SpacingDocumentation: React.FC = () => {
  return (
    <div>
      <h2>Spacing Tokens</h2>
      <p>The PGOV design system includes a comprehensive set of spacing tokens for consistent spacing throughout the UI.</p>
      
      <div style={{ marginTop: '40px' }}>
        <h3>Spacing Scale</h3>
        <p>A range of spacing values from smallest (3XS) to largest (3XL).</p>
        <SpacingTokens />
      </div>
      
      <div style={{ marginTop: '40px' }}>
        <h3>Usage Examples</h3>
        <p>Examples of how to use spacing tokens in your components.</p>
        <SpacingExamples />
      </div>
    </div>
  );
};

const meta = {
  title: 'Design Tokens/Spacing',
  component: SpacingDocumentation,
  parameters: {
    layout: 'padded',
    design: {
      type: 'figma',
      url: 'https://www.figma.com/design/tIoZZeEbUXEbSeYUuQ7Nnr/PGOV-Design-System-(USWDS)?node-id=351-581&m=dev',
    },
  },
} satisfies Meta<typeof SpacingDocumentation>;

export default meta;
type Story = StoryObj<typeof meta>;

// Main story for documentation
export const Docs: Story = {
  parameters: {
    docs: {
      description: {
        story: 'All spacing tokens from the PGOV design system.',
      },
    },
  },
};

// Individual spacing token stories - only visible in the sidebar
export const Tokens: Story = {
  render: () => <SpacingTokens />,
};

export const Examples: Story = {
  render: () => <SpacingExamples />,
}; 