# Dropdown Component

A responsive, accessible dropdown component that automatically adapts to provide the best user experience on different devices.

## Features

### 🎯 **Responsive Design**
- **Mobile/Touch Devices**: Automatically renders a native `<select>` element for OS-native picker experience
- **Desktop/Mouse Devices**: Enhanced custom dropdown with full keyboard navigation and type-to-search

### ⌨️ **Enhanced Keyboard Navigation (Desktop)**
- **Arrow Keys**: Navigate through options with wrapping at ends
- **Enter/Space**: Select highlighted option and close menu
- **Escape**: Close menu without selection
- **Tab**: Close menu and move focus to next element
- **Type-to-Search**: Type letters to jump to matching options (like native select)

### ♿ **Accessibility**
- **ARIA Support**: Proper roles, states, and relationships
- **Screen Reader Compatible**: Both native and custom versions are fully accessible
- **Focus Management**: Automatic focus return to button when menu closes
- **Keyboard Navigation**: Full keyboard support on desktop
- **Mobile Native**: Uses native select on mobile for best accessibility

### 🎨 **Visual Consistency**
- **Unified Styling**: Native select styled to match custom dropdown
- **Error States**: Consistent error handling across both versions
- **Disabled States**: Consistent disabled styling
- **Custom Chevron**: SVG chevron icon for both versions

## Usage

### Basic Example

```jsx
import { Dropdown } from '@cityofportland/component-library/components/Dropdown';
import '@cityofportland/component-library/components/Dropdown/style.css';

const options = [
  { value: 'option1', label: 'Option A' },
  { value: 'option2', label: 'Option B' },
  { value: 'option3', label: 'Option C' },
];

function MyComponent() {
  const handleSelect = (value) => {
    console.log('Selected:', value);
  };

  return (
    <Dropdown
      id="my-dropdown"
      label="Select an option"
      options={options}
      onSelect={handleSelect}
    />
  );
}
```

### With Pre-selected Value

```jsx
<Dropdown
  id="preselected-dropdown"
  label="Favorite Color"
  options={[
    { value: 'red', label: 'Red' },
    { value: 'blue', label: 'Blue' },
    { value: 'green', label: 'Green' },
  ]}
  selectedOptionValue="blue"
  onSelect={(value) => console.log('Selected:', value)}
/>
```

### With Hint Text

```jsx
<Dropdown
  id="hint-dropdown"
  label="Department"
  hintText="Select the department you work in"
  options={departmentOptions}
  onSelect={handleDepartmentSelect}
/>
```

### Error State

```jsx
<Dropdown
  id="error-dropdown"
  label="Required Field"
  options={options}
  error="This field is required"
  onSelect={handleSelect}
/>
```

### Disabled State

```jsx
<Dropdown
  id="disabled-dropdown"
  label="Disabled Field"
  options={options}
  disabled={true}
  onSelect={handleSelect}
/>
```

### Force Custom Dropdown (Testing)

```jsx
<Dropdown
  id="custom-dropdown"
  label="Custom Dropdown (Desktop Behavior)"
  options={options}
  forceCustom={true} // Force custom dropdown even on mobile
  onSelect={handleSelect}
/>
```

## Props

| Prop | Type | Required | Default | Description |
|------|------|----------|---------|-------------|
| `id` | `string` | ✅ | - | Unique identifier for the dropdown |
| `label` | `string` | ❌ | `null` | Label text displayed above the dropdown |
| `hintText` | `string` | ❌ | - | Helper text displayed below the label |
| `options` | `Array<{value: string, label: string}>` | ✅ | - | Array of options to display |
| `disabled` | `boolean` | ❌ | `false` | Whether the dropdown is disabled |
| `error` | `boolean \| string` | ❌ | `false` | Error state or error message |
| `className` | `string` | ❌ | `''` | Additional CSS classes for the container |
| `selectedOptionValue` | `string` | ❌ | `null` | Currently selected option value |
| `onSelect` | `(value: string) => void` | ❌ | `() => {}` | Callback when an option is selected |
| `defaultOptionLabel` | `string` | ❌ | `'- Select -'` | Text displayed when no option is selected |
| `forceCustom` | `boolean` | ❌ | `false` | Force custom dropdown behavior (for testing) |

## Device Detection

The component automatically detects the device type and renders the appropriate version:

### Mobile Detection Criteria
The component uses a more sophisticated detection algorithm:

1. **User Agent Check**: Detects mobile browsers (Android, iOS, etc.)
2. **Touch + Coarse Pointer**: Checks for both touch capability AND coarse pointer input
3. **Screen Size**: Considers small screens (≤768px) as mobile-like
4. **Combined Logic**: Only considers it mobile if it's actually a mobile device OR has touch+coarse pointer AND small screen

This prevents desktop browsers with touch support from being incorrectly detected as mobile.

### Behavior by Device Type

#### Mobile/Touch Devices
- **Renders**: Native `<select>` element
- **Benefits**:
  - OS-native picker (iOS wheel, Android dropdown)
  - Full accessibility support
  - Familiar interaction patterns
  - Consistent with other form elements
- **Styling**: Custom CSS to match design system

#### Desktop/Mouse Devices
- **Renders**: Custom dropdown component
- **Benefits**:
  - Enhanced keyboard navigation
  - Type-to-search functionality
  - Custom styling and animations
  - Better visual feedback

## Keyboard Navigation (Desktop)

| Key | Action |
|-----|--------|
| `Arrow Down` | Open menu or navigate down |
| `Arrow Up` | Navigate up through options |
| `Enter` / `Space` | Select highlighted option |
| `Escape` | Close menu without selection |
| `Tab` | Close menu and move to next element |
| `A-Z`, `0-9` | Type to search (jump to matching option) |

## Accessibility Features

### ARIA Attributes
- `aria-haspopup="listbox"` - Indicates dropdown has a popup
- `aria-expanded` - Shows if menu is open
- `aria-controls` - References the menu element
- `aria-activedescendant` - Indicates currently focused option
- `aria-selected` - Shows selected state of options
- `role="combobox"` - Identifies as a combobox
- `role="listbox"` - Identifies the menu as a listbox
- `role="option"` - Identifies each option

### Focus Management
- Focus automatically moves to selected option when menu opens
- Focus returns to button when menu closes
- Proper focus trapping within the dropdown

### Screen Reader Support
- Both native and custom versions are fully accessible
- Proper labeling and descriptions
- State announcements for selection changes

## Styling

### CSS Custom Properties

The component uses CSS custom properties for theming:

```css
--dropdown-button-bg: #FFF;
--dropdown-button-color: #1B1B1B;
--dropdown-button-height: 40px;
--dropdown-button-padding-left: 8px;
--dropdown-button-padding-right: 40px;
--dropdown-chevron-color: #1B1B1B;
--dropdown-menu-bg: #FFF;
--dropdown-menu-border: 1px solid #dfe1e2;
--dropdown-item-hover-bg: #dfe1e2;
--dropdown-item-selected-bg: #dfe1e2;
--dropdown-error-color: #B50909;
--dropdown-disabled-bg: #757575;
```

### Custom Styling

You can customize the appearance by overriding CSS variables:

```css
.my-custom-dropdown {
  --dropdown-button-bg: #f0f0f0;
  --dropdown-button-color: #333;
  --dropdown-chevron-color: #666;
}
```

## Browser Support

- **Modern Browsers**: Full support for all features
- **Mobile Browsers**: Native select fallback ensures compatibility
- **Screen Readers**: Full accessibility support
- **Keyboard Navigation**: Complete keyboard support on desktop

## Performance Considerations

- **Mobile**: Native select provides optimal performance
- **Desktop**: Custom dropdown with efficient event handling
- **Bundle Size**: Minimal impact due to conditional rendering
- **Memory**: Cleanup of event listeners and timeouts

## Testing

The component includes comprehensive tests covering:

- Basic rendering and functionality
- Error states and validation
- Disabled states
- Keyboard navigation
- Accessibility features
- Mobile/desktop detection

### Testing Custom Dropdown Behavior

For testing the custom dropdown features (keyboard navigation, type-to-search) in any environment, use the `forceCustom` prop:

```jsx
<Dropdown
  forceCustom={true}
  // ... other props
/>
```

This is particularly useful in Storybook or testing environments where you want to showcase the enhanced desktop features.

Run tests with:
```bash
npm test -- --testPathPattern=Dropdown.test.jsx
```

## Storybook Examples

View interactive examples in Storybook:

```bash
npm run storybook
```

Then navigate to the Dropdown component section to see:
- Basic usage examples
- Error states
- Disabled states
- Long option labels
- Comparison with native HTML select

## Migration from Previous Versions

If you're upgrading from a previous version:

1. **No Breaking Changes**: The API remains the same
2. **Enhanced Features**: New keyboard navigation and mobile support
3. **Better Accessibility**: Improved ARIA support and focus management
4. **Visual Consistency**: Native select now matches custom styling

## Contributing

When contributing to this component:

1. **Test on Both Platforms**: Ensure mobile and desktop behavior works correctly
2. **Accessibility**: Verify with screen readers and keyboard navigation
3. **Visual Consistency**: Check that native select styling matches custom dropdown
4. **Performance**: Monitor bundle size and runtime performance

## Related Components

- **Button**: For triggering actions
- **TextInput**: For text input fields
- **Checkbox**: For single selection
- **RadioButtons**: For single selection from a group 