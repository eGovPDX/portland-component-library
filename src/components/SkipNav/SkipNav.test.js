import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import { SkipNav } from './SkipNav';

describe('SkipNav', () => {
  test('renders with default props', () => {
    render(<SkipNav />);
    
    const skipNavLink = screen.getByRole('link', { name: /Skip to main content/i });
    expect(skipNavLink).toBeInTheDocument();
    expect(skipNavLink).toHaveAttribute('href', '#main-content');
  });

  test('renders with custom mainContentId', () => {
    render(<SkipNav mainContentId="custom-id" />);
    
    const skipNavLink = screen.getByRole('link', { name: /Skip to main content/i });
    expect(skipNavLink).toHaveAttribute('href', '#custom-id');
  });

  test('renders with custom text', () => {
    const customText = 'Skip to content';
    render(<SkipNav text={customText} />);
    
    const skipNavLink = screen.getByRole('link', { name: customText });
    expect(skipNavLink).toBeInTheDocument();
  });

  test('applies custom className', () => {
    render(<SkipNav className="custom-class" />);
    
    const skipNavLink = screen.getByRole('link', { name: /Skip to main content/i });
    expect(skipNavLink).toHaveClass('skipnav');
    expect(skipNavLink).toHaveClass('custom-class');
  });
}); 