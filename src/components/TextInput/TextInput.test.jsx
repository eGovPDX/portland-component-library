import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import { faCreditCard } from '@fortawesome/free-solid-svg-icons';
import { TextInput } from './TextInput';

// Mock FontAwesome component
jest.mock('@fortawesome/react-fontawesome', () => ({
  FontAwesomeIcon: () => <span data-testid="mock-icon" />
}));

describe('TextInput', () => {
  // Test default rendering
  test('renders with default props', () => {
    render(<TextInput id="test-input" label="Test Label" />);
    const input = screen.getByRole('textbox');
    const label = screen.getByText('Test Label');
    
    expect(input).toBeInTheDocument();
    expect(label).toBeInTheDocument();
    expect(input).toHaveClass('usa-input');
    expect(input).not.toBeDisabled();
  });

  // Test with description
  test('renders with description text', () => {
    render(
      <TextInput 
        id="test-input" 
        label="Test Label" 
        description="This is a description" 
      />
    );
    
    expect(screen.getByText('This is a description')).toBeInTheDocument();
  });

  // Test all states
  test.each([
    ['disabled', true, 'disabled'],
    ['error', false, 'error'],
    ['success', false, 'success']
  ])('renders %s state correctly', (state, isDisabled, className) => {
    render(
      <TextInput 
        id="test-input" 
        label="Test Label" 
        state={state} 
        disabled={isDisabled} 
      />
    );
    
    const input = screen.getByRole('textbox');
    expect(input).toHaveClass(`usa-input--${className}`);
    
    if (isDisabled) {
      expect(input).toBeDisabled();
    } else {
      expect(input).not.toBeDisabled();
    }
  });

  // Test all sizes
  test.each([
    ['2xs'],
    ['xs'],
    ['sm'],
    ['md'],
    ['lg'],
    ['xl'],
    ['2xl']
  ])('renders %s size correctly', (size) => {
    render(
      <TextInput 
        id="test-input" 
        label="Test Label" 
        size={size} 
      />
    );
    
    expect(screen.getByRole('textbox')).toHaveClass(`usa-input--${size}`);
  });

  // Test with error message
  test('renders error message when state is error', () => {
    render(
      <TextInput 
        id="test-input" 
        label="Test Label" 
        state="error" 
        errorMessage="This is an error message" 
      />
    );
    
    expect(screen.getByText('This is an error message')).toBeInTheDocument();
  });

  // Test value and onChange
  test('handles value and onChange', () => {
    const handleChange = jest.fn();
    render(
      <TextInput 
        id="test-input" 
        label="Test Label" 
        value="Test Value" 
        onChange={handleChange} 
      />
    );
    
    const input = screen.getByRole('textbox');
    expect(input).toHaveValue('Test Value');
    
    fireEvent.change(input, { target: { value: 'New Value' } });
    expect(handleChange).toHaveBeenCalledTimes(1);
  });

  // Test prefix icon
  test('renders prefix icon correctly', () => {
    render(
      <TextInput 
        id="test-input" 
        label="Test Label" 
        prefixIcon={faCreditCard} 
      />
    );
    
    expect(screen.getByTestId('mock-icon')).toBeInTheDocument();
    expect(screen.getByTestId('mock-icon').closest('.usa-input-prefix')).not.toBeNull();
  });

  // Test suffix content
  test('renders suffix content correctly', () => {
    render(
      <TextInput 
        id="test-input" 
        label="Test Label" 
        suffixContent="cm" 
      />
    );
    
    expect(screen.getByText('cm')).toBeInTheDocument();
    expect(screen.getByText('cm').closest('.usa-input-suffix')).not.toBeNull();
  });

  // Test pattern attribute
  test('applies pattern attribute', () => {
    render(
      <TextInput 
        id="test-input" 
        label="Test Label" 
        pattern="[0-9]{16}" 
      />
    );
    
    expect(screen.getByRole('textbox')).toHaveAttribute('pattern', '[0-9]{16}');
  });

  // Test aria-invalid when in error state
  test('sets aria-invalid when in error state', () => {
    render(
      <TextInput 
        id="test-input" 
        label="Test Label" 
        state="error" 
      />
    );
    
    expect(screen.getByRole('textbox')).toHaveAttribute('aria-invalid', 'true');
  });

  // Test custom className
  test('applies custom className', () => {
    render(
      <TextInput 
        id="test-input" 
        label="Test Label" 
        className="custom-class" 
      />
    );
    
    expect(screen.getByRole('textbox')).toHaveClass('custom-class');
  });
}); 