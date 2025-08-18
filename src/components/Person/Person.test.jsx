import React from 'react';
import { render, screen } from '@testing-library/react';
import { Person } from './Person';

describe('Person', () => {
  const baseProps = {
    name: 'Jane Doe',
    title: 'Senior Policy Analyst',
    department: 'Bureau of Transportation',
  };

  test('renders name and basic fields', () => {
    render(<Person {...baseProps} />);
    expect(screen.getByText('Jane Doe')).toBeInTheDocument();
    expect(screen.getByText('Senior Policy Analyst')).toBeInTheDocument();
    expect(screen.getByText('Bureau of Transportation')).toBeInTheDocument();
  });

  test('wraps name with link when profileUrl provided', () => {
    render(<Person {...baseProps} profileUrl="/profile/jane" />);
    const link = screen.getByRole('link', { name: 'Jane Doe' });
    expect(link).toHaveAttribute('href', '/profile/jane');
  });

  test('respects heading level', () => {
    render(<Person {...baseProps} headingLevel={4} />);
    const heading = screen.getByRole('heading', { name: 'Jane Doe', level: 4 });
    expect(heading).toBeInTheDocument();
  });

  test('renders image with alt text', () => {
    render(<Person {...baseProps} avatarUrl="https://placehold.co/64" avatarAlt="Portrait of Jane" />);
    const img = screen.getByAltText('Portrait of Jane');
    expect(img).toBeInTheDocument();
    expect(img).toHaveAttribute('src', 'https://placehold.co/64');
  });

  test('renders initials fallback computed from name when no avatar', () => {
    const { container } = render(<Person {...baseProps} />);
    const initials = container.querySelector('.person__avatar--initials');
    expect(initials).toBeInTheDocument();
    expect(initials.textContent).toBe('JD');
  });

  test('falls back to ? when no name provided', () => {
    const { container } = render(<Person title="Analyst" department="Bureau" />);
    const initials = container.querySelector('.person__avatar--initials');
    expect(initials).toBeInTheDocument();
    expect(initials.textContent).toBe('?');
  });

  test('applies layout and alignment modifiers', () => {
    const { container, rerender } = render(<Person {...baseProps} layout="row" imageAlign="top" />);
    expect(container.firstChild).toHaveClass('person--row');
    expect(container.firstChild).toHaveClass('person--align-top');

    rerender(<Person {...baseProps} layout="column" imageAlign="center" />);
    expect(container.firstChild).toHaveClass('person--column');
    expect(container.firstChild).toHaveClass('person--align-center');
  });

  test('applies avatarSize and bordered modifiers', () => {
    const { container, rerender } = render(<Person {...baseProps} avatarSize="sm" bordered />);
    expect(container.firstChild).toHaveClass('person--sm');
    expect(container.firstChild).toHaveClass('person--bordered');

    rerender(<Person {...baseProps} avatarSize="lg" />);
    expect(container.firstChild).toHaveClass('person--lg');
  });

  test('renders contact actions for email and phones with accessible labels', () => {
    render(
      <Person
        {...baseProps}
        email="jane@example.com"
        phones={[{ label: 'Office', value: '503-555-1234' }, { label: 'Mobile', value: '503-555-9876' }]}
      />
    );
    const emailLink = screen.getByRole('link', { name: 'Email Jane Doe' });
    expect(emailLink).toHaveAttribute('href', 'mailto:jane@example.com');
    const phoneLink1 = screen.getByRole('link', { name: 'Call Jane Doe (Office)' });
    expect(phoneLink1).toHaveAttribute('href', 'tel:503-555-1234');
    const phoneLink2 = screen.getByRole('link', { name: 'Call Jane Doe (Mobile)' });
    expect(phoneLink2).toHaveAttribute('href', 'tel:503-555-9876');
  });

  test('renders string tags with fallback style and node tags as-is', () => {
    const { container } = render(
      <Person
        {...baseProps}
        tags={['Bilingual', <span key="x" data-testid="custom-tag">Custom</span>]}
      />
    );
    expect(container.querySelector('.person__tag')).toBeInTheDocument();
    expect(screen.getByTestId('custom-tag')).toBeInTheDocument();
  });
});


