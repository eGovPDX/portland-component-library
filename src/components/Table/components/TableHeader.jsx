import React from 'react';
import PropTypes from 'prop-types';

/**
 * TableHeader component - contains header rows
 * 
 * @param {Object} props - Component props
 * @param {React.ReactNode} props.children - Header rows (tr elements)
 * @param {Object} props.sortConfig - Current sort configuration
 * @param {Function} props.onSort - Sort callback function
 * @param {boolean} props.isStackedView - Whether in stacked view
 * @returns {React.Element} Table header component
 */
export const TableHeader = ({
  children,
  sortConfig,
  onSort,
  isStackedView,
  ...props
}) => {
  // Don't render thead in stacked view
  if (isStackedView) {
    return null;
  }

  return (
    <thead {...props}>
      {React.Children.map(children, child => {
        if (!React.isValidElement(child)) return child;
        
        // Pass sort props down to header rows
        return React.cloneElement(child, {
          sortConfig,
          onSort
        });
      })}
    </thead>
  );
};

TableHeader.displayName = 'TableHeader';

TableHeader.propTypes = {
  children: PropTypes.node.isRequired,
  sortConfig: PropTypes.shape({
    column: PropTypes.string,
    direction: PropTypes.oneOf(['asc', 'desc'])
  }),
  onSort: PropTypes.func,
  isStackedView: PropTypes.bool
}; 