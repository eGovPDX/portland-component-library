import React from 'react';
import PropTypes from 'prop-types';
import './PageTemplate.css';
import Banner from '../Banner/Banner';
import Header from '../Header/Header';
import SkipNav from '../SkipNav/SkipNav';

/**
 * Page template component that combines Banner and Header
 */
const PageTemplate = ({
  bannerProps,
  headerProps,
  skipNavProps,
  children,
  includeBanner,
  includeSkipNav,
  className,
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
  /** Content to be rendered in the main section */
  children: PropTypes.node,
  /** Whether to include the Banner component */
  includeBanner: PropTypes.bool,
  /** Whether to include the SkipNav component */
  includeSkipNav: PropTypes.bool,
  /** Additional CSS class for the template */
  className: PropTypes.string
};

PageTemplate.defaultProps = {
  bannerProps: {},
  skipNavProps: {},
  children: null,
  includeBanner: true,
  includeSkipNav: true,
  className: ''
};

export default PageTemplate; 