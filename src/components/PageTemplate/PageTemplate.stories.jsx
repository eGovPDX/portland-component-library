import React from 'react';
import { PageTemplate } from './PageTemplate';
import pgovLogo from '../../images/PGOV-Logo.svg';

const meta = {
  title: 'Templates/PageTemplate',
  component: PageTemplate,
  parameters: {
    layout: 'fullscreen',
    docs: {
      description: {
        component: 'Page template component that combines Banner and Header components for a complete page layout.',
      },
    },
  },
  tags: ['autodocs'],
};

export default meta;

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

// Default Page Template
export const Default = {
  args: {
    bannerProps: {
      domain: 'An official website of the City of Portland',
    },
    headerProps: {
      title: 'Portland.gov',
      logoUrl: pgovLogo,
      logoAlt: 'Portland.gov Logo',
      navItems: defaultNavItems,
    },
    skipNavProps: {
      skipToId: 'main-content',
      label: 'Skip to main content',
    },
    includeBanner: true,
    includeSkipNav: true,
    children: (
      <div style={{ padding: '20px' }}>
        <h1>Welcome to Portland.gov</h1>
        <p>This is a sample page content using the PageTemplate component.</p>
        <p>The PageTemplate component combines the Banner and Header components for a complete page layout.</p>
        <div style={{ marginTop: '40px' }}>
          <h2>Sample Content Section</h2>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam euismod, nisl eget
            aliquam ultricies, nunc nisl aliquet nunc, quis aliquam nisl nunc quis nisl.
            Nullam euismod, nisl eget aliquam ultricies, nunc nisl aliquet nunc, quis aliquam
            nisl nunc quis nisl.
          </p>
          <p>
            Nullam euismod, nisl eget aliquam ultricies, nunc nisl aliquet nunc, quis aliquam
            nisl nunc quis nisl. Nullam euismod, nisl eget aliquam ultricies, nunc nisl aliquet
            nunc, quis aliquam nisl nunc quis nisl.
          </p>
        </div>
      </div>
    ),
  },
};

// Without Banner
export const WithoutBanner = {
  args: {
    ...Default.args,
    includeBanner: false,
  },
};

// Without SkipNav
export const WithoutSkipNav = {
  args: {
    ...Default.args,
    includeSkipNav: false,
  },
};

// With Tagline
export const WithTagline = {
  args: {
    ...Default.args,
    headerProps: {
      ...(Default.args?.headerProps || {}),
      tagline: 'The Official Website of the City of Portland',
    },
  },
};

// Mobile Page Template
export const Mobile = {
  args: {
    ...WithTagline.args,
  },
  parameters: {
    viewport: {
      defaultViewport: 'mobile1',
    },
  },
}; 