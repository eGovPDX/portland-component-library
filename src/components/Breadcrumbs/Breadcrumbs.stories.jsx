import React from 'react';
import { Breadcrumbs } from './Breadcrumbs';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSlash } from '@fortawesome/free-solid-svg-icons';

export default {
  title: 'Components/Breadcrumbs',
  component: Breadcrumbs,
  parameters: {
    layout: 'padded',
  },
};

const Template = (args) => (
  <div style={{ width: '100%', resize: 'horizontal', overflow: 'auto', minWidth: '200px', maxWidth: '100%', padding: '1rem' }}>
    <Breadcrumbs {...args} />
  </div>
);

export const Default = Template.bind({});
Default.args = {
  items: [
    { text: 'Home', href: '/' },
    { text: 'Services', href: '/services' },
    { text: 'Current Page' },
  ],
};

export const LongBreadcrumbs = Template.bind({});
LongBreadcrumbs.args = {
  items: [
    { text: 'Home', href: '/' },
    { text: 'Services', href: '/services' },
    { text: 'Government', href: '/services/government' },
    { text: 'Local', href: '/services/government/local' },
    { text: 'Portland', href: '/services/government/local/portland' },
    { text: 'Current Page with a Very Long Title' },
  ],
  truncateMiddle: true,
};

export const TruncationDemo = Template.bind({});
TruncationDemo.args = {
  items: [
    { text: 'Home', href: '/' },
    { text: 'City Services', href: '/services' },
    { text: 'Transportation', href: '/services/transportation' },
    { text: 'Public Transit', href: '/services/transportation/transit' },
    { text: 'Bus Routes', href: '/services/transportation/transit/bus' },
    { text: 'Route 20 - Burnside/Stark' },
  ],
  truncateMiddle: true,
};
TruncationDemo.parameters = {
  docs: {
    description: {
      story: 'This example demonstrates the truncation behavior. Resize the container to see how the breadcrumbs adapt:\n- On wider screens, all items are visible\n- As the container narrows, middle items are replaced with an ellipsis\n- On mobile screens (< 768px), items stack vertically with no truncation',
    },
  },
};

export const CustomSeparator = Template.bind({});
CustomSeparator.args = {
  items: [
    { text: 'Home', href: '/' },
    { text: 'Services', href: '/services' },
    { text: 'Current Page' },
  ],
  customSeparator: (
    <FontAwesomeIcon
      icon={faSlash}
      className="breadcrumb__separator"
      aria-hidden="true"
    />
  ),
};

export const SingleItem = Template.bind({});
SingleItem.args = {
  items: [{ text: 'Current Page' }],
}; 