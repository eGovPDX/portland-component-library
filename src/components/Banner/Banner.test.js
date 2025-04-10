import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom';
import { Banner } from './';

describe('Banner Component', () => {
  test('renders banner with default props', () => {
    render(<Banner />);
    
    // Check that domain text is rendered
    expect(screen.getByText('An official website of the City of Portland')).toBeInTheDocument();
    
    // Check that button is present
    expect(screen.getByText("Here's how you know")).toBeInTheDocument();
    
    // Content should not be visible initially
    expect(screen.queryByText('Official websites use .gov')).not.toBeInTheDocument();
  });

  test('expands and collapses when button is clicked', () => {
    render(<Banner />);
    
    // Content should not be visible initially
    expect(screen.queryByText('Official websites use .gov')).not.toBeInTheDocument();
    
    // Click the button to expand
    fireEvent.click(screen.getByText("Here's how you know"));
    
    // Now content should be visible
    expect(screen.getByText('Official websites use .gov')).toBeInTheDocument();
    
    // Click again to collapse
    fireEvent.click(screen.getByText("Here's how you know"));
    
    // Content should not be visible
    expect(screen.queryByText('Official websites use .gov')).not.toBeInTheDocument();
  });

  test('uses custom domain text when provided', () => {
    const customDomain = 'An official website of Portland, Oregon';
    render(<Banner domain={customDomain} />);
    
    expect(screen.getByText(customDomain)).toBeInTheDocument();
  });

  test('renders with custom heading and description', () => {
    const customHeading = 'Custom Heading';
    const customDescription = 'This is a custom description';
    
    render(
      <Banner 
        heading={customHeading} 
        description={customDescription}
        initiallyExpanded={true}
      />
    );
    
    expect(screen.getByText(customHeading)).toBeInTheDocument();
    expect(screen.getByText(customDescription)).toBeInTheDocument();
  });

  test('can render without HTTPS guidance', () => {
    render(
      <Banner 
        showHttpsGuidance={false}
        initiallyExpanded={true}
      />
    );
    
    // Official websites section should be visible
    expect(screen.getByText('Official websites use .gov')).toBeInTheDocument();
    
    // HTTPS section should not be visible
    expect(screen.queryByText('Secure websites use HTTPS')).not.toBeInTheDocument();
  });

  test('can render initially expanded', () => {
    render(<Banner initiallyExpanded={true} />);
    
    // Content should be visible
    expect(screen.getByText('Official websites use .gov')).toBeInTheDocument();
  });

  test('has correct ARIA attributes', () => {
    render(<Banner />);
    
    const button = screen.getByText("Here's how you know");
    expect(button).toHaveAttribute('aria-expanded', 'false');
    expect(button).toHaveAttribute('aria-controls', 'pgov-banner-content');
    
    fireEvent.click(button);
    expect(button).toHaveAttribute('aria-expanded', 'true');
  });
}); 