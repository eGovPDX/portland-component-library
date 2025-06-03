import React from 'react';
import { Tooltip } from './Tooltip';
import { Button } from '../Button';

export default {
  title: 'Components/Tooltip',
  component: Tooltip,
  parameters: {
    docs: {
      description: {
        component: 'A tooltip is a short descriptive message that appears when a user hovers or focuses on an element.'
      }
    }
  },
  argTypes: {
    content: {
      control: 'text',
      description: 'The content to display in the tooltip'
    },
    position: {
      control: 'select',
      options: ['top', 'right', 'bottom', 'left'],
      description: 'The position of the tooltip relative to its trigger'
    },
    theme: {
      control: 'select',
      options: ['light', 'dark'],
      description: 'The visual theme of the tooltip'
    },
    showArrow: {
      control: 'boolean',
      description: 'Whether to show the arrow pointer'
    },
    isPopup: {
      control: 'boolean',
      description: 'If true, functions as a popup that can contain complex elements'
    },
    isCardPopup: {
      control: 'boolean',
      description: 'If true, creates a transparent popup designed for Card components'
    },
    triggerOnClick: {
      control: 'boolean',
      description: 'If true, the tooltip will open on click instead of hover'
    }
  }
};

// Standard tooltip
export const Default = {
  args: {
    content: '{text}',
    children: <Button>Hover me</Button>,
    position: 'top',
    theme: 'dark',
    showArrow: true,
    isPopup: false
  }
};

// Positions demonstration
export const Positions = () => (
  <div style={{ padding: '5rem', display: 'flex', gap: '2rem', flexWrap: 'wrap' }}>
    <Tooltip content="Top tooltip" position="top">
      <Button>Top</Button>
    </Tooltip>
    <Tooltip content="Right tooltip" position="right">
      <Button>Right</Button>
    </Tooltip>
    <Tooltip content="Bottom tooltip" position="bottom">
      <Button>Bottom</Button>
    </Tooltip>
    <Tooltip content="Left tooltip" position="left">
      <Button>Left</Button>
    </Tooltip>
  </div>
);

// Theme variations
export const Themes = () => (
  <div style={{ padding: '2rem', display: 'flex', gap: '2rem' }}>
    <Tooltip content="Light theme tooltip" theme="dark">
      <Button>Light Theme</Button>
    </Tooltip>
    <div style={{ padding: '1rem', background: '#1b1b1b' }}>
      <Tooltip content="Dark theme tooltip" theme="light">
        <Button variant="outline-inverse">Dark Theme</Button>
      </Tooltip>
    </div>
  </div>
);

// Long content example
export const LongContent = {
  args: {
    content: 'This is a longer tooltip that demonstrates how the component handles multiple lines of text and wrapping behavior.',
    children: <Button>Hover for Long Content</Button>
  }
};

// Custom element example
export const CustomElement = {
  args: {
    content: 'Tooltips can be added to any element',
    children: (
      <span style={{ 
        textDecoration: 'underline', 
        cursor: 'help',
        color: '#005ea2'
      }}>
        Hover this text
      </span>
    )
  }
}; 
