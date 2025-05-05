import React from 'react';
import { Card } from './Card';
import { Button } from '../Button';
import { action } from '@storybook/addon-actions';

export default {
  title: 'Components/Card',
  component: Card,
  parameters: {
    docs: {
      description: {
        component: 'Cards contain content and actions about a single subject.'
      }
    },
    layout: 'centered',
  },
  argTypes: {
    heading: {
      control: 'text',
      description: 'The heading text of the card'
    },
    text: {
      control: 'text',
      description: 'The body text of the card'
    },
    actionButton: {
      description: 'React node for the action button/link (without onClick handler)',
      control: { disable: true }
    },
    onClick: {
      description: 'Click handler for the action button',
      action: 'clicked'
    }
  },
  tags: ['autodocs'],
};

// Default card
export const Default = () => (
  <Card heading="Card Title" text="This is a simple card." />
);

// Card with primary button
export const WithPrimaryButton = {
  args: {
    heading: 'Card with Primary Button',
    text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Facilis earum tenetur quo cupiditate, eaque qui officia recusandae.',
    actionButton: <Button variant="default">Visit Florida Keys</Button>,
    onClick: action('Primary button clicked')
  }
};

// Card with secondary button
export const WithSecondaryButton = {
  args: {
    heading: 'Card with Secondary Button',
    text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Facilis earum tenetur quo cupiditate, eaque qui officia recusandae.',
    actionButton: <Button variant="secondary">Visit Florida Keys</Button>,
    onClick: action('Secondary button clicked')
  }
};

// Card with outline button
export const WithOutlineButton = {
  args: {
    heading: 'Card with Outline Button',
    text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Facilis earum tenetur quo cupiditate, eaque qui officia recusandae.',
    actionButton: <Button variant="outline">Visit Florida Keys</Button>,
    onClick: action('Outline button clicked')
  }
};

export const WithChildren = () => (
  <Card heading="Card with Children">
    <ul>
      <li>Custom content 1</li>
      <li>Custom content 2</li>
    </ul>
  </Card>
);

export const WithActionButton = () => (
  <Card
    heading="Card with Action"
    text="This card has an action button."
    actionButton={<button>Click Me</button>}
  />
);

export const WithEverything = () => (
  <Card
    heading="Full Card"
    text="This card has heading, text, children, and an action button."
    actionButton={<button>Do Something</button>}
  >
    <div>
      <strong>Extra content:</strong> You can put anything here!
    </div>
  </Card>
); 