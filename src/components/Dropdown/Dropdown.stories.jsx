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

// Custom template for Default story to include HTML select comparison
// const DefaultTemplate = (args) => (
//   <div>
//     <div style={{ marginBottom: '2rem' }}>
//       <h3>HTML Select (Native)</h3>
//       <p style={{ fontSize: '14px', color: '#666', marginBottom: '8px' }}>
//         This is a standard HTML select element for comparison
//       </p>
//       <select 
//         id="html-select"
//         style={{ 
//           padding: '0.5rem',
//           border: '1px solid #565c65',
//           borderRadius: '0.25rem',
//           fontSize: '1rem',
//           minWidth: '200px'
//         }}
//       >
//         <option value="">-Select-</option>
//         <option value="option1">Option A</option>
//         <option value="option2">Option B</option>
//         <option value="option3">Option C</option>
//         <option value="dogs">Dogs</option>
//         <option value="cats">Cats</option>
//         <option value="fish">Fish</option>
//       </select>
//     </div>
    
//     <div>
//       <h3>Custom Dropdown Component</h3>
//       <p style={{ fontSize: '14px', color: '#666', marginBottom: '8px' }}>
//         This component automatically adapts: native select on mobile, custom dropdown on desktop
//       </p>
//       <Dropdown {...args} />
//     </div>
//   </div>
// );

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

export const BooleanError = Template.bind({});
BooleanError.args = {
  id: 'boolean-error-dropdown',
  label: 'Required Field (Boolean Error)',
  options: optionsData,
  error: true,
  defaultOptionLabel: '-Select-',
};
BooleanError.parameters = {
  docs: {
    description: {
      story: `
Dropdown with boolean error state showing generic "This field is required" message.

**Use Case:** Common for form validation where you just need to indicate a field is required.
      `,
    },
  },
};

export const NoLabel = Template.bind({});
NoLabel.args = {
  id: 'no-label-dropdown',
  options: optionsData,
  defaultOptionLabel: '-Select an option-',
};
NoLabel.parameters = {
  docs: {
    description: {
      story: `
Dropdown without a visible label. Useful when the context is clear from surrounding content.

**Accessibility:** Still accessible via aria-label and proper labeling.
      `,
    },
  },
};

export const ErrorNoLabel = Template.bind({});
ErrorNoLabel.args = {
  id: 'error-no-label-dropdown',
  options: optionsData,
  error: 'This selection has an error.',
  defaultOptionLabel: '-Select an option-',
};
ErrorNoLabel.parameters = {
  docs: {
    description: {
      story: `
Dropdown without label but with error state. Error message appears below the dropdown.

**Layout:** Error message positioning adapts when no label is present.
      `,
    },
  },
};

export const KeyboardNavigationDemo = Template.bind({});
KeyboardNavigationDemo.args = {
  id: 'keyboard-demo-dropdown',
  label: 'Try Keyboard Navigation (Desktop)',
  hintText: 'Use arrow keys, type to search, Enter to select, Escape to close',
  forceCustom: true, // Force custom dropdown for keyboard demo
  options: [
    { value: 'apple', label: 'Apple' },
    { value: 'banana', label: 'Banana' },
    { value: 'cherry', label: 'Cherry' },
    { value: 'dragonfruit', label: 'Dragonfruit' },
    { value: 'elderberry', label: 'Elderberry' },
    { value: 'fig', label: 'Fig' },
    { value: 'grape', label: 'Grape' },
    { value: 'honeydew', label: 'Honeydew' },
    { value: 'kiwi', label: 'Kiwi' },
    { value: 'lemon', label: 'Lemon' },
  ],
  defaultOptionLabel: '-Select a fruit-',
};
KeyboardNavigationDemo.parameters = {
  docs: {
    description: {
      story: `
Interactive demo of keyboard navigation features (desktop only).

**Try these:**
- Click to open, then use arrow keys to navigate
- Type letters to jump to matching options (e.g., type "a" for Apple)
- Press Enter or Space to select
- Press Escape to close without selecting
- Press Tab to close and move focus

**Note:** On mobile devices, this will render as a native select with OS-native navigation.
      `,
    },
  },
};
