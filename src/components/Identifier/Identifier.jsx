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

  // Build agency links/text for disclaimer
  const renderAgencyContent = () => {
    // If no agencies array provided, but parentAgency exists, render it as a link
    if ((agencies == null || agencies.length === 0)) {
      if (!parentAgency) return '';
      return (
        <a href="#" className="usa-identifier__agency-link">{parentAgency}</a>
      );
    }

    // Normalize agencies to ensure we can fall back to parentAgency name when missing
    const normalizedAgencies = agencies.map((agency) => ({
      name: agency.name || parentAgency,
      href: agency.href || '#',
    })).filter((agency) => Boolean(agency.name));

    if (normalizedAgencies.length === 0) {
      // If all agencies lacked names and no parentAgency, render nothing
      if (!parentAgency) return '';
      return (
        <a href="#" className="usa-identifier__agency-link">{parentAgency}</a>
      );
    }

    if (normalizedAgencies.length === 1) {
      const agency = normalizedAgencies[0];
      return (
        <a href={agency.href} className="usa-identifier__agency-link">{agency.name}</a>
      );
    }

    if (normalizedAgencies.length === 2) {
      const connector = lang === 'es' ? ' y ' : ' and the ';
      return (
        <>
          <a href={normalizedAgencies[0].href} className="usa-identifier__agency-link">{normalizedAgencies[0].name}</a>
          {connector}
          <a href={normalizedAgencies[1].href} className="usa-identifier__agency-link">{normalizedAgencies[1].name}</a>
        </>
      );
    }

    // 3 or more
    const connector = lang === 'es' ? ' y ' : ', and the ';
    const lastAgency = normalizedAgencies[normalizedAgencies.length - 1];
    const others = normalizedAgencies.slice(0, -1);
    return (
      <>
        {others.map((agency, index) => (
          <React.Fragment key={index}>
            <a href={agency.href} className="usa-identifier__agency-link">{agency.name}</a>
            {index < others.length - 1 ? ', ' : ''}
          </React.Fragment>
        ))}
        {connector}
        <a href={lastAgency.href} className="usa-identifier__agency-link">{lastAgency.name}</a>
      </>
    );
  };

  // Plain text version of agency content for tests and non-visual parsing
  const buildAgencyTextString = () => {
    if ((agencies == null || agencies.length === 0)) {
      return parentAgency || '';
    }
    const names = agencies
      .map((agency) => agency.name || parentAgency)
      .filter(Boolean);
    if (names.length === 0) return parentAgency || '';
    if (names.length === 1) return names[0];
    if (names.length === 2) return `${names[0]} ${lang === 'es' ? 'y' : 'and the'} ${names[1]}`;
    const others = names.slice(0, -1).join(', ');
    const last = names[names.length - 1];
    return `${others}${lang === 'es' ? ' y ' : ', and the '} ${last}`;
  };

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
              {lang === 'es' ? '' : <span aria-hidden="true">An{' '}</span>}
              {lang === 'es' ? 'Un sitio web oficial de' : 'official website of the'}{' '}
              {/* Screen-reader only full text for testing/find-by-text, followed by visual links */}
              <span className="usa-sr-only">{buildAgencyTextString()}</span>
              {renderAgencyContent()}
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
              const safeHref = link?.href || '#';
              const isExternal = isExternalLink(safeHref);
              return (
                <li key={index} className="usa-identifier__required-links-item">
                  <a
                    href={safeHref}
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