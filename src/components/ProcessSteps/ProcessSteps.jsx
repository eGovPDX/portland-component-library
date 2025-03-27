import React from 'react';
import PropTypes from 'prop-types';
import './ProcessSteps.css';
import { ProcessStepItem } from './ProcessStepItem';

export const ProcessSteps = ({ title, mainDescription, steps }) => {
  return (
    <div className="processSteps">
      <div className="header">
        <h2 className="title">{title}</h2>
        <p className="mainDescription">{mainDescription}</p>
      </div>
      
      <div className="stepsContainer">
        {steps.map((step, index) => (
          <ProcessStepItem
            key={index}
            step={step}
            stepNumber={index + 1}
            isLast={index === steps.length - 1}
          />
        ))}
      </div>
    </div>
  );
};

ProcessSteps.propTypes = {
  title: PropTypes.string.isRequired,
  mainDescription: PropTypes.string.isRequired,
  steps: PropTypes.arrayOf(
    PropTypes.shape({
      heading: PropTypes.string.isRequired,
      description: PropTypes.string.isRequired
    })
  ).isRequired
}; 