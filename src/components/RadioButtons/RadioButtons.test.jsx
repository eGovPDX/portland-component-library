import React from 'react';
import { screen, fireEvent } from '@testing-library/react';
import { renderWithI18n } from '../../test-utils/i18n-test-utils';
import { RadioButtons } from './RadioButtons';

const options = [
  { value: 'option1', labelText: 'Option 1' },
  { value: 'option2', labelText: 'Option 2' },
  { value: 'option3', labelText: 'Option 3', disabled: true },
];

describe('RadioButtons', () => {
  it('renders the radio button group with a legend', () => {
    renderWithI18n(<RadioButtons name="test" legend="Test Title" options={options} onChange={() => {}} />);
    expect(screen.getByText('Test Title')).toBeInTheDocument();
  });

  it('renders all options', () => {
    renderWithI18n(<RadioButtons name="test" legend="Test Title" options={options} onChange={() => {}} />);
    expect(screen.getByLabelText('Option 1')).toBeInTheDocument();
    expect(screen.getByLabelText('Option 2')).toBeInTheDocument();
    expect(screen.getByLabelText('Option 3')).toBeInTheDocument();
  });

  it('handles selection changes', () => {
    const handleChange = jest.fn();
    renderWithI18n(<RadioButtons name="test" legend="Test Title" options={options} onChange={handleChange} />);
    
    fireEvent.click(screen.getByLabelText('Option 2'));
    expect(handleChange).toHaveBeenCalledWith('option2');
  });

  it('disables options correctly', () => {
    renderWithI18n(<RadioButtons name="test" legend="Test Title" options={options} onChange={() => {}} />);
    expect(screen.getByLabelText('Option 3')).toBeDisabled();
  });

  it('displays an error message when required and no option is selected', () => {
    renderWithI18n(
      <RadioButtons
        name="test"
        legend="Test Title"
        options={options}
        required
        errorMessage="This field is required"
        onChange={() => {}}
      />
    );
    expect(screen.getByText('This field is required')).toBeInTheDocument();
  });

  it('applies the tiled class when the tiled prop is true', () => {
    const { container } = renderWithI18n(
      <RadioButtons name="test" legend="Test Title" options={options} tiled onChange={() => {}} />
    );
    expect(container.firstChild).toHaveClass('tiled');
  });
}); 