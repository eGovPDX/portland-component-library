import React from 'react';
import PropTypes from 'prop-types';
import './ProcessSteps.css';
import { StepNumber } from './StepNumber';

export const ProcessStepItem = ({ step, stepNumber, isLast }) => {
  return (
    <div className="stepItem">
      <div className="stepNumberContainer">
        <StepNumber number={stepNumber} />
        {!isLast && <div className="verticalBar" />}
      </div>
      <div className="stepContent">
        <h3 className="stepHeading">{step.heading}</h3>
        <p className="stepDescription">{step.description}</p>
      </div>
    </div>
  );
};

ProcessStepItem.propTypes = {
  step: PropTypes.shape({
    heading: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired
  }).isRequired,
  stepNumber: PropTypes.number.isRequired,
  isLast: PropTypes.bool.isRequired
}; 