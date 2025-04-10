import React from 'react';
import PropTypes from 'prop-types';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { 
  faEnvelope,
  faPhoneVolume,
  faCloud,
  faCompass,
  faClock,
} from '@fortawesome/free-solid-svg-icons';
import {
  faFacebook,
  faTwitter,
  faInstagram,
} from '@fortawesome/free-brands-svg-icons';
import './Contacts.css';

export const Contacts = ({
  title,
  emailAddress,
  officePhone,
  informationPhone,
  relayServicePhone,
  socialMedia,
  officeDetails,
  className
}) => {
  const {
    facebook,
    twitter,
    bluesky,
    instagram,
  } = socialMedia || {};

  const {
    address,
    room,
    city,
    state,
    zip,
    days,
    hours,
  } = officeDetails || {};

  return (
    <div className={`pgov-contacts ${className || ''}`}>
      <div className="pgov-contacts__border" />
      <div className="pgov-contacts__container">
        <div className="pgov-contacts__section">
          <div className="pgov-contacts__section-header">
            <h3 className="pgov-contacts__heading">{title}</h3>
            <div className="pgov-contacts__button-container">
              <a 
                href={`mailto:${emailAddress}`}
                className="pgov-contacts__button"
                aria-label={`Contact ${title} via email`}
              >
                <FontAwesomeIcon icon={faEnvelope} className="pgov-contacts__button-icon" />
                <span>Contact this {title}</span>
              </a>
            </div>
          </div>
          <div className="pgov-contacts__phone-list">
            {officePhone && (
              <div className="pgov-contacts__item">
                <div className="pgov-contacts__item-header">
                  <FontAwesomeIcon icon={faPhoneVolume} className="pgov-contacts__icon" />
                  <span className="pgov-contacts__label">Phone: Office</span>
                </div>
                <a href={`tel:${officePhone}`} className="pgov-contacts__link">{officePhone}</a>
              </div>
            )}
            {informationPhone && (
              <div className="pgov-contacts__item">
                <div className="pgov-contacts__item-header">
                  <FontAwesomeIcon icon={faPhoneVolume} className="pgov-contacts__icon" />
                  <span className="pgov-contacts__label">Phone: Information</span>
                </div>
                <a href={`tel:${informationPhone}`} className="pgov-contacts__link">{informationPhone}</a>
              </div>
            )}
            {relayServicePhone && (
              <div className="pgov-contacts__item">
                <div className="pgov-contacts__item-header">
                  <FontAwesomeIcon icon={faPhoneVolume} className="pgov-contacts__icon" />
                  <span className="pgov-contacts__label">Phone: Oregon Relay Service</span>
                </div>
                <a href={`tel:${relayServicePhone}`} className="pgov-contacts__link">{relayServicePhone}</a>
              </div>
            )}
          </div>
        </div>

        <div className="pgov-contacts__section">
          <h3 className="pgov-contacts__heading">Social Media</h3>
          <div className="pgov-contacts__social-list">
            {facebook && (
              <div className="pgov-contacts__item">
                <div className="pgov-contacts__item-header">
                  <FontAwesomeIcon icon={faFacebook} className="pgov-contacts__icon" />
                  <span className="pgov-contacts__label">Facebook</span>
                </div>
                <a href={`https://facebook.com/${facebook}`} className="pgov-contacts__link" target="_blank" rel="noopener noreferrer">
                  {facebook}
                </a>
              </div>
            )}
            {twitter && (
              <div className="pgov-contacts__item">
                <div className="pgov-contacts__item-header">
                  <FontAwesomeIcon icon={faTwitter} className="pgov-contacts__icon" />
                  <span className="pgov-contacts__label">X (Twitter)</span>
                </div>
                <a href={`https://twitter.com/${twitter}`} className="pgov-contacts__link" target="_blank" rel="noopener noreferrer">
                  {twitter}
                </a>
              </div>
            )}
            {bluesky && (
              <div className="pgov-contacts__item">
                <div className="pgov-contacts__item-header">
                  <FontAwesomeIcon icon={faCloud} className="pgov-contacts__icon" />
                  <span className="pgov-contacts__label">Bluesky</span>
                </div>
                <a href={`https://bsky.app/profile/${bluesky}`} className="pgov-contacts__link" target="_blank" rel="noopener noreferrer">
                  {bluesky}
                </a>
              </div>
            )}
            {instagram && (
              <div className="pgov-contacts__item">
                <div className="pgov-contacts__item-header">
                  <FontAwesomeIcon icon={faInstagram} className="pgov-contacts__icon" />
                  <span className="pgov-contacts__label">Instagram</span>
                </div>
                <a href={`https://instagram.com/${instagram}`} className="pgov-contacts__link" target="_blank" rel="noopener noreferrer">
                  {instagram}
                </a>
              </div>
            )}
          </div>
        </div>

        <div className="pgov-contacts__section">
          <h3 className="pgov-contacts__heading">Office</h3>
          <div className="pgov-contacts__office-info">
            <div className="pgov-contacts__item">
              <div className="pgov-contacts__item-header">
                <FontAwesomeIcon icon={faCompass} className="pgov-contacts__icon" />
                <span className="pgov-contacts__label">Address</span>
              </div>
              <a href={`https://maps.google.com/?q=${address} ${city}, ${state} ${zip}`} className="pgov-contacts__link" target="_blank" rel="noopener noreferrer">
                {address}<br />
                {room && <>{room}<br /></>}
                {city}, {state} {zip}
              </a>
            </div>
            {hours && (
              <div className="pgov-contacts__item">
                <div className="pgov-contacts__item-header">
                  <FontAwesomeIcon icon={faClock} className="pgov-contacts__icon" />
                  <span className="pgov-contacts__label">Hours</span>
                </div>
                <div className="pgov-contacts__hours-value">
                  <div>{days}</div>
                  <div>{hours}</div>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

Contacts.propTypes = {
  title: PropTypes.string.isRequired,
  emailAddress: PropTypes.string.isRequired,
  officePhone: PropTypes.string,
  informationPhone: PropTypes.string,
  relayServicePhone: PropTypes.string,
  socialMedia: PropTypes.shape({
    facebook: PropTypes.string,
    twitter: PropTypes.string,
    bluesky: PropTypes.string,
    instagram: PropTypes.string,
  }),
  officeDetails: PropTypes.shape({
    address: PropTypes.string.isRequired,
    room: PropTypes.string,
    city: PropTypes.string.isRequired,
    state: PropTypes.string.isRequired,
    zip: PropTypes.string.isRequired,
    hours: PropTypes.string,
  }).isRequired,
  className: PropTypes.string
}; 