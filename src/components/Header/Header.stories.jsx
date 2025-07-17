import React from 'react';
import { Header } from './Header';
import { Button } from '../Button';
import { Search } from '../Search';

export default {
  title: 'Components/Header',
  component: Header,
  parameters: {
    docs: {
      description: {
        component: `
A header helps users identify where they are and provides a quick, organized way to reach the main sections of a website.

## Usage
\`\`\`jsx
import { Header } from '@portland/component-library';

// Basic header with title
<Header title="My Website" />

// Extended header with navigation
<Header 
  title="My Website" 
  subtitle="Serving the community"
  extended={true}
  primaryNav={[
    <a href="#section1">Section 1</a>,
    <a href="#section2">Section 2</a>
  ]}
/>

// Header with search
<Header 
  title="My Website"
  search={<Search />}
  primaryNav={[
    <a href="#home">Home</a>,
    <a href="#about">About</a>
  ]}
/>
\`\`\`
        `
      }
    }
  },
  argTypes: {
    title: {
      control: 'text',
      description: 'Title text for the header'
    },
    subtitle: {
      control: 'text',
      description: 'Subtitle or tagline text'
    },
    titleUrl: {
      control: 'text',
      description: 'URL for the title link'
    },
    variant: {
      control: 'select',
      options: ['basic'],
      description: 'Header variant'
    },
    extended: {
      control: 'boolean',
      description: 'Whether to use extended header layout'
    },
    megamenu: {
      control: 'boolean',
      description: 'Whether to enable megamenu support'
    },
    mobileMenuLabel: {
      control: 'text',
      description: 'Label for mobile menu button'
    },
    mobileCloseLabel: {
      control: 'text',
      description: 'Label for mobile close button'
    }
  }
};

// Basic header with just title
export const Default = {
  args: {
    title: 'My Website'
  }
};

// Header with title and subtitle
export const WithSubtitle = {
  args: {
    title: 'My Website',
    subtitle: 'Serving the community since 1851'
  }
};

// Basic header with navigation
export const WithNavigation = {
  args: {
    title: 'My Website',
    primaryNav: [
      <a key="home" href="#home" className="usa-nav__link">
        <span>Home</span>
      </a>,
      <a key="about" href="#about" className="usa-nav__link">
        <span>About</span>
      </a>,
      <a key="services" href="#services" className="usa-nav__link">
        <span>Services</span>
      </a>,
      <a key="contact" href="#contact" className="usa-nav__link">
        <span>Contact</span>
      </a>
    ]
  }
};

// Header with search
export const WithSearch = {
  args: {
    title: 'My Website',
    search: (
      <form className="usa-search usa-search--small" role="search">
        <label className="usa-sr-only" htmlFor="search-field">Search</label>
        <input
          className="usa-input"
          id="search-field"
          type="search"
          name="search"
        />
        <button className="usa-button" type="submit">
          <span className="usa-sr-only">Search</span>
          🔍
        </button>
      </form>
    ),
    primaryNav: [
      <a key="home" href="#home" className="usa-nav__link">
        <span>Home</span>
      </a>,
      <a key="about" href="#about" className="usa-nav__link">
        <span>About</span>
      </a>
    ]
  }
};

// Extended header
export const Extended = {
  args: {
    title: 'My Website',
    subtitle: 'Serving the community',
    extended: true,
    primaryNav: [
      <a key="home" href="#home" className="usa-nav__link usa-current">
        <span>Home</span>
      </a>,
      <a key="about" href="#about" className="usa-nav__link">
        <span>About</span>
      </a>,
      <a key="services" href="#services" className="usa-nav__link">
        <span>Services</span>
      </a>,
      <a key="contact" href="#contact" className="usa-nav__link">
        <span>Contact</span>
      </a>
    ]
  }
};

// Extended header with secondary navigation
export const ExtendedWithSecondary = {
  args: {
    title: 'My Website',
    subtitle: 'Serving the community',
    extended: true,
    primaryNav: [
      <a key="home" href="#home" className="usa-nav__link usa-current">
        <span>Home</span>
      </a>,
      <a key="about" href="#about" className="usa-nav__link">
        <span>About</span>
      </a>,
      <a key="services" href="#services" className="usa-nav__link">
        <span>Services</span>
      </a>
    ],
    secondaryNav: [
      <a key="login" href="#login">Log in</a>,
      <a key="signup" href="#signup">Sign up</a>
    ]
  }
};

// Extended header with search and secondary content
export const ExtendedWithSearchAndSecondary = {
  args: {
    title: 'My Website',
    subtitle: 'Serving the community',
    extended: true,
    primaryNav: [
      <a key="home" href="#home" className="usa-nav__link usa-current">
        <span>Home</span>
      </a>,
      <a key="about" href="#about" className="usa-nav__link">
        <span>About</span>
      </a>,
      <a key="services" href="#services" className="usa-nav__link">
        <span>Services</span>
      </a>,
      <a key="contact" href="#contact" className="usa-nav__link">
        <span>Contact</span>
      </a>
    ],
    secondaryNav: [
      <a key="login" href="#login">Log in</a>,
      <a key="signup" href="#signup">Sign up</a>
    ],
    search: (
      <form className="usa-search usa-search--small" role="search">
        <label className="usa-sr-only" htmlFor="extended-search-field">Search</label>
        <input
          className="usa-input"
          id="extended-search-field"
          type="search"
          name="search"
        />
        <button className="usa-button" type="submit">
          <span className="usa-sr-only">Search</span>
          🔍
        </button>
      </form>
    )
  }
};

// Header with secondary content row
export const WithSecondaryContent = {
  args: {
    title: 'My Website',
    primaryNav: [
      <a key="home" href="#home" className="usa-nav__link">
        <span>Home</span>
      </a>,
      <a key="about" href="#about" className="usa-nav__link">
        <span>About</span>
      </a>
    ],
    children: (
      <div style={{ 
        backgroundColor: '#f0f0f0', 
        padding: '1rem',
        borderTop: '1px solid #dfe1e2' 
      }}>
        <p style={{ margin: 0, textAlign: 'center' }}>
          📢 Important announcement: Our offices will be closed on Monday for the holiday.
        </p>
      </div>
    )
  }
};

// Navigation with dropdown (basic implementation)
export const WithDropdownNavigation = {
  args: {
    title: 'My Website',
    primaryNav: [
      <button key="services" className="usa-accordion__button usa-nav__link" aria-expanded="false">
        <span>Services</span>
      </button>,
      <a key="about" href="#about" className="usa-nav__link">
        <span>About</span>
      </a>,
      <a key="contact" href="#contact" className="usa-nav__link">
        <span>Contact</span>
      </a>
    ]
  }
}; 