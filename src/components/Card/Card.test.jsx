import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import { Card } from './Card';

// Create a simple button component for testing
const TestButton = ({ children, onClick }) => (
  <button data-testid="test-button" onClick={onClick}>
    {children}
  </button>
);

describe('Card', () => {
  // Test default rendering
  test('renders with default props', () => {
    render(
      <Card
        heading="Test Heading"
        text="Test text content"
        actionButton={<TestButton>Test Action</TestButton>}
      />
    );
    
    // Check if heading, text, and action button are rendered
    expect(screen.getByText('Test Heading')).toBeInTheDocument();
    expect(screen.getByText('Test text content')).toBeInTheDocument();
    expect(screen.getByTestId('test-button')).toBeInTheDocument();
    expect(screen.getByText('Test Action')).toBeInTheDocument();
  });

  // Test without action button
  test('renders without action button when actionButton is not provided', () => {
    render(
      <Card
        heading="Test Heading"
        text="Test text content"
      />
    );
    
    expect(screen.getByText('Test Heading')).toBeInTheDocument();
    expect(screen.getByText('Test text content')).toBeInTheDocument();
    expect(screen.queryByTestId('test-button')).not.toBeInTheDocument();
  });

  // Test custom className
  test('applies custom className', () => {
    const { container } = render(
      <Card
        heading="Test Heading"
        text="Test text content"
        className="custom-class"
      />
    );
    
    expect(container.firstChild).toHaveClass('usa-card');
    expect(container.firstChild).toHaveClass('custom-class');
  });

  // Test onClick handler
  test('passes onClick handler to the button', () => {
    const handleClick = jest.fn();
    render(
      <Card
        heading="Test Heading"
        text="Test text content"
        actionButton={<TestButton>Test Action</TestButton>}
        onClick={handleClick}
      />
    );
    
    fireEvent.click(screen.getByTestId('test-button'));
    expect(handleClick).toHaveBeenCalledTimes(1);
  });
}); 