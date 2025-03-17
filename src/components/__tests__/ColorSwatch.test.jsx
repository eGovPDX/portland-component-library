import React from 'react';
import { render, screen } from '@testing-library/react';
import { ColorSwatch } from '../ColorSwatch';

describe('ColorSwatch', () => {
  const defaultProps = {
    colorVar: '--pgov-color-blue-50',
    name: 'Blue 50',
    description: '#0050d8'
  };

  it('renders with required props', () => {
    render(<ColorSwatch {...defaultProps} />);
    
    // Check if the color swatch div is rendered with correct background color
    const swatch = screen.getByLabelText('Color swatch for Blue 50');
    expect(swatch).toHaveStyle({ backgroundColor: 'var(--pgov-color-blue-50)' });
    
    // Check if name is rendered
    expect(screen.getByText('Blue 50')).toBeInTheDocument();
    
    // Check if color variable is rendered
    expect(screen.getByText('--pgov-color-blue-50')).toBeInTheDocument();
  });

  it('renders without description when not provided', () => {
    const { description, ...propsWithoutDescription } = defaultProps;
    render(<ColorSwatch {...propsWithoutDescription} />);
    
    // Check if description is not rendered
    expect(screen.queryByText('#0050d8')).not.toBeInTheDocument();
  });

  it('renders with custom color variable', () => {
    const customProps = {
      ...defaultProps,
      colorVar: '--pgov-color-red-60',
      name: 'Red 60',
      description: '#b50909'
    };
    
    render(<ColorSwatch {...customProps} />);
    
    // Check if the color swatch div is rendered with correct background color
    const swatch = screen.getByLabelText('Color swatch for Red 60');
    expect(swatch).toHaveStyle({ backgroundColor: 'var(--pgov-color-red-60)' });
    
    // Check if name is rendered
    expect(screen.getByText('Red 60')).toBeInTheDocument();
    
    // Check if color variable is rendered
    expect(screen.getByText('--pgov-color-red-60')).toBeInTheDocument();
  });

  it('applies correct styling classes', () => {
    render(<ColorSwatch {...defaultProps} />);
    
    // Check if the container has the correct flex classes
    const container = screen.getByText('Blue 50').parentElement.parentElement;
    expect(container).toHaveClass('flex', 'items-center', 'mb-4');
    
    // Check if the swatch has the correct styling classes
    const swatch = screen.getByLabelText('Color swatch for Blue 50');
    expect(swatch).toHaveClass('w-16', 'h-16', 'rounded', 'mr-4', 'shadow-md');
  });
}); 