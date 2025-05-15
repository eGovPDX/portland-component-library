import { useState } from 'react';
import TextArea from './TextArea';

const Wrapper = ({ children }) => (
  <div style={{ width: '50%', margin: '0 auto' }}>
    {children}
  </div>
);

export default {
  title: 'Components/TextArea',
  component: TextArea,
  argTypes: {
    onChange: { action: 'changed' },
    label: { control: 'text' },
    description: { control: 'text' },
    error: { control: 'text' },
    disabled: { control: 'boolean' },
    required: { control: 'boolean' },
    placeholder: { control: 'text' },
    maxCharacters: { control: 'number' },
  },
  decorators: [
    (Story) => (
      <Wrapper>
        <Story />
      </Wrapper>
    ),
  ],
};

const Template = (args) => <TextArea {...args} />;

export const Default = Template.bind({});
Default.args = {
  id: 'default-textarea',
  label: 'Description',
  description: 'Enter a detailed description',
  placeholder: 'Type your message here...',
};

export const WithMaxCharacters = (args) => (
  <TextArea
    {...args}
    description={`Enter a description (maximum ${args.maxCharacters} characters)`}
  />
);
WithMaxCharacters.args = {
  id: 'max-chars-textarea',
  label: 'Short Description',
  placeholder: 'Type your message here...',
  maxCharacters: 100,
};

export const Required = Template.bind({});
Required.args = {
  id: 'required-textarea',
  label: 'Required Description',
  description: 'This field is required',
  placeholder: 'Type your message here...',
  required: true,
};

export const WithError = Template.bind({});
WithError.args = {
  id: 'error-textarea',
  label: 'Description with Error',
  description: 'This field has an error',
  placeholder: 'Type your message here...',
  error: 'This field is required',
};

export const Disabled = Template.bind({});
Disabled.args = {
  id: 'disabled-textarea',
  label: 'Disabled Description',
  description: 'This field is disabled',
  placeholder: 'Type your message here...',
  disabled: true,
  value: 'This textarea is disabled',
};

export const WithLongContent = Template.bind({});
WithLongContent.args = {
  id: 'long-content-textarea',
  label: 'Long Description',
  description: 'This textarea will auto-resize with content',
  placeholder: 'Type your message here...',
  value: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
}; 