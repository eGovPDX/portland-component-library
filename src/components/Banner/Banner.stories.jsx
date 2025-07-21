import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { 
  faFlag, 
  faStar, 
  faHeart, 
  faShieldHalved, 
  faCircleInfo, 
  faExclamationTriangle,
  faCheckCircle,
  faTimesCircle,
  faQuestionCircle,
  faCog,
  faHome,
  faUser,
  faEnvelope,
  faPhone,
  faMapMarkerAlt,
  faCalendar,
  faClock,
  faSearch,
  faDownload,
  faUpload,
  faPrint,
  faSave,
  faEdit,
  faTrash,
  faPlus,
  faMinus,
  faArrowRight,
  faArrowLeft,
  faChevronUp,
  faChevronDown
} from '@fortawesome/free-solid-svg-icons';
import { Banner } from './Banner';

// Icon mapping object
const iconMap = {
  'flag': faFlag,
  'star': faStar,
  'heart': faHeart,
  'shield': faShieldHalved,
  'info-circle': faCircleInfo,
  'exclamation-triangle': faExclamationTriangle,
  'check-circle': faCheckCircle,
  'times-circle': faTimesCircle,
  'question-circle': faQuestionCircle,
  'cog': faCog,
  'home': faHome,
  'user': faUser,
  'envelope': faEnvelope,
  'phone': faPhone,
  'map-marker': faMapMarkerAlt,
  'calendar': faCalendar,
  'clock': faClock,
  'search': faSearch,
  'download': faDownload,
  'upload': faUpload,
  'print': faPrint,
  'save': faSave,
  'edit': faEdit,
  'trash': faTrash,
  'plus': faPlus,
  'minus': faMinus,
  'arrow-right': faArrowRight,
  'arrow-left': faArrowLeft,
  'chevron-up': faChevronUp,
  'chevron-down': faChevronDown
};

// Helper function to create FontAwesome icon element
const createIconElement = (iconName, color = '#0050d8', size = 'lg') => {
  if (!iconName || iconName === 'none') return null;
  const icon = iconMap[iconName];
  if (!icon) return null;
  return <FontAwesomeIcon icon={icon} color={color} size={size} />;
};

export default {
  title: 'Components/Banner',
  component: Banner,
  parameters: {
    layout: 'fullscreen',
    docs: {
      description: {
        component: 'Banner component based on the USWDS Banner component. The banner provides information about the official nature of government websites.',
      },
    },
  },
  argTypes: {
    icon: {
      control: 'select',
      options: [
        'none',
        'flag',
        'star',
        'heart',
        'shield',
        'info-circle',
        'exclamation-triangle',
        'check-circle',
        'times-circle',
        'question-circle',
        'cog',
        'home',
        'user',
        'envelope',
        'phone',
        'map-marker',
        'calendar',
        'clock',
        'search',
        'download',
        'upload',
        'print',
        'save',
        'edit',
        'trash',
        'plus',
        'minus',
        'arrow-right',
        'arrow-left',
        'chevron-up',
        'chevron-down'
      ],
      description: 'FontAwesome icon to display in the banner header',
      defaultValue: 'none'
    }
  },
  tags: ['autodocs'],
};

// Default Banner
export const Default = {
  args: {
    domain: 'An official website of the City of Portland',
    heading: 'Official websites use .gov',
    description: 'A .gov website belongs to an official government organization in the United States.',
    bannerLinkText: 'Here\'s how you know',
    showHttpsGuidance: true,
    initiallyExpanded: false,
    icon: 'none'
  },
  render: (args) => {
    const iconElement = createIconElement(args.icon);
    return <Banner {...args} icon={iconElement} />;
  }
};

// Expanded Banner
export const Expanded = {
  args: {
    ...Default.args,
    initiallyExpanded: true
  },
  render: Default.render
};

// Custom Domain Text
export const CustomDomain = {
  args: {
    ...Default.args,
    domain: 'An official website of Portland, Oregon',
  },
  render: Default.render
};

// Custom Content
export const CustomContent = {
  args: {
    ...Default.args,
    heading: 'Important Information',
    description: 'This banner contains important information about this website and its services.',
  },
  render: Default.render
};

// Without HTTPS Guidance
export const WithoutHttpsGuidance = {
  args: {
    ...Default.args,
    showHttpsGuidance: false,
    initiallyExpanded: true
  },
  render: Default.render
};

// Mobile Banner
export const Mobile = {
  args: {
    ...Default.args,
  },
  render: Default.render,
  parameters: {
    viewport: {
      defaultViewport: 'mobile1',
    },
  },
}; 