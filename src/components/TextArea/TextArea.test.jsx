import { render, screen, fireEvent } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import TextArea from './TextArea';

describe('TextArea', () => {
  it('renders with basic props', () => {
    render(
      <TextArea
        id="test"
        name="test"
        label="Test Label"
        description="Test Description"
      />
    );

    expect(screen.getByLabelText('Test Label')).toBeInTheDocument();
    expect(screen.getByText('Test Description')).toBeInTheDocument();
  });

  it('handles value changes', () => {
    const handleChange = jest.fn();
    render(
      <TextArea
        id="test"
        name="test"
        label="Test Label"
        onChange={handleChange}
      />
    );

    const textarea = screen.getByLabelText('Test Label');
    fireEvent.change(textarea, { target: { value: 'new value' } });

    expect(handleChange).toHaveBeenCalled();
    expect(textarea.value).toBe('new value');
  });

  it('displays error message', () => {
    render(
      <TextArea
        id="test"
        name="test"
        label="Test Label"
        error="Test error"
      />
    );

    expect(screen.getByText('Test error')).toBeInTheDocument();
  });

  it('shows required indicator', () => {
    render(
      <TextArea
        id="test"
        name="test"
        label="Test Label"
        required
      />
    );

    expect(screen.getByText('*')).toBeInTheDocument();
  });

  it('respects maxCharacters limit', async () => {
    render(
      <TextArea
        id="test"
        name="test"
        label="Test Label"
        maxCharacters={5}
      />
    );

    const textarea = screen.getByLabelText('Test Label');
    await userEvent.type(textarea, '123456');

    const matches = screen.getAllByText((content, element) => {
      const hasText =
        element.textContent &&
        element.textContent.replace(/\s+/g, '') === '5/5characters';
      return hasText;
    });
    expect(matches.length).toBeGreaterThan(0);
  });

  it('updates character count', () => {
    render(
      <TextArea
        id="test"
        name="test"
        label="Test Label"
        maxCharacters={10}
      />
    );

    const textarea = screen.getByLabelText('Test Label');
    fireEvent.change(textarea, { target: { value: 'test' } });

    expect(screen.getByText('4/10 characters')).toBeInTheDocument();
  });

  it('handles disabled state', () => {
    render(
      <TextArea
        id="test"
        name="test"
        label="Test Label"
        disabled
      />
    );

    const textarea = screen.getByLabelText('Test Label');
    expect(textarea).toBeDisabled();
  });

  it('maintains focus after character limit reached', () => {
    render(
      <TextArea
        id="test"
        name="test"
        label="Test Label"
        maxCharacters={5}
      />
    );

    const textarea = screen.getByLabelText('Test Label');
    textarea.focus();
    fireEvent.change(textarea, { target: { value: '123456' } });

    expect(document.activeElement).toBe(textarea);
  });
}); 