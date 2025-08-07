import React, { useEffect } from 'react';
import PropTypes from 'prop-types';

/**
 * TableHeader component - contains header rows
 * 
 * @param {Object} props - Component props
 * @param {React.ReactNode} props.children - Header rows (tr elements)
 * @param {Object} props.sortConfig - Current sort configuration
 * @param {Function} props.onSort - Sort callback function
 * @param {boolean} props.isStackedView - Whether in stacked view
 * @param {Function} props.onHeadersExtracted - Callback to pass extracted headers
 * @returns {React.Element} Table header component
 */
export const TableHeader = ({
  children,
  sortConfig,
  onSort,
  isStackedView,
  onHeadersExtracted,
  ...props
}) => {
  // Extract header information for stacked view
  useEffect(() => {
    if (isStackedView && onHeadersExtracted) {
      const headers = [];
      React.Children.forEach(children, child => {
        if (React.isValidElement(child)) {
          React.Children.forEach(child.props.children, cell => {
            if (React.isValidElement(cell)) {
              headers.push(cell.props.children);
            }
          });
        }
      });
      onHeadersExtracted(headers);
    }
  }, [children, isStackedView, onHeadersExtracted]);

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
  isStackedView: PropTypes.bool,
  onHeadersExtracted: PropTypes.func
}; 