import React from 'react';
import { Alert } from './Alert';

export default {
  title: 'Components/Alert',
  component: Alert,
  parameters: {
    docs: {
      description: {
        component: 'Alert component based on USWDS Alert. Used to keep users informed of important and sometimes time-sensitive changes.',
      },
    },
    options: {
      storySort: {
        order: ['Emergency', 'Error', 'Info', 'NoIcon', 'Slim', 'Success', 'Warning', 'WithLink'],
      },
    },
  },
  tags: ['autodocs'],
};

// Emergency Alert
export const Emergency = {
  args: {
    type: 'emergency',
    heading: 'Emergency status',
    children: 'This is an emergency alert message.',
  },
};

// Error Alert
export const Error = {
  args: {
    type: 'error',
    heading: 'Error status',
    children: 'This is an error alert message.',
  },
};

// Info Alert
export const Info = {
  args: {
    type: 'info',
    heading: 'Informative status',
    children: 'This is an informative alert message.',
  },
};

// Alert with No Icon
export const NoIcon = {
  args: {
    type: 'info',
    noIcon: true,
    children: 'This is an alert without an icon.',
  },
};

// Slim Alert
export const Slim = {
  args: {
    type: 'info',
    slim: true,
    children: 'This is a slim alert message.',
  },
};

// Success Alert
export const Success = {
  args: {
    type: 'success',
    heading: 'Success status',
    children: 'This is a success alert message.',
  },
};

// Warning Alert
export const Warning = {
  args: {
    type: 'warning',
    heading: 'Warning status',
    children: 'This is a warning alert message.',
  },
};

// Alert with Link
export const WithLink = {
  args: {
    type: 'info',
    heading: 'Alert with Link',
    children: (
      <>
        This is an alert with a{' '}
        <a href="#" className="pgov-link">
          link
        </a>
        .
      </>
    ),
  },
}; 