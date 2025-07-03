import React from 'react';
import PropTypes from 'prop-types';

/**
 * TableBody component - contains data rows
 * 
 * @param {Object} props - Component props
 * @param {React.ReactNode} props.children - Table rows (tr elements)
 * @param {boolean} props.isStackedView - Whether in stacked view
 * @param {Array} props.headers - Column headers for stacked view
 * @returns {React.Element} Table body component
 */
export const TableBody = ({
  children,
  isStackedView,
  headers = [],
  ...props
}) => {
  return (
    <tbody {...props}>
      {React.Children.map(children, (child, rowIndex) => {
        if (!React.isValidElement(child)) return child;
        
        // Pass stacked view and headers to rows
        return React.cloneElement(child, {
          isStackedView,
          headers,
          rowIndex
        });
      })}
    </tbody>
  );
};

TableBody.displayName = 'TableBody';

TableBody.propTypes = {
  children: PropTypes.node.isRequired,
  isStackedView: PropTypes.bool,
  headers: PropTypes.arrayOf(PropTypes.string)
}; 