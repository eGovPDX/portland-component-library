import React from 'react';
import { StepIndicator } from './StepIndicator';

export default {
  title: 'Components/StepIndicator',
  component: StepIndicator,
  parameters: {
    docs: {
      description: {
        component: 'A step indicator updates users on their progress through a multi-step process.'
      }
    }
  },
  argTypes: {
    steps: {
      control: 'object',
      description: 'Array of step objects with labels'
    },
    currentStep: {
      control: 'number',
      description: 'Current active step (1-indexed)'
    },
    title: {
      control: 'text',
      description: 'Title of the current step'
    },
    variant: {
      control: 'select',
      options: ['default', 'mobile'],
      description: 'Display variant'
    },
    showLabels: {
      control: 'boolean',
      description: 'Whether to show step labels'
    },
    showCounters: {
      control: 'boolean',
      description: 'Whether to show step counters'
    },
    centered: {
      control: 'boolean',
      description: 'Whether to center labels and counters'
    },
    smallCounters: {
      control: 'boolean',
      description: 'Whether to use small counters'
    }
  }
};

const defaultSteps = [
  { label: 'Personal information' },
  { label: 'Household status' },
  { label: 'Supporting documents' },
  { label: 'Signature' },
  { label: 'Review and submit' }
];

// Default
export const Default = {
  args: {
    steps: defaultSteps,
    currentStep: 3,
    title: 'Supporting documents'
  }
};

// No Labels
export const NoLabels = {
  args: {
    steps: defaultSteps,
    currentStep: 3,
    title: 'Supporting documents',
    showLabels: false
  }
};

// Centered
export const Centered = {
  args: {
    steps: defaultSteps,
    currentStep: 3,
    title: 'Supporting documents',
    centered: true
  }
};

// With Counters
export const WithCounters = {
  args: {
    steps: defaultSteps,
    currentStep: 3,
    title: 'Supporting documents',
    showCounters: true
  }
};

// Small Counters
export const SmallCounters = {
  args: {
    steps: defaultSteps,
    currentStep: 3,
    title: 'Supporting documents',
    showCounters: true,
    smallCounters: true
  }
};

// Mobile Variant
export const Mobile = {
  args: {
    steps: defaultSteps,
    currentStep: 3,
    title: 'Supporting documents',
    variant: 'mobile'
  }
}; 