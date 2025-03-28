import React from 'react';
import { SideNav } from './SideNav';

export default {
  title: 'Components/SideNav',
  component: SideNav,
  parameters: {
    layout: 'padded',
  },
};

const Template = (args) => <SideNav {...args} />;

export const Default = Template.bind({});
Default.args = {
  items: [
    {
      title: 'Research',
      link: '#research',
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
      children: [
        { title: 'Required Documents', link: '#documents' },
        { title: 'Application Forms', link: '#forms' },
      ]
    },
    {
      title: 'Apply',
      link: '#apply',
    },
    {
      title: 'Build (with permits)',
      link: '#build',
    },
    {
      title: 'Inspections',
      link: '#inspections',
    },
  ]
}; 