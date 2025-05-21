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
    }
  }
};

// Default accordion
export const Default = {
  args: {
    type: 'default'
  },
  render: (args) => (
    <Accordion {...args}>
      <AccordionItem summary="First Item">
        <p>This is the content for the first item. It can contain any React elements.</p>
      </AccordionItem>
      <AccordionItem summary="Second Item">
        <p>Content for the second item.</p>
        <ul>
          <li>List item one</li>
          <li>List item two</li>
        </ul>
      </AccordionItem>
      <AccordionItem summary="Third Item">
        <p>Content for the third item.</p>
      </AccordionItem>
    </Accordion>
  )
};

// Bordered accordion
export const Bordered = {
  args: {
    type: 'bordered'
  },
  render: (args) => (
    <Accordion {...args}>
      <AccordionItem summary="First Item">
        <p>This is the content for the first item. It can contain any React elements.</p>
      </AccordionItem>
      <AccordionItem summary="Second Item">
        <p>Content for the second item.</p>
        <ul>
          <li>List item one</li>
          <li>List item two</li>
        </ul>
      </AccordionItem>
      <AccordionItem summary="Third Item">
        <p>Content for the third item.</p>
      </AccordionItem>
    </Accordion>
  )
};

// Multiselectable accordion
export const Multiselectable = {
  args: {
    multiselectable: true
  },
  render: (args) => (
    <Accordion {...args}>
      <AccordionItem summary="First Item">
        <p>This is the content for the first item. It can contain any React elements.</p>
      </AccordionItem>
      <AccordionItem summary="Second Item">
        <p>Content for the second item.</p>
        <ul>
          <li>List item one</li>
          <li>List item two</li>
        </ul>
      </AccordionItem>
      <AccordionItem summary="Third Item">
        <p>Content for the third item.</p>
      </AccordionItem>
    </Accordion>
  )
};

// Multiselectable bordered accordion
export const MultiselectableBordered = {
  args: {
    type: 'bordered',
    multiselectable: true
  },
  render: (args) => (
    <Accordion {...args}>
      <AccordionItem summary="First Item">
        <p>This is the content for the first item. It can contain any React elements.</p>
      </AccordionItem>
      <AccordionItem summary="Second Item">
        <p>Content for the second item.</p>
        <ul>
          <li>List item one</li>
          <li>List item two</li>
        </ul>
      </AccordionItem>
      <AccordionItem summary="Third Item">
        <p>Content for the third item.</p>
      </AccordionItem>
    </Accordion>
  )
};

// Accordion with initially expanded item
export const InitiallyExpanded = {
  args: {},
  render: (args) => (
    <Accordion {...args}>
      <AccordionItem summary="First Item" open={true}>
        <p>This item is expanded by default because open prop is set to true.</p>
      </AccordionItem>
      <AccordionItem summary="Second Item">
        <p>This item starts collapsed.</p>
      </AccordionItem>
      <AccordionItem summary="Third Item">
        <p>This item also starts collapsed.</p>
      </AccordionItem>
    </Accordion>
  )
}; 