import React from 'react';
import PropTypes from 'prop-types';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { 
  faInfoCircle,
  faExclamationTriangle,
  faCheckCircle,
  faExclamationCircle,
  faExclamation,
} from '@fortawesome/free-solid-svg-icons';
import './Alert.css';

/**
 * Alert component based on USWDS Alert
 * Used to keep users informed of important and sometimes time-sensitive changes
 */
export const Alert = ({
  type = 'info',
  heading,
  children,
  slim = false,
  noIcon = false,
  className = '',
}) => {
  const alertClasses = [
    'alert',
    `alert--${type}`,
    slim && 'alert--slim',
    noIcon && 'alert--no-icon',
    className
  ].filter(Boolean).join(' ');

  const getIcon = () => {
    switch (type) {
      case 'info':
        return faInfoCircle;
      case 'warning':
        return faExclamationTriangle;
      case 'success':
        return faCheckCircle;
      case 'error':
        return faExclamationCircle;
      case 'emergency':
        return faExclamationCircle;
      default:
        return faInfoCircle;
    }
  };

  return (
    <div 
      className={alertClasses}
      role={type === 'error' || type === 'emergency' ? 'alert' : undefined}
    >
      <div className="alert__body">
        {!noIcon && (
          <div className="alert__icon">
            <FontAwesomeIcon icon={getIcon()} />
          </div>
        )}
        <div className="alert__content">
          {heading && <h4 className="alert__heading">{heading}</h4>}
          <div className="alert__text">
            {children}
          </div>
        </div>
      </div>
    </div>
  );
};

Alert.propTypes = {
  /**
   * Type of alert to display
   */
  type: PropTypes.oneOf(['info', 'warning', 'success', 'error', 'emergency']),
  /**
   * Optional heading text for the alert
   */
  heading: PropTypes.string,
  /**
   * Content to display in the alert
   */
  children: PropTypes.node.isRequired,
  /**
   * Whether to display a slim version of the alert
   */
  slim: PropTypes.bool,
  /**
   * Whether to display the alert without an icon
   */
  noIcon: PropTypes.bool,
  /**
   * Additional CSS class names
   */
  className: PropTypes.string,
};

Alert.defaultProps = {
  type: 'info',
  heading: undefined,
  slim: false,
  noIcon: false,
  className: '',
}; 