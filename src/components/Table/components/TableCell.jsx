import React from 'react';
import PropTypes from 'prop-types';

/**
 * TableCell component - table data cell
 * 
 * @param {Object} props - Component props
 * @param {React.ReactNode} props.children - Cell content
 * @param {string} props.className - Additional CSS classes
 * @param {boolean} props.header - Whether this is a header cell (th)
 * @param {string} props.scope - Scope attribute for header cells
 * @returns {React.Element} Table cell component
 */
export const TableCell = ({
  children,
  className = '',
  header = false,
  scope = 'row',
  ...props
}) => {
  const cellClasses = [
    'usa-table__cell',
    className
  ].filter(Boolean).join(' ');

  if (header) {
    return (
      <th 
        scope={scope}
        className={cellClasses}
        {...props}
      >
        {children}
      </th>
    );
  }

  return (
    <td 
      className={cellClasses}
      {...props}
    >
      {children}
    </td>
  );
};

TableCell.propTypes = {
  children: PropTypes.node,
  className: PropTypes.string,
  header: PropTypes.bool,
  scope: PropTypes.string
}; 