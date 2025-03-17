import React from 'react';
import { 
  ColorSwatch,
  RedColorSwatches,
  OrangeColorSwatches,
  GoldColorSwatches,
  YellowColorSwatches,
  GreenColorSwatches,
  MintColorSwatches,
  CyanColorSwatches,
  BlueColorSwatches
} from './ColorSwatch';

// Create a dedicated component for the documentation
const ColorDocumentation = () => {
  return (
    <div style={{ padding: '20px' }}>
      <h2>Color Tokens</h2>
      <p>The PGOV design system includes a comprehensive set of color tokens for consistent branding and UI elements.</p>
      
      <div style={{ marginTop: '40px' }}>
        <h3>Red Colors</h3>
        <p>A range of red colors from lightest to darkest.</p>
        <RedColorSwatches />
      </div>
      
      <div style={{ marginTop: '40px' }}>
        <h3>Orange Colors</h3>
        <p>A range of orange colors from lightest to darkest.</p>
        <OrangeColorSwatches />
      </div>
      
      <div style={{ marginTop: '40px' }}>
        <h3>Gold Colors</h3>
        <p>A range of gold colors from lightest to darkest.</p>
        <GoldColorSwatches />
      </div>
      
      <div style={{ marginTop: '40px' }}>
        <h3>Yellow Colors</h3>
        <p>A range of yellow colors from lightest to darkest.</p>
        <YellowColorSwatches />
      </div>
      
      <div style={{ marginTop: '40px' }}>
        <h3>Green Colors</h3>
        <p>A range of green colors from lightest to darkest.</p>
        <GreenColorSwatches />
      </div>
      
      <div style={{ marginTop: '40px' }}>
        <h3>Mint Colors</h3>
        <p>A range of mint colors from lightest to darkest.</p>
        <MintColorSwatches />
      </div>
      
      <div style={{ marginTop: '40px' }}>
        <h3>Cyan Colors</h3>
        <p>A range of cyan colors from lightest to darkest.</p>
        <CyanColorSwatches />
      </div>
      
      <div style={{ marginTop: '40px' }}>
        <h3>Blue Colors</h3>
        <p>A range of blue colors from lightest to darkest.</p>
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
      url: 'https://www.figma.com/design/tIoZZeEbUXEbSeYUuQ7Nnr/PGOV-Design-System-(USWDS)?node-id=115-2&m=dev',
    },
  },
};

export default meta;

// Main story for documentation
export const Docs = {
  parameters: {
    docs: {
      description: {
        story: 'All color tokens from the PGOV design system.',
      },
    },
  },
};

// Individual color token stories - only visible in the sidebar
export const Red = {
  render: () => <RedColorSwatches />,
};

export const Orange = {
  render: () => <OrangeColorSwatches />,
};

export const Gold = {
  render: () => <GoldColorSwatches />,
};

export const Yellow = {
  render: () => <YellowColorSwatches />,
};

export const Green = {
  render: () => <GreenColorSwatches />,
};

export const Mint = {
  render: () => <MintColorSwatches />,
};

export const Cyan = {
  render: () => <CyanColorSwatches />,
};

export const Blue = {
  render: () => <BlueColorSwatches />,
}; 