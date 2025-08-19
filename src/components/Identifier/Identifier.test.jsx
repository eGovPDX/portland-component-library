import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import { Identifier } from './Identifier';

describe('Identifier Component', () => {
  // Basic rendering tests
  describe('Basic Rendering', () => {
    it('renders without crashing', () => {
      render(<Identifier />);
      expect(screen.getByRole('region', { name: /agency identifier/i })).toBeInTheDocument();
    });

    it('applies the usa-identifier class', () => {
      render(<Identifier />);
      const identifier = screen.getByRole('region', { name: /agency identifier/i }).parentElement;
      expect(identifier).toHaveClass('usa-identifier');
    });

    it('applies custom className when provided', () => {
      render(<Identifier className="custom-identifier" />);
      const identifier = screen.getByRole('region', { name: /agency identifier/i }).parentElement;
      expect(identifier).toHaveClass('usa-identifier', 'custom-identifier');
    });
  });

  // Domain and agency identity tests
  describe('Domain and Agency Identity', () => {
    it('displays the domain when provided', () => {
      render(<Identifier domain="example.gov" />);
      expect(screen.getByText('example.gov')).toBeInTheDocument();
    });

    it('does not display domain when not provided', () => {
      render(<Identifier />);
      const domainElement = document.querySelector('.usa-identifier__identity-domain');
      expect(domainElement).not.toBeInTheDocument();
    });

    it('displays parent agency name as link when no agencies array provided', () => {
      render(<Identifier parentAgency="Test Agency" />);
      expect(screen.getByRole('link', { name: 'Test Agency' })).toBeInTheDocument();
    });
  });

  // Agency logos tests
  describe('Agency Logos', () => {
    it('renders agency logos when agencies are provided', () => {
      const agencies = [
        {
          name: 'Test Agency',
          logoSrc: '/test-logo.svg',
          logoAlt: 'Test Agency logo'
        }
      ];
      render(<Identifier agencies={agencies} />);
      
      const logo = screen.getByRole('img', { name: 'Test Agency logo' });
      expect(logo).toBeInTheDocument();
      expect(logo).toHaveAttribute('src', '/test-logo.svg');
    });

    it('renders multiple agency logos', () => {
      const agencies = [
        {
          name: 'Agency One',
          logoSrc: '/logo1.svg',
          logoAlt: 'Agency One logo'
        },
        {
          name: 'Agency Two',
          logoSrc: '/logo2.svg',
          logoAlt: 'Agency Two logo'
        }
      ];
      render(<Identifier agencies={agencies} />);
      
      expect(screen.getByRole('img', { name: 'Agency One logo' })).toBeInTheDocument();
      expect(screen.getByRole('img', { name: 'Agency Two logo' })).toBeInTheDocument();
    });

    it('does not render logos section when no agencies provided', () => {
      render(<Identifier />);
      const logosSection = document.querySelector('.usa-identifier__logos');
      expect(logosSection).not.toBeInTheDocument();
    });

    it('uses default alt text when logoAlt not provided', () => {
      const agencies = [
        {
          name: 'Test Agency',
          logoSrc: '/test-logo.svg'
        }
      ];
      render(<Identifier agencies={agencies} />);
      
      expect(screen.getByRole('img', { name: 'Test Agency logo' })).toBeInTheDocument();
    });
  });

  // Agency text building logic tests
  describe('Agency Text Building', () => {
    it('displays single agency name correctly', () => {
      const agencies = [{ name: 'Single Agency' }];
      render(<Identifier agencies={agencies} />);
      expect(screen.getByRole('link', { name: 'Single Agency' })).toBeInTheDocument();
    });

    it('displays two agencies with "and the" connector in English', () => {
      const agencies = [
        { name: 'First Agency' },
        { name: 'Second Agency' }
      ];
      render(<Identifier agencies={agencies} />);
      expect(screen.getByText(/First Agency and the Second Agency/)).toBeInTheDocument();
    });

    it('displays two agencies with "y" connector in Spanish', () => {
      const agencies = [
        { name: 'Primera Agencia' },
        { name: 'Segunda Agencia' }
      ];
      render(<Identifier agencies={agencies} lang="es" />);
      expect(screen.getByText(/Primera Agencia y Segunda Agencia/)).toBeInTheDocument();
    });

    it('displays multiple agencies correctly in English', () => {
      const agencies = [
        { name: 'First Agency' },
        { name: 'Second Agency' },
        { name: 'Third Agency' }
      ];
      render(<Identifier agencies={agencies} />);
      expect(screen.getByText(/First Agency, Second Agency, and the Third Agency/)).toBeInTheDocument();
    });
  });

  // Language support tests
  describe('Language Support', () => {
    it('displays English text by default', () => {
      render(<Identifier parentAgency="Test Agency" />);
      expect(screen.getByText(/An/)).toBeInTheDocument();
      expect(screen.getByText(/official website of the/)).toBeInTheDocument();
    });

    it('displays Spanish text when lang is "es"', () => {
      render(<Identifier parentAgency="Agencia de Prueba" lang="es" />);
      expect(screen.getByText(/Un sitio web oficial de/)).toBeInTheDocument();
    });

    it('displays Spanish required links when lang is "es"', () => {
      render(<Identifier lang="es" />);
      expect(screen.getByRole('link', { name: 'Acerca de' })).toBeInTheDocument();
      expect(screen.getByRole('link', { name: 'Declaración de accesibilidad' })).toBeInTheDocument();
    });

    it('displays Spanish USA.gov text when lang is "es"', () => {
      render(<Identifier lang="es" />);
      expect(screen.getByText(/¿Necesita información y servicios del Gobierno?/)).toBeInTheDocument();
      expect(screen.getByRole('link', { name: 'Visite USAGov en Español' })).toBeInTheDocument();
    });
  });

  // Taxpayer disclaimer tests
  describe('Taxpayer Disclaimer', () => {
    it('displays taxpayer disclaimer in English when enabled', () => {
      render(
        <Identifier 
          parentAgency="Test Agency" 
          taxpayerDisclaimer={true} 
        />
      );
      expect(screen.getByText(/Produced and published at taxpayer expense/)).toBeInTheDocument();
    });

    it('displays taxpayer disclaimer in Spanish when enabled and lang is "es"', () => {
      render(
        <Identifier 
          parentAgency="Agencia de Prueba" 
          taxpayerDisclaimer={true} 
          lang="es"
        />
      );
      expect(screen.getByText(/Producido y publicado con dinero de los contribuyentes de impuestos/)).toBeInTheDocument();
    });

    it('does not display taxpayer disclaimer when disabled', () => {
      render(<Identifier parentAgency="Test Agency" taxpayerDisclaimer={false} />);
      expect(screen.queryByText(/taxpayer expense/)).not.toBeInTheDocument();
    });
  });

  // Required links tests
  describe('Required Links', () => {
    it('displays default required links when none provided', () => {
      render(<Identifier />);
      expect(screen.getByRole('link', { name: 'About' })).toBeInTheDocument();
      expect(screen.getByRole('link', { name: 'Accessibility statement' })).toBeInTheDocument();
      expect(screen.getByRole('link', { name: 'FOIA requests' })).toBeInTheDocument();
    });

    it('displays custom required links when provided', () => {
      const customLinks = [
        { text: 'Custom Link 1', href: '/custom1' },
        { text: 'Custom Link 2', href: '/custom2' }
      ];
      render(<Identifier requiredLinks={customLinks} />);
      
      expect(screen.getByRole('link', { name: 'Custom Link 1' })).toBeInTheDocument();
      expect(screen.getByRole('link', { name: 'Custom Link 2' })).toBeInTheDocument();
      expect(screen.queryByRole('link', { name: 'About' })).not.toBeInTheDocument();
    });

    it('applies correct href to required links', () => {
      const customLinks = [
        { text: 'Test Link', href: '/test-link' }
      ];
      render(<Identifier requiredLinks={customLinks} />);
      
      const link = screen.getByRole('link', { name: 'Test Link' });
      expect(link).toHaveAttribute('href', '/test-link');
    });
  });

  // USA.gov section tests
  describe('USA.gov Section', () => {
    it('displays default USA.gov text and link', () => {
      render(<Identifier />);
      expect(screen.getByText(/Looking for U.S. government information and services?/)).toBeInTheDocument();
      expect(screen.getByRole('link', { name: 'Visit USA.gov' })).toBeInTheDocument();
    });

    it('displays custom USA.gov text when provided', () => {
      const customUSAGov = {
        text: 'Custom government text',
        linkText: 'Custom link text',
        href: 'https://custom.gov'
      };
      render(<Identifier usaGovText={customUSAGov} />);
      
      expect(screen.getByText('Custom government text')).toBeInTheDocument();
      expect(screen.getByRole('link', { name: 'Custom link text' })).toBeInTheDocument();
      expect(screen.getByRole('link', { name: 'Custom link text' })).toHaveAttribute('href', 'https://custom.gov');
    });

    it('merges custom USA.gov text with defaults', () => {
      const partialUSAGov = {
        linkText: 'Custom Link Only'
      };
      render(<Identifier usaGovText={partialUSAGov} />);
      
      expect(screen.getByText(/Looking for U.S. government information and services?/)).toBeInTheDocument();
      expect(screen.getByRole('link', { name: 'Custom Link Only' })).toBeInTheDocument();
    });
  });

  // Accessibility tests
  describe('Accessibility', () => {
    it('has proper ARIA labels for sections', () => {
      render(<Identifier />);
      
      expect(screen.getByRole('region', { name: /agency identifier/i })).toBeInTheDocument();
      expect(screen.getByRole('region', { name: /agency description/i })).toBeInTheDocument();
      expect(screen.getByRole('navigation', { name: /important links/i })).toBeInTheDocument();
      expect(screen.getByRole('region', { name: /u.s. government information/i })).toBeInTheDocument();
    });

    it('has proper ARIA labels in Spanish', () => {
      render(<Identifier lang="es" />);
      
      expect(screen.getByRole('region', { name: /identificador de agencia/i })).toBeInTheDocument();
      expect(screen.getByRole('region', { name: /descripción de agencia/i })).toBeInTheDocument();
      expect(screen.getByRole('navigation', { name: /enlaces importantes/i })).toBeInTheDocument();
    });

    it('has aria-hidden span for "An" in English', () => {
      render(<Identifier parentAgency="Test Agency" />);
      const hiddenSpan = document.querySelector('span[aria-hidden="true"]');
      expect(hiddenSpan).toBeInTheDocument();
      expect(hiddenSpan).toHaveTextContent(/An\s*/);
    });

    it('does not have aria-hidden span in Spanish', () => {
      render(<Identifier parentAgency="Agencia de Prueba" lang="es" />);
      const hiddenSpan = document.querySelector('span[aria-hidden="true"]');
      expect(hiddenSpan).not.toBeInTheDocument();
    });

    it('has proper img role attribute for logos', () => {
      const agencies = [
        {
          name: 'Test Agency',
          logoSrc: '/test-logo.svg',
          logoAlt: 'Test Agency logo'
        }
      ];
      render(<Identifier agencies={agencies} />);
      
      const logo = screen.getByRole('img', { name: 'Test Agency logo' });
      expect(logo).toHaveAttribute('role', 'img');
    });
  });

  // Edge cases and error handling
  describe('Edge Cases', () => {
    it('handles empty agencies array', () => {
      render(<Identifier agencies={[]} parentAgency="Fallback Agency" />);
      expect(screen.getByRole('link', { name: 'Fallback Agency' })).toBeInTheDocument();
    });

    it('handles agencies without names', () => {
      const agencies = [{ logoSrc: '/logo.svg' }];
      render(<Identifier agencies={agencies} parentAgency="Fallback Agency" />);
      expect(screen.getByRole('link', { name: 'Fallback Agency' })).toBeInTheDocument();
    });

    it('handles missing props gracefully', () => {
      render(<Identifier />);
      // Should not crash and should render basic structure
      expect(screen.getByRole('region', { name: /agency identifier/i })).toBeInTheDocument();
    });

    it('handles agency links with custom href', () => {
      const agencies = [
        {
          name: 'Test Agency',
          href: 'https://agency.gov'
        }
      ];
      render(<Identifier agencies={agencies} />);
      
      const agencyLink = screen.getByRole('link', { name: 'Test Agency' });
      expect(agencyLink).toHaveAttribute('href', 'https://agency.gov');
    });

    it('defaults to # href when agency href not provided', () => {
      const agencies = [
        {
          name: 'Test Agency'
        }
      ];
      render(<Identifier agencies={agencies} />);
      
      const agencyLink = screen.getByRole('link', { name: 'Test Agency' });
      expect(agencyLink).toHaveAttribute('href', '#');
    });
  });

  // External link functionality tests
  describe('External Link Functionality', () => {
    it('adds external link icon to external required links', () => {
      const externalLinks = [
        { text: 'Internal Link', href: '/internal' },
        { text: 'External Link', href: 'https://external.com' }
      ];
      render(<Identifier domain="test.gov" requiredLinks={externalLinks} />);
      
      const internalLink = screen.getByRole('link', { name: 'Internal Link' });
      const externalLink = screen.getByRole('link', { name: 'External Link' });
      
      expect(internalLink.querySelector('svg')).not.toBeInTheDocument();
      expect(externalLink.querySelector('svg')).toBeInTheDocument();
    });

    it('adds target="_blank" and rel="noopener noreferrer" to external links', () => {
      const externalLinks = [
        { text: 'Internal Link', href: '/internal' },
        { text: 'External Link', href: 'https://external.com' }
      ];
      render(<Identifier domain="test.gov" requiredLinks={externalLinks} />);
      
      const internalLink = screen.getByRole('link', { name: 'Internal Link' });
      const externalLink = screen.getByRole('link', { name: 'External Link' });
      
      expect(internalLink).not.toHaveAttribute('target');
      expect(internalLink).not.toHaveAttribute('rel');
      expect(externalLink).toHaveAttribute('target', '_blank');
      expect(externalLink).toHaveAttribute('rel', 'noopener noreferrer');
    });

    it('adds external link icon to USA.gov link when external', () => {
      const usaGovText = {
        text: 'Visit USA.gov',
        linkText: 'USA.gov',
        href: 'https://www.usa.gov'
      };
      render(<Identifier domain="test.gov" usaGovText={usaGovText} />);
      
      const usaGovLink = screen.getByRole('link', { name: 'USA.gov' });
      expect(usaGovLink.querySelector('svg')).toBeInTheDocument();
      expect(usaGovLink).toHaveAttribute('target', '_blank');
      expect(usaGovLink).toHaveAttribute('rel', 'noopener noreferrer');
    });

    it('correctly identifies external links with different protocols', () => {
      const mixedLinks = [
        { text: 'Hash Link', href: '#section' },
        { text: 'Relative Link', href: '/page' },
        { text: 'HTTP Link', href: 'http://example.com' },
        { text: 'HTTPS Link', href: 'https://example.com' },
        { text: 'Protocol Relative', href: '//example.com' }
      ];
      render(<Identifier domain="test.gov" requiredLinks={mixedLinks} />);
      
      const hashLink = screen.getByRole('link', { name: 'Hash Link' });
      const relativeLink = screen.getByRole('link', { name: 'Relative Link' });
      const httpLink = screen.getByRole('link', { name: 'HTTP Link' });
      const httpsLink = screen.getByRole('link', { name: 'HTTPS Link' });
      const protocolRelativeLink = screen.getByRole('link', { name: 'Protocol Relative' });
      
      expect(hashLink.querySelector('svg')).not.toBeInTheDocument();
      expect(relativeLink.querySelector('svg')).not.toBeInTheDocument();
      expect(httpLink.querySelector('svg')).toBeInTheDocument();
      expect(httpsLink.querySelector('svg')).toBeInTheDocument();
      expect(protocolRelativeLink.querySelector('svg')).toBeInTheDocument();
    });

    it('correctly identifies same-domain links as internal', () => {
      const samedomainLinks = [
        { text: 'Same Domain HTTP', href: 'http://test.gov/page' },
        { text: 'Same Domain HTTPS', href: 'https://test.gov/page' },
        { text: 'Same Domain WWW', href: 'https://www.test.gov/page' },
        { text: 'Different Domain', href: 'https://external.com/page' }
      ];
      render(<Identifier domain="test.gov" requiredLinks={samedomainLinks} />);
      
      const sameDomainHttp = screen.getByRole('link', { name: 'Same Domain HTTP' });
      const sameDomainHttps = screen.getByRole('link', { name: 'Same Domain HTTPS' });
      const sameDomainWww = screen.getByRole('link', { name: 'Same Domain WWW' });
      const differentDomain = screen.getByRole('link', { name: 'Different Domain' });
      
      expect(sameDomainHttp.querySelector('svg')).not.toBeInTheDocument();
      expect(sameDomainHttps.querySelector('svg')).not.toBeInTheDocument();
      expect(sameDomainWww.querySelector('svg')).not.toBeInTheDocument();
      expect(differentDomain.querySelector('svg')).toBeInTheDocument();
    });

    it('treats all http/https links as external when no domain provided', () => {
      const links = [
        { text: 'HTTP Link', href: 'http://example.com' },
        { text: 'HTTPS Link', href: 'https://example.com' }
      ];
      render(<Identifier requiredLinks={links} />); // No domain prop
      
      const httpLink = screen.getByRole('link', { name: 'HTTP Link' });
      const httpsLink = screen.getByRole('link', { name: 'HTTPS Link' });
      
      expect(httpLink.querySelector('svg')).toBeInTheDocument();
      expect(httpsLink.querySelector('svg')).toBeInTheDocument();
    });

    it('handles invalid URLs gracefully', () => {
      const invalidLinks = [
        { text: 'Invalid URL', href: 'https://[invalid' }
      ];
      render(<Identifier domain="test.gov" requiredLinks={invalidLinks} />);
      
      const invalidLink = screen.getByRole('link', { name: 'Invalid URL' });
      expect(invalidLink.querySelector('svg')).toBeInTheDocument(); // Should default to external
    });

    it('handles empty or undefined href', () => {
      const edgeCaseLinks = [
        { text: 'Empty Href', href: '' },
        { text: 'Undefined Href', href: undefined }
      ];
      render(<Identifier requiredLinks={edgeCaseLinks} />);
      
      const emptyHref = screen.getByRole('link', { name: 'Empty Href' });
      const undefinedHref = screen.getByRole('link', { name: 'Undefined Href' });
      
      expect(emptyHref.querySelector('svg')).not.toBeInTheDocument();
      expect(undefinedHref.querySelector('svg')).not.toBeInTheDocument();
    });
  });

  // CSS classes and structure tests
  describe('CSS Classes and Structure', () => {
    it('applies correct CSS classes to main sections', () => {
      render(<Identifier />);
      
      expect(document.querySelector('.usa-identifier__section--masthead')).toBeInTheDocument();
      expect(document.querySelector('.usa-identifier__section--required-links')).toBeInTheDocument();
      expect(document.querySelector('.usa-identifier__section--usagov')).toBeInTheDocument();
    });

    it('applies correct CSS classes to containers', () => {
      render(<Identifier />);
      
      const containers = document.querySelectorAll('.usa-identifier__container');
      expect(containers).toHaveLength(3); // One for each section
    });

    it('applies correct CSS classes to identity elements', () => {
      render(<Identifier domain="test.gov" />);
      
      expect(document.querySelector('.usa-identifier__identity')).toBeInTheDocument();
      expect(document.querySelector('.usa-identifier__identity-domain')).toBeInTheDocument();
      expect(document.querySelector('.usa-identifier__identity-disclaimer')).toBeInTheDocument();
    });

    it('applies usa-link class to all links', () => {
      render(<Identifier />);
      
      const requiredLinks = document.querySelectorAll('.usa-identifier__required-link');
      requiredLinks.forEach(link => {
        expect(link).toHaveClass('usa-link');
      });
    });
  });
}); 