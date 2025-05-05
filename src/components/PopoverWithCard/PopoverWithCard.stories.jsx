import React from 'react';
import { PopoverWithCard } from './PopoverWithCard';
import { Button } from '../Button';

export default {
  title: 'Components/PopoverWithCard',
  component: PopoverWithCard,
  parameters: {
    layout: 'centered',
    docs: {
      description: {
        component:
          '**Why not use Tooltip for Cards?**\n\n' +
          'While the Tooltip component is technically capable of rendering any React node—including a Card or other complex content—this is not recommended for the following reasons:\n\n' +
          '- **Tooltip is designed for simple, non-interactive hints.** Its default styles (small font, tight padding, dark background, pointer-events: none) are not suitable for rich, interactive content like Cards.\n' +
          '- **Styling is difficult to override.** You would need to remove max-width, increase padding, change background, and set pointer-events: auto, which can lead to inconsistent UI and maintenance headaches.\n' +
          '- **Interactivity is limited.** Tooltips are not intended for interactive elements like buttons or links, and may close unexpectedly when users try to interact with content inside.\n' +
          '- **PopoverWithCard is purpose-built.** It is styled for larger, interactive, and more complex content, supports Cards, drop shadows, and pointer events, and is more accessible for rich content.\n\n' +
          '**Accessibility Guidance:**\n\n' +
          '- **PopoverWithCard** uses:\n' +
          '    role="dialog"\n' +
          '    aria-labelledby="popover-title"\n' +
          '  to create a dialog that is keyboard accessible, manages focus (focus moves into the popover when opened and returns to the trigger when closed), and is dismissible with the Escape key or by clicking outside. It is suitable for interactive content (buttons, links, forms, etc.).\n' +
          '- **Tooltip** is for non-interactive hints only, uses:\n' +
          '    role="tooltip"\n' +
          '    aria-describedby="tooltip-content"\n' +
          '  and should not contain focusable or interactive elements.\n\n' +
          '**Best Practice:** Use Tooltip for simple, non-interactive hints, and PopoverWithCard for complex, interactive, or Card-based content. This keeps your codebase clean, your UX clear, and your styles easy to maintain.'
      },
    },
  },
  tags: ['autodocs'],
};

const Template = (args) => <PopoverWithCard {...args} />;

export const Default = Template.bind({});
Default.args = {
  children: <a href="#">Hover me</a>,
  cardProps: {
    heading: 'Popover Title',
    text: 'This is a popover with a card.',
  },
  position: 'top',
};

export const WithComplexContent = Template.bind({});
WithComplexContent.args = {
  children: <a href="#">Hover me</a>,
  cardProps: {
    heading: 'Complex Content',
    text: 'This popover contains multiple elements and formatting.',
    children: (
      <ul style={{ margin: '0.5rem 0 0 0', paddingLeft: '1.5rem' }}>
        <li>List item 1</li>
        <li>List item 2</li>
      </ul>
    ),
    actionButton: <Button variant="primary">Action Button</Button>,
  },
  position: 'top',
};

export const WithCustomClass = Template.bind({});
WithCustomClass.args = {
  children: <a href="#">Hover me</a>,
  cardProps: {
    heading: 'Custom Class',
    text: 'This popover has a custom class',
  },
  className: 'custom-popover',
  position: 'bottom',
}; 