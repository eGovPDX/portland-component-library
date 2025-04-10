import React from 'react';
import { 
  Typography,
  FontFamilies,
  FontSizes,
  FontWeights,
  LineHeights,
  LetterSpacings
} from './Typography';
import '../../styles/index.scss';

const meta = {
  title: 'Design Tokens/Typography',
  component: Typography,
  parameters: {
    layout: 'padded',
    design: {
      type: 'figma',
      url: 'https://www.figma.com/design/tIoZZeEbUXEbSeYUuQ7Nnr/PGOV-Design-System-(USWDS)?node-id=115-2&m=dev',
    },
  },
  argTypes: {
    showFontFamilies: {
      control: 'boolean',
      description: 'Show font families section',
    },
    showFontSizes: {
      control: 'boolean',
      description: 'Show font sizes section',
    },
    showFontWeights: {
      control: 'boolean',
      description: 'Show font weights section',
    },
    showLineHeights: {
      control: 'boolean',
      description: 'Show line heights section',
    },
    showLetterSpacings: {
      control: 'boolean',
      description: 'Show letter spacing section',
    }
  }
};

export default meta;

// Main story for documentation - shows all typography tokens
export const AllTypography = {
  args: {
    showFontFamilies: true,
    showFontSizes: true,
    showFontWeights: true,
    showLineHeights: true,
    showLetterSpacings: true
  },
  parameters: {
    docs: {
      description: {
        story: 'All typography tokens from the PGOV design system.',
      },
    },
  },
};

// Individual typography token stories
export const Families = {
  render: () => <FontFamilies />,
  parameters: {
    docs: {
      description: {
        story: 'Font families used in the design system.',
      },
    },
  },
};

export const Sizes = {
  render: () => <FontSizes />,
  parameters: {
    docs: {
      description: {
        story: 'Font sizes ranging from 3XS to 10XL.',
      },
    },
  },
};

export const Weights = {
  render: () => <FontWeights />,
  parameters: {
    docs: {
      description: {
        story: 'Font weights from thin to black.',
      },
    },
  },
};

export const LineHeightOptions = {
  render: () => <LineHeights />,
  parameters: {
    docs: {
      description: {
        story: 'Line height options for different text densities.',
      },
    },
  },
};

export const LetterSpacingOptions = {
  render: () => <LetterSpacings />,
  parameters: {
    docs: {
      description: {
        story: 'Letter spacing options from tight to wide.',
      },
    },
  },
}; 