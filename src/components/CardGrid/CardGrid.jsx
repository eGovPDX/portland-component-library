import React from 'react';
import PropTypes from 'prop-types';
import { Card } from '../Card';
import './CardGrid.css';

export const CardGrid = ({
  heading,
  cards,
  className,
  ...props
}) => {
  const baseClass = 'card-grid';
  const gridClasses = [
    baseClass,
    className
  ].filter(Boolean).join(' ');

  return (
    <div className={gridClasses} data-testid="card-grid" {...props}>
      <hr className="card-grid__divider" />
      {heading && <h3 className="card-grid__heading">{heading}</h3>}
      <div className="card-grid__container">
        {cards.map((card, index) => (
          <Card key={index} {...card} />
        ))}
      </div>
    </div>
  );
};

CardGrid.propTypes = {
  heading: PropTypes.string,
  cards: PropTypes.arrayOf(PropTypes.shape({
    heading: PropTypes.string,
    text: PropTypes.string,
    actionButton: PropTypes.node,
    onClick: PropTypes.func,
    media: PropTypes.oneOfType([PropTypes.string, PropTypes.node]),
    mediaPosition: PropTypes.oneOf(['left', 'right']),
    mediaExdent: PropTypes.bool,
    mediaFirst: PropTypes.bool,
    mediaInset: PropTypes.bool,
  })).isRequired,
  className: PropTypes.string,
}; 