import React from 'react';
import { render, screen } from '@testing-library/react';
import { HeroHomepage } from './HeroHomepage';

describe('HeroHomepage', () => {
  const mockProps = {
    title: 'Test Title',
    subtitle: 'Test Subtitle',
    searchComponent: <div data-testid="mock-search">Search Component</div>,
    links: [
      { text: 'Link 1', href: '/link1' },
      { text: 'Link 2', href: '/link2' }
    ]
  };

  it('renders all components when all props are provided', () => {
    render(<HeroHomepage {...mockProps} />);
    
    expect(screen.getByText('Test Title')).toBeInTheDocument();
    expect(screen.getByText('Test Subtitle')).toBeInTheDocument();
    expect(screen.getByTestId('mock-search')).toBeInTheDocument();
    expect(screen.getByText('Link 1')).toBeInTheDocument();
    expect(screen.getByText('Link 2')).toBeInTheDocument();
  });

  it('renders without subtitle', () => {
    const { subtitle, ...propsWithoutSubtitle } = mockProps;
    render(<HeroHomepage {...propsWithoutSubtitle} />);
    
    expect(screen.getByText('Test Title')).toBeInTheDocument();
    expect(screen.queryByText('Test Subtitle')).not.toBeInTheDocument();
  });

  it('renders without links', () => {
    const { links, ...propsWithoutLinks } = mockProps;
    render(<HeroHomepage {...propsWithoutLinks} />);
    
    expect(screen.getByText('Test Title')).toBeInTheDocument();
    expect(screen.queryByText('Link 1')).not.toBeInTheDocument();
  });

  it('applies custom className', () => {
    render(<HeroHomepage {...mockProps} className="custom-class" />);
    
    const container = screen.getByText('Test Title').closest('.pgov-hero-homepage');
    expect(container).toHaveClass('custom-class');
  });

  it('renders links with correct href attributes', () => {
    render(<HeroHomepage {...mockProps} />);
    
    const link1 = screen.getByText('Link 1');
    const link2 = screen.getByText('Link 2');
    
    expect(link1).toHaveAttribute('href', '/link1');
    expect(link2).toHaveAttribute('href', '/link2');
  });

  it('renders with additional props spread to container', () => {
    render(<HeroHomepage {...mockProps} data-testid="hero-test" />);
    
    expect(screen.getByTestId('hero-test')).toBeInTheDocument();
  });
}); 