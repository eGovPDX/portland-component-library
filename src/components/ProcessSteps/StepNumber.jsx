import React from 'react';
import PropTypes from 'prop-types';
import './ProcessSteps.css';

/**
 * StepNumber - A component that renders a circular step number indicator
 * 
 * This component creates a visual step number display with a circular background
 * and centered number text. It's used within ProcessStepItem to show the order
 * of steps in a process flow.
 * 
 * @component
 * @example
 * ```jsx
 * <StepNumber number={1} />
 * ```
 * 
 * @param {Object} props - Component props
 * @param {number} props.number - The step number to display (1, 2, 3, etc.)
 * 
 * @returns {JSX.Element} A circular step number indicator with SVG background
 */
export const StepNumber = ({ number }) => {
  return (
    <div className="stepNumberWrapper">
      <svg 
        xmlns="http://www.w3.org/2000/svg" 
        viewBox="0 0 48 48" 
        className="stepNumberSvg"
      >
        <circle 
          cx="24" 
          cy="24" 
          r="22"
        />
      </svg>
      <span className="stepNumberText">{number}</span>
    </div>
  );
};

StepNumber.propTypes = {
  number: PropTypes.number.isRequired
}; 