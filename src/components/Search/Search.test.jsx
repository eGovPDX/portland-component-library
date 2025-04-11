import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import { Search } from './Search';

describe('Search', () => {
  it('renders with default variant', () => {
    render(<Search id="test-search" />);
    const input = screen.getByRole('searchbox');
    expect(input).toBeInTheDocument();
  });

  it('renders with big variant', () => {
    render(<Search id="test-search" variant="big" />);
    const input = screen.getByRole('searchbox');
    expect(input).toBeInTheDocument();
  });

  it('renders with small variant', () => {
    render(<Search id="test-search" variant="small" />);
    const input = screen.getByRole('searchbox');
    expect(input).toBeInTheDocument();
  });

  it('hides button text in small variant', () => {
    render(<Search id="test-search" variant="small" />);
    const buttonText = screen.queryByText('Search', { selector: '.usa-search__submit-text' });
    expect(buttonText).not.toBeInTheDocument();
  });

  it('applies custom button text', () => {
    render(<Search id="test-search" buttonText="Custom Search" />);
    const buttonText = screen.getByText('Custom Search', { selector: '.usa-search__submit-text' });
    expect(buttonText).toBeInTheDocument();
  });

  it('calls onSubmit when form is submitted', () => {
    const handleSubmit = jest.fn();
    render(<Search id="test-search" onSubmit={handleSubmit} />);
    const form = screen.getByRole('search');
    fireEvent.submit(form);
    expect(handleSubmit).toHaveBeenCalled();
  });

  it('applies additional className', () => {
    render(<Search id="test-search" className="custom-class" />);
    const form = screen.getByRole('search');
    expect(form).toHaveClass('usa-search', 'custom-class');
  });

  it('passes additional props to the input', () => {
    render(<Search id="test-search" placeholder="Search here" />);
    const input = screen.getByRole('searchbox');
    expect(input).toHaveAttribute('placeholder', 'Search here');
  });
}); 