import React from 'react';
import ColorSwatch, { 
  RedColorSwatches,
  OrangeColorSwatches,
  GoldColorSwatches,
  YellowColorSwatches,
  GreenColorSwatches,
  MintColorSwatches,
  CyanColorSwatches,
  BlueColorSwatches
} from './ColorSwatch';
import '../../styles/index.scss';

// Create a dedicated component for the documentation
const ColorDocumentation = () => {
  return (
    <div style={{ padding: '20px' }}>
      <h2>Color Tokens</h2>
      <p>The PGOV design system includes a comprehensive set of color tokens for consistent branding and UI elements.</p>
      
      <div style={{ marginTop: '40px' }}>
        <RedColorSwatches />
      </div>
      
      <div style={{ marginTop: '40px' }}>
        <OrangeColorSwatches />
      </div>
      
      <div style={{ marginTop: '40px' }}>
        <GoldColorSwatches />
      </div>
      
      <div style={{ marginTop: '40px' }}>
        <YellowColorSwatches />
      </div>
      
      <div style={{ marginTop: '40px' }}>
        <GreenColorSwatches />
      </div>
      
      <div style={{ marginTop: '40px' }}>
        <MintColorSwatches />
      </div>
      
      <div style={{ marginTop: '40px' }}>
        <CyanColorSwatches />
      </div>
      
      <div style={{ marginTop: '40px' }}>
        <BlueColorSwatches />
      </div>
    </div>
  );
};

const meta = {
  title: 'Design Tokens/Colors',
  component: ColorDocumentation,
  parameters: {
    layout: 'padded',
    design: {
      type: 'figma',
      url: 'https://www.figma.com/design/tIoZZeEbUXEbSeYUuQ7Nnr/PGOV-Design-System-(USWDS)?node-id=116-87&m=dev',
    },
  },
};

export default meta;

// Main story for the color documentation
export const ColorTokens = {
  render: () => <ColorDocumentation />,
  parameters: {
    docs: {
      description: {
        story: 'All color tokens from the PGOV design system.',
      },
    },
  },
};

// Individual color group stories
export const RedColors = {
  render: () => <RedColorSwatches />,
};

export const OrangeColors = {
  render: () => <OrangeColorSwatches />,
};

export const GoldColors = {
  render: () => <GoldColorSwatches />,
};

export const YellowColors = {
  render: () => <YellowColorSwatches />,
};

export const GreenColors = {
  render: () => <GreenColorSwatches />,
};

export const MintColors = {
  render: () => <MintColorSwatches />,
};

export const CyanColors = {
  render: () => <CyanColorSwatches />,
};

export const BlueColors = {
  render: () => <BlueColorSwatches />,
}; 