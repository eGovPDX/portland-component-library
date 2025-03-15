import React from 'react';
import './PageTemplate.css';
import { Banner } from '../Banner';
import { Header } from '../Header';
import { SkipNav } from '../SkipNav';

/**
 * Page template component that combines Banner and Header
 */
export const PageTemplate = ({
  bannerProps,
  headerProps,
  skipNavProps,
  children,
  includeBanner = true,
  includeSkipNav = true,
  className = '',
}) => {
  return (
    <div className={`pgov-page-template ${className}`}>
      {includeSkipNav && <SkipNav {...skipNavProps} />}
      {includeBanner && <Banner {...bannerProps} />}
      <Header {...headerProps} />
      <main id="main-content" className="pgov-page-template-main">
        {children}
      </main>
    </div>
  );
};

export default PageTemplate; 