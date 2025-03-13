import type { Meta, StoryObj } from '@storybook/react';
import React from 'react';
import { 
  RedColors,
  OrangeColors,
  GoldColors,
  YellowColors,
  GreenColors,
  MintColors,
  CyanColors,
  BlueColors
} from './SimpleColorPalette';

// Create a dedicated component for the color documentation
const ColorsDocumentation: React.FC = () => {
  return (
    <div>
      <h2>PGOV Color System</h2>
      <p>The PGOV design system includes a comprehensive set of color palettes for use in the UI.</p>
      
      <h3>All Color Palettes</h3>
      <div style={{ marginBottom: '40px' }}>
        <h4>Red</h4>
        <RedColors />
      </div>
      
      <div style={{ marginBottom: '40px' }}>
        <h4>Orange</h4>
        <OrangeColors />
      </div>
      
      <div style={{ marginBottom: '40px' }}>
        <h4>Gold</h4>
        <GoldColors />
      </div>
      
      <div style={{ marginBottom: '40px' }}>
        <h4>Yellow</h4>
        <YellowColors />
      </div>
      
      <div style={{ marginBottom: '40px' }}>
        <h4>Green</h4>
        <GreenColors />
      </div>
      
      <div style={{ marginBottom: '40px' }}>
        <h4>Mint</h4>
        <MintColors />
      </div>
      
      <div style={{ marginBottom: '40px' }}>
        <h4>Cyan</h4>
        <CyanColors />
      </div>
      
      <div style={{ marginBottom: '40px' }}>
        <h4>Blue</h4>
        <BlueColors />
      </div>
    </div>
  );
};

const meta = {
  title: 'Design Tokens/Colors',
  component: ColorsDocumentation,
  parameters: {
    layout: 'padded',
    design: {
      type: 'figma',
      url: 'https://www.figma.com/design/tIoZZeEbUXEbSeYUuQ7Nnr/PGOV-Design-System-(USWDS)?node-id=346-2740&m=dev',
    },
  },
} satisfies Meta<typeof ColorsDocumentation>;

export default meta;
type Story = StoryObj<typeof meta>;

// Main story for documentation - renamed to Docs
export const Docs: Story = {
  name: 'Docs',
  parameters: {
    docs: {
      description: {
        story: 'All color palettes from the PGOV design system.',
      },
    },
  },
};

// Individual color stories - only visible in the sidebar
export const Red: Story = {
  render: () => <RedColors />,
};

export const Orange: Story = {
  render: () => <OrangeColors />,
};

export const Gold: Story = {
  render: () => <GoldColors />,
};

export const Yellow: Story = {
  render: () => <YellowColors />,
};

export const Green: Story = {
  render: () => <GreenColors />,
};

export const Mint: Story = {
  render: () => <MintColors />,
};

export const Cyan: Story = {
  render: () => <CyanColors />,
};

export const Blue: Story = {
  render: () => <BlueColors />,
}; 