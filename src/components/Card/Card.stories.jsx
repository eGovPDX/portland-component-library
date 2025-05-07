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
        component: `
Cards contain content and actions about a single subject. They act as an entry point to more detailed information.

## Usage
\`\`\`jsx
import { Card } from '@portland/component-library';

// Default card
<Card heading="Title" text="Content" />

// Card with media
<Card 
  heading="Title" 
  text="Content" 
  media="/path/to/image.jpg" 
/>

// Media with header first
<Card 
  heading="Title" 
  text="Content" 
  media="/path/to/image.jpg"
  mediaFirst={true}
/>

// Inset media
<Card 
  heading="Title" 
  text="Content" 
  media="/path/to/image.jpg"
  mediaInset={true}
/>

// Exdent media
<Card 
  heading="Title" 
  text="Content" 
  media="/path/to/image.jpg"
  mediaExdent={true}
/>
\`\`\`
        `
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
    },
    media: {
      description: 'URL string or React node for the media content',
      control: 'text'
    },
    mediaPosition: {
      description: 'Position of the media in flag layout',
      control: 'select',
      options: ['left', 'right']
    },
    mediaExdent: {
      description: 'Whether the media extends beyond the card border',
      control: 'boolean'
    },
    mediaFirst: {
      description: 'Whether the header appears before the media',
      control: 'boolean'
    },
    mediaInset: {
      description: 'Whether the media is inset within the card padding',
      control: 'boolean'
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

export const WithChildren = () => (
  <Card 
    heading="Card with Children"
    actionButton={<Button variant="default">Visit Florida Keys</Button>}
  >
    <p>This is a card with children.</p>
    <ul>
      <li>Custom content 1</li>
      <li>Custom content 2</li>
    </ul>
  </Card>
);

// Card with media
export const WithMedia = {
  args: {
    heading: 'Card with Media',
    text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Facilis earum tenetur quo cupiditate, eaque qui officia recusandae.',
    media: 'https://designsystem.digital.gov/img/introducing-uswds-2-0/built-to-grow--alt.jpg',
    actionButton: <Button variant="default">Visit Florida Keys</Button>,
    onClick: action('Primary button clicked')
  }
};

// Media with header first
export const MediaWithHeaderFirst = {
  args: {
    heading: 'Media with Header First',
    text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Facilis earum tenetur quo cupiditate, eaque qui officia recusandae.',
    media: 'https://designsystem.digital.gov/img/introducing-uswds-2-0/built-to-grow--alt.jpg',
    mediaFirst: true,
    actionButton: <Button variant="default">Visit Florida Keys</Button>,
    onClick: action('Primary button clicked')
  }
};

// Inset media
export const WithInsetMedia = {
  args: {
    heading: 'Card with Inset Media',
    text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Facilis earum tenetur quo cupiditate, eaque qui officia recusandae.',
    media: 'https://designsystem.digital.gov/img/introducing-uswds-2-0/built-to-grow--alt.jpg',
    mediaInset: true,
    actionButton: <Button variant="default">Visit Florida Keys</Button>,
    onClick: action('Primary button clicked')
  }
};

// Exdent media
export const WithExdentMedia = {
  args: {
    heading: 'Card with Exdent Media',
    text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Facilis earum tenetur quo cupiditate, eaque qui officia recusandae.',
    media: 'https://designsystem.digital.gov/img/introducing-uswds-2-0/built-to-grow--alt.jpg',
    mediaExdent: true,
    actionButton: <Button variant="default">Visit Florida Keys</Button>,
    onClick: action('Primary button clicked')
  }
};
