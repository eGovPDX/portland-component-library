import React from 'react';
import { render, screen } from '@testing-library/react';
import Contacts from './Contacts';

const mockProps = {
  title: 'Councilor',
  emailAddress: 'councilor@portland.gov',
  officePhone: '(503) 823-0000',
  informationPhone: '311',
  relayServicePhone: '711',
  socialMedia: {
    facebook: 'portlandgov',
    twitter: 'portlandgov',
    bluesky: 'portland.gov',
    instagram: 'portlandgov',
  },
  officeDetails: {
    address: 'SW 123 Normal Street',
    room: 'Room 0',
    city: 'Portland',
    state: 'OR',
    zip: '97204',
    hours: 'Monday - Friday\n9:00am - 5:00pm',
  },
};

describe('Contacts', () => {
  it('renders all contact information when provided', () => {
    render(<Contacts {...mockProps} />);

    // Check headings
    expect(screen.getByText('Contact')).toBeInTheDocument();
    expect(screen.getByText('Social Media')).toBeInTheDocument();
    expect(screen.getByText('Office')).toBeInTheDocument();

    // Check contact button
    expect(screen.getByText('Contact this Councilor')).toBeInTheDocument();
    expect(screen.getByRole('link', { name: /contact councilor via email/i }))
      .toHaveAttribute('href', 'mailto:councilor@portland.gov');

    // Check phone numbers
    expect(screen.getByText('Phone: Office')).toBeInTheDocument();
    expect(screen.getByText('(503) 823-0000')).toBeInTheDocument();
    expect(screen.getByText('Phone: Information')).toBeInTheDocument();
    expect(screen.getByText('311')).toBeInTheDocument();
    expect(screen.getByText('Phone: Oregon Relay Service')).toBeInTheDocument();
    expect(screen.getByText('711')).toBeInTheDocument();

    // Check social media links
    expect(screen.getByText('portlandgov')).toBeInTheDocument();
    expect(screen.getByRole('link', { name: /portlandgov/i }))
      .toHaveAttribute('href', 'https://facebook.com/portlandgov');
    expect(screen.getByRole('link', { name: /portlandgov/i }))
      .toHaveAttribute('href', 'https://twitter.com/portlandgov');
    expect(screen.getByRole('link', { name: /portland\.gov/i }))
      .toHaveAttribute('href', 'https://bsky.app/profile/portland.gov');
    expect(screen.getByRole('link', { name: /portlandgov/i }))
      .toHaveAttribute('href', 'https://instagram.com/portlandgov');

    // Check office information
    expect(screen.getByText('SW 123 Normal Street')).toBeInTheDocument();
    expect(screen.getByText('Room 0')).toBeInTheDocument();
    expect(screen.getByText('Portland, OR 97204')).toBeInTheDocument();
    expect(screen.getByText('Hours')).toBeInTheDocument();
    expect(screen.getByText('Monday - Friday')).toBeInTheDocument();
    expect(screen.getByText('9:00am - 5:00pm')).toBeInTheDocument();
  });

  it('renders minimal information when only required props are provided', () => {
    const minimalProps = {
      title: 'Councilor',
      emailAddress: 'councilor@portland.gov',
      officeDetails: {
        address: 'SW 123 Normal Street',
        city: 'Portland',
        state: 'OR',
        zip: '97204',
      },
    };

    render(<Contacts {...minimalProps} />);

    // Check required elements are present
    expect(screen.getByText('Contact this Councilor')).toBeInTheDocument();
    expect(screen.getByRole('link', { name: /contact councilor via email/i }))
      .toHaveAttribute('href', 'mailto:councilor@portland.gov');
    expect(screen.getByText('SW 123 Normal Street')).toBeInTheDocument();
    expect(screen.getByText('Portland, OR 97204')).toBeInTheDocument();

    // Check optional elements are not present
    expect(screen.queryByText('Phone: Office')).not.toBeInTheDocument();
    expect(screen.queryByText('Room 0')).not.toBeInTheDocument();
    expect(screen.queryByText('Hours')).not.toBeInTheDocument();
    expect(screen.queryByText('portlandgov')).not.toBeInTheDocument();
  });

  it('renders with no social media when socialMedia prop is not provided', () => {
    const propsWithoutSocial = {
      ...mockProps,
      socialMedia: undefined,
    };

    render(<Contacts {...propsWithoutSocial} />);

    expect(screen.queryByText('portlandgov')).not.toBeInTheDocument();
    expect(screen.getByText('Social Media')).toBeInTheDocument();
  });

  it('renders with no office hours when hours prop is not provided', () => {
    const propsWithoutHours = {
      ...mockProps,
      officeDetails: {
        ...mockProps.officeDetails,
        hours: undefined,
      },
    };

    render(<Contacts {...propsWithoutHours} />);

    expect(screen.queryByText('Hours')).not.toBeInTheDocument();
    expect(screen.queryByText('Monday - Friday')).not.toBeInTheDocument();
    expect(screen.queryByText('9:00am - 5:00pm')).not.toBeInTheDocument();
  });
}); 