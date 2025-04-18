import React from 'react';
import { render, screen } from '@testing-library/react';
import { Tag } from './Tag';

describe('Tag', () => {
  it('renders with default variant', () => {
    render(<Tag>Default Tag</Tag>);
    const tag = screen.getByText('Default Tag');
    expect(tag).toBeInTheDocument();
    expect(tag).toHaveClass('usa-tag');
  });

  it('renders with big variant', () => {
    render(<Tag variant="big">Big Tag</Tag>);
    const tag = screen.getByText('Big Tag');
    expect(tag).toBeInTheDocument();
    expect(tag).toHaveClass('usa-tag usa-tag--big');
  });

  it('applies additional className', () => {
    render(<Tag className="custom-class">Custom Tag</Tag>);
    const tag = screen.getByText('Custom Tag');
    expect(tag).toHaveClass('usa-tag custom-class');
  });

  it('passes additional props to the element', () => {
    render(<Tag data-testid="test-tag">Test Tag</Tag>);
    const tag = screen.getByTestId('test-tag');
    expect(tag).toBeInTheDocument();
  });
}); 