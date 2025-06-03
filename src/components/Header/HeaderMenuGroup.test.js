import React from 'react';
import { render, screen } from '@testing-library/react';
import { HeaderMenuGroup } from './HeaderMenuGroup';

const defaultProps = {
  mainHeading: 'Test Menu',
  id: 'test-menu',
  items: [
    { label: 'Item 1', href: '/item1' },
    { label: 'Item 2', href: '/item2' }
  ]
};

describe('HeaderMenuGroup', () => {
  it('renders with default props', () => {
    render(<HeaderMenuGroup {...defaultProps} />);
    
    expect(screen.getByRole('navigation')).toBeInTheDocument();
    expect(screen.getByRole('menu')).toHaveClass('header-menu-group-items');
  });

  it('renders all menu items', () => {
    render(<HeaderMenuGroup {...defaultProps} />);
    
    const items = screen.getAllByRole('menuitem');
    expect(items).toHaveLength(2);
  });

  it('has correct ARIA attributes', () => {
    render(<HeaderMenuGroup {...defaultProps} />);
    
    const nav = screen.getByRole('navigation');
    expect(nav).toHaveAttribute('aria-labelledby', 'test-menu-heading');
    expect(screen.getByRole('heading')).toHaveAttribute('id', 'test-menu-heading');
  });

  it('applies custom className', () => {
    render(<HeaderMenuGroup {...defaultProps} className="custom-class" />);
    
    const nav = screen.getByRole('navigation');
    expect(nav).toHaveClass('header-menu-group');
    expect(nav).toHaveClass('custom-class');
  });
}); 