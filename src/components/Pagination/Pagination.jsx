import React, { useEffect, useMemo, useRef, useState } from 'react';
import PropTypes from 'prop-types';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronLeft, faChevronRight, faAnglesLeft, faAnglesRight } from '@fortawesome/free-solid-svg-icons';
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
 * @param {boolean} [includeEdgeAnchors=true] - When true, always include first and last page numbers as anchors
 * @param {boolean} [includeEllipsis=true] - When true, include ellipsis items when truncation occurs
 * @param {boolean} [preferLeadingNumber=false] - When true, replace the leading ellipsis with page 2
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
function* generatePageSequence(currentPage, totalPages, maxVisiblePages = 7, includeEdgeAnchors = true, includeEllipsis = true, preferLeadingNumber = false) {
  if (totalPages <= maxVisiblePages) {
    // Show all pages if total fits within max visible
    for (let i = 1; i <= totalPages; i++) {
      yield { type: 'page', value: i, isCurrent: i === currentPage };
    }
    return;
  }

  if (includeEdgeAnchors) {
    // Always show first page
    yield { type: 'page', value: 1, isCurrent: currentPage === 1 };

    // Bias the window toward the start so we avoid a leading ellipsis when possible
    const windowSize = Math.max(3, maxVisiblePages - 1); // reserve space for last and potential single ellipsis
    let startPage = Math.max(2, currentPage - Math.floor((windowSize - 1) / 2));
    let endPage = startPage + windowSize - 1;
    if (endPage > totalPages - 1) {
      endPage = totalPages - 1;
      startPage = Math.max(2, endPage - windowSize + 1);
    }

    // Show ellipsis after first page if needed (or replace with page 2 when preferred)
    if (startPage > 2) {
      if (preferLeadingNumber) {
        yield { type: 'page', value: 2, isCurrent: currentPage === 2 };
      } else if (includeEllipsis) {
        yield { type: 'ellipsis', value: '...' };
      }
    }

    // Show pages around current page
    for (let i = startPage; i <= endPage; i++) {
      yield { type: 'page', value: i, isCurrent: i === currentPage };
    }

    // Show ellipsis before last page if needed
    if (includeEllipsis && endPage < totalPages - 1) {
      yield { type: 'ellipsis', value: '...' };
    }

    // Always show last page (if more than 1 page total)
    if (totalPages > 1) {
      yield { type: 'page', value: totalPages, isCurrent: currentPage === totalPages };
    }
    return;
  }

  // Without edge anchors: show a centered window with leading/trailing ellipsis as needed
  const windowSize = Math.max(1, maxVisiblePages);
  const half = Math.floor((windowSize - 1) / 2);
  let start = Math.max(1, currentPage - half);
  let end = Math.min(totalPages, start + windowSize - 1);
  if (end - start + 1 < windowSize) {
    start = Math.max(1, end - windowSize + 1);
  }

  // Prefer showing the next lowest number rather than a leading ellipsis

  for (let i = start; i <= end; i++) {
    yield { type: 'page', value: i, isCurrent: i === currentPage };
  }

  if (includeEllipsis && end < totalPages) {
    yield { type: 'ellipsis', value: '...' };
  }
}

/**
 * Build a hard-capped page sequence where the total number of items (pages + ellipsis)
 * does not exceed totalSlotsCap. Navigation arrows are not counted here.
 */
function buildHardCappedSequence(currentPage, totalPages, totalSlotsCap, includeEdgeAnchors, includeEllipsis, preferLeadingNumber) {
  const items = [];
  const cap = Math.max(1, Math.floor(totalSlotsCap || 1));

  if (totalPages <= cap) {
    for (let i = 1; i <= totalPages; i++) {
      items.push({ type: 'page', value: i, isCurrent: i === currentPage });
    }
    return items;
  }

  if (includeEdgeAnchors) {
    // Reserve slots for first/last and one possible trailing ellipsis
    // Layout: [1] [2..k] [...] [total]
    items.push({ type: 'page', value: 1, isCurrent: currentPage === 1 });

    const maxMiddleWithoutEllipsis = Math.max(0, totalPages - 2);
    const canShowAllMiddle = (2 + maxMiddleWithoutEllipsis) <= cap - 1; // not used; we cap below

    // Leave room for last and a potential trailing ellipsis
    let middleSize = Math.max(0, cap - 3);
    middleSize = Math.min(middleSize, maxMiddleWithoutEllipsis);

    // Middle pages start at 2
    const middleStart = 2;
    const middleEnd = middleStart + middleSize - 1;

    for (let i = middleStart; i <= middleEnd; i++) {
      if (i >= 2 && i <= totalPages - 1) {
        items.push({ type: 'page', value: i, isCurrent: i === currentPage });
      }
    }

    const needTrailingEllipsis = includeEllipsis && middleEnd < (totalPages - 1);
    if (needTrailingEllipsis) {
      items.push({ type: 'ellipsis', value: '...' });
    }

    items.push({ type: 'page', value: totalPages, isCurrent: currentPage === totalPages });
    return items;
  }

  // No edge anchors: build a window around the current page, biasing to the low side,
  // but without ever adding a leading ellipsis. Only a trailing ellipsis is allowed.
  const pagesCount = Math.max(1, cap - (includeEllipsis ? 1 : 0));
  if (pagesCount >= totalPages) {
    for (let i = 1; i <= totalPages; i++) {
      items.push({ type: 'page', value: i, isCurrent: i === currentPage });
    }
    return items;
  }

  let end = Math.min(totalPages, Math.max(currentPage, pagesCount));
  let start = Math.max(1, end - pagesCount + 1);
  // If current page extends beyond, slide window so current is included at the end as needed
  if (currentPage > end) {
    end = currentPage;
    start = Math.max(1, end - pagesCount + 1);
  }

  for (let i = start; i <= end; i++) {
    items.push({ type: 'page', value: i, isCurrent: i === currentPage });
  }
  if (includeEllipsis && end < totalPages) {
    items.push({ type: 'ellipsis', value: '...' });
  }
  return items;
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
 * @param {string} [props.previousButtonText='Previous'] - Text for the previous button
 * @param {string} [props.nextButtonText='Next'] - Text for the next button
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
 *   previousButtonText="Anterior"
 *   nextButtonText="Siguiente"
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
  previousButtonText = 'Back',
  nextButtonText = 'Next',
  showFirstLast = true,
  firstButtonText = 'First',
  lastButtonText = 'Last',
  showStatus = true,
  resultsPerPage,
  totalResults,
  statusPosition = 'before',
  showStatusText = false,
  className,
  ...props
}) => {
  // Determine effective total pages from results if provided
  const hasResultCounts = typeof resultsPerPage === 'number' && typeof totalResults === 'number' && resultsPerPage > 0 && totalResults > 0;
  const effectiveTotalPages = hasResultCounts ? Math.max(1, Math.ceil(totalResults / resultsPerPage)) : totalPages;

  // Normalize and validate current page against effective total pages
  const normalizedCurrentPage = Math.min(
    Math.max(1, Math.floor(Number(currentPage) || 1)),
    Math.max(1, Math.floor(Number(effectiveTotalPages) || 1))
  );

  if (normalizedCurrentPage < 1 || normalizedCurrentPage > effectiveTotalPages || effectiveTotalPages < 1) {
    console.warn('Pagination: Invalid currentPage or totalPages');
    return null;
  }

  const baseClass = 'usa-pagination';
  const paginationClasses = [baseClass, className].filter(Boolean).join(' ');

  const navRef = useRef(null);
  const listRef = useRef(null);
  const [calculatedMaxPages, setCalculatedMaxPages] = useState(maxVisiblePages);

  const canGoPrevious = normalizedCurrentPage > 1;
  const canGoNext = normalizedCurrentPage < effectiveTotalPages;

  // Measure and calculate how many page buttons fit in the available width
  useEffect(() => {
    const navEl = navRef.current;
    const listEl = listRef.current;
    if (!navEl || !listEl) return;

    const compute = () => {
      // Prefer the widest ancestor width to avoid flex-centering shrink and Storybook transforms
      const a = navEl;
      const b = a && a.parentElement;
      const c = b && b.parentElement;
      const d = c && c.parentElement;
      const widths = [a, b, c, d]
        .filter(Boolean)
        .map((el) => el.clientWidth || el.getBoundingClientRect().width || 0);
      let containerWidth = Math.max(...widths, 0);
      // Subtract horizontal padding from nav to estimate usable content width
      const navStyles = window.getComputedStyle(navEl);
      const padL = parseFloat(navStyles.paddingLeft || '0') || 0;
      const padR = parseFloat(navStyles.paddingRight || '0') || 0;
      containerWidth = Math.max(0, containerWidth - padL - padR);
      if (!containerWidth || containerWidth <= 0) return;

      const arrowButton = listEl.querySelector('.usa-pagination__arrow .usa-pagination__button');
      const pageButton = listEl.querySelector('.usa-pagination__page-no .usa-pagination__button');
      const overflowEl = listEl.querySelector('.usa-pagination__overflow');
      const styles = window.getComputedStyle(listEl);
      const gap = parseFloat(styles.columnGap || styles.gap || '0') || 0;

      const arrowWidth = arrowButton ? Math.ceil(arrowButton.getBoundingClientRect().width) : 40;
      const pageWidth = pageButton ? Math.ceil(pageButton.getBoundingClientRect().width) : 36;
      const ellipsisWidth = overflowEl ? Math.ceil(overflowEl.getBoundingClientRect().width) : pageWidth;

      // Count controls as present based on feature flags, not enabledness,
      // because we now always render them but toggle disabled state
      const prevCount = 1;
      const nextCount = 1;
      const firstCount = showFirstLast ? 1 : 0;
      const lastCount = showFirstLast ? 1 : 0;
      const controlCount = prevCount + nextCount + firstCount + lastCount;
      const controlsWidth = controlCount * arrowWidth + controlCount * gap;

      // On very small screens, omit ellipsis to leave room for first/last controls
      const isNarrow = typeof window !== 'undefined' && window.matchMedia && window.matchMedia('(max-width: 480px)').matches;
      const includeEllipsis = !(isNarrow && showFirstLast);
      // We only ever render a trailing ellipsis in hard-capped mode, so budget at most 1
      const maxEllipsisCount = showEllipsis && includeEllipsis ? 1 : 0;
      const ellipsisTotalWidth = maxEllipsisCount * (ellipsisWidth + gap);

      const availableForPages = Math.max(0, containerWidth - controlsWidth - ellipsisTotalWidth);
      const perItem = pageWidth + gap;
      const estimated = perItem > 0 ? Math.floor((availableForPages + gap) / perItem) : maxVisiblePages;

      const clampMin = 1;
      const clampMax = Math.max(3, maxVisiblePages);
      const effective = Math.max(clampMin, Math.min(clampMax, estimated));

      setCalculatedMaxPages(effective);
    };

    compute();
    const ro = new ResizeObserver(() => {
      // Use rAF to avoid layout thrash during resize
      window.requestAnimationFrame(compute);
    });
    ro.observe(navEl);
    return () => ro.disconnect();
  }, [maxVisiblePages, showFirstLast, normalizedCurrentPage, effectiveTotalPages, canGoPrevious, canGoNext]);

  const handlePageClick = (page) => {
    if (page !== currentPage && onPageChange) {
      onPageChange(page);
    }
  };

  const handlePreviousClick = () => {
    if (canGoPrevious) {
      handlePageClick(normalizedCurrentPage - 1);
    }
  };

  const handleNextClick = () => {
    if (canGoNext) {
      handlePageClick(normalizedCurrentPage + 1);
    }
  };

  // Determine effective max pages (responsive-aware)
  const effectiveMaxPages = useMemo(() => (
    Math.min(maxVisiblePages, calculatedMaxPages)
  ), [maxVisiblePages, calculatedMaxPages]);

  // Generate page sequence using generator
  const pageSequence = useMemo(() => {
    // Show all pages if ellipsis is disabled
    if (!showEllipsis) {
      const items = [];
      for (let i = 1; i <= effectiveTotalPages; i++) {
        items.push({ type: 'page', value: i, isCurrent: i === normalizedCurrentPage });
      }
      return items;
    }

    // When first/last buttons are shown, do not include page 1/last anchors in the sequence
    const includeEdgeAnchors = !showFirstLast;
    const isNarrow = typeof window !== 'undefined' && window.matchMedia && window.matchMedia('(max-width: 480px)').matches;
    const includeEllipsis = !(isNarrow && showFirstLast);
    const preferLeadingNumber = !isNarrow && includeEdgeAnchors && showEllipsis;
    // Enforce hard cap: total items (pages + ellipsis) <= effectiveMaxPages
    const cap = Math.max(1, effectiveMaxPages);
    return buildHardCappedSequence(
      normalizedCurrentPage,
      effectiveTotalPages,
      cap,
      includeEdgeAnchors,
      showEllipsis && includeEllipsis,
      preferLeadingNumber
    );
  }, [normalizedCurrentPage, effectiveTotalPages, showEllipsis, effectiveMaxPages, showFirstLast]);

  const handleFirstClick = () => {
    if (normalizedCurrentPage !== 1) {
      handlePageClick(1);
    }
  };

  const handleLastClick = () => {
    if (normalizedCurrentPage !== effectiveTotalPages) {
      handlePageClick(effectiveTotalPages);
    }
  };

  const statusText = useMemo(() => {
    if (!showStatus) return null;
    if (hasResultCounts) {
      const start = (normalizedCurrentPage - 1) * resultsPerPage + 1;
      const end = Math.min(normalizedCurrentPage * resultsPerPage, totalResults);
      return `Showing results ${start} - ${end} of ${totalResults}`;
    }
    return `Page ${normalizedCurrentPage} of ${effectiveTotalPages}`;
  }, [showStatus, resultsPerPage, totalResults, normalizedCurrentPage, effectiveTotalPages]);

  return (
    <nav
      aria-label={ariaLabel}
      className={paginationClasses}
      ref={navRef}
      {...props}
    >
      {showStatus && (
        <div className="visually-hidden" aria-live="polite" aria-atomic="true">{statusText}</div>
      )}
      {showStatusText && statusText && statusPosition === 'before' && (
        <div className="usa-pagination__status">{statusText}</div>
      )}
      <ul className="usa-pagination__list" ref={listRef}>
        {showFirstLast && (
          <li className="usa-pagination__item usa-pagination__arrow">
            <button
              type="button"
              className={`usa-pagination__button usa-pagination__first-page`}
              aria-label="First page"
              onClick={handleFirstClick}
              aria-disabled={normalizedCurrentPage === 1}
              disabled={normalizedCurrentPage === 1}
            >
              <FontAwesomeIcon
                icon={faAnglesLeft}
                className="usa-pagination__icon usa-pagination__icon--left"
                aria-hidden="true"
              />
              <span className="usa-pagination__link-text">{firstButtonText}</span>
            </button>
          </li>
        )}
        {/* Previous button */}
        <li className="usa-pagination__item usa-pagination__arrow">
          <button
            type="button"
            className={`usa-pagination__button usa-pagination__previous-page`}
            aria-label="Previous page"
            onClick={handlePreviousClick}
            aria-disabled={!canGoPrevious}
            disabled={!canGoPrevious}
          >
            <FontAwesomeIcon 
              icon={faChevronLeft} 
              className="usa-pagination__icon usa-pagination__icon--left"
              aria-hidden="true"
            />
            <span className="usa-pagination__link-text">{previousButtonText}</span>
          </button>
        </li>

        {/* Page numbers and ellipsis */}
        {pageSequence.map((item, index) => {
          if (item.type === 'ellipsis') {
            return (
              <li
                key={`ellipsis-${index}`}
                className="usa-pagination__item usa-pagination__overflow"
                aria-hidden="true"
              >
                <span className="usa-pagination__ellipsis" aria-hidden="true">{item.value}</span>
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
            className={`usa-pagination__button usa-pagination__next-page`}
            aria-label="Next page"
            onClick={handleNextClick}
            aria-disabled={!canGoNext}
            disabled={!canGoNext}
          >
            <span className="usa-pagination__link-text">{nextButtonText}</span>
            <FontAwesomeIcon 
              icon={faChevronRight} 
              className="usa-pagination__icon usa-pagination__icon--right"
              aria-hidden="true"
            />
          </button>
        </li>
        {showFirstLast && (
          <li className="usa-pagination__item usa-pagination__arrow">
            <button
              type="button"
              className={`usa-pagination__button usa-pagination__last-page`}
              aria-label="Last page"
              onClick={handleLastClick}
              aria-disabled={normalizedCurrentPage === effectiveTotalPages}
              disabled={normalizedCurrentPage === effectiveTotalPages}
            >
              <span className="usa-pagination__link-text">{lastButtonText}</span>
              <FontAwesomeIcon
                icon={faAnglesRight}
                className="usa-pagination__icon usa-pagination__icon--right"
                aria-hidden="true"
              />
            </button>
          </li>
        )}
      </ul>
      {showStatusText && statusText && statusPosition === 'after' && (
        <div className="usa-pagination__status">{statusText}</div>
      )}
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
  previousButtonText: PropTypes.string,
  
  /** 
   * Text content for the next page button.
   * Can be localized for different languages.
   * @type {string}
   * @default 'Next'
   */
  nextButtonText: PropTypes.string,
  
  /**
   * Whether to show fast navigation buttons to jump to first/last page.
   * @type {boolean}
   * @default true
   */
  showFirstLast: PropTypes.bool,

  /**
   * Text content for the first page button.
   * @type {string}
   * @default 'First'
   */
  firstButtonText: PropTypes.string,

  /**
   * Text content for the last page button.
   * @type {string}
   * @default 'Last'
   */
  lastButtonText: PropTypes.string,
  
  /**
   * Shows status text indicating current page or results range.
   * When resultsPerPage and totalResults are provided, shows "Showing results X - Y of Z".
   * Otherwise shows "Page current of total".
   * @type {boolean}
   * @default true
   */
  showStatus: PropTypes.bool,

  /**
   * Controls whether the computed status text is rendered at all.
   * Useful when you want status text available for screen readers but hidden visually via your own layout logic.
   * @type {boolean}
   * @default true
   */
  showStatusText: PropTypes.bool,

  /** Number of results per page. When used with totalResults, enables results summary status. */
  resultsPerPage: PropTypes.number,
  /** Total number of results. When used with resultsPerPage, enables results summary status. */
  totalResults: PropTypes.number,
  /** Where to render the status text relative to the controls. 'before' or 'after'. */
  statusPosition: PropTypes.oneOf(['before', 'after']),
  
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
 * @property {string} [previousButtonText='Previous'] - Text for the previous button
 * @property {string} [nextButtonText='Next'] - Text for the next button
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
 */ 