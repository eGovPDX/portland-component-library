import React from 'react';
import PropTypes from 'prop-types';
import './PageTemplate.css';
import { Banner } from '../Banner/Banner';
import { Header } from '../Header/Header';
import { SkipNav } from '../SkipNav/SkipNav';
import { Footer } from '../Footer/Footer';
import { Breadcrumbs } from '../Breadcrumbs';

/**
 * Page template component that combines Banner, Header, and Footer
 */
export const PageTemplate = ({
  bannerProps,
  headerProps,
  skipNavProps,
  footerProps,
  breadcrumbsProps,
  children,
  includeBanner = true,
  includeSkipNav = true,
  includeFooter = true,
  includeBreadcrumbs = true,
  className = '',
}) => {
  return (
    <div className={`pgov-page-template ${className}`}>
      {includeSkipNav && <SkipNav {...skipNavProps} />}
      {includeBanner && <Banner {...bannerProps} />}
      <Header {...headerProps} />
      <main 
        id="main-content" 
        className="pgov-page-template-main"
        tabIndex="-1"
        role="main"
        aria-label="Main content"
      >
        {includeBreadcrumbs && <Breadcrumbs {...breadcrumbsProps} />}
        {children}
      </main>
      {includeFooter && <Footer {...footerProps} />}
    </div>
  );
};

PageTemplate.propTypes = {
  /** Props for the Banner component */
  bannerProps: PropTypes.object,
  /** Props for the Header component */
  headerProps: PropTypes.object.isRequired,
  /** Props for the SkipNav component */
  skipNavProps: PropTypes.object,
  /** Props for the Footer component */
  footerProps: PropTypes.object,
  /** Props for the Breadcrumbs component */
  breadcrumbsProps: PropTypes.object,
  /** Content to be rendered in the main section */
  children: PropTypes.node,
  /** Whether to include the Banner component */
  includeBanner: PropTypes.bool,
  /** Whether to include the SkipNav component */
  includeSkipNav: PropTypes.bool,
  /** Whether to include the Footer component */
  includeFooter: PropTypes.bool,
  /** Whether to include the Breadcrumbs component */
  includeBreadcrumbs: PropTypes.bool,
  /** Additional CSS class name */
  className: PropTypes.string,
};

PageTemplate.defaultProps = {
  bannerProps: {},
  skipNavProps: {},
  breadcrumbsProps: {},
  children: null,
  includeBanner: true,
  includeSkipNav: true,
  includeFooter: true,
  includeBreadcrumbs: true,
  className: ''
}; 