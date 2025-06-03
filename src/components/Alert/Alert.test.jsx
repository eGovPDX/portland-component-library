import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import { Alert } from './Alert';

describe('Alert', () => {
  const defaultProps = {
    type: 'info',
    heading: 'Test Heading',
    children: 'Test Content',
  };

  test('renders with default props', () => {
    render(<Alert {...defaultProps} />);
    
    expect(screen.getByText('Test Heading')).toBeInTheDocument();
    expect(screen.getByText('Test Content')).toBeInTheDocument();
    expect(screen.getByRole('heading', { level: 4 })).toHaveTextContent('Test Heading');
  });

  test('renders different alert types correctly', () => {
    const types = ['info', 'warning', 'success', 'error', 'emergency'];
    
    types.forEach(type => {
      const { container } = render(<Alert {...defaultProps} type={type} />);
      expect(container.querySelector(`.alert--${type}`)).toBeInTheDocument();
      // Cleanup after each render
      container.remove();
    });
  });

  test('renders slim variant correctly', () => {
    const { container } = render(<Alert {...defaultProps} slim={true} />);
    expect(container.querySelector('.alert--slim')).toBeInTheDocument();
  });

  test('renders without icon when noIcon is true', () => {
    const { container } = render(<Alert {...defaultProps} noIcon={true} />);
    expect(container.querySelector('.alert--no-icon')).toBeInTheDocument();
    expect(container.querySelector('.alert__icon')).not.toBeInTheDocument();
  });

  test('renders with icon by default', () => {
    const { container } = render(<Alert {...defaultProps} />);
    expect(container.querySelector('.alert__icon')).toBeInTheDocument();
  });

  test('applies custom className when provided', () => {
    const { container } = render(<Alert {...defaultProps} className="custom-class" />);
    expect(container.querySelector('.alert')).toHaveClass('custom-class');
  });

  test('renders without heading when not provided', () => {
    render(<Alert>{defaultProps.children}</Alert>);
    expect(screen.queryByRole('heading')).not.toBeInTheDocument();
  });

  test('has correct ARIA role for error and emergency alerts', () => {
    const errorTypes = ['error', 'emergency'];
    
    errorTypes.forEach(type => {
      const { container } = render(<Alert {...defaultProps} type={type} />);
      expect(container.querySelector('.alert')).toHaveAttribute('role', 'alert');
      container.remove();
    });
  });

  test('does not have ARIA role for non-error alerts', () => {
    const nonErrorTypes = ['info', 'warning', 'success'];
    
    nonErrorTypes.forEach(type => {
      const { container } = render(<Alert {...defaultProps} type={type} />);
      expect(container.querySelector('.alert')).not.toHaveAttribute('role');
      container.remove();
    });
  });
}); 