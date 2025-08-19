import React from 'react';
import PropTypes from 'prop-types';
import './Header.css';

/**
 * USWDS Header wrapper with optional extended layout and navigation slots.
 *
 * @component
 * @param {Object} props - Component props
 * @param {string} [props.title] - Title text for the header logo link
 * @param {string} [props.subtitle] - Subtitle/tagline below the title
 * @param {string} [props.titleUrl='/'] - URL for the title link
 * @param {('basic')} [props.variant='basic'] - Header variant (limited here to 'basic')
 * @param {boolean} [props.extended=false] - Use extended header layout
 * @param {boolean} [props.megamenu=false] - Enable megamenu support
 * @param {React.ReactNode} [props.search] - Search component to render
 * @param {React.ReactNode} [props.primaryNav] - Primary navigation items
 * @param {React.ReactNode} [props.secondaryNav] - Secondary navigation items (extended only)
 * @param {React.ReactNode} [props.secondaryContent] - Additional content for the secondary nav area
 * @param {string} [props.mobileMenuLabel='Menu'] - Label for mobile menu button
 * @param {string} [props.mobileCloseLabel='Close'] - Label for mobile close button
 * @param {string} [props.className] - Additional CSS class names
 * @param {React.ReactNode} [props.children] - Optional content rendered after nav
 * @returns {JSX.Element} Header element
 */
export const Header = ({
  title,
  subtitle,
  titleUrl = '/',
  variant = 'basic',
  extended = false,
  megamenu = false,
  search,
  primaryNav,
  secondaryNav,
  secondaryContent,
  mobileMenuLabel = 'Menu',
  mobileCloseLabel = 'Close',
  className,
  children,
  ...props
}) => {
  const baseClass = 'usa-header';
  const variantClass = variant !== 'basic' ? `${baseClass}--${variant}` : '';
  const extendedClass = extended ? `${baseClass}--extended` : '';
  const megamenuClass = megamenu ? `${baseClass}--megamenu` : '';
  
  const headerClasses = [
    baseClass,
    variantClass,
    extendedClass,
    megamenuClass,
    className
  ].filter(Boolean).join(' ');

  const renderLogo = () => {
    if (!title) return null;
    
    return (
      <div className="usa-logo">
        <em className="usa-logo__text">
          <a href={titleUrl} title={title} aria-label={title}>
            {title}
          </a>
        </em>
        {subtitle && (
          <div className="usa-logo__subtitle">
            {subtitle}
          </div>
        )}
      </div>
    );
  };

  const renderNavigation = () => {
    if (!primaryNav && !search && !secondaryNav && !secondaryContent) return null;

    return (
      <nav aria-label="Primary navigation" className="usa-nav">
        {extended && (
          <div className="usa-nav__inner">
            {renderNavContent()}
            {(secondaryNav || secondaryContent || search) && (
              <div className="usa-nav__secondary">
                {secondaryNav && (
                  <ul className="usa-nav__secondary-links">
                    {React.Children.map(secondaryNav, (item, index) => (
                      <li key={index} className="usa-nav__secondary-item">
                        {item}
                      </li>
                    ))}
                  </ul>
                )}
                {secondaryContent}
                {search && (
                  <section aria-label="Search component">
                    {search}
                  </section>
                )}
              </div>
            )}
          </div>
        )}
        {!extended && renderNavContent()}
      </nav>
    );
  };

  const renderNavContent = () => (
    <>
      <button type="button" className="usa-nav__close">
        <img 
          src="/assets/img/usa-icons/close.svg" 
          role="img" 
          alt={mobileCloseLabel} 
        />
      </button>
      {primaryNav && (
        <ul className="usa-nav__primary usa-accordion">
          {React.Children.map(primaryNav, (item, index) => (
            <li key={index} className="usa-nav__primary-item">
              {item}
            </li>
          ))}
        </ul>
      )}
      {!extended && search && (
        <section aria-label="Search component">
          {search}
        </section>
      )}
    </>
  );

  if (extended) {
    return (
      <header className={headerClasses} role="banner" {...props}>
        <div className="usa-navbar">
          {renderLogo()}
          <button type="button" className="usa-menu-btn">
            {mobileMenuLabel}
          </button>
        </div>
        {renderNavigation()}
        {children}
      </header>
    );
  }

  return (
    <header className={headerClasses} role="banner" {...props}>
      <div className="usa-nav-container">
        <div className="usa-navbar">
          {renderLogo()}
          <button type="button" className="usa-menu-btn">
            {mobileMenuLabel}
          </button>
        </div>
        {renderNavigation()}
      </div>
      {children}
    </header>
  );
};

Header.propTypes = {
  /** Title text for the header */
  title: PropTypes.string,
  /** Subtitle or tagline text */
  subtitle: PropTypes.string,
  /** URL for the title link */
  titleUrl: PropTypes.string,
  /** Header variant */
  variant: PropTypes.oneOf(['basic']),
  /** Whether to use extended header layout */
  extended: PropTypes.bool,
  /** Whether to enable megamenu support */
  megamenu: PropTypes.bool,
  /** Search component to display */
  search: PropTypes.node,
  /** Primary navigation items */
  primaryNav: PropTypes.node,
  /** Secondary navigation items (for extended headers) */
  secondaryNav: PropTypes.node,
  /** Additional content for secondary area */
  secondaryContent: PropTypes.node,
  /** Label for mobile menu button */
  mobileMenuLabel: PropTypes.string,
  /** Label for mobile close button */
  mobileCloseLabel: PropTypes.string,
  /** Additional CSS classes */
  className: PropTypes.string,
  /** Additional content (for secondary row) */
  children: PropTypes.node,
}; 