import { SideNav } from './SideNav';

export default {
  title: 'Components/SideNav',
  component: SideNav,
  parameters: {
    layout: 'padded',
  },
  argTypes: {
    activeIndex: {
      control: { type: 'number', min: 0, max: 4 },
      description: 'Index of the currently active item',
    },
  },
};

const Template = (args) => <SideNav {...args} />;

export const Default = Template.bind({});
Default.args = {
  items: [
    { title: 'Research', link: '#research' },
    { title: 'Prepare', link: '#prepare' },
    { title: 'Apply', link: '#apply' },
    { title: 'Build (with permits)', link: '#build' },
    { title: 'Inspections', link: '#inspections' },
  ],
  activeIndex: 0,
};

export const WithActiveMiddleStep = Template.bind({});
WithActiveMiddleStep.args = {
  ...Default.args,
  activeIndex: 2,
}; 