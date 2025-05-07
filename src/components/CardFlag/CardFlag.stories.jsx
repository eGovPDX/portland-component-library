import React from 'react';
import { CardFlag } from './CardFlag';

const DemoMedia = (props) => (
  <img
    src="https://designsystem.digital.gov/img/introducing-uswds-2-0/built-to-grow--alt.jpg"
    alt="A placeholder image"
    className="pdx-card-flag__media-element"
    {...props}
  />
);

export default {
  title: 'Components/CardFlag',
  component: CardFlag,
  argTypes: {
    heading: { control: 'text' },
    text: { control: 'text' },
    mediaPosition: {
      control: 'radio',
      options: ['left', 'right'],
    },
    mediaInset: { control: 'boolean' },
    mediaAlt: { control: 'text' },
    actionButton: { control: false },
    className: { control: 'text' },
  },
  parameters: {
    layout: 'centered',
  },
};

const Template = (args) => <CardFlag {...args} />;

export const MediaLeft = Template.bind({});
MediaLeft.args = {
  heading: 'CardFlag Media Left',
  text: 'This is the card body text.',
  media: <DemoMedia />,
  mediaAlt: 'A placeholder image',
  mediaPosition: 'left',
  mediaInset: false,
  actionButton: <button style={{ padding: '12px 32px', background: '#205493', color: '#fff', border: 'none', borderRadius: '8px', fontWeight: 700 }}>{'{text}'}</button>,
};

export const MediaRight = Template.bind({});
MediaRight.args = {
  ...MediaLeft.args,
  heading: 'CardFlag Media Right',
  mediaPosition: 'right',
};

export const InsetLeft = Template.bind({});
InsetLeft.args = {
  ...MediaLeft.args,
  heading: 'CardFlag Inset Left',
  mediaInset: true,
};

export const InsetRight = Template.bind({});
InsetRight.args = {
  ...MediaLeft.args,
  heading: 'CardFlag Inset Right',
  mediaPosition: 'right',
  mediaInset: true,
}; 