import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom';
import { Banner } from './Banner';

describe('Banner Component', () => {
  test('renders banner with default props', () => {
    render(<Banner />);
    
    // Check that domain text is rendered
    const domainText = screen.getByText(/An official website of the City of Portland/i);
    expect(domainText).toBeInTheDocument();
    
    // Check that button is present
    const button = screen.getByRole('button', { name: /Here's how you know/i });
    expect(button).toBeInTheDocument();
    expect(button).toHaveAttribute('aria-expanded', 'false');
    expect(button).toHaveAttribute('aria-controls', 'banner-content');
    
    // Content should not be visible initially
    expect(screen.queryByText(/Official websites use .gov/i)).not.toBeInTheDocument();
  });

  test('expands and collapses when button is clicked', () => {
    render(<Banner />);
    
    // Content should not be visible initially
    expect(screen.queryByText(/Official websites use .gov/i)).not.toBeInTheDocument();
    
    // Click the button to expand
    fireEvent.click(screen.getByRole('button', { name: /Here's how you know/i }));
    
    // Now content should be visible
    expect(screen.getByText(/Official websites use .gov/i)).toBeInTheDocument();
    
    // Click again to collapse
    fireEvent.click(screen.getByRole('button', { name: /Here's how you know/i }));
    
    // Content should not be visible
    expect(screen.queryByText(/Official websites use .gov/i)).not.toBeInTheDocument();
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
    expect(screen.getByText(/Official websites use .gov/i)).toBeInTheDocument();
    
    // HTTPS section should not be visible
    expect(screen.queryByText(/Secure websites use HTTPS/i)).not.toBeInTheDocument();
  });

  test('can render initially expanded', () => {
    render(<Banner initiallyExpanded={true} />);
    
    // Content should be visible
    expect(screen.getByText(/Official websites use .gov/i)).toBeInTheDocument();
  });

  test('has correct ARIA attributes', () => {
    render(<Banner />);
    
    const button = screen.getByRole('button', { name: /Here's how you know/i });
    expect(button).toHaveAttribute('aria-expanded', 'false');
    expect(button).toHaveAttribute('aria-controls', 'banner-content');
    
    fireEvent.click(button);
    expect(button).toHaveAttribute('aria-expanded', 'true');
  });
}); 