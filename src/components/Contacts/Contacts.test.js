import React from 'react';
import { render, screen } from '@testing-library/react';
import { Contacts } from './Contacts';

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
    const contactHeadings = screen.getAllByText(/contact/i);
    expect(contactHeadings.length).toBeGreaterThan(1); // Should find heading and button text
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
    const socialLinks = screen.getAllByRole('link', { name: /portlandgov/i });
    expect(socialLinks).toHaveLength(3);
    expect(socialLinks[0]).toHaveAttribute('href', 'https://facebook.com/portlandgov');
    expect(socialLinks[1]).toHaveAttribute('href', 'https://twitter.com/portlandgov');
    expect(socialLinks[2]).toHaveAttribute('href', 'https://instagram.com/portlandgov');

    // Check office information
    const addressLink = screen.getByRole('link', { name: /SW 123 Normal Street.*Portland, OR 97204/i });
    expect(addressLink).toBeInTheDocument();
    expect(addressLink).toHaveAttribute('href', 'https://maps.google.com/?q=SW 123 Normal Street Portland, OR 97204');

    // Check room information using getAllByText since it appears multiple times
    const roomTexts = screen.getAllByText(/Room 0/i);
    expect(roomTexts.length).toBeGreaterThan(0);

    // Check hours information
    const hoursLabel = screen.getByText('Hours');
    expect(hoursLabel).toBeInTheDocument();
    
    // Use getAllByText for hours since it appears multiple times
    const hoursValues = screen.getAllByText((content, element) => {
      return element.textContent.includes('Monday - Friday') && 
             element.textContent.includes('9:00am - 5:00pm');
    });
    expect(hoursValues.length).toBeGreaterThan(0);
  });

  it('renders minimal information when only required props are provided', () => {
    render(
      <Contacts
        title="Councilor"
        emailAddress="councilor@portland.gov"
        officeDetails={{
          address: 'SW 123 Normal Street',
          city: 'Portland',
          state: 'OR',
          zip: '97204'
        }}
      />
    );

    // Check title and email
    expect(screen.getByText('Contact this Councilor')).toBeInTheDocument();
    expect(screen.getByRole('link', { name: /contact councilor via email/i }))
      .toHaveAttribute('href', 'mailto:councilor@portland.gov');

    // Check address using role and name
    const addressLink = screen.getByRole('link', { name: /SW 123 Normal Street.*Portland, OR 97204/i });
    expect(addressLink).toBeInTheDocument();
    expect(addressLink).toHaveAttribute('href', 'https://maps.google.com/?q=SW 123 Normal Street Portland, OR 97204');

    // Check optional elements are not present
    expect(screen.queryByText('Phone: Office')).not.toBeInTheDocument();
    expect(screen.queryByText('Phone: Information')).not.toBeInTheDocument();
    expect(screen.queryByText('Social Media')).not.toBeInTheDocument();
  });

  it('renders with no social media when socialMedia prop is not provided', () => {
    render(
      <Contacts
        title="Councilor"
        emailAddress="councilor@portland.gov"
        officePhone="(503) 823-0000"
        informationPhone="311"
        relayServicePhone="711"
        officeDetails={{
          address: 'SW 123 Normal Street',
          room: 'Room 0',
          city: 'Portland',
          state: 'OR',
          zip: '97204',
          hours: 'Monday - Friday\n9:00am - 5:00pm',
        }}
      />
    );

    expect(screen.queryByText('portlandgov')).not.toBeInTheDocument();
    expect(screen.queryByText('Social Media')).not.toBeInTheDocument();
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