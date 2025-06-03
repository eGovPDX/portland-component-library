import React from 'react';
import { render, screen } from '@testing-library/react';
import { Footer } from './Footer';

describe('Footer', () => {
  const defaultProps = {
    feedbackUrl: '/contact',
    accessibilityText: 'The City of Portland ensures meaningful access to City programs',
    serviceRequestText: 'Request these services',
    onlineServiceUrl: '/services',
    phoneNumber: '503-823-4000',
    relayServiceText: 'Relay Service',
    relayServiceNumber: '711',
    translationText: 'Traducción e Interpretación | Biên Dịch và Thông Dịch',
    generalInfoLinks: [
      { label: '311@portlandoregon.gov', href: 'mailto:311@portlandoregon.gov' },
      { label: '503-823-4000', href: 'tel:5038234000' }
    ],
    termsLinks: [
      { label: 'ADA accommodation', href: '/ada-accommodation' },
      { label: 'Privacy Policy', href: '/privacy' }
    ],
    portlandGovLinks: [
      { label: 'About this website', href: '/about' },
      { label: 'Editor log in', href: '/login' }
    ],
    socialMediaLinks: [
      { label: 'Facebook', href: 'https://facebook.com/CityofPortland' },
      { label: 'X (Twitter)', href: 'https://twitter.com/portlandgov' }
    ],
    cityName: 'City of Portland, Oregon',
    cityLogoUrl: '/city-seal.png',
    cityLogoAlt: 'City of Portland Seal',
    copyrightText: '© Copyright 2018-2023',
    exploreServicesText: 'Explore all services',
    exploreServicesUrl: '/services'
  };

  test('renders accessibility and translation information', () => {
    render(<Footer {...defaultProps} />);
    expect(screen.getByText(/The City of Portland ensures meaningful access/i)).toBeInTheDocument();
    
    // Check accessibility and translation information
    const phoneLinks = screen.getAllByRole('link', { name: '503-823-4000' });
    expect(phoneLinks).toHaveLength(3);
    phoneLinks.forEach(link => {
      expect(link).toHaveAttribute('href', 'tel:5038234000');
    });
    
    // Check for translation text
    expect(screen.getByText(/Traducción e Interpretación/i)).toBeInTheDocument();
  });

  test('renders feedback section', () => {
    render(<Footer {...defaultProps} />);
    
    const feedbackLink = screen.getByRole('link', { name: /Give website feedback/i });
    expect(feedbackLink).toBeInTheDocument();
    expect(feedbackLink).toHaveAttribute('href', '/contact');
  });

  test('renders navigation sections', () => {
    render(<Footer {...defaultProps} />);
    
    // Check for navigation headings
    expect(screen.getByText('General Information')).toBeInTheDocument();
    expect(screen.getByText('Terms And Policies')).toBeInTheDocument();
    
    // Check for navigation links
    expect(screen.getByRole('link', { name: '311@portlandoregon.gov' })).toHaveAttribute('href', 'mailto:311@portlandoregon.gov');
    expect(screen.getByRole('link', { name: 'ADA accommodation' })).toHaveAttribute('href', '/ada-accommodation');
  });

  test('renders city information', () => {
    render(<Footer {...defaultProps} />);
    
    expect(screen.getByText('City of Portland, Oregon')).toBeInTheDocument();
    expect(screen.getByAltText('City of Portland Seal')).toHaveAttribute('src', '/city-seal.png');
    expect(screen.getByText(/© Copyright/)).toBeInTheDocument();
  });

  test('applies custom className', () => {
    render(<Footer {...defaultProps} className="custom-class" />);
    
    const footer = screen.getByRole('contentinfo');
    expect(footer).toHaveClass('footer');
    expect(footer).toHaveClass('custom-class');
  });
}); 