import React from 'react';
import PropTypes from 'prop-types';
import './HeroGlobal.css';

export const HeroGlobal = ({
  title,
  description,
  tags = [],
  image,
  actionButton,
  className,
  ...props
}) => {
  const baseClass = 'hero-global';
  const titleId = React.useId();

  const containerClasses = [
    baseClass,
    className
  ].filter(Boolean).join(' ');

  return (
    <section 
      className={containerClasses} 
      role="banner"
      aria-labelledby={titleId}
      {...props}
    >
      <div className={`${baseClass}__container`}>
        <div className={`${baseClass}__content-wrapper`}>
          <div className={`${baseClass}__content`}>
            <h1 
              id={titleId}
              className={`${baseClass}__title`}
            >
              {title}
            </h1>
            
            {tags.length > 0 && (
              <div 
                className={`${baseClass}__tags`}
                aria-label="Content categories"
              >
                {tags.map((tag, index) => (
                  <span 
                    key={index} 
                    className={`${baseClass}__tag`}
                  >
                    {tag}
                  </span>
                ))}
              </div>
            )}

            {description && (
              <p className={`${baseClass}__description`}>
                {description}
              </p>
            )}

            {actionButton && (
              <div className={`${baseClass}__action`}>
                {actionButton}
              </div>
            )}
          </div>
        </div>

        {image && (
          <div className={`${baseClass}__image-wrapper`}>
            <div className={`${baseClass}__image-container`}>
              <img
                src={typeof image.src === 'string' ? image.src : image.src.default || image.src}
                alt={image.alt || ''}
                className={`${baseClass}__image`}
                loading="lazy"
                onError={(e) => {
                  console.error('Image failed to load:', image.src);
                  console.error('Error event:', e);
                  console.error('Image element:', e.target);
                  console.error('Image natural dimensions:', e.target.naturalWidth, e.target.naturalHeight);
                  e.target.classList.add(`${baseClass}__image--error`);
                }}
                onLoad={(e) => {
                  console.log('Image loaded successfully:', image.src);
                  console.log('Image element:', e.target);
                  console.log('Image natural dimensions:', e.target.naturalWidth, e.target.naturalHeight);
                }}
              />
              <div className={`${baseClass}__image-placeholder`} aria-hidden="true" />
            </div>
          </div>
        )}
      </div>
    </section>
  );
};

HeroGlobal.propTypes = {
  /** The main title of the hero section */
  title: PropTypes.string.isRequired,
  /** Optional description text */
  description: PropTypes.string,
  /** Array of tag strings to display */
  tags: PropTypes.arrayOf(PropTypes.string),
  /** Optional image configuration */
  image: PropTypes.shape({
    src: PropTypes.oneOfType([
      PropTypes.string,
      PropTypes.object // For Vite/webpack imported assets
    ]).isRequired,
    alt: PropTypes.string
  }),
  /** Optional action button component */
  actionButton: PropTypes.node,
  /** Additional CSS class name */
  className: PropTypes.string
}; 