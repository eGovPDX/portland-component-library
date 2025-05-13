import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom';
import Dropdown from './Dropdown';

const mockOptions = [
  { value: '1', label: 'Option 1' },
  { value: '2', label: 'Option 2' },
  { value: '3', label: 'Option 3' },
];

describe('Dropdown Component', () => {
  test('renders with a label and default option', () => {
    render(
      <Dropdown
        id="test-dropdown"
        label="Test Label"
        options={mockOptions}
        defaultOptionLabel="-Choose-"
      />
    );
    expect(screen.getByLabelText('Test Label')).toBeInTheDocument();
    const button = screen.getByRole('combobox');
    expect(button).toBeInTheDocument();
    expect(button).toHaveTextContent('-Choose-');
    // Open the menu and check for options
    fireEvent.click(button);
    expect(screen.getByText('Option 1')).toBeInTheDocument();
  });

  test('renders without a label if not provided', () => {
    render(<Dropdown id="test-dropdown" options={mockOptions} />);
    expect(screen.queryByLabelText('Test Label')).not.toBeInTheDocument();
    const button = screen.getByRole('combobox');
    expect(button).toBeInTheDocument();
    expect(button).toHaveTextContent('- Select -');
  });

  test('calls onSelect when an option is chosen', () => {
    const handleSelect = jest.fn();
    render(
      <Dropdown
        id="test-dropdown"
        label="Test Label"
        options={mockOptions}
        onSelect={handleSelect}
      />
    );
    const button = screen.getByRole('combobox');
    fireEvent.click(button);
    const option2 = screen.getByText('Option 2');
    fireEvent.click(option2);
    expect(handleSelect).toHaveBeenCalledWith('2');
    // The button should now show the selected value
    expect(button).toHaveTextContent('Option 2');
  });

  test('is disabled when the disabled prop is true', () => {
    render(
      <Dropdown
        id="test-dropdown"
        label="Test Label"
        options={mockOptions}
        disabled
      />
    );
    const button = screen.getByRole('combobox');
    expect(button).toBeDisabled();
  });

  test('displays an error message when error prop is a string and there is a label', () => {
    render(
      <Dropdown
        id="test-dropdown"
        label="Test Label"
        options={mockOptions}
        error="This is an error"
      />
    );
    expect(screen.getByText('This is an error')).toBeInTheDocument();
    const label = screen.getByText('Test Label');
    expect(label).toHaveClass('usa-label--error');
    const button = screen.getByRole('combobox');
    expect(button).toHaveClass('usa-input--error');
  });

  test('displays an error message below when error prop is a string and there is NO label', () => {
    const errorMessage = "Error, please select an option.";
    render(
      <Dropdown
        id="no-label-error-dropdown"
        options={mockOptions}
        error={errorMessage}
      />
    );
    const errorElement = screen.getByText(errorMessage);
    expect(errorElement).toBeInTheDocument();
    expect(errorElement).toHaveClass('usa-error-message');
    const button = screen.getByRole('combobox');
    expect(button).toHaveClass('usa-input--error');
  });

  test('applies error styling when error prop is true (boolean) and there is a label', () => {
    render(
      <Dropdown
        id="test-dropdown-bool-error"
        label="Test Label Bool Error"
        options={mockOptions}
        error={true}
      />
    );
    expect(screen.getByText('This field is required.')).toBeInTheDocument(); 
    expect(screen.getByText('Test Label Bool Error')).toHaveClass('usa-label--error');
    const button = screen.getByRole('combobox');
    expect(button).toHaveClass('usa-input--error');
  });

  test('renders with pre-selected value', () => {
    render(
      <Dropdown
        id="test-dropdown"
        label="Test Label"
        options={mockOptions}
        selectedOptionValue="2"
      />
    );
    const button = screen.getByRole('combobox');
    expect(button).toHaveTextContent('Option 2');
  });

  test('updates value when selectedOptionValue prop changes', () => {
    const { rerender } = render(
      <Dropdown
        id="test-dropdown"
        label="Test Label"
        options={mockOptions}
        selectedOptionValue="1"
      />
    );
    const button = screen.getByRole('combobox');
    expect(button).toHaveTextContent('Option 1');

    rerender(
      <Dropdown
        id="test-dropdown"
        label="Test Label"
        options={mockOptions}
        selectedOptionValue="3"
      />
    );
    expect(button).toHaveTextContent('Option 3');
  });
}); 