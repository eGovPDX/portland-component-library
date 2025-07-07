import React from 'react';
import PropTypes from 'prop-types';

/**
 * TableCaption component - provides accessible description for table
 * 
 * @param {Object} props - Component props
 * @param {React.ReactNode} props.children - Caption text
 * @param {string} props.className - Additional CSS classes
 * @returns {React.Element} Table caption component
 */
export const TableCaption = ({
  children,
  className = '',
  ...props
}) => {
  const captionClasses = [
    'usa-table__caption',
    className
  ].filter(Boolean).join(' ');

  return (
    <caption 
      className={captionClasses}
      {...props}
    >
      {children}
    </caption>
  );
};

TableCaption.propTypes = {
  children: PropTypes.node.isRequired,
  className: PropTypes.string
}; 