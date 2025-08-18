import React from 'react';
import { Person } from './Person';
import { Tag } from '../Tag';
import avatarPlaceholder from '../../images/avatar-placeholder.svg';
import { Button } from '../Button';

export default {
  title: 'Components/Person',
  component: Person,
  parameters: {
    docs: {
      description: {
        component: 'Profile block for individuals with avatar, name, role, department, contact actions, meta, and tags. Not part of USWDS.'
      }
    },
    layout: 'centered'
  },
  argTypes: {
    layout: { control: 'radio', options: ['row', 'column'] },
    imageAlign: { control: 'radio', options: ['top', 'center'] },
    avatarPosition: { control: 'radio', options: ['left', 'right'] },
    avatarSize: { control: 'radio', options: ['sm', 'md', 'lg'] },
    bordered: { control: 'boolean' },
    headingLevel: { control: 'number', options: [2,3,4,5,6] },
  },
  tags: ['autodocs']
};

const phones = [
  { label: 'Office', value: '503-555-1234' },
];

export const Default = {
  args: {
    name: 'Jane Doe',
    title: 'Senior Policy Analyst',
    // email: 'jane.doe@example.com',
    email: '',
    department: 'Bureau of Transportation',
    layout: 'row',
    imageAlign: 'top',
    headingLevel: 3,
    bordered: false,
    avatarUrl: avatarPlaceholder,
    avatarAlt: 'Portrait of Jane Doe',
    avatarSize: 'md',
    avatarPosition: 'left',
    // phones,
    phones: [],
    children: <Button>View Profile</Button>
  }
};

export const DefaultWithCenteredImage = {
  args: {
    ...Default.args,
    imageAlign: 'center'
  }
};

export const NoImageProvided = {
  args: {
    ...Default.args,
    avatarUrl: undefined,
    avatarAlt: ''
  }
};

export const VerticalLayout = {
  args: {
    ...Default.args,
    layout: 'column'
  }
};

export const VerticalCentered = {
  args: {
    ...Default.args,
    layout: 'column',
    imageAlign: 'center'
  }
};

export const Bordered = {
  args: {
    ...Default.args,
    bordered: true
  }
};

export const BorderedVertical = {
  args: {
    ...Default.args,
    bordered: true,
    layout: 'column'
  }
};

export const WithTagsAndMeta = {
  args: {
    ...Default.args,
    email: 'jane.doe@example.com',
    phones,
    meta: ['Speaks: English, Spanish'],
    tags: ['Fallback style', <Tag key="tag1" variant="default">Tag component</Tag>]
  }
};

export const LongTextWrapping = {
  args: {
    ...Default.args,
    name: 'Jane Alexandra Doe-Smithington the Third',
    title: 'Senior Policy Analyst and Strategic Partnerships Coordinator, Office of Community Engagement',
    department: 'Bureau of Transportation and Regional Mobility Services'
  }
};
