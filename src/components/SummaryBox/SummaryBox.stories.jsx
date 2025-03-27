import React from 'react';
import { SummaryBox } from './SummaryBox';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowRight } from '@fortawesome/free-solid-svg-icons';

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
      <a href="#schedule" className="summary-box-button">
        Schedule an appointment
        <FontAwesomeIcon icon={faArrowRight} />
      </a>
    ),
  },
};

export const WithoutDescription = {
  args: {
    heading: 'Have questions?',
    children: (
      <a href="#schedule" className="summary-box-button">
        Schedule an appointment
        <FontAwesomeIcon icon={faArrowRight} />
      </a>
    ),
  },
}; 