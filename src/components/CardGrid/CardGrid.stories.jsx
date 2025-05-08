import React from 'react';
import { CardGrid } from './CardGrid';
import { Button } from '../Button';

export default {
  title: 'Components/CardGrid',
  component: CardGrid,
  parameters: {
    layout: 'fullscreen',
  },
};

const Template = (args) => <CardGrid {...args} />;

export const Default = Template.bind({});
Default.args = {
  heading: 'Featured Services',
  cards: [
    {
      heading: 'Service 1',
      text: 'Description of service 1',
    },
    {
      heading: 'Service 2',
      text: 'Description of service 2',
    },
    {
      heading: 'Service 3',
      text: 'Description of service 3',
    },
  ],
};

export const WithMedia = Template.bind({});
WithMedia.args = {
  heading: 'Featured Services with Images',
  cards: [
    {
      heading: 'Service 1',
      text: 'Description of service 1',
      media: 'https://designsystem.digital.gov/img/introducing-uswds-2-0/built-to-grow--alt.jpg',
      actionButton: <Button>Learn More</Button>,
    },
    {
      heading: 'Service 2',
      text: 'Description of service 2',
      media: 'https://designsystem.digital.gov/img/introducing-uswds-2-0/built-to-grow--alt.jpg',
      actionButton: <Button>Learn More</Button>,
    },
    {
      heading: 'Service 3',
      text: 'Description of service 3',
      media: 'https://designsystem.digital.gov/img/introducing-uswds-2-0/built-to-grow--alt.jpg',
      actionButton: <Button>Learn More</Button>,
    },
    {
      heading: 'Service 4',
      text: 'Description of service 4',
      media: 'https://designsystem.digital.gov/img/introducing-uswds-2-0/built-to-grow--alt.jpg',
      actionButton: <Button>Learn More</Button>,
    },
    {
      heading: 'Service 5',
      text: 'Description of service 5',
      media: 'https://designsystem.digital.gov/img/introducing-uswds-2-0/built-to-grow--alt.jpg',
      actionButton: <Button>Learn More</Button>,
    },
    {
      heading: 'Service 6',
      text: 'Description of service 6',
      media: 'https://designsystem.digital.gov/img/introducing-uswds-2-0/built-to-grow--alt.jpg',
      actionButton: <Button>Learn More</Button>,
    },
  ],
}; 