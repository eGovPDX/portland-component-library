import React from 'react';
import { Button } from './Button';
import { faArrowRight, faDownload } from '@fortawesome/free-solid-svg-icons';

export default {
  title: 'Components/Button',
  component: Button,
  parameters: {
    docs: {
      description: {
        component: 'A button draws attention to important actions with a large selectable surface.'
      }
    }
  },
  argTypes: {
    variant: {
      control: 'select',
      options: ['default', 'secondary', 'accent-cool', 'accent-warm', 'base', 'outline', 'outline-inverse'],
      description: 'The visual style of the button'
    },
    size: {
      control: 'select',
      options: ['default', 'big'],
      description: 'The size of the button'
    },
    disabled: {
      control: 'boolean',
      description: 'Whether the button is disabled'
    },
    ariaDisabled: {
      control: 'boolean',
      description: 'Whether the button is aria-disabled'
    },
    unstyled: {
      control: 'boolean',
      description: 'Whether the button should be unstyled'
    },
    startIcon: {
      control: 'object',
      description: 'FontAwesome icon to display before the button text'
    },
    endIcon: {
      control: 'object',
      description: 'FontAwesome icon to display after the button text'
    }
  }
};

// Default button
export const Default = {
  args: {
    children: 'Default Button'
  }
};

// Secondary button
export const Secondary = {
  args: {
    children: 'Secondary Button',
    variant: 'secondary'
  }
};

// Accent cool button
export const AccentCool = {
  args: {
    children: 'Accent Cool Button',
    variant: 'accent-cool'
  }
};

// Accent warm button
export const AccentWarm = {
  args: {
    children: 'Accent Warm Button',
    variant: 'accent-warm'
  }
};

// Base button
export const Base = {
  args: {
    children: 'Base Button',
    variant: 'base'
  }
};

// Outline button
export const Outline = {
  args: {
    children: 'Outline Button',
    variant: 'outline'
  }
};

// Outline inverse button (displayed on dark background)
export const OutlineInverse = {
  args: {
    children: 'Outline Inverse Button',
    variant: 'outline-inverse'
  },
  parameters: {
    backgrounds: { default: 'dark' }
  }
};

// Big button
export const Big = {
  args: {
    children: 'Big Button',
    size: 'big'
  }
};

// Disabled button
export const Disabled = {
  args: {
    children: 'Disabled Button',
    disabled: true
  }
};

// Unstyled button
export const Unstyled = {
  args: {
    children: 'Unstyled Button',
    unstyled: true
  }
};

// Button with start icon
export const WithStartIcon = {
  args: {
    children: 'Download',
    startIcon: faDownload
  }
};

// Button with end icon
export const WithEndIcon = {
  args: {
    children: 'Continue',
    endIcon: faArrowRight
  }
}; 