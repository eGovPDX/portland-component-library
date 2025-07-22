import React from 'react';
import { SummaryBox } from './SummaryBox';
import { faArrowRight } from '@fortawesome/free-solid-svg-icons';
import { Button } from '../Button/Button';

export default {
  title: 'Components/Summary Box',
  component: SummaryBox,
  parameters: {
    layout: 'padded',
  },
};

export const WithoutDescription = {
  args: {
    heading: 'Have questions?',
    children: (
      <Button variant="primary" endIcon={faArrowRight} style={{ width: 'fit-content' }}>
        Schedule an appointment
      </Button>
    ),
  },
};

export const WithButton = {
  args: {
    heading: 'Have questions?',
    description: 'Schedule a time to speak with someone from the Permitting and Development office.',
    children: (
      <Button variant="primary" endIcon={faArrowRight} style={{ width: 'fit-content' }}>
        Schedule an appointment
      </Button>
    ),
  },
};

export const WithContent = {
  args: {
    heading: 'Have questions?',
    description: 'Schedule a time to speak with someone from the Permitting and Development office.',
    children: (
      <ul style={{ marginLeft: '1rem' }}>
        <li>If you are under a winter storm warning, <a href="#">find shelter</a> right away.</li>
        <li>Sign up for your community’s <a href="#">warning system</a>.</li>
        <li>Learn the signs of, and basic treatments for, <a href="#">frostbite and hypothermia</a>.</li>
        <li><a href="#">Gather emergency supplies</a> for your home and your car.</li>
      </ul>
    ),
  },
};