import React from 'react';
import PropTypes from 'prop-types';
import './StepIndicator.css';

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