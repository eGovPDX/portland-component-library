import React from 'react';
import { render, screen } from '@testing-library/react';
import { HeaderMenuItem } from './HeaderMenuItem';

describe('HeaderMenuItem', () => {
  it('renders basic menu item', () => {
    const item = {
      label: 'Test Item',
      href: '/test'
    };
    
    render(<HeaderMenuItem item={item} />);
    
    const menuItem = screen.getByRole('menuitem');
    expect(menuItem).toBeInTheDocument();
    expect(menuItem).toHaveClass('pgov-header-menu-item');
    
    const link = screen.getByRole('link');
    expect(link).toHaveAttribute('href', '/test');
    expect(link).toHaveClass('pgov-header-menu-link');
    
    const title = screen.getByText('Test Item');
    expect(title).toHaveClass('pgov-header-menu-link-title');
  });

  it('renders menu item with description', () => {
    const item = {
      label: 'Test Item',
      href: '/test',
      description: 'Test Description'
    };
    
    render(<HeaderMenuItem item={item} />);
    
    expect(screen.getByText('Test Description')).toHaveClass('pgov-header-menu-link-description');
  });

  it('renders menu item with current state', () => {
    const item = {
      label: 'Test Item',
      href: '/test',
      current: true
    };
    
    render(<HeaderMenuItem item={item} />);
    
    const link = screen.getByRole('link');
    expect(link).toHaveAttribute('aria-current', 'page');
  });
}); 