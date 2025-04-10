import React from 'react';
import { Banner } from './Banner';

export default {
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

// Default Banner
export const Default = {
  args: {
    domain: 'An official website of the City of Portland',
    heading: 'Official websites use .gov',
    description: 'A .gov website belongs to an official government organization in the United States.',
    showHttpsGuidance: true,
    initiallyExpanded: false
  },
};

// Expanded Banner
export const Expanded = {
  args: {
    ...Default.args,
    initiallyExpanded: true
  },
};

// Custom Domain Text
export const CustomDomain = {
  args: {
    ...Default.args,
    domain: 'An official website of Portland, Oregon',
  },
};

// Custom Content
export const CustomContent = {
  args: {
    ...Default.args,
    heading: 'Important Information',
    description: 'This banner contains important information about this website and its services.',
  },
};

// Without HTTPS Guidance
export const WithoutHttpsGuidance = {
  args: {
    ...Default.args,
    showHttpsGuidance: false,
    initiallyExpanded: true
  },
};

// With Custom Icon
export const WithCustomIcon = {
  args: {
    ...Default.args,
    icon: (
      <svg width="40" height="40" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M12 22C6.477 22 2 17.523 2 12S6.477 2 12 2s10 4.477 10 10-4.477 10-10 10zm0-2a8 8 0 100-16 8 8 0 000 16zM11 7h2v2h-2V7zm0 4h2v6h-2v-6z" fill="#0050d8"/>
      </svg>
    ),
    initiallyExpanded: true
  },
};

// Mobile Banner
export const Mobile = {
  args: {
    ...Default.args,
  },
  parameters: {
    viewport: {
      defaultViewport: 'mobile1',
    },
  },
}; 