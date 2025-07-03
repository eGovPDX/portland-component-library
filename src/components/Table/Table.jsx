import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import './Table.css';

/**
 * Table component based on USWDS Table
 * A table shows information in columns and rows
 * 
 * @param {Object} props - Component props
 * @param {React.ReactNode} props.children - Table content (caption, thead, tbody)
 * @param {boolean} props.bordered - Whether to show borders (default: true)
 * @param {boolean} props.striped - Whether to show alternating row colors
 * @param {boolean} props.scrollable - Whether the table should be horizontally scrollable
 * @param {boolean} props.stickyHeader - Whether the header should stick to top when scrolling
 * @param {boolean} props.stacked - Whether to force stacked layout (auto on mobile)
 * @param {string} props.className - Additional CSS classes
 * @param {Object} props.sortConfig - Sorting configuration {column: string, direction: 'asc'|'desc'}
 * @param {Function} props.onSort - Callback when a sortable column is clicked
 * @returns {React.Element} Table component
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

  // Check if we should use stacked view based on screen size
  useEffect(() => {
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
        
        // Pass down sort props to TableHeader
        if (child.type?.displayName === 'TableHeader' || child.props?.role === 'rowgroup') {
          return React.cloneElement(child, {
            sortConfig,
            onSort,
            isStackedView
          });
        }
        
        // Pass down stacked view to TableBody
        if (child.type?.displayName === 'TableBody' || child.props?.role === 'rowgroup') {
          return React.cloneElement(child, {
            isStackedView
          });
        }
        
        return child;
      })}
    </table>
  );

  if (scrollable && !isStackedView) {
    return (
      <div className={`${baseClass}--scrollable`} tabIndex="0" role="region" aria-label="Scrollable table">
        {tableContent}
      </div>
    );
  }

  return tableContent;
};

Table.propTypes = {
  children: PropTypes.node.isRequired,
  bordered: PropTypes.bool,
  striped: PropTypes.bool,
  scrollable: PropTypes.bool,
  stickyHeader: PropTypes.bool,
  stacked: PropTypes.bool,
  className: PropTypes.string,
  sortConfig: PropTypes.shape({
    column: PropTypes.string,
    direction: PropTypes.oneOf(['asc', 'desc'])
  }),
  onSort: PropTypes.func
}; 