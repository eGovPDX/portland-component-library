import React, { useState } from 'react';
import { RadioButtons } from './RadioButtons';

export default {
  title: 'Components/RadioButtons',
  component: RadioButtons,
  argTypes: {
    tiled: {
      control: 'boolean',
    },
    required: {
      control: 'boolean',
    },
  },
};

const options = [
  {
    value: 'sojourner-truth',
    labelText: 'Sojourner Truth',
    labelDescription: 'c. 1797–1883',
  },
  {
    value: 'frederick-douglass',
    labelText: 'Frederick Douglass',
    labelDescription: '1818–1895',
  },
  {
    value: 'booker-t-washington',
    labelText: 'Booker T. Washington',
    labelDescription: '1856–1915',
  },
  {
    value: 'george-washington-carver',
    labelText: 'George Washington Carver',
    labelDescription: 'c. 1864–1943',
    disabled: true,
  },
];

const Template = (args) => {
  const [selectedValue, setSelectedValue] = useState(args.selectedValue);

  const handleChange = (value) => {
    setSelectedValue(value);
    args.onChange(value);
  };

  return <RadioButtons {...args} selectedValue={selectedValue} onChange={handleChange} />;
};

export const Default = Template.bind({});
Default.args = {
  name: 'historical-figures-default',
  title: 'Select one historical figure',
  options: options,
  selectedValue: 'frederick-douglass',
};

export const Tiled = Template.bind({});
Tiled.args = {
  name: 'historical-figures-tiled',
  title: 'Select one historical figure',
  options: options,
  selectedValue: 'frederick-douglass',
  tiled: true,
};

export const RequiredWithError = Template.bind({});
RequiredWithError.args = {
  name: 'local-school-district',
  title: 'Local school district',
  description: 'Choose the district closest to your primary residence',
  options: [
    { value: 'frederick-douglass', labelText: 'Frederick Douglass', labelDescription: '{labelDescription}' },
    { value: 'oak-lawn', labelText: 'Oak Lawn' },
    { value: 'roseway-park', labelText: 'Roseway Park' },
    { value: 'east-main', labelText: 'East Main', labelDescription: 'The East Main proposed district is under construction and is not yet available for selection', disabled: true },
  ],
  required: true,
  errorMessage: 'This is a required field. Please select a local school district.',
  selectedValue: '',
}; 