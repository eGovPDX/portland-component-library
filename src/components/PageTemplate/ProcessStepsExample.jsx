import React from 'react';
import { SideNav } from '../SideNav/SideNav';
import { ProcessSteps } from '../ProcessSteps/ProcessSteps';
import './ProcessStepsExample.css';

export const ProcessStepsExample = () => {
  const steps = [
    { 
      title: 'Research',
      link: '#research',
      heading: 'Research your project',
      description: 'Learn about the requirements and regulations for your project.',
      content: 'Research step content'
    },
    { 
      title: 'Prepare',
      link: '#prepare',
      heading: 'Prepare your application',
      description: 'Gather all necessary documents and information.',
      content: 'Prepare step content'
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
          <SideNav items={steps} activeIndex={0} />
        </div>
        <div className="process-steps-content">
          <ProcessSteps
            title="Building Permit Process"
            subtitle="Follow these steps to get your building permit"
            steps={steps}
          />
        </div>
      </div>
    </div>
  );
}; 