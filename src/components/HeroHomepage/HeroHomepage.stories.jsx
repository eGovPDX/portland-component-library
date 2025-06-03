import React from 'react';
import { HeroHomepage } from './HeroHomepage';
import { Button } from '../Button/Button';

export default {
  title: 'Components/HeroHomepage',
  component: HeroHomepage,
  parameters: {
    layout: 'fullscreen',
  },
};

const mockLinks = [
  { text: 'City of Portland transition', href: '#' },
  { text: 'Charter, code, policies', href: '#' },
  { text: 'Employee portal', href: '#' },
  { text: 'Jobs', href: '#' },
  { text: 'Sewer and water bill', href: '#' },
  { text: 'Business tax', href: '#' },
  { text: 'Council agenda', href: '#' },
  { text: 'Find a park', href: '#' },
  { text: 'Recreation class or activity', href: '#' }
];

const MockSearchComponent = () => (
  <>
    <input
      type="text"
      placeholder="Search"
      style={{
        flex: 1,
        height: '48px',
        padding: '0 16px',
        border: '1px solid #dfe1e2',
        borderRadius: '4px 0 0 4px',
        fontSize: 'var(--font-size-7)'
      }}
    />
    <Button style={{ height: '48px', borderRadius: '0 4px 4px 0' }} variant="primary">Search</Button>
  </>
);

export const Default = {
  args: {
    title: 'Welcome to Portland, Oregon',
    subtitle: 'Popular searches',
    searchComponent: <MockSearchComponent />,
    links: mockLinks
  }
};

export const WithoutSubtitle = {
  args: {
    title: 'Welcome to Portland, Oregon',
    searchComponent: <MockSearchComponent />,
    links: mockLinks
  }
};

export const WithoutLinks = {
  args: {
    title: 'Welcome to Portland, Oregon',
    subtitle: 'Popular searches',
    searchComponent: <MockSearchComponent />,
    links: []
  }
};
