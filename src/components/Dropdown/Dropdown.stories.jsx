import React from 'react';
import Dropdown from './Dropdown';

export default {
  title: 'Components/Dropdown',
  component: Dropdown,
  parameters: {
    docs: {
      description: {
        component: `
A responsive, accessible dropdown component that automatically adapts to provide the best user experience on different devices.

## Key Features

- **Responsive Design**: Automatically renders native select on mobile, custom dropdown on desktop
- **Enhanced Keyboard Navigation**: Full keyboard support with type-to-search on desktop
- **Accessibility**: ARIA support, focus management, and screen reader compatibility
- **Visual Consistency**: Native select styled to match custom dropdown

## Device Detection

The component automatically detects the device type:
- **Mobile/Touch**: Native select with OS-native picker
- **Desktop/Mouse**: Custom dropdown with enhanced keyboard navigation

## Keyboard Navigation (Desktop)

- Arrow keys to navigate
- Enter/Space to select
- Escape to close
- Tab to move focus
- Type letters to search
        `,
      },
    },
  },
  argTypes: {
    onSelect: { action: 'selected' },
    id: {
      description: 'Unique identifier for the dropdown',
      control: 'text',
    },
    label: {
      description: 'Label text displayed above the dropdown',
      control: 'text',
    },
    hintText: {
      description: 'Helper text displayed below the label',
      control: 'text',
    },
    options: {
      description: 'Array of options to display',
      control: 'object',
    },
    disabled: {
      description: 'Whether the dropdown is disabled',
      control: 'boolean',
    },
    error: {
      description: 'Error state or error message',
      control: 'text',
    },
    selectedOptionValue: {
      description: 'Currently selected option value',
      control: 'text',
    },
    defaultOptionLabel: {
      description: 'Text displayed when no option is selected',
      control: 'text',
    },
    forceCustom: {
      description: 'Force custom dropdown behavior (for testing)',
      control: 'boolean',
    },
  },
};

const Template = (args) => <Dropdown {...args} />;

const optionsData = [
  { value: 'option1', label: 'Option A' },
  { value: 'option2', label: 'Option B' },
  { value: 'option3', label: 'Option C' },
  { value: 'dogs', label: 'Dogs' },
  { value: 'cats', label: 'Cats' },
  { value: 'fish', label: 'Fish' },
];

const optionsDataWithLongLabel = [
  ...optionsData,
  { value: 'option4', label: 'Option with a very long label to show the width following the size of the label' }
];

const veryLongOptionsData = [
  { value: 'option1', label: 'Option A' },
  { value: 'option2', label: 'Option B' },
  { value: 'option3', label: 'Option C' },
  { value: 'dogs', label: 'Dogs' },
  { value: 'cats', label: 'Cats' },
  { value: 'fish', label: 'Fish' },
  { value: 'birds', label: 'Birds' },
  { value: 'hamsters', label: 'Hamsters' },
  { value: 'rabbits', label: 'Rabbits' },
  { value: 'guinea_pigs', label: 'Guinea Pigs' },
  { value: 'turtles', label: 'Turtles' },
  { value: 'snakes', label: 'Snakes' },
  { value: 'lizards', label: 'Lizards' },
  { value: 'ferrets', label: 'Ferrets' },
  { value: 'hedgehogs', label: 'Hedgehogs' },
  { value: 'chinchillas', label: 'Chinchillas' },
];

export const Default = Template.bind({});
Default.args = {
  id: 'default-dropdown',
  label: 'Favorite animal',
  options: optionsData,
  defaultOptionLabel: '-Select-',
  forceCustom: true, // Force custom dropdown to showcase enhanced features
};
Default.parameters = {
  docs: {
    description: {
      story: `
Basic dropdown example with comparison to native HTML select.

**Key Differences:**
- Automatically adapts to device type
- Enhanced keyboard navigation on desktop
- Consistent styling with design system
- Better accessibility support
      `,
    },
  },
};

export const WithHintText = Template.bind({});
WithHintText.args = {
  id: 'hint-text-dropdown',
  label: 'Favorite animal',
  hintText: 'Select your favorite animal from the list below.',
  options: optionsData,
  defaultOptionLabel: '-Select-',
};
WithHintText.parameters = {
  docs: {
    description: {
      story: `
Dropdown with hint text to provide additional context to users.

**Accessibility:** The hint text is properly associated with the label and will be announced by screen readers.
      `,
    },
  },
};

export const WithSelectedValue = Template.bind({});
WithSelectedValue.args = {
  id: 'selected-dropdown',
  label: 'Favorite animal',
  options: optionsData,
  selectedOptionValue: 'dogs',
  defaultOptionLabel: '-Select-',
};
WithSelectedValue.parameters = {
  docs: {
    description: {
      story: `
Dropdown with a pre-selected value. Useful for editing existing data or showing current selections.

**Focus Management:** When opened on desktop, focus will automatically move to the selected option.
      `,
    },
  },
};

export const WithVeryLongOptionLabel = Template.bind({});
WithVeryLongOptionLabel.args = {
  id: 'very-long-option-label-dropdown',
  label: 'This has a very long option',
  options: optionsDataWithLongLabel,
  defaultOptionLabel: '-Select-',
};
WithVeryLongOptionLabel.parameters = {
  docs: {
    description: {
      story: `
Dropdown with long option labels to demonstrate text overflow handling.

**Features:**
- Text truncation with ellipsis
- Proper width handling
- Maintains accessibility with full text in screen readers
      `,
    },
  },
};

export const WithLongOptionsList = Template.bind({});
WithLongOptionsList.args = {
  id: 'long-options-list-dropdown',
  label: 'Favorite animal',
  options: veryLongOptionsData,
  defaultOptionLabel: '-Select-',
};

export const Disabled = Template.bind({});
Disabled.args = {
  id: 'disabled-dropdown',
  label: 'Favorite animal (Disabled)',
  options: optionsData,
  disabled: true,
  defaultOptionLabel: '-Select-',
};
Disabled.parameters = {
  docs: {
    description: {
      story: `
Disabled dropdown that cannot be interacted with.

**Accessibility:** Properly marked as disabled for screen readers and keyboard navigation.
      `,
    },
  },
};

export const Error = Template.bind({});
Error.args = {
  id: 'error-dropdown',
  label: 'Favorite animal (Error)',
  options: optionsData,
  error: 'Uh-oh! Dogs are no longer available!',
  selectedOptionValue: 'dogs',
  defaultOptionLabel: '-Select-',
};
Error.parameters = {
  docs: {
    description: {
      story: `
Dropdown in error state with custom error message.

**Features:**
- Visual error styling
- Error message announced to screen readers
- Error state maintained across both mobile and desktop versions
      `,
    },
  },
};

