import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import { Header } from './Header';

// Mock the child components
jest.mock('./HeaderLogo', () => ({
  HeaderLogo: ({ title, tagline }) => (
    <div data-testid="mock-header-logo">
      <span>{title}</span>
      {tagline && <span data-testid="tagline">{tagline}</span>}
    </div>
  )
}));

jest.mock('./HeaderMobileMenu', () => ({
  HeaderMobileMenu: ({ isOpen, onClick }) => (
    <button 
      data-testid="mock-mobile-menu-button" 
      data-is-open={isOpen} 
      onClick={onClick}
    >
      Toggle Menu
    </button>
  )
}));

jest.mock('./HeaderMenuItem', () => ({
  HeaderMenuItem: ({ item }) => (
    <li data-testid="mock-menu-item">
      <span>{item.label}</span>
    </li>
  )
}));

describe('Header', () => {
  const defaultProps = {
    title: 'Test Title',
    logoUrl: 'test-logo.svg',
    logoAlt: 'Test Logo Alt',
    navItems: [
      { label: 'Item 1', href: '/item1' },
      { label: 'Item 2', href: '/item2' }
    ]
  };

  test('renders with default props', () => {
    render(<Header {...defaultProps} />);
    
    expect(screen.getByTestId('mock-header-logo')).toBeInTheDocument();
    expect(screen.getByText('Test Title')).toBeInTheDocument();
    expect(screen.getByTestId('mock-mobile-menu-button')).toBeInTheDocument();
    
    // Mobile menu should be closed by default
    expect(screen.getByTestId('mock-mobile-menu-button')).toHaveAttribute('data-is-open', 'false');
  });

  test('renders with tagline when provided', () => {
    render(<Header {...defaultProps} tagline="Test Tagline" />);
    
    expect(screen.getByTestId('tagline')).toBeInTheDocument();
    expect(screen.getByText('Test Tagline')).toBeInTheDocument();
  });

  test('toggles mobile menu when button is clicked', () => {
    render(<Header {...defaultProps} />);
    
    const mobileMenuButton = screen.getByTestId('mock-mobile-menu-button');
    
    // Menu should be closed initially
    expect(mobileMenuButton).toHaveAttribute('data-is-open', 'false');
    expect(document.querySelector('.pgov-header-mobile-dropdown.is-open')).not.toBeInTheDocument();
    
    // Click to open
    fireEvent.click(mobileMenuButton);
    
    // Menu should now be open
    expect(mobileMenuButton).toHaveAttribute('data-is-open', 'true');
    expect(document.querySelector('.pgov-header-mobile-dropdown.is-open')).toBeInTheDocument();
    
    // Click again to close
    fireEvent.click(mobileMenuButton);
    
    // Menu should be closed again
    expect(mobileMenuButton).toHaveAttribute('data-is-open', 'false');
    expect(document.querySelector('.pgov-header-mobile-dropdown.is-open')).not.toBeInTheDocument();
  });

  test('renders navigation items', () => {
    render(<Header {...defaultProps} />);
    
    const menuItems = screen.getAllByTestId('mock-menu-item');
    expect(menuItems).toHaveLength(2);
    expect(screen.getByText('Item 1')).toBeInTheDocument();
    expect(screen.getByText('Item 2')).toBeInTheDocument();
  });

  test('applies custom className when provided', () => {
    render(<Header {...defaultProps} className="custom-class" />);
    
    const headerElement = screen.getByTestId('mock-header-logo').closest('.pgov-header');
    expect(headerElement).toHaveClass('pgov-header');
    expect(headerElement).toHaveClass('custom-class');
  });
}); 