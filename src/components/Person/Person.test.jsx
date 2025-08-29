import React from 'react';
import { render, screen } from '@testing-library/react';
import { Person } from './Person';
import { renderWithI18n, changeLanguageInTest, resetLanguageInTest } from '../../test-utils/i18n-test-utils';

describe('Person', () => {
  const baseProps = {
    name: 'Jane Doe',
    title: 'Senior Policy Analyst',
    department: 'Bureau of Transportation',
  };

  beforeEach(async () => {
    // Reset to English for each test
    await resetLanguageInTest();
  });

  test('renders name and basic fields', () => {
    renderWithI18n(<Person {...baseProps} />);
    expect(screen.getByText('Jane Doe')).toBeInTheDocument();
    expect(screen.getByText('Senior Policy Analyst')).toBeInTheDocument();
    expect(screen.getByText('Bureau of Transportation')).toBeInTheDocument();
  });

  test('wraps name with link when profileUrl provided', () => {
    renderWithI18n(<Person {...baseProps} profileUrl="/profile/jane" />);
    // Assert by visible label text rather than translation key
    const link = screen.getByRole('link', { name: /view profile/i });
    expect(link).toHaveAttribute('href', '/profile/jane');
  });

  test('respects heading level', () => {
    renderWithI18n(<Person {...baseProps} headingLevel={4} />);
    const heading = screen.getByRole('heading', { name: 'Jane Doe', level: 4 });
    expect(heading).toBeInTheDocument();
  });

  test('renders image with alt text', () => {
    renderWithI18n(<Person {...baseProps} avatarUrl="https://placehold.co/64" avatarAlt="Portrait of Jane" />);
    const img = screen.getByAltText('Portrait of Jane');
    expect(img).toBeInTheDocument();
    expect(img).toHaveAttribute('src', 'https://placehold.co/64');
  });

  test('renders initials fallback computed from name when no avatar', () => {
    const { container } = renderWithI18n(<Person {...baseProps} />);
    const initials = container.querySelector('.person__avatar--initials');
    expect(initials).toBeInTheDocument();
    expect(initials.textContent).toBe('JD');
  });

  test('falls back to ? when no name provided', () => {
    const { container } = renderWithI18n(<Person title="Analyst" department="Bureau" />);
    const initials = container.querySelector('.person__avatar--initials');
    expect(initials).toBeInTheDocument();
    expect(initials.textContent).toBe('?');
  });

  test('applies layout and alignment modifiers', () => {
    const { container, rerender } = renderWithI18n(<Person {...baseProps} layout="row" imageAlign="top" />);
    expect(container.firstChild).toHaveClass('person--row');
    expect(container.firstChild).toHaveClass('person--align-top');

    rerender(<Person {...baseProps} layout="column" imageAlign="center" />);
    expect(container.firstChild).toHaveClass('person--column');
    expect(container.firstChild).toHaveClass('person--align-center');
  });

  test('applies avatarSize and bordered modifiers', () => {
    const { container, rerender } = renderWithI18n(<Person {...baseProps} avatarSize="sm" bordered />);
    expect(container.firstChild).toHaveClass('person--sm');
    expect(container.firstChild).toHaveClass('person--bordered');

    rerender(<Person {...baseProps} avatarSize="lg" />);
    expect(container.firstChild).toHaveClass('person--lg');
  });

  test('renders contact actions for email and phones with accessible labels', () => {
    renderWithI18n(
      <Person
        {...baseProps}
        email="jane@example.com"
        phones={[{ label: 'Office', value: '503-555-1234' }, { label: 'Mobile', value: '503-555-9876' }]}
      />
    );
    const emailLink = screen.getByRole('link', { name: /email/i });
    expect(emailLink).toHaveAttribute('href', 'mailto:jane@example.com');
    
    // Get all phone links and check them individually
    const phoneLinks = screen.getAllByRole('link', { name: /call/i });
    expect(phoneLinks).toHaveLength(2);
    
    const phoneLink1 = phoneLinks[0];
    expect(phoneLink1).toHaveAttribute('href', 'tel:503-555-1234');
    
    const phoneLink2 = phoneLinks[1];
    expect(phoneLink2).toHaveAttribute('href', 'tel:503-555-9876');
  });

  test('renders string tags with fallback style and node tags as-is', () => {
    const { container } = renderWithI18n(
      <Person
        {...baseProps}
        tags={['Bilingual', <span key="x" data-testid="custom-tag">Custom</span>]}
      />
    );
    expect(container.querySelector('.person__tag')).toBeInTheDocument();
    expect(screen.getByTestId('custom-tag')).toBeInTheDocument();
  });

  // i18n Tests
  describe('Internationalization', () => {
    test('renders with language attribute', () => {
      const { container } = renderWithI18n(<Person {...baseProps} />);
      expect(container.firstChild).toHaveAttribute('lang');
    });

    test('applies proper aria-labels for accessibility', () => {
      renderWithI18n(
        <Person
          {...baseProps}
          email="jane@example.com"
          phones={[{ label: 'Office', value: '503-555-1234' }]}
        />
      );
      
      const emailLink = screen.getByRole('link', { name: /email/i });
      expect(emailLink).toBeInTheDocument();
      
      const phoneLink = screen.getByRole('link', { name: /call/i });
      expect(phoneLink).toBeInTheDocument();
    });

    test('handles profile link accessibility', () => {
      renderWithI18n(
        <Person {...baseProps} profileUrl="/profile/jane" />
      );
      
      const profileLink = screen.getByRole('link', { name: /view profile/i });
      expect(profileLink).toBeInTheDocument();
    });
  });
});


