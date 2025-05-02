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
    }
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
  }
};

// Default card
export const Default = {
  args: {
    heading: 'Card',
    text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Facilis earum tenetur quo cupiditate, eaque qui officia recusandae.',
    actionButton: <Button>Visit Florida Keys</Button>,
    onClick: () => {
      action('Card button clicked')();
      window.location.href = '#'; // In a real app, this would navigate
    }
  }
};

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