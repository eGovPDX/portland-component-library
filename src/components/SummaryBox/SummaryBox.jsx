import React from 'react';
import PropTypes from 'prop-types';
import './SummaryBox.css';

export const SummaryBox = ({ heading, description, children }) => {
  const headingId = `summary-box-${heading.toLowerCase().replace(/\s+/g, '-')}`;

  return (
    <div
      className="usa-summary-box"
      role="region"
      aria-labelledby={headingId}
    >
      <div className="usa-summary-box__body">
        <h4 className="usa-summary-box__heading" id={headingId}>
          {heading}
        </h4>
        {description && (
          <div className="summary-box-description">
            {description}
          </div>
        )}
        <div className="usa-summary-box__text">
          {children}
        </div>
      </div>
    </div>
  );
};

SummaryBox.propTypes = {
  heading: PropTypes.string.isRequired,
  description: PropTypes.string,
  children: PropTypes.node.isRequired,
}; 