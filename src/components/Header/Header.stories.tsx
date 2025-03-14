import React from 'react';
import { Meta, StoryObj } from '@storybook/react';
import { Header, NavItem } from './Header';
import pgovLogo from '../../images/PGOV-Logo.svg';

const meta: Meta<typeof Header> = {
  title: 'Components/Header',
  component: Header,
  parameters: {
    layout: 'fullscreen',
    docs: {
      description: {
        component: 'Header component for Portland.gov. The header provides branding and identity for the site.',
      },
    },
  },
  tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof Header>;

// Sample navigation items
const sampleNavItems: NavItem[] = [
  { label: 'Home', href: '/', current: true },
  { label: 'News', href: '/news' },
];

// Default navigation items for Portland.gov
const defaultNavItems: NavItem[] = [
  { label: 'Advisory Groups', href: '/advisory-groups', description: 'Groups, boards, and commissions.' },
  { label: 'Bureaus and Offices', href: '/bureaus-offices', description: 'City departments.' },
  { label: 'Calendar of Events', href: '/events', description: 'Events, public meetings, and hearings.' },
  { label: 'Charter, Code, Policies', href: '/charter-code-policies', description: 'Official City documents.' },
  { label: 'City Council', href: '/council', description: 'Districts, officials, meetings, and news.' },
  { label: 'Construction Projects', href: '/construction', description: 'Building, transportation, maintenance, and sewer projects.' },
  { label: 'Find a Park', href: '/parks/search', description: 'Parks, facilities, and reservations.' },
  { label: 'Neighborhoods', href: '/neighborhoods', description: 'Neighborhood directory.' },
  { label: 'News', href: '/news', description: 'Articles, blogs, press releases, public notices, and newsletters.' },
  { label: 'Projects', href: '/projects', description: 'Planning, outreach and education, strategic, and technology projects.' },
  { label: 'Services and Resources', href: '/services', description: 'Service and resource directory.' },
  { label: 'Jobs with the City', href: 'https://www.governmentjobs.com/careers/portlandor', description: 'Opportunities posted to governmentjobs.com' },
];

// Default Header with Logo
export const Default: Story = {
  args: {
    title: 'Portland.gov',
    logoUrl: pgovLogo,
    logoAlt: 'Portland.gov Logo',
    navItems: defaultNavItems,
  },
};

// Header with Logo and Tagline
export const WithTagline: Story = {
  args: {
    ...Default.args,
    tagline: 'The Official Website of the City of Portland',
  },
};

// Mobile Header
export const Mobile: Story = {
  args: {
    ...WithTagline.args,
  },
  parameters: {
    viewport: {
      defaultViewport: 'mobile1',
    },
  },
};

// Mobile Header with Open Menu
export const MobileWithOpenMenu: Story = {
  render: (args) => {
    // This is a workaround to show the mobile menu open in Storybook
    // In a real app, this would be controlled by user interaction
    setTimeout(() => {
      const menuButton = document.querySelector('.pgov-header-mobile-menu-button');
      if (menuButton) {
        (menuButton as HTMLButtonElement).click();
      }
    }, 100);
    
    return <Header {...args} />;
  },
  args: {
    ...WithTagline.args,
  },
  parameters: {
    viewport: {
      defaultViewport: 'mobile1',
    },
  },
};

// Header with Custom Navigation Items
export const WithCustomNavItems: Story = {
  args: {
    ...Default.args,
    navItems: sampleNavItems,
  },
}; 