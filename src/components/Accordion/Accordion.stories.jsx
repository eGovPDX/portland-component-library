import React from 'react';
import { Accordion, AccordionItem } from './Accordion';

export default {
  title: 'Components/Accordion',
  component: Accordion,
  parameters: {
    docs: {
      description: {
        component: 'An accordion is a list of headers that hide or reveal additional content when selected.'
      }
    }
  },
  argTypes: {
    type: {
      control: 'select',
      options: ['default', 'bordered'],
      description: 'The visual style of the accordion'
    },
    multiselectable: {
      control: 'boolean',
      description: 'Whether multiple accordion items can be expanded at once'
    },
    headingLevel: {
      control: 'select',
      options: ['h1', 'h2', 'h3', 'h4', 'h5', 'h6'],
      description: 'The heading level for the accordion item summary text'
    }
  }
};

// Default accordion
export const Default = {
  args: {
    type: 'default',
    headingLevel: 'h4',
  },
  render: (args) => (
    <Accordion {...args}>
      <AccordionItem summaryText="First Item" headingLevel={args.headingLevel}>
        <p>This is the content for the first item. It can contain any React elements.</p>
      </AccordionItem>
      <AccordionItem summaryText="Second Item" headingLevel={args.headingLevel}>
        <p>Content for the second item.</p>
        <ul>
          <li>List item one</li>
          <li>List item two</li>
        </ul>
      </AccordionItem>
      <AccordionItem summaryText="Third Item" headingLevel={args.headingLevel}>
        <p>Content for the third item.</p>
      </AccordionItem>
    </Accordion>
  )
};

// Bordered accordion
export const Bordered = {
  args: {
    type: 'bordered',
    headingLevel: 'h4',
  },
  render: (args) => (
    <Accordion {...args}>
      <AccordionItem summaryText="First Item" headingLevel={args.headingLevel}>
        <p>This is the content for the first item. It can contain any React elements.</p>
      </AccordionItem>
      <AccordionItem summaryText="Second Item" headingLevel={args.headingLevel}>
        <p>Content for the second item.</p>
        <ul>
          <li>List item one</li>
          <li>List item two</li>
        </ul>
      </AccordionItem>
      <AccordionItem summaryText="Third Item" headingLevel={args.headingLevel}>
        <p>Content for the third item.</p>
      </AccordionItem>
    </Accordion>
  )
};

// Multiselectable accordion
export const Multiselectable = {
  args: {
    multiselectable: true,
    headingLevel: 'h4',
  },
  render: (args) => (
    <Accordion {...args}>
      <AccordionItem summaryText="First Item" headingLevel={args.headingLevel}>
        <p>This is the content for the first item. It can contain any React elements.</p>
      </AccordionItem>
      <AccordionItem summaryText="Second Item" headingLevel={args.headingLevel}>
        <p>Content for the second item.</p>
        <ul>
          <li>List item one</li>
          <li>List item two</li>
        </ul>
      </AccordionItem>
      <AccordionItem summaryText="Third Item" headingLevel={args.headingLevel}>
        <p>Content for the third item.</p>
      </AccordionItem>
    </Accordion>
  )
};

// Multiselectable bordered accordion
export const MultiselectableBordered = {
  args: {
    type: 'bordered',
    multiselectable: true,
    headingLevel: 'h4',
  },
  render: (args) => (
    <Accordion {...args}>
      <AccordionItem summaryText="First Item" headingLevel={args.headingLevel}>
        <p>This is the content for the first item. It can contain any React elements.</p>
      </AccordionItem>
      <AccordionItem summaryText="Second Item" headingLevel={args.headingLevel}>
        <p>Content for the second item.</p>
        <ul>
          <li>List item one</li>
          <li>List item two</li>
        </ul>
      </AccordionItem>
      <AccordionItem summaryText="Third Item" headingLevel={args.headingLevel}>
        <p>Content for the third item.</p>
      </AccordionItem>
    </Accordion>
  )
};

// Accordion with initially expanded item
export const InitiallyExpanded = {
  args: {
    headingLevel: 'h4'
  },
  render: (args) => (
    <Accordion {...args}>
      <AccordionItem summaryText="First Item" open={true} headingLevel={args.headingLevel}>
        <p>This item is expanded by default because the open prop is set to true.</p>
      </AccordionItem>
      <AccordionItem summaryText="Second Item" headingLevel={args.headingLevel}>
        <p>This item starts collapsed.</p>
      </AccordionItem>
      <AccordionItem summaryText="Third Item" headingLevel={args.headingLevel}>
        <p>This item also starts collapsed.</p>
      </AccordionItem>
    </Accordion>
  )
}; 