import React from 'react';
import { render, screen } from '@testing-library/react';
import { PageTemplate } from './PageTemplate';

// Mock the child components
jest.mock('../Banner', () => ({
  Banner: ({ domain }) => <div data-testid="mock-banner">{domain}</div>
}));

jest.mock('../Header', () => ({
  Header: ({ title }) => <div data-testid="mock-header">{title}</div>
}));

jest.mock('../SkipNav', () => ({
  SkipNav: ({ label }) => <div data-testid="mock-skipnav">{label}</div>
}));

describe('PageTemplate', () => {
  const defaultProps = {
    bannerProps: {
      domain: 'Test Domain'
    },
    headerProps: {
      title: 'Test Title'
    },
    skipNavProps: {
      label: 'Skip to content'
    },
    children: <div data-testid="test-children">Test Content</div>
  };

  test('renders with all components by default', () => {
    render(<PageTemplate {...defaultProps} />);
    
    expect(screen.getByTestId('mock-banner')).toBeInTheDocument();
    expect(screen.getByTestId('mock-header')).toBeInTheDocument();
    expect(screen.getByTestId('mock-skipnav')).toBeInTheDocument();
    expect(screen.getByTestId('test-children')).toBeInTheDocument();
    expect(screen.getByRole('main')).toHaveAttribute('id', 'main-content');
  });

  test('does not render Banner when includeBanner is false', () => {
    render(<PageTemplate {...defaultProps} includeBanner={false} />);
    
    expect(screen.queryByTestId('mock-banner')).not.toBeInTheDocument();
    expect(screen.getByTestId('mock-header')).toBeInTheDocument();
    expect(screen.getByTestId('mock-skipnav')).toBeInTheDocument();
  });

  test('does not render SkipNav when includeSkipNav is false', () => {
    render(<PageTemplate {...defaultProps} includeSkipNav={false} />);
    
    expect(screen.getByTestId('mock-banner')).toBeInTheDocument();
    expect(screen.getByTestId('mock-header')).toBeInTheDocument();
    expect(screen.queryByTestId('mock-skipnav')).not.toBeInTheDocument();
  });

  test('applies custom className when provided', () => {
    render(<PageTemplate {...defaultProps} className="custom-class" />);
    
    const container = screen.getByRole('main').parentElement;
    expect(container).toHaveClass('pgov-page-template');
    expect(container).toHaveClass('custom-class');
  });
}); 