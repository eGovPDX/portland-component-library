import React from 'react';
import { TextInput } from './TextInput';
import { faCreditCard, faCheck } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

export default {
  title: 'Components/TextInput',
  component: TextInput,
  parameters: {
    docs: {
      description: {
        component: 'A text input allows users to enter any combination of letters, numbers, or symbols.'
      }
    }
  },
  argTypes: {
    label: {
      control: 'text',
      description: 'Input label text'
    },
    description: {
      control: 'text',
      description: 'Additional description text under the label'
    },
    state: {
      control: 'select',
      options: ['default', 'disabled', 'error', 'success'],
      description: 'The state of the input'
    },
    size: {
      control: 'select',
      options: ['default', '2xs', 'xs', 'sm', 'md', 'lg', 'xl', '2xl'],
      description: 'The size of the input'
    },
    disabled: {
      control: 'boolean',
      description: 'Whether the input is disabled'
    },
    prefixIcon: {
      control: 'object',
      description: 'FontAwesome icon to display at the start of the input'
    },
    suffixContent: {
      control: 'text',
      description: 'Content to display at the end of the input'
    },
    errorMessage: {
      control: 'text',
      description: 'Error message to display when state is "error"'
    }
  }
};

// Default text input
export const Default = {
  args: {
    id: 'input-default',
    label: 'Text input label',
    description: 'For example, Jane, Darren, or Mai'
  }
};

// Different states
export const Disabled = {
  args: {
    id: 'input-disabled',
    label: 'Disabled input',
    value: 'You cannot change this value',
    disabled: true,
    state: 'disabled'
  }
};

export const Error = {
  args: {
    id: 'input-error',
    label: 'Error input',
    description: 'Please enter a valid value',
    errorMessage: 'This field contains an error',
    state: 'error'
  }
};

export const Success = {
  args: {
    id: 'input-success',
    label: 'Success input',
    state: 'success'
  }
};

// Size variants
export const Small = {
  args: {
    id: 'input-small',
    label: 'Small input',
    description: 'This is a small sized input',
    size: 'sm'
  }
};

export const Large = {
  args: {
    id: 'input-large',
    label: 'Large input',
    description: 'This is a large sized input',
    size: 'lg'
  }
};

// With prefix icon and suffix
export const WithPrefixIcon = {
  args: {
    id: 'credit-card',
    label: 'Credit card number',
    description: 'Please enter the credit card associated with this account',
    prefixIcon: faCreditCard
  }
};

export const WithSuffix = {
  args: {
    id: 'input-with-suffix',
    label: 'With Suffix',
    suffixContent: <FontAwesomeIcon icon={faCheck} style={{ color: '#008817' }} />
  }
};

export const WithPrefixAndSuffix = {
  args: {
    id: 'input-with-prefix-and-suffix',
    label: 'With Prefix and Suffix',
    prefixIcon: faCreditCard,
    suffixContent: <FontAwesomeIcon icon={faCheck} style={{ color: '#008817' }} />
  }
}

// With pattern validation
export const WithInputValidationPattern = {
  args: {
    id: 'credit-card-pattern',
    label: 'Credit card number',
    description: 'Please enter the credit card associated with this account',
    prefixIcon: faCreditCard,
    pattern: '[0-9]{16}',
    errorMessage: 'Incorrect format for credit card number',
    state: 'error'
  }
};

// Comprehensive example showing all controls
export const Playground = {
  args: {
    id: 'playground-input',
    label: 'Playground Input',
    description: 'Try changing the state and size controls above',
    value: 'Sample text',
    state: 'default',
    size: 'default'
  }
}; 