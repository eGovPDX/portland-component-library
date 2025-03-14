import React from 'react';
import { Meta, StoryObj } from '@storybook/react';
import { HeaderMenuGroup } from './HeaderMenuGroup';
import { NavItem } from './Header';

const meta: Meta<typeof HeaderMenuGroup> = {
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

export default meta;
type Story = StoryObj<typeof HeaderMenuGroup>;

// Sample navigation items
const sampleItems: NavItem[] = [
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
export const Default: Story = {
  args: {
    title: 'General Information',
    items: sampleItems,
  },
};

// Expanded Menu Group
export const Expanded: Story = {
  args: {
    title: 'Services',
    items: sampleItems,
    defaultExpanded: true,
  },
};

// Menu Group with Current Item
export const WithCurrentItem: Story = {
  args: {
    title: 'Services',
    items: [
      ...sampleItems.slice(0, 1),
      { ...sampleItems[1], current: true },
      ...sampleItems.slice(2),
    ],
    defaultExpanded: true,
  },
};

// Menu Group with Many Items
export const WithManyItems: Story = {
  args: {
    title: 'Departments',
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
    defaultExpanded: true,
  },
}; 