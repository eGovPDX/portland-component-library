import React from 'react';
import { screen, fireEvent } from '@testing-library/react';
import { renderWithI18n } from '../../test-utils/i18n-test-utils';
import { Header } from './Header';

describe('Header', () => {
  // Test default rendering
  test('renders with default props', () => {
    renderWithI18n(<Header />);
    const header = screen.getByRole('banner');
    expect(header).toBeInTheDocument();
    expect(header).toHaveClass('usa-header');
  });

  // Test with title
  test('renders with title', () => {
    renderWithI18n(<Header title="Test Website" />);
    const header = screen.getByRole('banner');
    expect(header).toBeInTheDocument();
    expect(screen.getByText('Test Website')).toBeInTheDocument();
    expect(screen.getByRole('link', { name: 'Test Website' })).toHaveAttribute('href', '/');
  });

  // Test with title and custom URL
  test('renders with custom title URL', () => {
    renderWithI18n(<Header title="Test Website" titleUrl="/custom" />);
    expect(screen.getByRole('link', { name: 'Test Website' })).toHaveAttribute('href', '/custom');
  });

  // Test with subtitle
  test('renders with subtitle', () => {
    renderWithI18n(<Header title="Test Website" subtitle="Test Tagline" />);
    expect(screen.getByText('Test Website')).toBeInTheDocument();
    expect(screen.getByText('Test Tagline')).toBeInTheDocument();
  });

  // Test extended variant
  test('renders extended variant correctly', () => {
    renderWithI18n(<Header title="Test Website" extended />);
    const header = screen.getByRole('banner');
    expect(header).toHaveClass('usa-header--extended');
  });

  // Test megamenu variant
  test('renders megamenu variant correctly', () => {
    renderWithI18n(<Header title="Test Website" megamenu />);
    const header = screen.getByRole('banner');
    expect(header).toHaveClass('usa-header--megamenu');
  });

  // Test with primary navigation
  test('renders with primary navigation', () => {
    const navItems = [
      <a key="home" href="#home" className="usa-nav__link">Home</a>,
      <a key="about" href="#about" className="usa-nav__link">About</a>
    ];
    
    renderWithI18n(<Header title="Test Website" primaryNav={navItems} />);
    
    expect(screen.getByRole('navigation', { name: 'Primary navigation' })).toBeInTheDocument();
    expect(screen.getByRole('link', { name: 'Home' })).toBeInTheDocument();
    expect(screen.getByRole('link', { name: 'About' })).toBeInTheDocument();
  });

  // Test with search component
  test('renders with search component', () => {
    const searchComponent = (
      <form className="usa-search" role="search" data-testid="search-form">
        <input type="search" />
        <button type="submit">Search</button>
      </form>
    );
    
    renderWithI18n(<Header title="Test Website" search={searchComponent} />);
    
    expect(screen.getByTestId('search-form')).toBeInTheDocument();
    expect(screen.getByRole('search')).toBeInTheDocument();
  });

  // Test extended header with secondary navigation
  test('renders extended header with secondary navigation', () => {
    const secondaryNav = [
      <a key="login" href="#login">Log in</a>,
      <a key="signup" href="#signup">Sign up</a>
    ];
    
    renderWithI18n(
      <Header 
        title="Test Website" 
        extended 
        secondaryNav={secondaryNav}
      />
    );
    
    expect(screen.getByRole('link', { name: 'Log in' })).toBeInTheDocument();
    expect(screen.getByRole('link', { name: 'Sign up' })).toBeInTheDocument();
  });

  // Test with custom mobile menu labels
  test('renders with custom mobile menu labels', () => {
    renderWithI18n(
      <Header 
        title="Test Website" 
        mobileMenuLabel="Open Menu" 
        mobileCloseLabel="Close Menu"
        primaryNav={[<a key="test" href="#test">Test</a>]}
      />
    );
    
    expect(screen.getByText('Open Menu')).toBeInTheDocument();
    expect(screen.getByAltText('Close Menu')).toBeInTheDocument();
  });

  // Test with additional className
  test('renders with additional className', () => {
    renderWithI18n(<Header title="Test Website" className="custom-header" />);
    const header = screen.getByRole('banner');
    expect(header).toHaveClass('usa-header', 'custom-header');
  });

  // Test with children (secondary content)
  test('renders with children content', () => {
    renderWithI18n(
      <Header title="Test Website">
        <div data-testid="secondary-content">Secondary Content</div>
      </Header>
    );
    
    expect(screen.getByTestId('secondary-content')).toBeInTheDocument();
    expect(screen.getByText('Secondary Content')).toBeInTheDocument();
  });

  // Test that navigation is hidden when no navigation props provided
  test('does not render navigation when no nav props provided', () => {
    renderWithI18n(<Header title="Test Website" />);
    expect(screen.queryByRole('navigation')).not.toBeInTheDocument();
  });

  // Test aria labels and accessibility
  test('has proper accessibility attributes', () => {
    const navItems = [
      <a key="home" href="#home" className="usa-nav__link">Home</a>
    ];
    
    renderWithI18n(<Header title="Test Website" primaryNav={navItems} />);
    
    const banner = screen.getByRole('banner');
    const navigation = screen.getByRole('navigation');
    
    expect(banner).toBeInTheDocument();
    expect(navigation).toHaveAttribute('aria-label', 'Primary navigation');
  });

  // Test mobile menu button accessibility
  test('mobile menu button has proper accessibility', () => {
    renderWithI18n(<Header title="Test Website" primaryNav={[<a key="test" href="#test">Test</a>]} />);
    
    const menuButton = screen.getByText('Menu');
    expect(menuButton).toBeInTheDocument();
    expect(menuButton.tagName).toBe('BUTTON');
  });

  // Test extended header structure
  test('extended header has proper structure', () => {
    renderWithI18n(<Header title="Test Website" extended primaryNav={[<a key="test" href="#test">Test</a>]} />);
    
    const header = screen.getByRole('banner');
    expect(header).toHaveClass('usa-header--extended');
    
    // Extended headers should have navbar and nav as direct children
    const navbar = header.querySelector('.usa-navbar');
    const nav = header.querySelector('.usa-nav');
    
    expect(navbar).toBeInTheDocument();
    expect(nav).toBeInTheDocument();
  });

  // Test basic header structure
  test('basic header has proper structure', () => {
    renderWithI18n(<Header title="Test Website" primaryNav={[<a key="test" href="#test">Test</a>]} />);
    
    const header = screen.getByRole('banner');
    expect(header).not.toHaveClass('usa-header--extended');
    
    // Basic headers should have nav-container as wrapper
    const navContainer = header.querySelector('.usa-nav-container');
    expect(navContainer).toBeInTheDocument();
  });

  // Test with multiple variants
  test('applies multiple CSS classes correctly', () => {
    renderWithI18n(
      <Header 
        title="Test Website" 
        extended 
        megamenu 
        className="custom-class"
      />
    );
    
    const header = screen.getByRole('banner');
    expect(header).toHaveClass('usa-header');
    expect(header).toHaveClass('usa-header--extended');
    expect(header).toHaveClass('usa-header--megamenu');
    expect(header).toHaveClass('custom-class');
  });

  // Test logo accessibility
  test('logo link has proper accessibility attributes', () => {
    renderWithI18n(<Header title="Test Website" />);
    
    const logoLink = screen.getByRole('link', { name: 'Test Website' });
    expect(logoLink).toHaveAttribute('title', 'Test Website');
    expect(logoLink).toHaveAttribute('aria-label', 'Test Website');
  });

  // Test that additional props are passed through
  test('passes additional props to header element', () => {
    renderWithI18n(<Header title="Test Website" data-testid="custom-header" id="main-header" />);
    
    const header = screen.getByTestId('custom-header');
    expect(header).toHaveAttribute('id', 'main-header');
    expect(header).toHaveAttribute('role', 'banner');
  });
}); 