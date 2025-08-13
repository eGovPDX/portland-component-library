import PropTypes from 'prop-types';

/**
 * Logo component for the Portland.gov header.
 *
 * @component
 * @param {Object} props - Component props
 * @param {string} [props.logoUrl] - URL for the logo image
 * @param {string} [props.logoAlt='Logo'] - Alt text for the logo image
 * @returns {JSX.Element} Link wrapping the logo image
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