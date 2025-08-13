import React from 'react';
import PropTypes from 'prop-types';
import './SummaryBox.css';

/**
 * SummaryBox displays a prominent heading, optional description, and supporting content.
 *
 * @component
 * @param {Object} props - Component props
 * @param {string} props.heading - Heading text (used for aria-labelledby)
 * @param {string} [props.description] - Optional description shown above text
 * @param {React.ReactNode} props.children - Content inside the summary box
 * @returns {JSX.Element} Summary box region
 */
export const SummaryBox = ({ heading, description, children }) => {
  const headingId = `summary-box-${heading.toLowerCase().replace(/\s+/g, '-')}`;

  return (
    <div
      className="usa-summary-box"
      role="region"
      aria-labelledby={headingId}
    >
      <div className="usa-summary-box__body">
        <h3 className="usa-summary-box__heading" id={headingId}>
          {heading}
        </h3>
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