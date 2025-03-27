import React from 'react';
import { render, screen } from '@testing-library/react';
import { SummaryBox } from './SummaryBox';

describe('SummaryBox', () => {
  const defaultProps = {
    heading: 'Test Heading',
    children: <div>Test Content</div>,
  };

  it('renders the heading', () => {
    render(<SummaryBox {...defaultProps} />);
    expect(screen.getByText('Test Heading')).toBeInTheDocument();
  });

  it('renders the description when provided', () => {
    const description = 'Test Description';
    render(<SummaryBox {...defaultProps} description={description} />);
    expect(screen.getByText(description)).toBeInTheDocument();
  });

  it('does not render description when not provided', () => {
    const { container } = render(<SummaryBox {...defaultProps} />);
    expect(container.querySelector('.summary-box-description')).not.toBeInTheDocument();
  });

  it('renders children content', () => {
    render(<SummaryBox {...defaultProps} />);
    expect(screen.getByText('Test Content')).toBeInTheDocument();
  });

  it('generates correct heading ID from title', () => {
    render(<SummaryBox {...defaultProps} />);
    const heading = screen.getByRole('heading');
    expect(heading).toHaveAttribute('id', 'summary-box-test-heading');
  });

  it('has proper accessibility attributes', () => {
    render(<SummaryBox {...defaultProps} />);
    const region = screen.getByRole('region');
    expect(region).toHaveAttribute('aria-labelledby', 'summary-box-test-heading');
  });
}); 