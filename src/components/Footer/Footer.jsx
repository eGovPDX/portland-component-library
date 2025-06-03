import React from 'react';
import PropTypes from 'prop-types';
import './Footer.css';

/**
 * Footer component for Portland.gov
 */
export const Footer = ({
  feedbackUrl,
  accessibilityText,
  serviceRequestText,
  onlineServiceUrl,
  phoneNumber,
  relayServiceText,
  relayServiceNumber,
  translationText,
  generalInfoLinks,
  termsLinks,
  portlandGovLinks,
  socialMediaLinks,
  cityName,
  cityLogoUrl,
  cityLogoAlt,
  copyrightText,
  exploreServicesText,
  exploreServicesUrl,
  className,
}) => {
  return (
    <footer className={`footer ${className}`} role="contentinfo">
      <div className="footer-feedback-section">
        <p className="footer-feedback-text">
          See something we could improve on this page? <a href={feedbackUrl} className="footer-feedback-link">Give website feedback</a>.
        </p>
      </div>
      
      <div className="footer-accessibility-section">
        <div className="footer-accessibility-container">
          <div className="footer-text-container">
            <p className="footer-accessibility-text">
              {accessibilityText}
              {' '}
              <span className="footer-request-services">
                Request these services <a href={onlineServiceUrl} className="footer-online-link">online</a> or <a href={`tel:${phoneNumber.replace(/\D/g, '')}`} className="footer-phone-link">{phoneNumber}</a>. 
                Relay Service: <a href={`tel:${relayServiceNumber.replace(/\D/g, '')}`} className="footer-relay-link">{relayServiceNumber}</a>.
              </span>
            </p>
            
            <p className="footer-translation-text">
              <a href={`tel:${phoneNumber.replace(/\D/g, '')}`} className="footer-translation-phone-link">{phoneNumber}</a> {translationText}
            </p>
          </div>
          
          <div className="footer-explore-services">
            <a href={exploreServicesUrl} className="footer-explore-button">
              {exploreServicesText} <span className="footer-explore-arrow">→</span>
            </a>
          </div>
        </div>
      </div>

      <div className="footer-main">
        <div className="footer-nav">
          <div className="footer-city-info">
            <p className="footer-city-name">{cityName}</p>
            <img src={cityLogoUrl} alt={cityLogoAlt} className="footer-city-logo" />
            <p className="footer-copyright">{copyrightText}</p>
          </div>

          <div className="footer-nav-section">
            <h4 className="footer-heading">General Information</h4>
            <ul className="footer-links">
              {generalInfoLinks.map((link, index) => (
                <li key={`general-link-${index}`} className="footer-link-item">
                  <a href={link.href} className="footer-link">{link.label}</a>
                </li>
              ))}
            </ul>
          </div>

          <div className="footer-nav-section">
            <h4 className="footer-heading">Terms And Policies</h4>
            <ul className="footer-links">
              {termsLinks.map((link, index) => (
                <li key={`terms-link-${index}`} className="footer-link-item">
                  <a href={link.href} className="footer-link">{link.label}</a>
                </li>
              ))}
            </ul>
          </div>

          <div className="footer-nav-section">
            <h4 className="footer-heading">Portland.Gov</h4>
            <ul className="footer-links">
              {portlandGovLinks.map((link, index) => (
                <li key={`pgov-link-${index}`} className="footer-link-item">
                  <a href={link.href} className="footer-link">{link.label}</a>
                </li>
              ))}
            </ul>
          </div>

          <div className="footer-nav-section">
            <h4 className="footer-heading">Social Media</h4>
            <ul className="footer-links">
              {socialMediaLinks.map((link, index) => (
                <li key={`social-link-${index}`} className="footer-link-item">
                  <a href={link.href} className="footer-link">{link.label}</a>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </footer>
  );
};

Footer.propTypes = {
  /** URL for the feedback link */
  feedbackUrl: PropTypes.string,
  /** Text for the accessibility section */
  accessibilityText: PropTypes.string,
  /** Text for service request */
  serviceRequestText: PropTypes.string,
  /** URL for online service */
  onlineServiceUrl: PropTypes.string,
  /** Phone number for services */
  phoneNumber: PropTypes.string,
  /** Text for relay service */
  relayServiceText: PropTypes.string,
  /** Relay service number */
  relayServiceNumber: PropTypes.string,
  /** Text for translation section */
  translationText: PropTypes.string,
  /** Links for general information section */
  generalInfoLinks: PropTypes.arrayOf(
    PropTypes.shape({
      label: PropTypes.string.isRequired,
      href: PropTypes.string.isRequired,
    })
  ),
  /** Links for terms and policies section */
  termsLinks: PropTypes.arrayOf(
    PropTypes.shape({
      label: PropTypes.string.isRequired,
      href: PropTypes.string.isRequired,
    })
  ),
  /** Links for Portland.gov section */
  portlandGovLinks: PropTypes.arrayOf(
    PropTypes.shape({
      label: PropTypes.string.isRequired,
      href: PropTypes.string.isRequired,
    })
  ),
  /** Social media links */
  socialMediaLinks: PropTypes.arrayOf(
    PropTypes.shape({
      label: PropTypes.string.isRequired,
      href: PropTypes.string.isRequired,
    })
  ),
  /** City name */
  cityName: PropTypes.string,
  /** URL for the city logo */
  cityLogoUrl: PropTypes.string,
  /** Alt text for the city logo */
  cityLogoAlt: PropTypes.string,
  /** Copyright text */
  copyrightText: PropTypes.string,
  /** Text for explore services button */
  exploreServicesText: PropTypes.string,
  /** URL for explore services button */
  exploreServicesUrl: PropTypes.string,
  /** Additional CSS class for the footer */
  className: PropTypes.string,
};

Footer.defaultProps = {
  feedbackUrl: '/contact',
  accessibilityText: 'The City of Portland ensures meaningful access to City programs, services, and activities to comply with Civil Rights Title VI and ADA Title II laws and reasonably provides: translation, interpretation, modifications, accommodations, alternative formats, auxiliary aids and services.',
  serviceRequestText: 'Request these services',
  onlineServiceUrl: '/contact',
  phoneNumber: '503-823-4000',
  relayServiceText: 'Relay Service',
  relayServiceNumber: '711',
  translationText: 'Traducción e Interpretación | Biên Dịch và Thông Dịch | 口笔译服务 | Устный и письменный перевод | Turjumaad iyo Fasiraad | Письмовий і усний переклад | Traducere și interpretariat | Chiaku me Awewen Kapas | अनुवादन तथा व्याख्या',
  generalInfoLinks: [
    { label: '311@portlandoregon.gov', href: 'mailto:311@portlandoregon.gov' },
    { label: '311 information an customer service', href: '/customer-service' },
    { label: '503-823-4000', href: 'tel:5038234000' },
    { label: '711 Oregon Relay Service', href: 'tel:711' },
  ],
  termsLinks: [
    { label: 'ADA accommodation', href: '/ada-accommodation' },
    { label: 'Captioning and transcription', href: '/captioning' },
    { label: 'Privacy Policy', href: '/privacy' },
  ],
  portlandGovLinks: [
    { label: 'About this website', href: '/about' },
    { label: 'Employee portal', href: '/employees' },
    { label: 'Editor log in', href: '/login' },
  ],
  socialMediaLinks: [
    { label: 'Bluesky', href: 'https://bsky.app' },
    { label: 'Facebook', href: 'https://facebook.com/CityofPortland' },
    { label: 'Instagram', href: 'https://instagram.com/portlandoregon' },
    { label: 'X (Twitter)', href: 'https://twitter.com/portlandgov' },
  ],
  cityName: 'City of Portland, Oregon',
  cityLogoUrl: '/city-seal.png',
  cityLogoAlt: 'City of Portland Seal',
  copyrightText: '© Copyright 2018-2023',
  exploreServicesText: 'Explore all services',
  exploreServicesUrl: '/services',
  className: '',
}; 