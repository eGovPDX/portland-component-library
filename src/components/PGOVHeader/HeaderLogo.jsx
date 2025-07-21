import { React } from 'react';
import PropTypes from 'prop-types';

/**
 * Logo component for the Portland.gov header
 */
export const HeaderLogo = ({  
  logoUrl,
  logoAlt,
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
    </a>
  );
};

HeaderLogo.propTypes = {
  /** URL for the logo image */
  logoUrl: PropTypes.string,
  /** Alt text for the logo image */
  logoAlt: PropTypes.string,
};

HeaderLogo.defaultProps = {
  logoUrl: undefined,
  logoAlt: 'Logo',
}; 