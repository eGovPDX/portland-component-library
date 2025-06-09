import React from 'react';
import { render, screen, act } from '@testing-library/react';
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

  it('truncates items when truncateMiddle is true and breadcrumbs are long', async () => {
    const longItems = [
      { text: 'Home', href: '/' },
      { text: 'Level 1', href: '/level1' },
      { text: 'Level 2', href: '/level1/level2' },
      { text: 'Level 3', href: '/level1/level2/level3' },
      { text: 'Current Page' },
    ];

    // Set desktop width
    window.innerWidth = 1024;

    render(<Breadcrumbs items={longItems} truncateMiddle={true} />);

    // Wait for state updates to complete
    await act(async () => {
      await new Promise(resolve => setTimeout(resolve, 0));
    });
    
    // In truncated view, we should see Home, ellipsis, and Current Page
    expect(screen.getByText('Home')).toBeInTheDocument();
    expect(screen.getByLabelText('3 more levels')).toBeInTheDocument();
    expect(screen.getByText('Current Page')).toBeInTheDocument();

    // Middle items should not be visible
    expect(screen.queryByText('Level 1')).not.toBeInTheDocument();
    expect(screen.queryByText('Level 2')).not.toBeInTheDocument();
    expect(screen.queryByText('Level 3')).not.toBeInTheDocument();
  });

  it('has correct accessibility attributes', () => {
    render(<Breadcrumbs items={defaultItems} />);
    
    const nav = screen.getByRole('navigation');
    expect(nav).toHaveAttribute('aria-label', 'Breadcrumbs');
    
    const currentPage = screen.getByText('Current Page');
    expect(currentPage).toHaveAttribute('aria-current', 'page');
  });
}); 