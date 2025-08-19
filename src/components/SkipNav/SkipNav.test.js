import React from 'react';
import { screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import { renderWithI18n } from '../../test-utils/i18n-test-utils';
import { SkipNav } from './SkipNav';

describe('SkipNav', () => {
  test('renders with default props', () => {
    renderWithI18n(<SkipNav />);
    
    const skipNavLink = screen.getByRole('link', { name: /Skip to main content/i });
    expect(skipNavLink).toBeInTheDocument();
    expect(skipNavLink).toHaveAttribute('href', '#main-content');
  });

  test('renders with custom mainContentId', () => {
    renderWithI18n(<SkipNav mainContentId="custom-id" />);
    
    const skipNavLink = screen.getByRole('link', { name: /Skip to main content/i });
    expect(skipNavLink).toHaveAttribute('href', '#custom-id');
  });

  test('renders with custom text', () => {
    const customText = 'Skip to content';
    renderWithI18n(<SkipNav text={customText} />);
    
    const skipNavLink = screen.getByRole('link', { name: customText });
    expect(skipNavLink).toBeInTheDocument();
  });

  test('applies custom className', () => {
    renderWithI18n(<SkipNav className="custom-class" />);
    
    const skipNavLink = screen.getByRole('link', { name: /Skip to main content/i });
    expect(skipNavLink).toHaveClass('skipnav');
    expect(skipNavLink).toHaveClass('custom-class');
  });
}); 