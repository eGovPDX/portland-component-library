import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom';
import { Button } from './Button';

describe('Button component', () => {
  test('renders button with default props', () => {
    render(<Button>Test Button</Button>);
    const buttonElement = screen.getByRole('button', { name: /test button/i });
    
    expect(buttonElement).toBeInTheDocument();
    expect(buttonElement).toHaveClass('portland-button');
    expect(buttonElement).toHaveClass('portland-button--primary');
    expect(buttonElement).toHaveClass('portland-button--medium');
    expect(buttonElement).not.toBeDisabled();
  });

  test('renders button with primary variant', () => {
    render(<Button variant="primary">Primary Button</Button>);
    const buttonElement = screen.getByRole('button');
    
    expect(buttonElement).toHaveClass('portland-button--primary');
  });

  test('renders button with secondary variant', () => {
    render(<Button variant="secondary">Secondary Button</Button>);
    const buttonElement = screen.getByRole('button');
    
    expect(buttonElement).toHaveClass('portland-button--secondary');
  });

  test('renders button with tertiary variant', () => {
    render(<Button variant="tertiary">Tertiary Button</Button>);
    const buttonElement = screen.getByRole('button');
    
    expect(buttonElement).toHaveClass('portland-button--tertiary');
  });

  test('renders button with small size', () => {
    render(<Button size="small">Small Button</Button>);
    const buttonElement = screen.getByRole('button');
    
    expect(buttonElement).toHaveClass('portland-button--small');
  });

  test('renders button with medium size', () => {
    render(<Button size="medium">Medium Button</Button>);
    const buttonElement = screen.getByRole('button');
    
    expect(buttonElement).toHaveClass('portland-button--medium');
  });

  test('renders button with large size', () => {
    render(<Button size="large">Large Button</Button>);
    const buttonElement = screen.getByRole('button');
    
    expect(buttonElement).toHaveClass('portland-button--large');
  });

  test('renders disabled button', () => {
    render(<Button disabled>Disabled Button</Button>);
    const buttonElement = screen.getByRole('button');
    
    expect(buttonElement).toBeDisabled();
  });

  test('applies additional className', () => {
    render(<Button className="custom-class">Button with Custom Class</Button>);
    const buttonElement = screen.getByRole('button');
    
    expect(buttonElement).toHaveClass('custom-class');
  });

  test('calls onClick callback when clicked', () => {
    const handleClick = jest.fn();
    render(<Button onClick={handleClick}>Clickable Button</Button>);
    const buttonElement = screen.getByRole('button');
    
    fireEvent.click(buttonElement);
    expect(handleClick).toHaveBeenCalledTimes(1);
  });

  test('does not call onClick when disabled button is clicked', () => {
    const handleClick = jest.fn();
    render(<Button disabled onClick={handleClick}>Disabled Button</Button>);
    const buttonElement = screen.getByRole('button');
    
    fireEvent.click(buttonElement);
    expect(handleClick).not.toHaveBeenCalled();
  });
}); 