import React from 'react';
import PropTypes from 'prop-types';

/**
 * Guidance section within the Banner content
 */
export const BannerGuidance = ({ 
  icon, 
  heading, 
  description, 
  className 
}) => {
  const containerClassName = ['banner-guidance', className].filter(Boolean).join(' ');

  return (
    <div className={containerClassName}>
      <div className="banner-guidance-icon">
        {icon}
      </div>
      <div className="banner-guidance-text">
        <p>
          <strong>{heading}</strong>
          <br />
          {description}
        </p>
      </div>
    </div>
  );
};

BannerGuidance.propTypes = {
  /** Icon element to display for this guidance section */
  icon: PropTypes.node.isRequired,
  /** Heading for this guidance section */
  heading: PropTypes.string.isRequired,
  /** Description text for this guidance section */
  description: PropTypes.node.isRequired,
  /** Additional CSS class */
  className: PropTypes.string
};

BannerGuidance.defaultProps = {
  className: ''
}; 