import React from 'react';
import { Contacts } from './Contacts';

export default {
  title: 'Components/Contacts',
  component: Contacts,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
};

const Template = (args) => <Contacts {...args} />;

export const Default = Template.bind({});
Default.args = {
  title: 'Councilor',
  emailAddress: 'councilor@portland.gov',
  officePhone: '(503) 823-0000',
  informationPhone: '311',
  relayServicePhone: '711',
  socialMedia: {
    facebook: 'portlandgov',
    twitter: 'portlandgov',
    bluesky: 'portland.gov',
    instagram: 'portlandgov',
  },
  officeDetails: {
    address: 'SW 123 Normal Street',
    room: 'Room 0',
    city: 'Portland',
    state: 'OR',
    zip: '97204',
    days: 'Monday - Friday',
    hours: '9:00am - 5:00pm',
  },
};

export const Container = Template.bind({});
Container.args = {
  ...Default.args,
  className: 'contacts--container',
}; 