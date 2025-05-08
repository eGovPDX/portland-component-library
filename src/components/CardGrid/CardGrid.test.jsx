import React from 'react';
import { render, screen } from '@testing-library/react';
import { CardGrid } from './CardGrid';
import { Button } from '../Button';

describe('CardGrid', () => {
  const mockCards = [
    {
      heading: 'Test Card 1',
      text: 'Test Description 1',
      actionButton: <Button>Learn More</Button>,
    },
    {
      heading: 'Test Card 2',
      text: 'Test Description 2',
      actionButton: <Button>Learn More</Button>,
    },
  ];

  it('renders without heading', () => {
    render(<CardGrid cards={mockCards} />);
    expect(screen.queryByRole('heading', { name: /test grid/i })).not.toBeInTheDocument();
  });

  it('renders with heading', () => {
    render(<CardGrid heading="Test Grid" cards={mockCards} />);
    expect(screen.getByRole('heading', { name: 'Test Grid' })).toBeInTheDocument();
  });

  it('renders all cards', () => {
    render(<CardGrid cards={mockCards} />);
    expect(screen.getByText('Test Card 1')).toBeInTheDocument();
    expect(screen.getByText('Test Card 2')).toBeInTheDocument();
    expect(screen.getByText('Test Description 1')).toBeInTheDocument();
    expect(screen.getByText('Test Description 2')).toBeInTheDocument();
  });

  it('applies custom className', () => {
    render(<CardGrid cards={mockCards} className="custom-class" />);
    expect(screen.getByTestId('card-grid')).toHaveClass('custom-class');
  });
}); 