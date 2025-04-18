import { Tag } from './Tag';

export default {
  title: 'Components/Tag',
  component: Tag,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {
    variant: {
      control: 'select',
      options: ['default', 'big'],
    },
  },
};

export const Default = {
  args: {
    children: 'Example Default Tag',
  },
};

export const Big = {
  args: {
    variant: 'big',
    children: 'Example Big Tag',
  },
};

export const WithCustomClass = {
  args: {
    children: 'Custom Tag',
    className: 'custom-class',
  },
}; 