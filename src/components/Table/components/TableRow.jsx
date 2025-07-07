import React from 'react';
import PropTypes from 'prop-types';

/**
 * TableRow component - table row
 * 
 * @param {Object} props - Component props
 * @param {React.ReactNode} props.children - Table cells (td/th elements)
 * @param {boolean} props.isStackedView - Whether in stacked view
 * @param {Array} props.headers - Column headers for stacked view
 * @param {number} props.rowIndex - Row index
 * @param {Object} props.sortConfig - Sort configuration for passing to cells
 * @param {Function} props.onSort - Sort callback for passing to cells
 * @returns {React.Element} Table row component
 */
export const TableRow = ({
  children,
  isStackedView,
  headers = [],
  rowIndex,
  sortConfig,
  onSort,
  ...props
}) => {
  if (isStackedView) {
    // In stacked view, render each row as a card-like structure
    return (
      <tr className="usa-table__row--stacked" {...props}>
        <td className="usa-table__cell--stacked">
          {React.Children.map(children, (child, cellIndex) => {
            if (!React.isValidElement(child)) return child;
            
            const header = headers[cellIndex] || '';
            return (
              <div className="usa-table__cell-group--stacked" key={cellIndex}>
                {header && (
                  <div className="usa-table__header--stacked">
                    {header}
                  </div>
                )}
                <div className="usa-table__cell-content--stacked">
                  {child.props.children}
                </div>
              </div>
            );
          })}
        </td>
      </tr>
    );
  }

  // Normal row view
  return (
    <tr {...props}>
      {React.Children.map(children, child => {
        if (!React.isValidElement(child)) return child;
        
        // Pass sort props to header cells in rows (for row headers)
        if (child.type?.name === 'TableHeaderCell') {
          return React.cloneElement(child, {
            sortConfig,
            onSort
          });
        }
        
        return child;
      })}
    </tr>
  );
};

TableRow.propTypes = {
  children: PropTypes.node.isRequired,
  isStackedView: PropTypes.bool,
  headers: PropTypes.arrayOf(PropTypes.string),
  rowIndex: PropTypes.number,
  sortConfig: PropTypes.shape({
    column: PropTypes.string,
    direction: PropTypes.oneOf(['asc', 'desc'])
  }),
  onSort: PropTypes.func
}; 