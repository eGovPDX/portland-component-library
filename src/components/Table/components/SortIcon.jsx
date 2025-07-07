import React from 'react';
import PropTypes from 'prop-types';

/**
 * SortIcon component - displays sort indicator
 * 
 * @param {Object} props - Component props
 * @param {string} props.direction - Sort direction ('asc', 'desc', or null)
 * @param {string} props.className - Additional CSS classes
 * @returns {React.Element} Sort icon component
 */
export const SortIcon = ({ direction, className = '' }) => {
  // SVG paths for sort icons
  const sortIcon = (
    <svg 
      className={className}
      width="24" 
      height="24" 
      viewBox="0 0 24 24" 
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true"
    >
      <path 
        d="M7 10l5 5 5-5H7z" 
        fill="currentColor"
        opacity={!direction || direction === 'asc' ? 0.3 : 1}
      />
      <path 
        d="M7 14l5-5 5 5H7z" 
        fill="currentColor"
        opacity={!direction || direction === 'desc' ? 0.3 : 1}
      />
    </svg>
  );

  const arrowDownIcon = (
    <svg 
      className={className}
      width="24" 
      height="24" 
      viewBox="0 0 24 24" 
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true"
    >
      <path 
        d="M7 10l5 5 5-5H7z" 
        fill="currentColor"
      />
    </svg>
  );

  const arrowUpIcon = (
    <svg 
      className={className}
      width="24" 
      height="24" 
      viewBox="0 0 24 24" 
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true"
    >
      <path 
        d="M7 14l5-5 5 5H7z" 
        fill="currentColor"
      />
    </svg>
  );

  // Show different icons based on sort state
  if (!direction) {
    return sortIcon;
  } else if (direction === 'asc') {
    return arrowUpIcon;
  } else {
    return arrowDownIcon;
  }
};

SortIcon.propTypes = {
  direction: PropTypes.oneOf(['asc', 'desc', null]),
  className: PropTypes.string
}; 