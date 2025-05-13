import React from 'react';
import Dropdown from './Dropdown';

export default {
  title: 'Components/Dropdown',
  component: Dropdown,
  argTypes: {
    onSelect: { action: 'selected' },
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

export const Default = Template.bind({});
Default.args = {
  id: 'default-dropdown',
  label: 'Favorite animal',
  options: optionsData,
  defaultOptionLabel: '-Select-',
};

export const WithSelectedValue = Template.bind({});
WithSelectedValue.args = {
  id: 'selected-dropdown',
  label: 'Favorite animal',
  options: optionsData,
  selectedOptionValue: 'dogs',
  defaultOptionLabel: '-Select-',
};

export const WithVeryLongOptionLabel = Template.bind({});
WithVeryLongOptionLabel.args = {
  id: 'very-long-option-label-dropdown',
  label: 'This has a very long option',
  options: optionsDataWithLongLabel,
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

export const Error = Template.bind({});
Error.args = {
  id: 'error-dropdown',
  label: 'Favorite animal (Error)',
  options: optionsData,
  error: 'Uh-oh! Dogs are no longer available!', // Or true for a generic error message
  selectedOptionValue: 'dogs', // To show the error state with a selection
  defaultOptionLabel: '-Select-',
};

export const NoLabel = Template.bind({});
NoLabel.args = {
  id: 'no-label-dropdown',
  options: optionsData,
  defaultOptionLabel: '-Select an option-',
};

export const ErrorNoLabel = Template.bind({});
ErrorNoLabel.args = {
  id: 'error-no-label-dropdown',
  options: optionsData,
  error: 'This selection has an error.',
  defaultOptionLabel: '-Select an option-',
}; 