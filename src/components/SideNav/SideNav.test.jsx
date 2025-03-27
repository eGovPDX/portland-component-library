import React from 'react';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { SideNav } from './SideNav';

const mockItems = [
  { title: 'Research', link: '#research' },
  { title: 'Prepare', link: '#prepare' },
  { title: 'Apply', link: '#apply' },
];

describe('SideNav', () => {
  it('renders all navigation items', () => {
    render(<SideNav items={mockItems} activeIndex={0} />);
    
    mockItems.forEach(item => {
      expect(screen.getByText(item.title)).toBeInTheDocument();
    });
  });

  it('marks the active item correctly', () => {
    render(<SideNav items={mockItems} activeIndex={1} />);
    
    const activeItem = screen.getByText('Prepare').closest('a');
    expect(activeItem).toHaveClass('active');
    expect(activeItem).toHaveAttribute('aria-current', 'step');
  });

  it('renders correct links for each item', () => {
    render(<SideNav items={mockItems} activeIndex={0} />);
    
    mockItems.forEach(item => {
      const link = screen.getByText(item.title).closest('a');
      expect(link).toHaveAttribute('href', item.link);
    });
  });

  it('has proper accessibility attributes', () => {
    render(<SideNav items={mockItems} activeIndex={0} />);
    
    const nav = screen.getByRole('navigation');
    expect(nav).toHaveAttribute('aria-label', 'Section Navigation');
  });

  it('only shows active indicator for active item', () => {
    render(<SideNav items={mockItems} activeIndex={1} />);
    
    const activeIndicators = document.getElementsByClassName('active-indicator');
    expect(activeIndicators).toHaveLength(1);
    
    const activeItem = screen.getByText('Prepare').closest('a');
    expect(activeItem).toContainElement(activeIndicators[0]);
  });
}); 