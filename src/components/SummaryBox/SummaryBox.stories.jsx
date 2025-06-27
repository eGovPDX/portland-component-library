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