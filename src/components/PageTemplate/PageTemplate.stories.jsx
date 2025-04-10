import React from 'react';
import { PageTemplate } from './PageTemplate';
import pgovLogo from '../../images/PGOV-Logo.svg';
import { Footer } from '../Footer/Footer';

export default {
  title: 'Templates/PageTemplate',
  component: PageTemplate,
  parameters: {
    layout: 'fullscreen',
  },
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

// Default breadcrumb items
const defaultBreadcrumbItems = [
  { text: 'Home', href: '/' },
  { text: 'Services', href: '/services' },
  { text: 'Government', href: '/government' },
  { text: 'Local', href: '/government/local' },
  { text: 'Current Page' },
];

// Default footer props
const defaultFooterProps = {
  feedbackUrl: '/contact',
  accessibilityText: 'The City of Portland ensures meaningful access to City programs, services, and activities to comply with Civil Rights Title VI and ADA Title II laws and reasonably provides: translation, interpretation, modifications, accommodations, alternative formats, auxiliary aids and services.',
  serviceRequestText: 'Request these services',
  onlineServiceUrl: '/contact',
  phoneNumber: '503-823-4000',
  relayServiceText: 'Relay Service',
  relayServiceNumber: '711',
  translationText: 'Traducción e Interpretación | Biên Dịch và Thông Dịch | 口笔译服务 | Устный и письменный перевод | Turjumaad iyo Fasiraad | Письмовий і усний переклад | Traducere și interpretariat | Chiaku me Awewen Kapas | अनुवादन तथा व्याख्या',
  generalInfoLinks: [
    { label: '311@portlandoregon.gov', href: 'mailto:311@portlandoregon.gov' },
    { label: '311 information an customer service', href: '/customer-service' },
    { label: '503-823-4000', href: 'tel:5038234000' },
    { label: '711 Oregon Relay Service', href: 'tel:711' },
  ],
  termsLinks: [
    { label: 'ADA accommodation', href: '/ada-accommodation' },
    { label: 'Captioning and transcription', href: '/captioning' },
    { label: 'Privacy Policy', href: '/privacy' },
  ],
  portlandGovLinks: [
    { label: 'About this website', href: '/about' },
    { label: 'Employee portal', href: '/employees' },
    { label: 'Editor log in', href: '/login' },
  ],
  socialMediaLinks: [
    { label: 'Bluesky', href: 'https://bsky.app' },
    { label: 'Facebook', href: 'https://facebook.com/CityofPortland' },
    { label: 'Instagram', href: 'https://instagram.com/portlandoregon' },
    { label: 'X (Twitter)', href: 'https://twitter.com/portlandgov' },
  ],
  cityName: 'City of Portland',
  cityLogoUrl: pgovLogo,
  cityLogoAlt: 'Portland.gov Logo',
  copyrightText: '© 2024 City of Portland',
  exploreServicesText: 'Explore City Services',
  exploreServicesUrl: '/services',
};

// Default Page Template
export const Default = {
  parameters: {
    viewport: {
      defaultViewport: 'fullscreen',
    },
  },
  args: {
    bannerProps: {
      domain: 'An official website of the City of Portland',
    },
    headerProps: {
      title: 'Portland.gov',
      logoUrl: pgovLogo,
      logoAlt: 'Portland.gov Logo',
      navItems: defaultNavItems,
      mainHeading: 'General Information',
      menuText: 'Menu',
      openMenuAriaLabel: 'Open menu',
      closeMenuAriaLabel: 'Close menu'
    },
    skipNavProps: {
      skipToId: 'main-content',
      label: 'Skip to main content',
    },
    breadcrumbsProps: {
      items: defaultBreadcrumbItems,
      truncateMiddle: true,
    },
    footerProps: defaultFooterProps,
    includeBanner: true,
    includeSkipNav: true,
    includeFooter: true,
    includeBreadcrumbs: true,
    children: (
      <div style={{ padding: '2rem' }}>
        <h1>Welcome to Portland.gov</h1>
        <p>This is an example of content within the page template.</p>
      </div>
    ),
  },
};

// Without Banner
export const WithoutBanner = {
  ...Default,
  args: {
    ...Default.args,
    includeBanner: false,
  },
};

// Without SkipNav
export const WithoutSkipNav = {
  ...Default,
  args: {
    ...Default.args,
    includeSkipNav: false,
  },
};

// Without Breadcrumbs
export const WithoutBreadcrumbs = {
  ...Default,
  args: {
    ...Default.args,
    includeBreadcrumbs: false,
  },
};
