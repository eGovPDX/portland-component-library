import React from 'react';
import PropTypes from 'prop-types';
import './CardFlag.css';

/**
 * CardFlag - A card variant with media left/right and inset options.
 *
 * Props:
 * - heading: string (required)
 * - text: string (required)
 * - media: React node (required)
 * - mediaAlt: string (optional, default: 'Card media')
 * - mediaPosition: 'left' | 'right' (default: 'left')
 * - mediaInset: boolean (default: false)
 * - actionButton: React node (optional)
 * - className: string (optional)
 */
export function CardFlag({
  heading,
  text,
  media,
  mediaAlt = 'Card media',
  mediaPosition = 'left',
  mediaInset = false,
  actionButton,
  className = '',
}) {
  const mediaClass = [
    'pdx-card-flag__media',
    mediaInset ? 'pdx-card-flag__media--inset' : '',
    `pdx-card-flag__media--${mediaPosition}`,
  ]
    .filter(Boolean)
    .join(' ');

  // Always render media first, then content. Use flex-direction for order.
  return (
    <div
      className={`pdx-card-flag pdx-card-flag--media-${mediaPosition} ${className}`.trim()}
      data-testid="card-flag"
    >
      <div className={mediaClass} data-testid="card-flag-media">
        {React.isValidElement(media)
          ? React.cloneElement(media, { alt: mediaAlt, className: 'pdx-card-flag__media-element' })
          : media}
      </div>
      <div className="pdx-card-flag__content">
        <div className="pdx-card-flag__heading" data-testid="card-flag-heading">{heading}</div>
        <div className="pdx-card-flag__body" data-testid="card-flag-body">{text}</div>
        {actionButton && (
          <div className="pdx-card-flag__footer" data-testid="card-flag-footer">
            {actionButton}
          </div>
        )}
      </div>
    </div>
  );
}

CardFlag.propTypes = {
  heading: PropTypes.string.isRequired,
  text: PropTypes.string.isRequired,
  media: PropTypes.node.isRequired,
  mediaAlt: PropTypes.string,
  mediaPosition: PropTypes.oneOf(['left', 'right']),
  mediaInset: PropTypes.bool,
  actionButton: PropTypes.node,
  className: PropTypes.string,
}; 