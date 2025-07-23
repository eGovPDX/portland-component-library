import { React } from 'react';
import { PGOVHeader } from './PGOVHeader';
import pgovLogo from '../../images/PGOV-Logo.svg';

export default {
  title: 'Components/PGOVHeader',
  component: PGOVHeader,
  parameters: {
    layout: 'fullscreen',
    docs: {
      description: {
        component: 'PGOVHeader component for Portland.gov based on USWDS Header. The header provides branding and identity for the site.',
      },
    },
  },
  tags: ['autodocs'],
};

// Default navigation items for Portland.gov
const defaultNavItems = [
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

// Default PGOVHeader with Logo
export const Default = {
  parameters: {
    viewport: {
      defaultViewport: 'fullscreen',
    },
  },
  args: {
    title: 'Portland.gov',
    logoUrl: pgovLogo,
    logoAlt: 'Portland.gov Logo',
    navItems: defaultNavItems,
    mainHeading: 'General Information',
  },
};

// PGOVHeader with Logo and Tagline
export const WithTagline = {
  parameters: {
    viewport: {
      defaultViewport: 'fullscreen',
    },
  },
  args: {
    ...Default.args,
    tagline: 'The Official Website of the City of Portland',
  },
};

// Mobile PGOVHeader
export const Mobile = {
  args: {
    ...Default.args,
  },
  parameters: {
    viewport: {
      defaultViewport: 'mobile1',
    },
  },
};

// PGOVHeader with Internationalized Menu Text (Spanish)
export const SpanishMenuText = {
  args: {
    ...Default.args,
    menuText: 'Menú',
    openMenuAriaLabel: 'Abrir menú',
    closeMenuAriaLabel: 'Cerrar menú',
    mainHeading: 'Información General',
  },
};

// PGOVHeader with Current Page
export const WithCurrentPage = {
  args: {
    ...Default.args,
    navItems: defaultNavItems.map((item, index) => ({
      ...item,
      current: index === 2 // Set the third item as current
    })),
  },
}; 