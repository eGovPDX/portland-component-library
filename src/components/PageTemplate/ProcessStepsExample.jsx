import React from 'react';
import { SideNav } from '../SideNav/SideNav';
import { ProcessSteps } from '../ProcessSteps/ProcessSteps';
import { SummaryBox } from '../SummaryBox/SummaryBox';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowRight } from '@fortawesome/free-solid-svg-icons';
import './ProcessStepsExample.css';

export const ProcessStepsExample = () => {
  const steps = [
    { 
      title: 'Research',
      link: '#research',
      heading: 'Research your project',
      description: 'Learn about the requirements and regulations for your project.',
      content: 'Research step content',
      children: [
        { title: 'Property Information', link: '#property' },
        { title: 'Permit Types', link: '#permits' },
        { title: 'Research Fees', link: '#fees' },
        { title: 'Timelines', link: '#timelines' },
        { title: 'Who Can Do The Work', link: '#who' },
      ]
    },
    { 
      title: 'Prepare',
      link: '#prepare',
      heading: 'Prepare your application',
      description: 'Gather all necessary documents and information.',
      content: 'Prepare step content',
      children: [
        { title: 'Required Documents', link: '#documents' },
        { title: 'Application Forms', link: '#forms' },
      ]
    },
    { 
      title: 'Apply',
      link: '#apply',
      heading: 'Submit your application',
      description: 'Submit your completed application and pay any required fees.',
      content: 'Apply step content'
    },
    { 
      title: 'Build (with permits)',
      link: '#build',
      heading: 'Build with permits',
      description: 'Begin construction once your permits are approved.',
      content: 'Build step content'
    },
    { 
      title: 'Inspections',
      link: '#inspections',
      heading: 'Schedule inspections',
      description: 'Schedule required inspections throughout your project.',
      content: 'Inspections step content'
    },
  ];

  return (
    <div className="process-steps-example">
      <div className="process-steps-layout">
        <div className="process-steps-sidenav">
          <SideNav items={steps} />
        </div>
        <div className="process-steps-content">
          <div className="process-steps-main">
            <ProcessSteps
              title="Building Permit Process"
              subtitle="Follow these steps to get your building permit"
              steps={steps}
            />
            <SummaryBox
              heading="Have questions?"
              description="Schedule a time to speak with someone from the Permitting and Development office."
            >
              <a href="#schedule" className="summary-box-button">
                Schedule an appointment
                <FontAwesomeIcon icon={faArrowRight} />
              </a>
            </SummaryBox>
          </div>
        </div>
      </div>
    </div>
  );
}; 