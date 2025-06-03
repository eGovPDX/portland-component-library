import React from 'react';
import PropTypes from 'prop-types';
import { BannerGuidance } from './BannerGuidance';
import { getDefaultIcon, getHttpsIcon } from '../utils';

/**
 * Expandable content section of the Banner
 */
export const BannerContent = ({ 
  icon, 
  heading, 
  description, 
  showHttpsGuidance,
  className 
}) => {
  const containerClassName = ['banner-content', className].filter(Boolean).join(' ');
  const iconToDisplay = icon || getDefaultIcon();

  return (
    <div 
      id="banner-content" 
      className={containerClassName}
    >
      <BannerGuidance
        icon={iconToDisplay}
        heading={heading}
        description={description}
      />
      
      {showHttpsGuidance && (
        <BannerGuidance
          icon={getHttpsIcon()}
          heading="Secure websites use HTTPS"
          description={<>A <strong>lock</strong> or <strong>https://</strong> means you've safely connected to the .gov website. Share sensitive information only on official, secure websites.</>}
        />
      )}
    </div>
  );
};

BannerContent.propTypes = {
  /** Icon element to display in the banner */
  icon: PropTypes.node,
  /** Heading text for the banner content */
  heading: PropTypes.string.isRequired,
  /** Description text for the banner content */
  description: PropTypes.node.isRequired,
  /** Whether to show the HTTPS guidance section */
  showHttpsGuidance: PropTypes.bool,
  /** Additional CSS class */
  className: PropTypes.string
};

BannerContent.defaultProps = {
  icon: null,
  showHttpsGuidance: true,
  className: ''
};

export default BannerContent; 