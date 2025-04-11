import React from 'react';
import PropTypes from 'prop-types';
import './HeroHomepage.css';

export const HeroHomepage = ({
  title,
  subtitle,
  searchComponent,
  links = [],
  className,
  ...props
}) => {
  const baseClass = 'pgov-hero-homepage';

  const containerClasses = [
    baseClass,
    className
  ].filter(Boolean).join(' ');

  return (
    <div className={containerClasses} {...props}>
      <div className={`${baseClass}__title-container`}>
        <h1 className={`${baseClass}__title`}>{title}</h1>
      </div>
      
      <div className={`${baseClass}__search-container`}>
        {searchComponent}
      </div>

      {subtitle && (
        <div className={`${baseClass}__subtitle-container`}>
          <h2 className={`${baseClass}__subtitle`}>{subtitle}</h2>
        </div>
      )}

      {links.length > 0 && (
        <div className={`${baseClass}__links-container`}>
          {links.map((link, index) => (
            <a
              key={index}
              href={link.href}
              className={`${baseClass}__link`}
              {...link.props}
            >
              {link.text}
            </a>
          ))}
        </div>
      )}
    </div>
  );
};

HeroHomepage.propTypes = {
  title: PropTypes.string.isRequired,
  subtitle: PropTypes.string,
  searchComponent: PropTypes.node.isRequired,
  links: PropTypes.arrayOf(
    PropTypes.shape({
      text: PropTypes.string.isRequired,
      href: PropTypes.string.isRequired,
      props: PropTypes.object
    })
  ),
  className: PropTypes.string
}; 