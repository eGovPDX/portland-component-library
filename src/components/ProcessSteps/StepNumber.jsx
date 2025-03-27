import React from 'react';
import PropTypes from 'prop-types';
import './ProcessSteps.css';

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