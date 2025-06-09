import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import { HeroGlobal } from './HeroGlobal';
import { Button } from '../Button/Button';
import { faArrowRight } from '@fortawesome/free-solid-svg-icons';

// Mock FontAwesome component
jest.mock('@fortawesome/react-fontawesome', () => ({
  FontAwesomeIcon: () => <span data-testid="mock-icon" />
}));

describe('HeroGlobal', () => {
  const mockProps = {
    title: 'Test Title',
    description: 'Test Description',
    tags: ['Tag 1', 'Tag 2'],
    image: {
      src: 'https://example.com/image.jpg',
      alt: 'Test image'
    },
    actionButton: <Button variant="primary" endIcon={faArrowRight}>Test Button</Button>
  };

  it('renders all components when all props are provided', () => {
    render(<HeroGlobal {...mockProps} />);
    
    expect(screen.getByText('Test Title')).toBeInTheDocument();
    expect(screen.getByText('Test Description')).toBeInTheDocument();
    expect(screen.getByText('Tag 1')).toBeInTheDocument();
    expect(screen.getByText('Tag 2')).toBeInTheDocument();
    expect(screen.getByRole('img', { name: 'Test image' })).toBeInTheDocument();
    expect(screen.getByRole('button', { name: 'Test Button' })).toBeInTheDocument();
  });

  it('renders without description', () => {
    const { description, ...propsWithoutDescription } = mockProps;
    render(<HeroGlobal {...propsWithoutDescription} />);
    
    expect(screen.getByText('Test Title')).toBeInTheDocument();
    expect(screen.queryByText('Test Description')).not.toBeInTheDocument();
  });

  it('renders without tags', () => {
    const { tags, ...propsWithoutTags } = mockProps;
    render(<HeroGlobal {...propsWithoutTags} />);
    
    expect(screen.getByText('Test Title')).toBeInTheDocument();
    expect(screen.queryByText('Tag 1')).not.toBeInTheDocument();
  });

  it('renders without image', () => {
    const { image, ...propsWithoutImage } = mockProps;
    render(<HeroGlobal {...propsWithoutImage} />);
    
    expect(screen.getByText('Test Title')).toBeInTheDocument();
    expect(screen.queryByRole('img')).not.toBeInTheDocument();
  });

  it('renders without action button', () => {
    const { actionButton, ...propsWithoutButton } = mockProps;
    render(<HeroGlobal {...propsWithoutButton} />);
    
    expect(screen.getByText('Test Title')).toBeInTheDocument();
    expect(screen.queryByRole('button')).not.toBeInTheDocument();
  });

  it('applies custom className', () => {
    render(<HeroGlobal {...mockProps} className="custom-class" />);
    
    const container = screen.getByText('Test Title').closest('.hero-global');
    expect(container).toHaveClass('custom-class');
  });

  it('renders with additional props spread to container', () => {
    render(<HeroGlobal {...mockProps} data-testid="hero-test" />);
    
    expect(screen.getByTestId('hero-test')).toBeInTheDocument();
  });

  it('handles image loading error', () => {
    render(<HeroGlobal {...mockProps} />);
    
    const image = screen.getByRole('img');
    fireEvent.error(image);
    
    expect(image).toHaveClass('hero-global__image--error');
  });
}); 