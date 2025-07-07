import React from 'react';
import PropTypes from 'prop-types';
import { SortIcon } from './SortIcon';

/**
 * TableHeaderCell component - header cell with optional sorting
 * 
 * @param {Object} props - Component props
 * @param {React.ReactNode} props.children - Cell content
 * @param {string} props.sortKey - Key for sorting (enables sort functionality)
 * @param {Object} props.sortConfig - Current sort configuration
 * @param {Function} props.onSort - Sort callback function
 * @param {string} props.scope - Scope attribute for th element
 * @param {string} props.className - Additional CSS classes
 * @returns {React.Element} Table header cell component
 */
export const TableHeaderCell = ({
  children,
  sortKey,
  sortConfig,
  onSort,
  scope = 'col',
  className = '',
  ...props
}) => {
  const isSortable = sortKey && onSort;
  const isSorted = isSortable && sortConfig?.column === sortKey;
  const sortDirection = isSorted ? sortConfig?.direction : null;



  const handleClick = () => {
    if (isSortable) {
      const newDirection = !isSorted ? 'asc' : 
                          sortDirection === 'asc' ? 'desc' : 'asc';
      onSort(sortKey, newDirection);
    }
  };

  const handleKeyDown = (e) => {
    if (isSortable && (e.key === 'Enter' || e.key === ' ')) {
      e.preventDefault();
      handleClick();
    }
  };

  const cellClasses = [
    'usa-table__header-cell',
    isSorted && 'usa-table__header-cell--sorted',
    className
  ].filter(Boolean).join(' ');

  const ariaSort = isSorted ? 
    (sortDirection === 'asc' ? 'ascending' : 'descending') : 
    null;

  return (
    <th 
      scope={scope}
      className={cellClasses}
      onClick={isSortable ? handleClick : undefined}
      onKeyDown={isSortable ? handleKeyDown : undefined}
      tabIndex={isSortable ? 0 : undefined}
      role={isSortable ? 'columnheader button' : 'columnheader'}
      aria-sort={ariaSort}
      aria-label={isSortable ? `${children}, activate to sort column` : undefined}
      {...props}
    >
      <div className="usa-table__header-cell-content">
        {children}
        {isSortable && (
          <SortIcon 
            direction={sortDirection}
            className="usa-table__sort-icon"
          />
        )}
      </div>
    </th>
  );
};

TableHeaderCell.propTypes = {
  children: PropTypes.node.isRequired,
  sortKey: PropTypes.string,
  sortConfig: PropTypes.shape({
    column: PropTypes.string,
    direction: PropTypes.oneOf(['asc', 'desc'])
  }),
  onSort: PropTypes.func,
  scope: PropTypes.string,
  className: PropTypes.string
}; 