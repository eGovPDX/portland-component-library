import React from 'react';
import { 
  TypographyDisplay,
  FontFamilies,
  FontSizes,
  FontWeights,
  LineHeights,
  LetterSpacings
} from './Typography';

// Create a dedicated component for the documentation
const TypographyDocumentation = () => {
  return (
    <div>
      <h2>Typography Tokens</h2>
      <p>The PGOV design system includes a comprehensive set of typography tokens for use in the UI.</p>
      
      <div style={{ marginTop: '40px' }}>
        <h3>Font Families</h3>
        <p>These font families are used throughout the PGOV design system.</p>
        <FontFamilies />
      </div>
      
      <div style={{ marginTop: '40px' }}>
        <h3>Font Sizes</h3>
        <p>A range of font sizes from smallest (3XS) to largest (3XL).</p>
        <FontSizes />
      </div>
      
      <div style={{ marginTop: '40px' }}>
        <h3>Font Weights</h3>
        <p>Font weights from light to bold.</p>
        <FontWeights />
      </div>
      
      <div style={{ marginTop: '40px' }}>
        <h3>Line Heights</h3>
        <p>Line height options for different text densities.</p>
        <LineHeights />
      </div>
      
      <div style={{ marginTop: '40px' }}>
        <h3>Letter Spacing</h3>
        <p>Letter spacing options for different text styles.</p>
        <LetterSpacings />
      </div>
    </div>
  );
};

const meta = {
  title: 'Design Tokens/Typography',
  component: TypographyDocumentation,
  parameters: {
    layout: 'padded',
    design: {
      type: 'figma',
      url: 'https://www.figma.com/design/tIoZZeEbUXEbSeYUuQ7Nnr/PGOV-Design-System-(USWDS)?node-id=115-2&m=dev',
    },
  },
};

export default meta;

// Main story for documentation - shows all typography tokens
export const Docs = {
  parameters: {
    docs: {
      description: {
        story: 'All typography tokens from the PGOV design system.',
      },
    },
  },
};

// Individual typography token stories - only visible in the sidebar
export const Families = {
  render: () => <FontFamilies />,
};

export const Sizes = {
  render: () => <FontSizes />,
};

export const Weights = {
  render: () => <FontWeights />,
};

export const LineHeightOptions = {
  render: () => <LineHeights />,
};

export const LetterSpacingOptions = {
  render: () => <LetterSpacings />,
}; 