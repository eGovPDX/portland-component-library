import React, { useState } from 'react';
import { Checkbox } from './Checkbox';

export default {
  title: 'Components/Checkbox',
  component: Checkbox,
  parameters: {
    docs: {
      description: {
        component: 'Checkboxes allow users to select one or more options from a list. They\'re always followed by a label or instructions that clearly indicate what checking the box represents.'
      }
    }
  },
  argTypes: {
    tiled: {
      control: 'boolean',
      description: 'If true, the tiled variant is used'
    },
    required: {
      control: 'boolean',
      description: 'If true, the checkbox group is required'
    },
    selectedValues: {
      control: 'object',
      description: 'Array of currently selected values'
    }
  },
};

const historicalFiguresOptions = [
  {
    value: 'sojourner-truth',
    labelText: 'Sojourner Truth',
  },
  {
    value: 'frederick-douglass',
    labelText: 'Frederick Douglass',
  },
  {
    value: 'booker-t-washington',
    labelText: 'Booker T. Washington', 
  },
  {
    value: 'george-washington-carver',
    labelText: 'George Washington Carver',
    disabled: true,
  },
];

const tiledOptions = [
  {
    value: 'sojourner-truth',
    labelText: 'Sojourner Truth',
    labelDescription: 'This is optional text that can be used to describe the label in more detail.',
  },
  {
    value: 'frederick-douglass',
    labelText: 'Frederick Douglass',
  },
  {
    value: 'booker-t-washington',
    labelText: 'Booker T. Washington',
  },
  {
    value: 'george-washington-carver',
    labelText: 'George Washington Carver',
    disabled: true,
  },
];

const Template = (args) => {
  const [selectedValues, setSelectedValues] = useState(args.selectedValues || []);

  const handleChange = (values) => {
    setSelectedValues(values);
    args.onChange && args.onChange(values);
  };

  return <Checkbox {...args} selectedValues={selectedValues} onChange={handleChange} />;
};

export const Default = Template.bind({});
Default.args = {
  name: 'historical-figures-default',
  title: 'Select any historical figure',
  options: historicalFiguresOptions,
  selectedValues: ['sojourner-truth'],
};

export const Tiled = Template.bind({});
Tiled.args = {
  name: 'historical-figures-tiled',
  title: 'Select any historical figure',
  options: tiledOptions,
  selectedValues: ['sojourner-truth'],
  tiled: true,
};

export const WithDescription = Template.bind({});
WithDescription.args = {
  name: 'newsletter-preferences',
  title: 'Newsletter preferences',
  description: 'Select which newsletters you would like to receive',
  options: [
    { value: 'weekly-digest', labelText: 'Weekly Digest' },
    { value: 'breaking-news', labelText: 'Breaking News Alerts' },
    { value: 'community-events', labelText: 'Community Events' },
    { value: 'job-postings', labelText: 'Job Postings' },
  ],
  selectedValues: ['weekly-digest', 'community-events'],
};

export const RequiredWithError = Template.bind({});
RequiredWithError.args = {
  name: 'terms-and-conditions',
  title: 'Terms and Conditions',
  description: 'You must agree to continue',
  options: [
    { value: 'terms', labelText: 'I agree to the Terms and Conditions' },
    { value: 'privacy', labelText: 'I agree to the Privacy Policy' },
    { value: 'marketing', labelText: 'I agree to receive marketing communications (optional)' },
  ],
  required: true,
  errorMessage: 'You must agree to the Terms and Conditions and Privacy Policy to continue.',
  selectedValues: [],
};

export const AllDisabled = Template.bind({});
AllDisabled.args = {
  name: 'disabled-options',
  title: 'Unavailable options',
  description: 'These options are currently unavailable',
  options: [
    { value: 'option-1', labelText: 'Option 1', disabled: true },
    { value: 'option-2', labelText: 'Option 2', disabled: true },
    { value: 'option-3', labelText: 'Option 3', disabled: true },
  ],
  selectedValues: [],
}; 