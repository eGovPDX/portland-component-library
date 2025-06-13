import React from 'react';
import PropTypes from 'prop-types';
import './Card.css';

export const Card = ({
  heading,
  text,
  actionButton,
  onClick,
  className,
  children,
  media,
  mediaPosition = 'left',
  mediaExdent = false,
  mediaFirst = false,
  mediaInset = false,
  ...props
}) => {
  const baseClass = 'usa-card';
  const cardClasses = [
    baseClass,
    media && 'usa-card--media',
    mediaExdent && 'usa-card--exdent',
    mediaFirst && 'usa-card--header-first',
    mediaInset && 'usa-card--inset',
    className
  ].filter(Boolean).join(' ');

  // Pass the onClick handler directly to the button
  const buttonWithHandler = actionButton && onClick 
    ? React.cloneElement(actionButton, { onClick }) 
    : actionButton;

  const renderMedia = () => {
    if (!media) return null;
    return (
      <div className={`usa-card__media ${mediaExdent ? 'usa-card__media--exdent' : ''}`}>
        <div className="usa-card__img">
          {typeof media === 'string' ? (
            <img src={media} alt="" />
          ) : (
            media
          )}
        </div>
      </div>
    );
  };

  return (
    <div className={cardClasses} {...props}>
      <div className="usa-card__container">
        {media && renderMedia()}
        {heading && (
          <div className="usa-card__header">
            <h4 className="usa-card__heading">{heading}</h4>
          </div>
        )}
        <div className="usa-card__body">
          {text && <p>{text}</p>}
          {children}
        </div>
        {actionButton && (
          <div className="usa-card__footer">
            {buttonWithHandler}
          </div>
        )}
      </div>
    </div>
  );
};

Card.propTypes = {
  heading: PropTypes.string,
  text: PropTypes.string,
  actionButton: PropTypes.node,
  onClick: PropTypes.func,
  className: PropTypes.string,
  children: PropTypes.node,
  media: PropTypes.oneOfType([PropTypes.string, PropTypes.node]),
  mediaPosition: PropTypes.oneOf(['left', 'right']),
  mediaExdent: PropTypes.bool,
  mediaFirst: PropTypes.bool,
  mediaInset: PropTypes.bool,
}; 