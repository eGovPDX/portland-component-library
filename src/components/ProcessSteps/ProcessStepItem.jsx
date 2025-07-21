import React from 'react';
import PropTypes from 'prop-types';
import './ProcessSteps.css';
import { StepNumber } from './StepNumber';

/**
 * ProcessStepItem - A component that renders a single step in a process flow
 * 
 * This component displays a step number, heading, description, and optional call-to-action
 * within a process steps layout. It includes a visual connector (vertical bar) to link
 * to the next step, except for the last step.
 * 
 * @component
 * @example
 * ```jsx
 * <ProcessStepItem
 *   step={{
 *     heading: "Submit Application",
 *     description: "Fill out the required forms and submit your application online.",
 *     cta: <Button>Start Application</Button>
 *   }}
 *   stepNumber={1}
 *   isLast={false}
 * />
 * ```
 * 
 * @param {Object} props - Component props
 * @param {Object} props.step - The step data object
 * @param {string} props.step.heading - The title/heading for this step
 * @param {string} props.step.description - The detailed description of what this step involves
 * @param {React.ReactNode} [props.step.cta] - Optional call-to-action element (button, link, etc.)
 * @param {number} props.stepNumber - The numerical order of this step (1, 2, 3, etc.)
 * @param {boolean} props.isLast - Whether this is the final step in the process
 * 
 * @returns {JSX.Element} A process step item with number, content, and optional connector
 */
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
        {step.cta && <div className="stepCta">{step.cta}</div>}
      </div>
    </div>
  );
};

ProcessStepItem.propTypes = {
  step: PropTypes.shape({
    heading: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
    cta: PropTypes.node
  }).isRequired,
  stepNumber: PropTypes.number.isRequired,
  isLast: PropTypes.bool.isRequired
}; 