import React from 'react';
import PropTypes from 'prop-types';
import './ProcessSteps.css';
import { ProcessStepItem } from './ProcessStepItem';

/**
 * ProcessSteps - A component that renders a complete process flow with multiple steps
 * 
 * This component displays a series of process steps with a title, main description,
 * and individual step items. Each step can include a heading, description, and
 * optional call-to-action. Steps are automatically numbered and connected visually.
 * 
 * @component
 * @example
 * ```jsx
 * <ProcessSteps
 *   title="Application Process"
 *   mainDescription="Follow these steps to complete your application"
 *   steps={[
 *     {
 *       heading: "Submit Application",
 *       description: "Fill out the required forms and submit your application online.",
 *       cta: <Button>Start Application</Button>
 *     },
 *     {
 *       heading: "Review Process",
 *       description: "Your application will be reviewed within 5-7 business days."
 *     },
 *     {
 *       heading: "Receive Decision",
 *       description: "You'll receive an email notification with the final decision.",
 *       cta: <Link href="/status">Check Status</Link>
 *     }
 *   ]}
 * />
 * ```
 * 
 * @param {Object} props - Component props
 * @param {string} props.title - The main title/heading for the process steps section
 * @param {string} props.mainDescription - A description that explains the overall process
 * @param {Array<Object>} props.steps - Array of step objects defining each step in the process
 * @param {string} props.steps[].heading - The title/heading for this step
 * @param {string} props.steps[].description - The detailed description of what this step involves
 * @param {React.ReactNode} [props.steps[].cta] - Optional call-to-action element (button, link, etc.) for this step
 * 
 * @returns {JSX.Element} A complete process steps component with header and step items
 */
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
      description: PropTypes.string.isRequired,
      cta: PropTypes.node,
    })
  ).isRequired
}; 