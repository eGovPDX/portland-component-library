import { Search } from './Search';

export default {
  title: 'Components/Search',
  component: Search,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {
    variant: {
      control: 'select',
      options: ['default', 'big', 'small'],
    },
    buttonText: {
      control: 'text',
    },
    onSubmit: {
      action: 'submitted',
    },
  },
};

export const Default = {
  args: {
    id: 'search-default',
    placeholder: 'Search',
  },
};

export const Big = {
  args: {
    id: 'search-big',
    variant: 'big',
    placeholder: 'Search',
  },
};

export const Small = {
  args: {
    id: 'search-small',
    variant: 'small',
    placeholder: 'Search',
  },
};

export const WithCustomButtonText = {
  args: {
    id: 'search-custom',
    buttonText: 'Find',
    placeholder: 'Search',
  },
}; 