import React from 'react';
import { Tooltip } from './Tooltip';
import { useTooltip } from './useTooltip';
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
    }
  }
};

// Wrapper component usage
export const Default = {
  args: {
    content: 'This is a tooltip',
    children: <Button>Hover me</Button>
  }
};

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

export const Themes = () => (
  <div style={{ padding: '2rem', display: 'flex', gap: '2rem' }}>
    <Tooltip content="Light theme tooltip" theme="light">
      <Button>Light Theme</Button>
    </Tooltip>
    <div style={{ padding: '1rem', background: 'var(--pgov-color-neutral-darkest)' }}>
      <Tooltip content="Dark theme tooltip" theme="dark">
        <Button variant="outline-inverse">Dark Theme</Button>
      </Tooltip>
    </div>
  </div>
);

// Hook usage example
const HookExample = () => {
  const tooltip = useTooltip({
    content: 'This tooltip uses the hook directly',
    position: 'top'
  });

  return (
    <div style={{ padding: '2rem' }}>
      <Button {...tooltip.triggerProps}>
        Hook Usage
      </Button>
      <div {...tooltip.tooltipProps}>
        <div className="usa-tooltip__content">
          {tooltip.content}
        </div>
        {tooltip.isVisible && (
          <div className="usa-tooltip__arrow" data-popper-arrow />
        )}
      </div>
    </div>
  );
};

export const UsingHook = {
  render: () => <HookExample />
};

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
        color: 'var(--pgov-color-primary)'
      }}>
        Hover this text
      </span>
    )
  }
}; 