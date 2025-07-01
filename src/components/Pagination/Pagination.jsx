/**
 * @fileoverview Pagination component for navigating paginated content.
 * 
 * This component provides USWDS-compliant pagination with intelligent ellipsis
 * placement, accessibility features, and responsive design. It uses a JavaScript
 * generator function for efficient page sequence calculation.
 * 
 * @author Portland Component Library
 * @version 1.0.0
 * @since 1.0.0
 * 
 * @todo Consider extracting TypeScript types when migrating to TypeScript
 * @todo Add keyboard navigation enhancements (arrow keys, home/end)
 * @todo Consider adding a "Go to page" input for large datasets
 */

import React from 'react';
import PropTypes from 'prop-types';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronLeft, faChevronRight } from '@fortawesome/free-solid-svg-icons';
import './Pagination.css';

/**
 * Generator function to create pagination sequence with intelligent ellipsis placement.
 * This function efficiently generates the optimal sequence of page numbers and ellipsis
 * based on the current page, total pages, and maximum visible pages constraint.
 * 
 * @generator
 * @function generatePageSequence
 * @param {number} currentPage - The currently active page number (1-based)
 * @param {number} totalPages - The total number of pages available
 * @param {number} [maxVisiblePages=7] - Maximum number of page buttons to show
 * @yields {Object} Page or ellipsis item
 * @yields {Object} item.type - Either 'page' or 'ellipsis'
 * @yields {number|string} item.value - Page number (for 'page') or '...' (for 'ellipsis')
 * @yields {boolean} [item.isCurrent] - Whether this page is the current page (only for 'page' type)
 * 
 * @example
 * // For currentPage=10, totalPages=20, maxVisiblePages=7
 * // Yields: [1, '...', 8, 9, 10, 11, 12, '...', 20]
 * const sequence = Array.from(generatePageSequence(10, 20, 7));
 * 
 * @example
 * // For currentPage=3, totalPages=5, maxVisiblePages=7
 * // Yields: [1, 2, 3, 4, 5] (no ellipsis needed)
 * const sequence = Array.from(generatePageSequence(3, 5, 7));
 */
function* generatePageSequence(currentPage, totalPages, maxVisiblePages = 7) {
  if (totalPages <= maxVisiblePages) {
    // Show all pages if total fits within max visible
    for (let i = 1; i <= totalPages; i++) {
      yield { type: 'page', value: i, isCurrent: i === currentPage };
    }
    return;
  }

  // Always show first page
  yield { type: 'page', value: 1, isCurrent: currentPage === 1 };

  const sidePages = Math.floor((maxVisiblePages - 3) / 2); // Reserve space for first, last, and ellipsis
  const startPage = Math.max(2, currentPage - sidePages);
  const endPage = Math.min(totalPages - 1, currentPage + sidePages);

  // Show ellipsis after first page if needed
  if (startPage > 2) {
    yield { type: 'ellipsis', value: '...' };
  }

  // Show pages around current page
  for (let i = startPage; i <= endPage; i++) {
    yield { type: 'page', value: i, isCurrent: i === currentPage };
  }

  // Show ellipsis before last page if needed
  if (endPage < totalPages - 1) {
    yield { type: 'ellipsis', value: '...' };
  }

  // Always show last page (if more than 1 page total)
  if (totalPages > 1) {
    yield { type: 'page', value: totalPages, isCurrent: currentPage === totalPages };
  }
}

/**
 * Pagination component for navigating paginated content.
 * 
 * @component
 * @param {Object} props - The component props
 * @param {number} props.currentPage - The currently active page number (1-based)
 * @param {number} props.totalPages - The total number of pages available
 * @param {function} props.onPageChange - Callback function called when a page is selected
 * @param {number} [props.maxVisiblePages=7] - Maximum number of page buttons to show (including ellipsis)
 * @param {boolean} [props.showEllipsis=true] - Whether to show ellipsis for truncated pages
 * @param {string} [props.ariaLabel='Pagination'] - Aria label for the pagination navigation
 * @param {string} [props.previousText='Previous'] - Text for the previous button
 * @param {string} [props.nextText='Next'] - Text for the next button
 * @param {string} [props.className] - Additional CSS classes to apply
 * @param {Object} [props...props] - Additional props to pass to the nav element
 * @returns {JSX.Element|null} The pagination component or null if props are invalid
 * 
 * @example
 * // Basic usage
 * <Pagination
 *   currentPage={5}
 *   totalPages={20}
 *   onPageChange={(page) => setCurrentPage(page)}
 * />
 * 
 * @example
 * // With custom options
 * <Pagination
 *   currentPage={3}
 *   totalPages={50}
 *   onPageChange={handlePageChange}
 *   maxVisiblePages={5}
 *   showEllipsis={true}
 *   ariaLabel="Search results pagination"
 *   previousText="Anterior"
 *   nextText="Siguiente"
 *   className="custom-pagination"
 * />
 */
export const Pagination = ({
  currentPage,
  totalPages,
  onPageChange,
  maxVisiblePages = 7,
  showEllipsis = true,
  ariaLabel = 'Pagination',
  previousText = 'Previous',
  nextText = 'Next',
  className,
  ...props
}) => {
  // Validate props
  if (currentPage < 1 || currentPage > totalPages || totalPages < 1) {
    console.warn('Pagination: Invalid currentPage or totalPages');
    return null;
  }

  const baseClass = 'usa-pagination';
  const paginationClasses = [baseClass, className].filter(Boolean).join(' ');

  const canGoPrevious = currentPage > 1;
  const canGoNext = currentPage < totalPages;

  const handlePageClick = (page) => {
    if (page !== currentPage && onPageChange) {
      onPageChange(page);
    }
  };

  const handlePreviousClick = () => {
    if (canGoPrevious) {
      handlePageClick(currentPage - 1);
    }
  };

  const handleNextClick = () => {
    if (canGoNext) {
      handlePageClick(currentPage + 1);
    }
  };

  // Generate page sequence using generator
  const pageSequence = Array.from(
    showEllipsis 
      ? generatePageSequence(currentPage, totalPages, maxVisiblePages)
      : generatePageSequence(currentPage, totalPages, totalPages) // Show all pages
  );

  return (
    <nav
      aria-label={ariaLabel}
      className={paginationClasses}
      {...props}
    >
      <ul className="usa-pagination__list">
        {/* Previous button */}
        <li className="usa-pagination__item usa-pagination__arrow">
          <button
            type="button"
            className={`usa-pagination__link usa-pagination__previous-page ${!canGoPrevious ? 'usa-pagination__link--disabled' : ''}`}
            aria-label="Previous page"
            onClick={handlePreviousClick}
            disabled={!canGoPrevious}
          >
            <FontAwesomeIcon 
              icon={faChevronLeft} 
              className="usa-pagination__icon usa-pagination__icon--left"
              aria-hidden="true"
            />
            <span className="usa-pagination__link-text">{previousText}</span>
          </button>
        </li>

        {/* Page numbers and ellipsis */}
        {pageSequence.map((item, index) => {
          if (item.type === 'ellipsis') {
            return (
              <li
                key={`ellipsis-${index}`}
                className="usa-pagination__item usa-pagination__overflow"
                aria-label="ellipsis indicating non-visible pages"
              >
                <span className="usa-pagination__ellipsis">{item.value}</span>
              </li>
            );
          }

          return (
            <li key={item.value} className="usa-pagination__item usa-pagination__page-no">
              <button
                type="button"
                className={`usa-pagination__button ${item.isCurrent ? 'usa-pagination__button--current' : ''}`}
                aria-label={`${item.isCurrent ? 'Current page, ' : ''}Page ${item.value}`}
                aria-current={item.isCurrent ? 'page' : undefined}
                onClick={() => handlePageClick(item.value)}
                disabled={item.isCurrent}
              >
                {item.value}
              </button>
            </li>
          );
        })}

        {/* Next button */}
        <li className="usa-pagination__item usa-pagination__arrow">
          <button
            type="button"
            className={`usa-pagination__link usa-pagination__next-page ${!canGoNext ? 'usa-pagination__link--disabled' : ''}`}
            aria-label="Next page"
            onClick={handleNextClick}
            disabled={!canGoNext}
          >
            <span className="usa-pagination__link-text">{nextText}</span>
            <FontAwesomeIcon 
              icon={faChevronRight} 
              className="usa-pagination__icon usa-pagination__icon--right"
              aria-hidden="true"
            />
          </button>
        </li>
      </ul>
    </nav>
  );
};

/**
 * PropTypes for the Pagination component.
 * These definitions serve as both runtime validation and documentation
 * for future TypeScript type generation.
 */
Pagination.propTypes = {
  /** 
   * The currently active page number (1-based index).
   * Must be a positive integer between 1 and totalPages (inclusive).
   * @type {number}
   */
  currentPage: PropTypes.number.isRequired,
  
  /** 
   * The total number of pages available.
   * Must be a positive integer greater than 0.
   * @type {number}
   */
  totalPages: PropTypes.number.isRequired,
  
  /** 
   * Callback function called when a page is selected.
   * Receives the new page number as the first argument.
   * @type {function}
   * @param {number} page - The selected page number
   */
  onPageChange: PropTypes.func.isRequired,
  
  /** 
   * Maximum number of page buttons to show (including ellipsis).
   * Determines how many page numbers are visible before truncation occurs.
   * Should be an odd number >= 5 for optimal UX (allows current page to be centered).
   * @type {number}
   * @default 7
   */
  maxVisiblePages: PropTypes.number,
  
  /** 
   * Whether to show ellipsis (...) for truncated pages.
   * When false, all pages will be shown regardless of maxVisiblePages.
   * @type {boolean}
   * @default true
   */
  showEllipsis: PropTypes.bool,
  
  /** 
   * Aria label for the pagination navigation element.
   * Used by screen readers to identify the pagination component.
   * @type {string}
   * @default 'Pagination'
   */
  ariaLabel: PropTypes.string,
  
  /** 
   * Text content for the previous page button.
   * Can be localized for different languages.
   * @type {string}
   * @default 'Previous'
   */
  previousText: PropTypes.string,
  
  /** 
   * Text content for the next page button.
   * Can be localized for different languages.
   * @type {string}
   * @default 'Next'
   */
  nextText: PropTypes.string,
  
  /** 
   * Additional CSS class names to apply to the root navigation element.
   * Will be combined with the base 'usa-pagination' class.
   * @type {string}
   */
  className: PropTypes.string
};

/**
 * Type definitions for future TypeScript migration.
 * These interfaces can be extracted when converting to TypeScript.
 * 
 * @typedef {Object} PaginationProps
 * @property {number} currentPage - The currently active page number (1-based)
 * @property {number} totalPages - The total number of pages available
 * @property {(page: number) => void} onPageChange - Callback function called when a page is selected
 * @property {number} [maxVisiblePages=7] - Maximum number of page buttons to show
 * @property {boolean} [showEllipsis=true] - Whether to show ellipsis for truncated pages
 * @property {string} [ariaLabel='Pagination'] - Aria label for the pagination navigation
 * @property {string} [previousText='Previous'] - Text for the previous button
 * @property {string} [nextText='Next'] - Text for the next button
 * @property {string} [className] - Additional CSS classes to apply
 * 
 * @typedef {Object} PageItem
 * @property {'page'} type - Indicates this is a page item
 * @property {number} value - The page number
 * @property {boolean} isCurrent - Whether this page is the current page
 * 
 * @typedef {Object} EllipsisItem
 * @property {'ellipsis'} type - Indicates this is an ellipsis item
 * @property {'...'} value - The ellipsis string
 * 
 * @typedef {PageItem | EllipsisItem} PaginationItem
 * 
 * Future TypeScript interfaces:
 * 
 * interface PaginationProps {
 *   currentPage: number;
 *   totalPages: number;
 *   onPageChange: (page: number) => void;
 *   maxVisiblePages?: number;
 *   showEllipsis?: boolean;
 *   ariaLabel?: string;
 *   previousText?: string;
 *   nextText?: string;
 *   className?: string;
 * }
 * 
 * interface PageItem {
 *   type: 'page';
 *   value: number;
 *   isCurrent: boolean;
 * }
 * 
 * interface EllipsisItem {
 *   type: 'ellipsis';
 *   value: '...';
 * }
 * 
 * type PaginationItem = PageItem | EllipsisItem;
 */ 