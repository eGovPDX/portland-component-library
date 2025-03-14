import React from 'react';
import './PageTemplate.css';
import { Banner, BannerProps } from '../Banner';
import { Header, HeaderProps } from '../Header';
import { SkipNav, SkipNavProps } from '../SkipNav';

export interface PageTemplateProps {
  /**
   * Banner props
   */
  bannerProps?: BannerProps;
  /**
   * Header props
   */
  headerProps: HeaderProps;
  /**
   * SkipNav props
   */
  skipNavProps?: SkipNavProps;
  /**
   * Page content
   */
  children: React.ReactNode;
  /**
   * Whether to include the banner
   */
  includeBanner?: boolean;
  /**
   * Whether to include the skip nav
   */
  includeSkipNav?: boolean;
  /**
   * Optional additional class names
   */
  className?: string;
}

/**
 * Page template component that combines Banner and Header
 */
export const PageTemplate: React.FC<PageTemplateProps> = ({
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