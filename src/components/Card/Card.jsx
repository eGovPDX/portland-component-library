import React from 'react';
import PropTypes from 'prop-types';
import './Card.css';

/**
 * Card component based on USWDS Card
 *
 * Displays an optional media area, heading, text, custom content, and footer action button.
 *
 * @component
 * @param {Object} props - Component props
 * @param {string} [props.heading] - Heading text
 * @param {string} [props.text] - Supporting body text
 * @param {React.ReactNode} [props.actionButton] - Optional button rendered in the footer
 * @param {function} [props.onClick] - Click handler passed to `actionButton` if provided
 * @param {string} [props.className] - Additional CSS class names
 * @param {React.ReactNode} [props.children] - Arbitrary content inside the card body
 * @param {string|React.ReactNode} [props.media] - Image URL or custom media element
 * @param {('left'|'right')} [props.mediaPosition='left'] - Media position when used with grid layouts
 * @param {boolean} [props.mediaExdent=false] - Use the exdent media variant
 * @param {boolean} [props.mediaFirst=false] - Render media before header/body
 * @param {boolean} [props.mediaInset=false] - Use the inset media variant
 * @returns {JSX.Element} Card element
 */
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