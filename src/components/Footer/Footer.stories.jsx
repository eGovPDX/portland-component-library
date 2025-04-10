import React from 'react';
import { Footer } from './Footer';
import pgovLogo from '../../images/PGOV-Logo.svg';

export default {
  title: 'Components/Footer',
  component: Footer,
  parameters: {
    layout: 'fullscreen',
    docs: {
      description: {
        component: 'Footer component for Portland.gov. The footer provides links to important resources, accessibility information, and contact details.',
      },
    },
  },
  tags: ['autodocs'],
};

// Default Footer
export const Default = {
  args: {
    feedbackUrl: '/contact',
    accessibilityText: 'The City of Portland ensures meaningful access to City programs, services, and activities to comply with Civil Rights Title VI and ADA Title II laws and reasonably provides: translation, interpretation, modifications, accommodations, alternative formats, auxiliary aids and services.',
    serviceRequestText: 'Request these services',
    onlineServiceUrl: '/contact',
    phoneNumber: '503-823-4000',
    relayServiceText: 'Relay Service',
    relayServiceNumber: '711',
    translationText: 'Traducción e Interpretación | Biên Dịch và Thông Dịch | 口笔译服务 | Устный и письменный перевод | Turjumaad iyo Fasiraad | Письмовий і усний переклад | Traducere și interpretariat | Chiaku me Awewen Kapas | अनुवादन तथा व्याख्या',
    generalInfoLinks: [
      { label: '311@portlandoregon.gov', href: 'mailto:311@portlandoregon.gov' },
      { label: '311 information an customer service', href: '/customer-service' },
      { label: '503-823-4000', href: 'tel:5038234000' },
      { label: '711 Oregon Relay Service', href: 'tel:711' },
    ],
    termsLinks: [
      { label: 'ADA accommodation', href: '/ada-accommodation' },
      { label: 'Captioning and transcription', href: '/captioning' },
      { label: 'Privacy Policy', href: '/privacy' },
    ],
    portlandGovLinks: [
      { label: 'About this website', href: '/about' },
      { label: 'Employee portal', href: '/employees' },
      { label: 'Editor log in', href: '/login' },
    ],
    socialMediaLinks: [
      { label: 'Bluesky', href: 'https://bsky.app' },
      { label: 'Facebook', href: 'https://facebook.com/CityofPortland' },
      { label: 'Instagram', href: 'https://instagram.com/portlandoregon' },
      { label: 'X (Twitter)', href: 'https://twitter.com/portlandgov' },
    ],
    cityName: 'City of Portland, Oregon',
    cityLogoUrl: pgovLogo,
    cityLogoAlt: 'City of Portland Seal',
    copyrightText: '© Copyright 2018-2023',
    exploreServicesText: 'Explore all services',
    exploreServicesUrl: '/services',
  },
};
 