import React from 'react';
import { Identifier } from './Identifier';
import pgovLogo from '../../images/PGOV-Logo.svg';

export default {
  title: 'Components/Identifier',
  component: Identifier,
  parameters: {
    docs: {
      description: {
        component: 'Identifier component based on USWDS Identifier. Communicates a site\'s parent agency and displays agency links required by federal laws and policies. This is a core component that should be used on most government sites along with the Banner component.',
      },
    },
    layout: 'fullscreen',
  },
  tags: ['autodocs'],
};

// Default story
export const Default = {
  args: {
    domain: 'domain.gov',
    agencies: [
      {
        name: 'Parent Agency',
        shortname: 'Parent shortname',
        logoSrc: pgovLogo,
        logoAlt: 'Parent Agency logo',
        href: '#'
      }
    ],
    requiredLinks: [
      { text: 'About Parent shortname', href: '#' },
      { text: 'Accessibility statement', href: '#' },
      { text: 'FOIA requests', href: '#' },
      { text: 'No FEAR Act data', href: '#' },
      { text: 'Office of the Inspector General', href: '#' },
      { text: 'Performance reports', href: '#' },
      { text: 'Privacy policy', href: '#' }
    ]
  }
};

// Multiple agencies with logos
export const MultipleLogos = {
  args: {
    domain: 'domain.gov',
    agencies: [
      {
        name: 'Parent Agency',
        shortname: 'Parent shortname',
        logoSrc: pgovLogo,
        logoAlt: 'Parent Agency logo',
        href: '#'
      },
      {
        name: 'Other Agency',
        shortname: 'Other shortname',
        logoSrc: pgovLogo,
        logoAlt: 'Other Agency logo',
        href: '#'
      }
    ],
    requiredLinks: [
      { text: 'About Parent shortname', href: '#' },
      { text: 'Accessibility statement', href: '#' },
      { text: 'FOIA requests', href: '#' },
      { text: 'No FEAR Act data', href: '#' },
      { text: 'Office of the Inspector General', href: '#' },
      { text: 'Performance reports', href: '#' },
      { text: 'Privacy policy', href: '#' }
    ]
  }
};

// No logos version
export const NoLogos = {
  args: {
    domain: 'domain.gov',
    parentAgency: 'Parent Agency',
    agencies: [], // No logos
    requiredLinks: [
      { text: 'About Parent shortname', href: '#' },
      { text: 'Accessibility statement', href: '#' },
      { text: 'FOIA requests', href: '#' },
      { text: 'No FEAR Act data', href: '#' },
      { text: 'Office of the Inspector General', href: '#' },
      { text: 'Performance reports', href: '#' },
      { text: 'Privacy policy', href: '#' }
    ]
  }
};

// Taxpayer disclaimer version
export const TaxpayerDisclaimer = {
  args: {
    domain: 'domain.gov',
    agencies: [
      {
        name: 'Parent Agency',
        shortname: 'Parent shortname',
        logoSrc: pgovLogo,
        logoAlt: 'Parent Agency logo',
        href: '#'
      }
    ],
    taxpayerDisclaimer: true,
    requiredLinks: [
      { text: 'About Parent shortname', href: '#' },
      { text: 'Accessibility statement', href: '#' },
      { text: 'FOIA requests', href: '#' },
      { text: 'No FEAR Act data', href: '#' },
      { text: 'Office of the Inspector General', href: '#' },
      { text: 'Performance reports', href: '#' },
      { text: 'Privacy policy', href: '#' }
    ]
  }
};

// Spanish version
export const Spanish = {
  args: {
    domain: 'domain.gov',
    agencies: [
      {
        name: 'Parent Agency',
        shortname: 'Parent shortname',
        logoSrc: pgovLogo,
        logoAlt: 'Parent Agency logo',
        href: '#'
      }
    ],
    lang: 'es',
    requiredLinks: [
      { text: 'Acerca de Parent shortname', href: '#' },
      { text: 'Declaración de accesibilidad', href: '#' },
      { text: 'Solicitud a través de FOIA', href: '#' },
      { text: 'Datos de la ley No FEAR', href: '#' },
      { text: 'Oficina del Inspector General', href: '#' },
      { text: 'Informes de desempeño', href: '#' },
      { text: 'Política de privacidad', href: '#' }
    ]
  }
};

// Spanish with taxpayer disclaimer
export const SpanishTaxpayerDisclaimer = {
  args: {
    domain: 'domain.gov',
    agencies: [
      {
        name: 'Parent Agency',
        shortname: 'Parent shortname',
        logoSrc: pgovLogo,
        logoAlt: 'Parent Agency logo',
        href: '#'
      }
    ],
    lang: 'es',
    taxpayerDisclaimer: true,
    requiredLinks: [
      { text: 'Acerca de Parent shortname', href: '#' },
      { text: 'Declaración de accesibilidad', href: '#' },
      { text: 'Solicitud a través de FOIA', href: '#' },
      { text: 'Datos de la ley No FEAR', href: '#' },
      { text: 'Oficina del Inspector General', href: '#' },
      { text: 'Informes de desempeño', href: '#' },
      { text: 'Política de privacidad', href: '#' }
    ]
  }
};

// Spanish with multiple logos
export const SpanishMultipleLogos = {
  args: {
    domain: 'domain.gov',
    agencies: [
      {
        name: 'Parent Agency',
        shortname: 'Parent shortname',
        logoSrc: pgovLogo,
        logoAlt: 'Parent Agency logo',
        href: '#'
      },
      {
        name: 'Other Agency',
        shortname: 'Other shortname',
        logoSrc: pgovLogo,
        logoAlt: 'Other Agency logo',
        href: '#'
      }
    ],
    lang: 'es',
    requiredLinks: [
      { text: 'Acerca de Parent shortname', href: '#' },
      { text: 'Declaración de accesibilidad', href: '#' },
      { text: 'Solicitud a través de FOIA', href: '#' },
      { text: 'Datos de la ley No FEAR', href: '#' },
      { text: 'Oficina del Inspector General', href: '#' },
      { text: 'Informes de desempeño', href: '#' },
      { text: 'Política de privacidad', href: '#' }
    ]
  }
};

// Custom USA.gov text
export const CustomUSAGovText = {
  args: {
    domain: 'domain.gov',
    agencies: [
      {
        name: 'Parent Agency',
        shortname: 'Parent shortname',
        logoSrc: pgovLogo,
        logoAlt: 'Parent Agency logo',
        href: '#'
      }
    ],
    usaGovText: {
      text: 'Looking for more government services?',
      linkText: 'Explore USA.gov',
      href: 'https://www.usa.gov/'
    },
    requiredLinks: [
      { text: 'About Parent shortname', href: '#' },
      { text: 'Accessibility statement', href: '#' },
      { text: 'FOIA requests', href: '#' },
      { text: 'No FEAR Act data', href: '#' },
      { text: 'Office of the Inspector General', href: '#' },
      { text: 'Performance reports', href: '#' },
      { text: 'Privacy policy', href: '#' }
    ]
  }
};

// Minimal configuration
export const Minimal = {
  args: {
    domain: 'example.gov',
    parentAgency: 'Example Agency'
  }
};

// With external links - demonstrates external link icons
export const WithExternalLinks = {
  args: {
    domain: 'example.gov',
    agencies: [
      {
        name: 'Example Agency',
        shortname: 'EA',
        logoSrc: pgovLogo,
        logoAlt: 'Example Agency logo',
        href: '#'
      }
    ],
    requiredLinks: [
      { text: 'About EA', href: '/about' },
      { text: 'Accessibility statement', href: '/accessibility' },
      { text: 'FOIA requests', href: 'https://www.foia.gov/request/agency-component/a/' },
      { text: 'No FEAR Act data', href: 'https://www.eeoc.gov/no-fear-act' },
      { text: 'Office of the Inspector General', href: 'https://oig.example.gov' },
      { text: 'Performance reports', href: '/performance' },
      { text: 'Privacy policy', href: '/privacy' },
      { text: 'Federal Register', href: 'https://www.federalregister.gov/' }
    ]
  }
};

// Kitchen sink - all features enabled
export const KitchenSink = {
  args: {
    domain: 'comprehensive.gov',
    agencies: [
      {
        name: 'Department of Comprehensive Services',
        shortname: 'DCS',
        logoSrc: pgovLogo,
        logoAlt: 'Department of Comprehensive Services logo',
        href: '#'
      },
      {
        name: 'Office of Digital Innovation',
        shortname: 'ODI',
        logoSrc: pgovLogo,
        logoAlt: 'Office of Digital Innovation logo',
        href: '#'
      },
      {
        name: 'Bureau of Technology Services',
        shortname: 'BTS',
        logoSrc: pgovLogo,
        logoAlt: 'Bureau of Technology Services logo',
        href: '#'
      }
    ],
    taxpayerDisclaimer: true,
    requiredLinks: [
      { text: 'About DCS', href: '#' },
      { text: 'Accessibility statement', href: '/accessibility' },
      { text: 'FOIA requests', href: '/foia' },
      { text: 'No FEAR Act data', href: '/no-fear' },
      { text: 'Office of the Inspector General', href: '/oig' },
      { text: 'Performance reports', href: '/performance' },
      { text: 'Privacy policy', href: '/privacy' },
      { text: 'Terms of service', href: '/terms' },
      { text: 'Open government', href: '/open-government' }
    ],
    usaGovText: {
      text: 'Need help finding government information and services?',
      linkText: 'Visit USA.gov for assistance',
      href: 'https://www.usa.gov/'
    },
    className: 'custom-identifier'
  }
}; 