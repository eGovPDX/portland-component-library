import React from 'react';
import { HeaderMenuItem } from './HeaderMenuItem';

export default {
  title: 'Components/Header/HeaderMenuItem',
  component: HeaderMenuItem,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
};

export const Default = {
  args: {
    item: {
      label: 'Regular Menu Item',
      href: '#',
      description: 'This is a description for the menu item that explains what it does',
      current: false,
    },
  },
};

export const Current = {
  args: {
    item: {
      label: 'Current Menu Item',
      href: '#',
      description: 'This is a description for the current menu item that explains what it does',
      current: true,
    },
  },
};

export const LongText = {
  args: {
    item: {
      label: 'This is a menu item with a very long title that might wrap to multiple lines',
      href: '#',
      description: 'This is a very long description that explains what this menu item does in great detail and might wrap to multiple lines as well',
      current: false,
    },
  },
};

export const NoDescription = {
  args: {
    item: {
      label: 'Menu Item Without Description',
      href: '#',
      current: false,
    },
  },
}; 