import React from 'react';
import { render, screen } from '@testing-library/react';
import { SkipNav } from './SkipNav';

describe('SkipNav', () => {
  test('renders with default props', () => {
    render(<SkipNav />);
    
    const skipNavLink = screen.getByText('Skip to main content');
    expect(skipNavLink).toBeInTheDocument();
    expect(skipNavLink).toHaveAttribute('href', '#main-content');
    expect(skipNavLink).toHaveClass('pgov-skipnav');
  });

  test('renders with custom skipToId', () => {
    render(<SkipNav skipToId="custom-id" />);
    
    const skipNavLink = screen.getByText('Skip to main content');
    expect(skipNavLink).toHaveAttribute('href', '#custom-id');
  });

  test('renders with custom label', () => {
    const customLabel = 'Skip to content';
    render(<SkipNav label={customLabel} />);
    
    const skipNavLink = screen.getByText(customLabel);
    expect(skipNavLink).toBeInTheDocument();
  });

  test('applies custom className when provided', () => {
    render(<SkipNav className="custom-class" />);
    
    const skipNavLink = screen.getByText('Skip to main content');
    expect(skipNavLink).toHaveClass('pgov-skipnav');
    expect(skipNavLink).toHaveClass('custom-class');
  });
}); 