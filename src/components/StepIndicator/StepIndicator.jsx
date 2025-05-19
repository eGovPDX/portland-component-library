import React from 'react';
import PropTypes from 'prop-types';
import './StepIndicator.css';
import { StepIndicatorSegment } from './StepIndicatorSegment';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPizzaSlice } from '@fortawesome/free-solid-svg-icons';

export const StepIndicator = ({
  steps,
  currentStep,
  title,
  variant = 'default',
  showLabels = true,
  showCounters = false,
  centered = false,
  smallCounters = false,
  className = '',
  ...props
}) => {
  // Calculate classes based on variants
  const baseClass = 'usa-step-indicator';
  const noLabelsClass = !showLabels ? `${baseClass}--no-labels` : '';
  const countersClass = showCounters ? `${baseClass}--counters` : '';
  const smallCountersClass = smallCounters ? `${baseClass}--counters-sm` : '';
  const centeredClass = centered ? `${baseClass}--center` : '';
  const variantClass = variant !== 'default' ? `${baseClass}--${variant}` : '';
  
  const stepIndicatorClasses = [
    baseClass,
    noLabelsClass,
    countersClass,
    smallCountersClass,
    centeredClass,
    variantClass,
    className
  ].filter(Boolean).join(' ');

  return (
    <div className={stepIndicatorClasses} variant={variant} {...props}>
      <ol className="usa-step-indicator__segments">
        {steps.map((step, index) => (
          <StepIndicatorSegment
            key={index}
            label={step.label}
            status={getStepStatus(index, currentStep - 1)}
            showLabel={showLabels}
            showCounter={showCounters}
            smallCounter={smallCounters}
            centered={centered}
            number={index + 1}
          />
        ))}
      </ol>
      <div className="usa-step-indicator__header">
        <h4 className="usa-step-indicator__heading">
          <div className="usa-step-indicator__counter-container">
            <span className="usa-sr-only">Step</span>
            <span className="usa-step-indicator__current-step">{currentStep}</span>
            <span className="usa-step-indicator__total-steps">of {steps.length}</span>
          </div>
          {title && (
            <div className="usa-step-indicator__title-container">
              <FontAwesomeIcon icon={faPizzaSlice} className="usa-step-indicator__heading-icon" />
              <span className="usa-step-indicator__heading-text">{title}</span>
            </div>
          )}
        </h4>
      </div>
    </div>
  );
};

// Determine step status based on current step
function getStepStatus(index, currentStepIndex) {
  if (index < currentStepIndex) {
    return 'complete';
  } else if (index === currentStepIndex) {
    return 'current';
  } else {
    return 'not-complete';
  }
}

StepIndicator.propTypes = {
  steps: PropTypes.arrayOf(
    PropTypes.shape({
      label: PropTypes.string.isRequired
    })
  ).isRequired,
  currentStep: PropTypes.number.isRequired,
  title: PropTypes.string,
  variant: PropTypes.oneOf(['default', 'mobile']),
  showLabels: PropTypes.bool,
  showCounters: PropTypes.bool,
  centered: PropTypes.bool,
  smallCounters: PropTypes.bool,
  className: PropTypes.string
}; 