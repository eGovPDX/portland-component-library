import React from 'react';
import PropTypes from 'prop-types';
import './StepIndicator.css';

/**
 * Single segment in the StepIndicator, with optional label and counter.
 *
 * @component
 * @param {Object} props - Component props
 * @param {string} props.label - Segment label text
 * @param {('complete'|'current'|'not-complete')} props.status - Visual status
 * @param {boolean} [props.showLabel=true] - Show the label text
 * @param {boolean} [props.showCounter=false] - Show a numeric counter
 * @param {boolean} [props.smallCounter=false] - Small counter style
 * @param {boolean} [props.centered=false] - Center the label text
 * @param {number} props.number - Step number for counter
 * @returns {JSX.Element} Step segment element
 */
export const StepIndicatorSegment = ({
  label,
  status,
  showLabel = true,
  showCounter = false,
  smallCounter = false,
  centered = false,
  number
}) => {
  const baseClass = 'usa-step-indicator__segment';
  const statusClass = `${baseClass} ${baseClass}--${status}`;
  
  return (
    <li className={statusClass} aria-current={status === 'current' ? 'true' : undefined}>
      {showCounter && (
        <span className="usa-step-indicator__counter">
          <span className="usa-step-indicator__counter-inner">{number}</span>
        </span>
      )}
      {showLabel && (
        <span className="usa-step-indicator__segment-label">
          {label}
          {status === 'complete' && <span className="usa-sr-only">completed</span>}
          {status === 'not-complete' && <span className="usa-sr-only">not completed</span>}
        </span>
      )}
    </li>
  );
};

StepIndicatorSegment.propTypes = {
  label: PropTypes.string.isRequired,
  status: PropTypes.oneOf(['complete', 'current', 'not-complete']).isRequired,
  showLabel: PropTypes.bool,
  showCounter: PropTypes.bool,
  smallCounter: PropTypes.bool,
  centered: PropTypes.bool,
  number: PropTypes.number.isRequired
}; 