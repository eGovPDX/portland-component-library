import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import './Table.css';

/**
 * Table Component
 * 
 * A responsive table component that displays information in columns and rows.
 * Supports various display modes including bordered, striped, scrollable, and stacked layouts.
 * The component automatically handles responsive behavior and can be configured for sorting.
 * 
 * @param {Object} props - Component props
 * @param {React.ReactNode} props.children - Table content (caption, thead, tbody)
 * @param {boolean} [props.bordered=true] - Whether to show borders
 * @param {boolean} [props.striped=false] - Whether to show alternating row colors
 * @param {boolean} [props.scrollable=false] - Whether the table should be horizontally scrollable
 * @param {boolean} [props.stickyHeader=false] - Whether the header should stick to top when scrolling
 * @param {boolean} [props.stacked=false] - Whether to force stacked layout (auto on mobile)
 * @param {string} [props.className=''] - Additional CSS classes
 * @param {Object} [props.sortConfig=null] - Sorting configuration {column: string, direction: 'asc'|'desc'}
 * @param {Function} [props.onSort=null] - Callback when a sortable column is clicked
 * @returns {JSX.Element} Table component
 * 
 * @example
 * ```jsx
 * <Table bordered striped scrollable>
 *   <TableCaption>Monthly Budget Summary</TableCaption>
 *   <TableHeader>
 *     <TableRow>
 *       <TableHeaderCell>Category</TableHeaderCell>
 *       <TableHeaderCell>Budgeted</TableHeaderCell>
 *       <TableHeaderCell>Actual</TableHeaderCell>
 *     </TableRow>
 *   </TableHeader>
 *   <TableBody>
 *     <TableRow>
 *       <TableCell>Housing</TableCell>
 *       <TableCell>$1,200</TableCell>
 *       <TableCell>$1,180</TableCell>
 *     </TableRow>
 *   </TableBody>
 * </Table>
 * ```
 */
export const Table = ({
  children,
  bordered = true,
  striped = false,
  scrollable = false,
  stickyHeader = false,
  stacked = false,
  className = '',
  sortConfig = null,
  onSort = null,
  ...props
}) => {
  const [isStackedView, setIsStackedView] = useState(false);
  const [stackedHeaders, setStackedHeaders] = useState([]);

  // Check if we should use stacked view based on screen size
  useEffect(() => {
    /**
     * Determines if the table should use stacked layout
     * @returns {void}
     */
    const checkStackedView = () => {
      const shouldStack = stacked || window.innerWidth < 640;
      setIsStackedView(shouldStack);
    };

    checkStackedView();
    window.addEventListener('resize', checkStackedView);
    return () => window.removeEventListener('resize', checkStackedView);
  }, [stacked]);

  const baseClass = 'usa-table';
  const tableClasses = [
    baseClass,
    !bordered && `${baseClass}--borderless`,
    striped && `${baseClass}--striped`,
    stickyHeader && `${baseClass}--sticky-header`,
    isStackedView && `${baseClass}--stacked`,
    className
  ].filter(Boolean).join(' ');

  const tableContent = (
    <table 
      className={tableClasses}
      role="table"
      {...props}
    >
      {React.Children.map(children, child => {
        if (!React.isValidElement(child)) return child;
        
        // Pass down sort props and header callback to TableHeader
        if (child.type?.displayName === 'TableHeader' || child.props?.role === 'rowgroup') {
          return React.cloneElement(child, {
            sortConfig,
            onSort,
            isStackedView,
            onHeadersExtracted: setStackedHeaders
          });
        }
        
        // Pass down stacked view and headers to TableBody
        if (child.type?.displayName === 'TableBody' || child.props?.role === 'rowgroup') {
          return React.cloneElement(child, {
            isStackedView,
            headers: stackedHeaders
          });
        }
        
        return child;
      })}
    </table>
  );

  // Wrap in scrollable container if needed and not in stacked view
  if (scrollable && !isStackedView) {
    return (
      <div className={`${baseClass}--scrollable`} tabIndex="0" role="region" aria-label="Scrollable table">
        {tableContent}
      </div>
    );
  }

  return tableContent;
};

/**
 * PropTypes for the Table component
 */
Table.propTypes = {
  /** Table content including TableCaption, TableHeader, and TableBody components */
  children: PropTypes.node.isRequired,
  /** Whether to display table borders */
  bordered: PropTypes.bool,
  /** Whether to display alternating row colors for better readability */
  striped: PropTypes.bool,
  /** Whether the table should be horizontally scrollable on smaller screens */
  scrollable: PropTypes.bool,
  /** Whether the table header should stick to the top when scrolling vertically */
  stickyHeader: PropTypes.bool,
  /** Whether to force stacked layout (automatically enabled on mobile devices) */
  stacked: PropTypes.bool,
  /** Additional CSS classes to apply to the table */
  className: PropTypes.string,
  /** Configuration object for table sorting */
  sortConfig: PropTypes.shape({
    column: PropTypes.string,
    direction: PropTypes.oneOf(['asc', 'desc'])
  }),
  /** Callback function called when a sortable column header is clicked */
  onSort: PropTypes.func
};

/**
 * Default props for the Table component
 */
Table.defaultProps = {
  bordered: true,
  striped: false,
  scrollable: false,
  stickyHeader: false,
  stacked: false,
  className: '',
  sortConfig: null,
  onSort: null
}; 