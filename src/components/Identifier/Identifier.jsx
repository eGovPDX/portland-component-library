import React from 'react';
import PropTypes from 'prop-types';
import { ExternalLinkIcon } from '../ExternalLinkIcon';
import './Identifier.css';

/**
 * Identifier component based on USWDS Identifier
 * Communicates a site's parent agency and displays agency links required by federal laws and policies.
 * This is a core component that should be used on most government sites along with the Banner component.
 */
export const Identifier = ({
  domain,
  agencies = [],
  parentAgency,
  requiredLinks = [],
  usaGovText = {},
  taxpayerDisclaimer = false,
  lang = 'en',
  className = '',
}) => {
  const identifierClasses = [
    'usa-identifier',
    className
  ].filter(Boolean).join(' ');

  // Utility function to determine if a link is external
  const isExternalLink = (href) => {
    if (!href) return false;
    
    // Check if it's a full URL (starts with http:// or https://)
    if (href.startsWith('http://') || href.startsWith('https://')) {
      // If domain is provided, check if it's pointing to a different domain
      if (domain) {
        try {
          const url = new URL(href);
          const hostname = url.hostname;
          // Remove www. prefix for comparison
          const cleanHostname = hostname.replace(/^www\./, '');
          const cleanDomain = domain.replace(/^www\./, '');
          return cleanHostname !== cleanDomain;
        } catch (e) {
          return true; // If URL parsing fails, assume it's external
        }
      }
      return true; // If no domain provided, assume all http/https links are external
    }
    
    // Check if it starts with // (protocol-relative URL)
    if (href.startsWith('//')) {
      return true;
    }
    
    // Internal links start with /, #, or are relative
    return false;
  };

  // Default required links if none provided
  const defaultRequiredLinks = [
    { text: lang === 'es' ? 'Acerca de' : 'About', href: '#' },
    { text: lang === 'es' ? 'Declaración de accesibilidad' : 'Accessibility statement', href: '#' },
    { text: lang === 'es' ? 'Solicitud a través de FOIA' : 'FOIA requests', href: '#' },
    { text: lang === 'es' ? 'Datos de la ley No FEAR' : 'No FEAR Act data', href: '#' },
    { text: lang === 'es' ? 'Oficina del Inspector General' : 'Office of the Inspector General', href: '#' },
    { text: lang === 'es' ? 'Informes de desempeño' : 'Performance reports', href: '#' },
    { text: lang === 'es' ? 'Política de privacidad' : 'Privacy policy', href: '#' },
  ];

  const linksToRender = requiredLinks.length > 0 ? requiredLinks : defaultRequiredLinks;

  // Default USA.gov text
  const defaultUsaGovText = {
    text: lang === 'es' ? '¿Necesita información y servicios del Gobierno?' : 'Looking for U.S. government information and services?',
    linkText: lang === 'es' ? 'Visite USAGov en Español' : 'Visit USA.gov',
    href: lang === 'es' ? 'https://www.usa.gov/es/' : 'https://www.usa.gov/'
  };

  const usaGovContent = { ...defaultUsaGovText, ...usaGovText };

  // Build agency text for disclaimer
  const buildAgencyText = () => {
    if (!parentAgency && agencies.length === 0) return '';
    
    if (agencies.length === 1) {
      return agencies[0].name || parentAgency;
    } else if (agencies.length === 2) {
      const connector = lang === 'es' ? 'y' : 'and the';
      return `${agencies[0].name} ${connector} ${agencies[1].name}`;
    } else if (agencies.length > 2) {
      const lastAgency = agencies[agencies.length - 1];
      const otherAgencies = agencies.slice(0, -1).map(agency => agency.name).join(', ');
      const connector = lang === 'es' ? 'y' : ', and the';
      return `${otherAgencies}${connector} ${lastAgency.name}`;
    }
    
    return parentAgency;
  };

  const agencyText = buildAgencyText();

  return (
    <div className={identifierClasses}>
      {/* Agency Identifier Section */}
      <section
        className="usa-identifier__section usa-identifier__section--masthead"
        aria-label={lang === 'es' ? 'Identificador de agencia,' : 'Agency identifier,'}
      >
        <div className="usa-identifier__container">
          {/* Agency Logos */}
          {agencies.length > 0 && (
            <div className="usa-identifier__logos">
              {agencies.map((agency, index) => (
                <a
                  key={index}
                  href={agency.href || '#'}
                  className="usa-identifier__logo"
                >
                  <img
                    className="usa-identifier__logo-img"
                    src={agency.logoSrc}
                    alt={agency.logoAlt || `${agency.name} logo`}
                    role="img"
                  />
                </a>
              ))}
            </div>
          )}
          
          {/* Agency Identity */}
          <section
            className="usa-identifier__identity"
            aria-label={lang === 'es' ? 'Descripción de agencia,' : 'Agency description,'}
          >
            {domain && (
              <p className="usa-identifier__identity-domain">{domain}</p>
            )}
            <p className="usa-identifier__identity-disclaimer">
              {lang === 'es' ? '' : <span aria-hidden="true">An </span>}
              {lang === 'es' ? 'Un sitio web oficial de' : 'official website of the'}{' '}
              {agencyText}
              {taxpayerDisclaimer && lang === 'es' && '. Producido y publicado con dinero de los contribuyentes de impuestos.'}
              {taxpayerDisclaimer && lang !== 'es' && '. Produced and published at taxpayer expense.'}
            </p>
          </section>
        </div>
      </section>

      {/* Required Links Section */}
      <nav
        className="usa-identifier__section usa-identifier__section--required-links"
        aria-label={lang === 'es' ? 'Enlaces importantes,' : 'Important links,'}
      >
        <div className="usa-identifier__container">
          <ul className="usa-identifier__required-links-list">
            {linksToRender.map((link, index) => {
              const isExternal = isExternalLink(link.href);
              return (
                <li key={index} className="usa-identifier__required-links-item">
                  <a
                    href={link.href}
                    className="usa-identifier__required-link usa-link"
                    {...(isExternal && { target: '_blank', rel: 'noopener noreferrer' })}
                  >
                    {link.text}
                    {isExternal && <ExternalLinkIcon />}
                  </a>
                </li>
              );
            })}
          </ul>
        </div>
      </nav>

      {/* USA.gov Section */}
      <section
        className="usa-identifier__section usa-identifier__section--usagov"
        aria-label={lang === 'es' ? 'Enlace a USA.gov,' : 'U.S. government information and services,'}
      >
        <div className="usa-identifier__container">
          <div className="usa-identifier__usagov-description">
            {usaGovContent.text}
            <a 
              href={usaGovContent.href} 
              className="usa-link"
              {...(isExternalLink(usaGovContent.href) && { target: '_blank', rel: 'noopener noreferrer' })}
            >
              {usaGovContent.linkText}
              {isExternalLink(usaGovContent.href) && <ExternalLinkIcon />}
            </a>
          </div>
        </div>
      </section>
    </div>
  );
};

Identifier.propTypes = {
  /** Site domain (e.g., "domain.gov") */
  domain: PropTypes.string,
  /** Array of agency objects with name, logoSrc, logoAlt, and optional href */
  agencies: PropTypes.arrayOf(PropTypes.shape({
    name: PropTypes.string.isRequired,
    shortname: PropTypes.string,
    logoSrc: PropTypes.string,
    logoAlt: PropTypes.string,
    href: PropTypes.string
  })),
  /** Parent agency name (used when no agencies array provided) */
  parentAgency: PropTypes.string,
  /** Array of required policy links */
  requiredLinks: PropTypes.arrayOf(PropTypes.shape({
    text: PropTypes.string.isRequired,
    href: PropTypes.string.isRequired
  })),
  /** USA.gov section content */
  usaGovText: PropTypes.shape({
    text: PropTypes.string,
    linkText: PropTypes.string,
    href: PropTypes.string
  }),
  /** Whether to show taxpayer disclaimer */
  taxpayerDisclaimer: PropTypes.bool,
  /** Language code ('en' or 'es') */
  lang: PropTypes.oneOf(['en', 'es']),
  /** Additional CSS class name */
  className: PropTypes.string,
};

Identifier.defaultProps = {
  domain: '',
  agencies: [],
  parentAgency: '',
  requiredLinks: [],
  usaGovText: {},
  taxpayerDisclaimer: false,
  lang: 'en',
  className: '',
}; 