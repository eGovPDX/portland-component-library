import React from 'react';
import { ButtonGroup } from './ButtonGroup';
import { Button } from '../Button';
import { faArrowLeft } from '@fortawesome/free-solid-svg-icons';

export default {
  title: 'Components/ButtonGroup',
  component: ButtonGroup,
  parameters: {
    docs: {
      description: {
        component: 'A button group collects similar or related actions.'
      }
    }
  },
  argTypes: {
    segmented: {
      control: 'boolean',
      description: 'Whether the button group should be segmented (buttons joined together)',
      defaultValue: false
    }
  },
  decorators: [
    (Story) => (
      <div style={{ padding: '1rem' }}>
        <Story />
      </div>
    )
  ]
};

// Default button group
export const Default = {
  render: (args) => (
    <ButtonGroup {...args}>
      <Button variant="outline">Back</Button>
      <Button>Continue</Button>
    </ButtonGroup>
  ),
  args: {
    segmented: false
  }
};

// Segmented button group
export const Segmented = {
  render: (args) => (
    <ButtonGroup {...args}>
      <Button>Map</Button>
      <Button variant="outline">Hybrid</Button>
      <Button variant="outline">Satellite</Button>
    </ButtonGroup>
  ),
  args: {
    segmented: true
  }
};

// Button group with multiple buttons
export const MultipleButtons = {
  render: (args) => (
    <ButtonGroup {...args}>
      <Button>Option 1</Button>
      <Button>Option 2</Button>
      <Button>Option 3</Button>
      <Button>Option 4</Button>
    </ButtonGroup>
  ),
  args: {
    segmented: false
  }
};

// Button group with different variants
export const MixedVariants = {
  render: (args) => (
    <ButtonGroup {...args}>
      <Button>Default</Button>
      <Button variant="secondary">Secondary</Button>
      <Button variant="accent-cool">Accent Cool</Button>
      <Button variant="accent-warm">Accent Warm</Button>
    </ButtonGroup>
  ),
  args: {
    segmented: false
  }
};

// Segmented button group with all active buttons
export const SegmentedActive = {
  render: (args) => (
    <ButtonGroup {...args}>
      <Button>Map</Button>
      <Button>Hybrid</Button>
      <Button>Satellite</Button>
    </ButtonGroup>
  ),
  args: {
    segmented: true
  }
};

// Example of Accept/Decline pattern with icons
export const AcceptDeclineWithIcons = {
  render: (args) => (
    <ButtonGroup {...args}>
      <Button variant="outline" startIcon={faArrowLeft}>Accept</Button>
      <Button variant="secondary" startIcon={faArrowLeft}>Decline</Button>
    </ButtonGroup>
  ),
  args: {
    segmented: false
  }
};

// Example of Accept/Decline pattern without icons
export const AcceptDeclineNoIcons = {
  render: (args) => (
    <ButtonGroup {...args}>
      <Button variant="outline">Accept</Button>
      <Button variant="secondary">Decline</Button>
    </ButtonGroup>
  ),
  args: {
    segmented: false
  }
}; 