import React from 'react';
import { Meta, StoryObj } from '@storybook/react';
import { Banner } from './Banner';

// Import the circle-info icon
// Note: Since SVG imports might not work directly, we'll create the SVG inline
// based on the circle-info.svg content
const CircleInfoIcon = () => (
  <svg width="40" height="40" viewBox="0 0 60 60" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M30 54C21.375 54 13.5 49.5 9.1875 42C4.875 34.5938 4.875 25.5 9.1875 18C13.5 10.5938 21.375 6 30 6C38.5312 6 46.4062 10.5938 50.7188 18C55.0312 25.5 55.0312 34.5938 50.7188 42C46.4062 49.5 38.5312 54 30 54ZM26.25 37.5C24.9375 37.5 24 38.5312 24 39.75C24 41.0625 24.9375 42 26.25 42H33.75C34.9688 42 36 41.0625 36 39.75C36 38.5312 34.9688 37.5 33.75 37.5H33V29.25C33 28.0312 31.9688 27 30.75 27H26.25C24.9375 27 24 28.0312 24 29.25C24 30.5625 24.9375 31.5 26.25 31.5H28.5V37.5H26.25ZM30 18C28.3125 18 27 19.4062 27 21C27 22.6875 28.3125 24 30 24C31.5938 24 33 22.6875 33 21C33 19.4062 31.5938 18 30 18Z" fill="currentColor"/>
  </svg>
);

const meta: Meta<typeof Banner> = {
  title: 'Components/Banner',
  component: Banner,
  parameters: {
    layout: 'fullscreen',
    docs: {
      description: {
        component: 'Banner component based on the USWDS Banner component. The banner provides information about the official nature of government websites.',
      },
    },
  },
  tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof Banner>;

// Default Banner
export const Default: Story = {
  args: {
    domain: 'An official website of the City of Portland',
    heading: 'Official websites use .gov',
    description: 'A .gov website belongs to an official government organization in the United States.',
    icon: <CircleInfoIcon />
  },
};

// Custom Domain Text
export const CustomDomain: Story = {
  args: {
    domain: 'An official website of Portland, Oregon',
    heading: 'Official websites use .gov',
    description: 'A .gov website belongs to an official government organization in the United States.',
    icon: <CircleInfoIcon />
  },
};

// Custom Content
export const CustomContent: Story = {
  args: {
    domain: 'An official website of the City of Portland',
    heading: 'Important Information',
    description: 'This banner contains important information about this website and its services.',
    icon: <CircleInfoIcon />
  },
};

// With Custom Icon
export const WithCustomIcon: Story = {
  args: {
    domain: 'An official website of the City of Portland',
    heading: 'Information Notice',
    description: 'This is an example of a banner with a custom icon imported from SVG.',
    icon: (
      <svg width="40" height="40" viewBox="0 0 60 60" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M30 54C21.375 54 13.5 49.5 9.1875 42C4.875 34.5938 4.875 25.5 9.1875 18C13.5 10.5938 21.375 6 30 6C38.5312 6 46.4062 10.5938 50.7188 18C55.0312 25.5 55.0312 34.5938 50.7188 42C46.4062 49.5 38.5312 54 30 54ZM26.25 37.5C24.9375 37.5 24 38.5312 24 39.75C24 41.0625 24.9375 42 26.25 42H33.75C34.9688 42 36 41.0625 36 39.75C36 38.5312 34.9688 37.5 33.75 37.5H33V29.25C33 28.0312 31.9688 27 30.75 27H26.25C24.9375 27 24 28.0312 24 29.25C24 30.5625 24.9375 31.5 26.25 31.5H28.5V37.5H26.25ZM30 18C28.3125 18 27 19.4062 27 21C27 22.6875 28.3125 24 30 24C31.5938 24 33 22.6875 33 21C33 19.4062 31.5938 18 30 18Z" fill="#0050d8"/>
      </svg>
    ),
  },
};

// Mobile Banner
export const Mobile: Story = {
  args: {
    domain: 'An official website of the City of Portland',
    heading: 'Official websites use .gov',
    description: 'A .gov website belongs to an official government organization in the United States.',
    icon: <CircleInfoIcon />
  },
  parameters: {
    viewport: {
      defaultViewport: 'mobile1',
    },
  },
}; 