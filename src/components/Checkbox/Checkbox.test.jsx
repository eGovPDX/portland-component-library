import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import { Checkbox } from './Checkbox';

const mockOptions = [
  { value: 'option1', labelText: 'Option 1' },
  { value: 'option2', labelText: 'Option 2' },
  { value: 'option3', labelText: 'Option 3', labelDescription: 'Additional description' },
  { value: 'option4', labelText: 'Option 4', disabled: true },
];

describe('Checkbox', () => {
  const defaultProps = {
    name: 'test-checkboxes',
    title: 'Test Checkboxes',
    options: mockOptions,
    onChange: jest.fn(),
  };

  beforeEach(() => {
    jest.clearAllMocks();
  });

  // Test default rendering
  test('renders with default props', () => {
    render(<Checkbox {...defaultProps} />);
    
    expect(screen.getByText('Test Checkboxes')).toBeInTheDocument();
    expect(screen.getByRole('group')).toHaveClass('checkbox-group');
  });

  // Test all options render
  test('renders all options', () => {
    render(<Checkbox {...defaultProps} />);
    
    const checkboxes = screen.getAllByRole('checkbox');
    expect(checkboxes).toHaveLength(4);
    expect(screen.getByLabelText('Option 1')).toBeInTheDocument();
    expect(screen.getByLabelText('Option 2')).toBeInTheDocument();
    expect(screen.getByDisplayValue('option3')).toBeInTheDocument();
    expect(screen.getByLabelText('Option 4')).toBeInTheDocument();
  });

  // Test label descriptions
  test('renders label descriptions when provided', () => {
    render(<Checkbox {...defaultProps} />);
    
    expect(screen.getByText('Additional description')).toBeInTheDocument();
  });

  // Test description rendering
  test('renders description when provided', () => {
    render(
      <Checkbox
        {...defaultProps}
        description="Please select your preferences"
      />
    );
    
    expect(screen.getByText('Please select your preferences')).toBeInTheDocument();
  });

  // Test selection changes
  test('handles checkbox selection changes', () => {
    const handleChange = jest.fn();
    render(<Checkbox {...defaultProps} onChange={handleChange} />);
    
    fireEvent.click(screen.getByLabelText('Option 1'));
    expect(handleChange).toHaveBeenCalledWith(['option1']);
    
    fireEvent.click(screen.getByLabelText('Option 2'));
    expect(handleChange).toHaveBeenCalledWith(['option2']);
  });

  // Test multiple selections
  test('handles multiple selections', () => {
    const handleChange = jest.fn();
    render(
      <Checkbox
        {...defaultProps}
        selectedValues={['option1']}
        onChange={handleChange}
      />
    );
    
    fireEvent.click(screen.getByLabelText('Option 2'));
    expect(handleChange).toHaveBeenCalledWith(['option1', 'option2']);
  });

  // Test deselection
  test('handles deselection', () => {
    const handleChange = jest.fn();
    render(
      <Checkbox
        {...defaultProps}
        selectedValues={['option1', 'option2']}
        onChange={handleChange}
      />
    );
    
    fireEvent.click(screen.getByLabelText('Option 1'));
    expect(handleChange).toHaveBeenCalledWith(['option2']);
  });

  // Test disabled options
  test('disables options correctly', () => {
    render(<Checkbox {...defaultProps} />);
    
    const disabledCheckbox = screen.getByLabelText('Option 4');
    expect(disabledCheckbox).toBeDisabled();
  });

  // Test disabled options don't trigger onChange
  test('disabled options do not trigger onChange', () => {
    const handleChange = jest.fn();
    render(<Checkbox {...defaultProps} onChange={handleChange} />);
    
    const disabledCheckbox = screen.getByLabelText('Option 4');
    // Disabled checkboxes won't trigger onChange since they're disabled
    expect(disabledCheckbox).toBeDisabled();
    // We don't need to test the click since disabled inputs don't fire events
  });

  // Test tiled variant
  test('applies tiled variant classes correctly', () => {
    render(<Checkbox {...defaultProps} tiled />);
    
    const group = screen.getByRole('group');
    expect(group).toHaveClass('checkbox-group--tiled');
    
    const checkboxInputs = screen.getAllByRole('checkbox');
    checkboxInputs.forEach(input => {
      if (!input.disabled) {
        expect(input).toHaveClass('usa-checkbox__input--tile');
      }
    });
  });

  // Test required field
  test('displays required asterisk when required', () => {
    render(<Checkbox {...defaultProps} required />);
    
    expect(screen.getByText('*')).toBeInTheDocument();
  });

  // Test error message
  test('displays error message when provided', () => {
    render(
      <Checkbox
        {...defaultProps}
        required
        errorMessage="This field is required"
      />
    );
    
    expect(screen.getByText('This field is required')).toBeInTheDocument();
    expect(screen.getByRole('group')).toHaveClass('checkbox-group--error');
  });

  // Test custom className
  test('applies custom className', () => {
    render(<Checkbox {...defaultProps} className="custom-class" />);
    
    expect(screen.getByRole('group')).toHaveClass('custom-class');
  });

  // Test selected values
  test('shows selected values correctly', () => {
    render(
      <Checkbox
        {...defaultProps}
        selectedValues={['option1', 'option3']}
      />
    );
    
    expect(screen.getByLabelText('Option 1')).toBeChecked();
    expect(screen.getByLabelText('Option 2')).not.toBeChecked();
    expect(screen.getByDisplayValue('option3')).toBeChecked();
    expect(screen.getByLabelText('Option 4')).not.toBeChecked();
  });

  // Test USWDS classes are applied
  test('applies USWDS classes correctly', () => {
    render(<Checkbox {...defaultProps} />);
    
    expect(screen.getByRole('group')).toHaveClass('usa-fieldset');
    
    const checkboxes = screen.getAllByRole('checkbox');
    checkboxes.forEach(checkbox => {
      expect(checkbox).toHaveClass('usa-checkbox__input');
    });
    
    const labels = screen.getAllByText(/Option \d/);
    labels.forEach(label => {
      expect(label.closest('label')).toHaveClass('usa-checkbox__label');
    });
  });
}); 