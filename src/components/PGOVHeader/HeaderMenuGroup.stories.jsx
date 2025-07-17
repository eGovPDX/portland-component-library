import React from 'react';
import { HeaderMenuGroup } from './HeaderMenuGroup';

export default {
  title: 'Components/Header/HeaderMenuGroup',
  component: HeaderMenuGroup,
  parameters: {
    docs: {
      description: {
        component: 'Menu group component for the Header mobile menu.',
      },
    },
    backgrounds: {
      default: 'white',
    },
  },
  tags: ['autodocs'],
};

// Sample navigation items
const sampleItems = [
  { 
    label: 'Advisory Groups', 
    href: '/advisory-groups', 
    description: 'Groups, boards, and commissions.' 
  },
  { 
    label: 'Bureaus and Offices', 
    href: '/bureaus-offices', 
    description: 'City departments.' 
  },
  { 
    label: 'Calendar of Events', 
    href: '/events', 
    description: 'Events, public meetings, and hearings.' 
  },
  { 
    label: 'Charter, Code, Policies', 
    href: '/charter-code-policies', 
    description: 'Official City documents.' 
  },
];

// Default Menu Group
export const Default = {
  args: {
    mainHeading: 'General Information',
    items: sampleItems,
  },
};

// Menu Group with Current Item
export const WithCurrentItem = {
  args: {
    mainHeading: 'General Information',
    items: [
      ...sampleItems.slice(0, 1),
      { ...sampleItems[1], current: true },
      ...sampleItems.slice(2),
    ],
  },
};

// Menu Group with Many Items
export const WithManyItems = {
  args: {
    mainHeading: 'General Information',
    items: [
      { label: 'Bureau of Development Services', href: '/departments/bds' },
      { label: 'Bureau of Environmental Services', href: '/departments/bes' },
      { label: 'Bureau of Planning and Sustainability', href: '/departments/bps' },
      { label: 'Bureau of Transportation', href: '/departments/pbot' },
      { label: 'Office of Community & Civic Life', href: '/departments/civic' },
      { label: 'Office of Equity & Human Rights', href: '/departments/equity' },
      { label: 'Portland Fire & Rescue', href: '/departments/fire' },
      { label: 'Portland Police Bureau', href: '/departments/police' },
      { label: 'Portland Water Bureau', href: '/departments/water' },
    ],
  },
}; 