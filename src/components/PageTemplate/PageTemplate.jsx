import React from 'react';
import PropTypes from 'prop-types';
import './PageTemplate.css';
import Banner from '../Banner/Banner';
import Header from '../Header/Header';
import SkipNav from '../SkipNav/SkipNav';
import Footer from '../Footer/Footer';

/**
 * Page template component that combines Banner, Header, and Footer
 */
const PageTemplate = ({
  bannerProps,
  headerProps,
  skipNavProps,
  footerProps,
  children,
  includeBanner = true,
  includeSkipNav = true,
  includeFooter = true,
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
  /** Content to be rendered in the main section */
  children: PropTypes.node,
  /** Whether to include the Banner component */
  includeBanner: PropTypes.bool,
  /** Whether to include the SkipNav component */
  includeSkipNav: PropTypes.bool,
  /** Whether to include the Footer component */
  includeFooter: PropTypes.bool,
  /** Additional CSS class name */
  className: PropTypes.string,
};

PageTemplate.defaultProps = {
  bannerProps: {},
  skipNavProps: {},
  children: null,
  includeBanner: true,
  includeSkipNav: true,
  includeFooter: true,
  className: ''
};

export default PageTemplate; 