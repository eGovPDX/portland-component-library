import { React } from 'react';
import PropTypes from 'prop-types';

/**
 * Logo component for the Portland.gov header
 */
export const HeaderLogo = ({
  title,
  logoUrl,
  logoAlt,
  tagline
}) => {
  return (
    <a href="/" className="header-logo-container">
      {logoUrl && (
        <img
          src={logoUrl}
          alt={logoAlt}
          className="header-logo-img"
        />
      )}
      <div className="header-logo-text-container">
        <span className="header-logo-text">{title}</span>
        {tagline && (
          <span className="header-logo-tagline">{tagline}</span>
        )}
      </div>
    </a>
  );
};

HeaderLogo.propTypes = {
  /** Title text for the header */
  title: PropTypes.string.isRequired,
  /** URL for the logo image */
  logoUrl: PropTypes.string,
  /** Alt text for the logo image */
  logoAlt: PropTypes.string,
  /** Optional tagline displayed below the title */
  tagline: PropTypes.string
};

HeaderLogo.defaultProps = {
  logoUrl: undefined,
  logoAlt: 'Logo',
  tagline: undefined
}; 