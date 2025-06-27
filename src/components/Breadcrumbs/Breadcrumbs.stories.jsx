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