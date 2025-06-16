import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import { RadioButtons } from './RadioButtons';

const options = [
  { value: 'option1', labelText: 'Option 1' },
  { value: 'option2', labelText: 'Option 2' },
  { value: 'option3', labelText: 'Option 3', disabled: true },
];

describe('RadioButtons', () => {
  it('renders the radio button group with a title', () => {
    render(<RadioButtons name="test" title="Test Title" options={options} onChange={() => {}} />);
    expect(screen.getByText('Test Title')).toBeInTheDocument();
  });

  it('renders all options', () => {
    render(<RadioButtons name="test" title="Test Title" options={options} onChange={() => {}} />);
    expect(screen.getByLabelText('Option 1')).toBeInTheDocument();
    expect(screen.getByLabelText('Option 2')).toBeInTheDocument();
    expect(screen.getByLabelText('Option 3')).toBeInTheDocument();
  });

  it('handles selection changes', () => {
    const handleChange = jest.fn();
    render(<RadioButtons name="test" title="Test Title" options={options} onChange={handleChange} />);
    
    fireEvent.click(screen.getByLabelText('Option 2'));
    expect(handleChange).toHaveBeenCalledWith('option2');
  });

  it('disables options correctly', () => {
    render(<RadioButtons name="test" title="Test Title" options={options} onChange={() => {}} />);
    expect(screen.getByLabelText('Option 3')).toBeDisabled();
  });

  it('displays an error message when required and no option is selected', () => {
    render(
      <RadioButtons
        name="test"
        title="Test Title"
        options={options}
        required
        errorMessage="This field is required"
        onChange={() => {}}
      />
    );
    expect(screen.getByText('This field is required')).toBeInTheDocument();
  });

  it('applies the tiled class when the tiled prop is true', () => {
    const { container } = render(
      <RadioButtons name="test" title="Test Title" options={options} tiled onChange={() => {}} />
    );
    expect(container.firstChild).toHaveClass('tiled');
  });
}); 