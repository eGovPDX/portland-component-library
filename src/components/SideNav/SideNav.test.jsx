import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import { SideNav } from './SideNav';

describe('SideNav', () => {
  const mockItems = [
    {
      title: 'Research',
      link: '#research',
      children: [
        { title: 'Property Information', link: '#property' },
        { title: 'Permit Types', link: '#permits' },
      ]
    },
    {
      title: 'Prepare',
      link: '#prepare',
    },
    {
      title: 'Apply',
      link: '#apply',
    },
  ];

  it('renders all top-level navigation items', () => {
    render(<SideNav items={mockItems} />);
    
    expect(screen.getByText('Research')).toBeInTheDocument();
    expect(screen.getByText('Prepare')).toBeInTheDocument();
    expect(screen.getByText('Apply')).toBeInTheDocument();
  });

  it('marks the active item correctly', () => {
    render(<SideNav items={mockItems} activeItemId="#prepare" />);
    
    const activeItem = screen.getByText('Prepare').closest('a');
    expect(activeItem).toHaveClass('active');
    expect(activeItem).toHaveAttribute('aria-current', 'page');
  });

  it('expands section when parent item is clicked', () => {
    render(<SideNav items={mockItems} />);
    
    const parentItem = screen.getByText('Research').closest('a');
    fireEvent.click(parentItem);
    
    expect(screen.getByText('Property Information')).toBeInTheDocument();
    expect(screen.getByText('Permit Types')).toBeInTheDocument();
    expect(parentItem).toHaveAttribute('aria-expanded', 'true');
  });

  it('collapses expanded section when clicked again', () => {
    render(<SideNav items={mockItems} />);
    
    const parentItem = screen.getByText('Research').closest('a');
    fireEvent.click(parentItem);
    fireEvent.click(parentItem);
    
    expect(screen.queryByText('Property Information')).not.toBeInTheDocument();
    expect(parentItem).toHaveAttribute('aria-expanded', 'false');
  });

  it('has proper accessibility attributes', () => {
    render(<SideNav items={mockItems} />);
    
    const nav = screen.getByRole('navigation');
    expect(nav).toHaveAttribute('aria-label', 'Section Navigation');
    expect(screen.getAllByRole('list')).toHaveLength(1);
  });

  it('shows additional list when section is expanded', () => {
    render(<SideNav items={mockItems} />);
    
    const parentItem = screen.getByText('Research').closest('a');
    fireEvent.click(parentItem);
    
    const lists = screen.getAllByRole('list');
    expect(lists).toHaveLength(2);
    expect(lists[0]).toBeInTheDocument();
    expect(lists[1]).toBeInTheDocument();
  });

  it('supports legacy activeIndex prop', () => {
    render(<SideNav items={mockItems} activeIndex={1} />);
    
    const activeItem = screen.getByText('Prepare').closest('a');
    expect(activeItem).toHaveClass('active');
    expect(activeItem).toHaveAttribute('aria-current', 'page');
  });
}); 