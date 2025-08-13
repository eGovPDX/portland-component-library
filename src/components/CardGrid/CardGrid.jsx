import React from 'react';
import PropTypes from 'prop-types';
import { Card } from '../Card';
import './CardGrid.css';

/**
 * Grid layout for rendering a collection of `Card` components.
 *
 * @component
 * @param {Object} props - Component props
 * @param {string} [props.heading] - Optional section heading
 * @param {boolean} [props.showDivider=true] - Show divider line above
 * @param {boolean} [props.showHeading=true] - Control heading visibility
 * @param {Array<Object>} props.cards - Array of props passed to each `Card`
 * @param {string} [props.className] - Additional CSS class names
 * @returns {JSX.Element} Card grid section
 */
export const CardGrid = ({
  heading,
  showDivider = true,
  showHeading = true,
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
      {showDivider && <hr className="card-grid__divider" />}
      {showHeading && heading && <h3 className="card-grid__heading">{heading}</h3>}
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
  showDivider: PropTypes.bool,
  showHeading: PropTypes.bool,
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