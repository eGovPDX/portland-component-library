import React from 'react';
import { render, screen } from '@testing-library/react';
import { Breadcrumbs } from './Breadcrumbs';

// Mock ResizeObserver
class ResizeObserverMock {
  observe() {}
  unobserve() {}
  disconnect() {}
}

global.ResizeObserver = ResizeObserverMock;

describe('Breadcrumbs', () => {
  const defaultItems = [
    { text: 'Home', href: '/' },
    { text: 'Services', href: '/services' },
    { text: 'Current Page' },
  ];

  beforeAll(() => {
    // Mock window.innerWidth
    Object.defineProperty(window, 'innerWidth', {
      writable: true,
      configurable: true,
      value: 1024,
    });
  });

  it('renders all items correctly', () => {
    render(<Breadcrumbs items={defaultItems} />);
    
    expect(screen.getByText('Home')).toBeInTheDocument();
    expect(screen.getByText('Services')).toBeInTheDocument();
    expect(screen.getByText('Current Page')).toBeInTheDocument();
  });

  it('renders correct links and current page', () => {
    render(<Breadcrumbs items={defaultItems} />);
    
    const homeLink = screen.getByText('Home').closest('a');
    const servicesLink = screen.getByText('Services').closest('a');
    const currentPage = screen.getByText('Current Page');

    expect(homeLink).toHaveAttribute('href', '/');
    expect(servicesLink).toHaveAttribute('href', '/services');
    expect(currentPage).toHaveAttribute('aria-current', 'page');
  });

  it('renders with custom separator', () => {
    const customSeparator = <span data-testid="custom-separator">/</span>;
    render(<Breadcrumbs items={defaultItems} customSeparator={customSeparator} />);
    
    expect(screen.getAllByTestId('custom-separator')).toHaveLength(2);
  });

  it('renders in mobile view', () => {
    // Set mobile width
    window.innerWidth = 375;
    
    render(<Breadcrumbs items={defaultItems} />);
    
    const nav = screen.getByRole('navigation');
    expect(nav).toHaveClass('breadcrumb');
  });

  it('has correct accessibility attributes', () => {
    render(<Breadcrumbs items={defaultItems} />);
    
    const nav = screen.getByRole('navigation');
    expect(nav).toHaveAttribute('aria-label', 'Breadcrumbs');
    
    const currentPage = screen.getByText('Current Page');
    expect(currentPage).toHaveAttribute('aria-current', 'page');
  });
}); 