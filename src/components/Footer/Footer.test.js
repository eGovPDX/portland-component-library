import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import Footer from './Footer';

describe('Footer', () => {
  const defaultProps = {
    feedbackUrl: '/contact',
    accessibilityText: 'The City of Portland ensures meaningful access to City programs',
    phoneNumber: '503-823-4000',
    relayServiceNumber: '711',
    translationText: 'Traducción e Interpretación | Biên Dịch và Thông Dịch',
    generalInfoLinks: [
      { label: '311@portlandoregon.gov', href: 'mailto:311@portlandoregon.gov' },
      { label: '503-823-4000', href: 'tel:5038234000' },
    ],
    termsLinks: [
      { label: 'ADA accommodation', href: '/ada-accommodation' },
      { label: 'Privacy Policy', href: '/privacy' },
    ],
    portlandGovLinks: [
      { label: 'About this website', href: '/about' },
      { label: 'Editor log in', href: '/login' },
    ],
    socialMediaLinks: [
      { label: 'Facebook', href: 'https://facebook.com/CityofPortland' },
      { label: 'X (Twitter)', href: 'https://twitter.com/portlandgov' },
    ],
    cityName: 'City of Portland, Oregon',
    cityLogoUrl: '/city-seal.png',
    cityLogoAlt: 'City of Portland Seal',
    copyrightText: '© Copyright 2018-2023',
    exploreServicesText: 'Explore all services',
    exploreServicesUrl: '/services',
  };

  test('renders feedback section', () => {
    render(<Footer {...defaultProps} />);
    expect(screen.getByText(/See something we could improve/i)).toBeInTheDocument();
    expect(screen.getByText('Give website feedback')).toBeInTheDocument();
  });

  test('renders accessibility and translation information', () => {
    render(<Footer {...defaultProps} />);
    expect(screen.getByText(/The City of Portland ensures meaningful access/i)).toBeInTheDocument();
    expect(screen.getByText(/503-823-4000/i)).toBeInTheDocument();
    expect(screen.getByText(/711/i)).toBeInTheDocument();
    expect(screen.getAllByText('Traducción e Interpretación | Biên Dịch và Thông Dịch')).toHaveLength(2);
  });

  test('renders explore services button', () => {
    render(<Footer {...defaultProps} />);
    const button = screen.getByText('Explore all services');
    expect(button).toBeInTheDocument();
    expect(button.closest('a')).toHaveAttribute('href', '/services');
  });

  test('renders main section with logo and navigation sections', () => {
    render(<Footer {...defaultProps} />);
    
    // Verify the logo is present
    const logo = screen.getByAltText('City of Portland Seal');
    expect(logo).toBeInTheDocument();
    
    // Check for section headings
    expect(screen.getByText('General information')).toBeInTheDocument();
    expect(screen.getByText('Terms and policies')).toBeInTheDocument();
    expect(screen.getByText('Portland.gov')).toBeInTheDocument();
    expect(screen.getByText('Social Media')).toBeInTheDocument();
    
    // Check for links
    expect(screen.getByText('311@portlandoregon.gov')).toBeInTheDocument();
    expect(screen.getByText('ADA accommodation')).toBeInTheDocument();
    expect(screen.getByText('About this website')).toBeInTheDocument();
    expect(screen.getByText('Facebook')).toBeInTheDocument();
  });

  test('renders city information and copyright', () => {
    render(<Footer {...defaultProps} />);
    expect(screen.getByText('City of Portland, Oregon')).toBeInTheDocument();
    expect(screen.getByText('© Copyright 2018-2023')).toBeInTheDocument();
  });

  test('applies additional className when provided', () => {
    const { container } = render(<Footer {...defaultProps} className="test-class" />);
    expect(container.querySelector('.pgov-footer.test-class')).toBeInTheDocument();
  });
}); 