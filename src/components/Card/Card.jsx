import React from 'react';
import { PropTypes } from 'prop-types';
import './Card.css';

export const Card = ({
  heading,
  text,
  actionButton,
  onClick,
  className,
  ...props
}) => {
  const baseClass = 'usa-card';
  const cardClasses = [baseClass, className].filter(Boolean).join(' ');

  // Pass the onClick handler directly to the button
  const buttonWithHandler = actionButton && onClick 
    ? React.cloneElement(actionButton, { onClick }) 
    : actionButton;

  return (
    <div className={cardClasses} {...props}>
      <div className="usa-card__container">
        <div className="usa-card__header">
          <h2 className="usa-card__heading">{heading}</h2>
        </div>
        <div className="usa-card__body">
          <p>{text}</p>
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
  heading: PropTypes.string.isRequired,
  text: PropTypes.string.isRequired,
  actionButton: PropTypes.node,
  onClick: PropTypes.func,
  className: PropTypes.string
}; 