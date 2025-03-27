import React from 'react';
import { ProcessSteps } from './ProcessSteps';

export default {
  title: 'Components/ProcessSteps',
  component: ProcessSteps,
  parameters: {
    layout: 'padded',
  },
};

const Template = (args) => <ProcessSteps {...args} />;

export const Default = Template.bind({});
Default.args = {
  title: 'Permit Process',
  mainDescription: 'The permitting process varies by project. Some, like decks, may be more simple and straightforward. Follow these steps:',
  steps: [
    {
      heading: 'Research',
      description: 'Identify the type of project and which permits are required. Check zoning rules, environmental factors, and property details to avoid issues.',
    },
    {
      heading: 'Prepare',
      description: 'Gather necessary documents like site plans and project details. Double-check that all information is complete and accurate.',
    },
    {
      heading: 'Apply',
      description: 'Submit your application online or by email, pay the intake fee, and confirm that all requirements are met. City staff will review your application. You may need to revise or clarify details based on their feedback.',
    },
    {
      heading: 'Build',
      description: 'After approval, you can start your project. Follow permit conditions and schedule inspections as needed.',
    },
    {
      heading: 'Inspect',
      description: 'When your project is complete, schedule an inspection to ensure it meets safety standards.',
    },
  ],
}; 