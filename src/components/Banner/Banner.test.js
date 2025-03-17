import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import { Banner } from './Banner';

describe('Banner', () => {
  test('renders with default props', () => {
    render(<Banner />);
    
    // Check if the domain text is rendered
    expect(screen.getByText('An official website of the City of Portland')).toBeInTheDocument();
    
    // Check if the toggle button is rendered
    expect(screen.getByText('Here\'s how you know')).toBeInTheDocument();
    
    // Banner content should be hidden initially
    expect(screen.queryByText('Important Information')).not.toBeInTheDocument();
  });

  test('renders with custom domain', () => {
    const customDomain = 'Custom Domain Text';
    render(<Banner domain={customDomain} />);
    
    expect(screen.getByText(customDomain)).toBeInTheDocument();
  });

  test('renders with custom heading and description when expanded', () => {
    const customHeading = 'Custom Heading';
    const customDescription = 'Custom Description';
    
    render(
      <Banner 
        heading={customHeading} 
        description={customDescription} 
      />
    );
    
    // Click the toggle button to expand the banner
    fireEvent.click(screen.getByText('Here\'s how you know'));
    
    // Now the content should be visible
    expect(screen.getByText(customHeading)).toBeInTheDocument();
    expect(screen.getByText(customDescription)).toBeInTheDocument();
  });

  test('toggles content visibility when button is clicked', () => {
    render(<Banner />);
    
    // Content should be hidden initially
    expect(screen.queryByText('Important Information')).not.toBeInTheDocument();
    
    // Click the toggle button to expand
    fireEvent.click(screen.getByText('Here\'s how you know'));
    
    // Content should now be visible
    expect(screen.getByText('Important Information')).toBeInTheDocument();
    
    // Click again to collapse
    fireEvent.click(screen.getByText('Here\'s how you know'));
    
    // Content should be hidden again
    expect(screen.queryByText('Important Information')).not.toBeInTheDocument();
  });

  test('applies custom className when provided', () => {
    render(<Banner className="custom-class" />);
    
    const bannerElement = screen.getByText('An official website of the City of Portland').closest('.pgov-banner');
    expect(bannerElement).toHaveClass('pgov-banner');
    expect(bannerElement).toHaveClass('custom-class');
  });

  test('renders with custom icon when provided', () => {
    const customIcon = <svg data-testid="custom-icon" />;
    
    render(<Banner icon={customIcon} />);
    
    expect(screen.getByTestId('custom-icon')).toBeInTheDocument();
  });
}); 