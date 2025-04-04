import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import { faDownload } from '@fortawesome/free-solid-svg-icons';
import { Button } from './Button';

// Mock FontAwesome component
jest.mock('@fortawesome/react-fontawesome', () => ({
  FontAwesomeIcon: () => <span data-testid="mock-icon" />
}));

describe('Button', () => {
  // Test default rendering
  test('renders with default props', () => {
    render(<Button>Click me</Button>);
    const button = screen.getByRole('button', { name: /click me/i });
    expect(button).toBeInTheDocument();
    expect(button).toHaveClass('usa-button');
  });

  // Test all variants
  test.each([
    ['secondary', 'usa-button--secondary'],
    ['accent-cool', 'usa-button--accent-cool'],
    ['accent-warm', 'usa-button--accent-warm'],
    ['base', 'usa-button--base'],
    ['outline', 'usa-button--outline'],
    ['outline-inverse', 'usa-button--outline-inverse']
  ])('renders %s variant correctly', (variant, expectedClass) => {
    render(<Button variant={variant}>Button</Button>);
    expect(screen.getByRole('button')).toHaveClass(expectedClass);
  });

  // Test big size
  test('renders big size correctly', () => {
    render(<Button size="big">Big Button</Button>);
    expect(screen.getByRole('button')).toHaveClass('usa-button--big');
  });

  // Test disabled state
  test('renders disabled state correctly', () => {
    render(<Button disabled>Disabled Button</Button>);
    const button = screen.getByRole('button');
    expect(button).toBeDisabled();
    expect(button).toHaveAttribute('aria-disabled', 'true');
  });

  // Test aria-disabled state
  test('renders aria-disabled state correctly', () => {
    render(<Button ariaDisabled>Aria Disabled Button</Button>);
    const button = screen.getByRole('button');
    expect(button).toHaveAttribute('aria-disabled', 'true');
    expect(button).not.toBeDisabled();
  });

  // Test unstyled variant
  test('renders unstyled variant correctly', () => {
    render(<Button unstyled>Unstyled Button</Button>);
    expect(screen.getByRole('button')).toHaveClass('usa-button--unstyled');
  });

  // Test click handler
  test('calls onClick handler when clicked', () => {
    const handleClick = jest.fn();
    render(<Button onClick={handleClick}>Clickable Button</Button>);
    fireEvent.click(screen.getByRole('button'));
    expect(handleClick).toHaveBeenCalledTimes(1);
  });

  // Test disabled click handler
  test('does not call onClick handler when disabled', () => {
    const handleClick = jest.fn();
    render(<Button disabled onClick={handleClick}>Disabled Button</Button>);
    fireEvent.click(screen.getByRole('button'));
    expect(handleClick).not.toHaveBeenCalled();
  });

  // Test start icon
  test('renders start icon correctly', () => {
    render(<Button startIcon={faDownload}>Download</Button>);
    const iconWrapper = screen.getByTestId('mock-icon').parentElement;
    expect(iconWrapper).toHaveClass('usa-button__icon', 'usa-button__icon--left');
  });

  // Test end icon
  test('renders end icon correctly', () => {
    render(<Button endIcon={faDownload}>Download</Button>);
    const iconWrapper = screen.getByTestId('mock-icon').parentElement;
    expect(iconWrapper).toHaveClass('usa-button__icon', 'usa-button__icon--right');
  });

  // Test custom className
  test('applies custom className', () => {
    render(<Button className="custom-class">Custom Button</Button>);
    expect(screen.getByRole('button')).toHaveClass('custom-class');
  });

  // Test type attribute
  test('renders with correct type attribute', () => {
    render(<Button type="submit">Submit Button</Button>);
    expect(screen.getByRole('button')).toHaveAttribute('type', 'submit');
  });
}); 