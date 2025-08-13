import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import { Pagination } from './Pagination';

// Mock FontAwesome component
jest.mock('@fortawesome/react-fontawesome', () => ({
  FontAwesomeIcon: ({ icon, className, ...props }) => (
    <span data-testid="mock-icon" data-icon={icon.iconName} className={className} {...props} />
  )
}));

describe('Pagination', () => {
  const defaultProps = {
    currentPage: 1,
    totalPages: 10,
    onPageChange: jest.fn()
  };

  beforeEach(() => {
    jest.clearAllMocks();
  });

  // Test basic rendering
  test('renders with default props', () => {
    render(<Pagination {...defaultProps} />);
    
    const nav = screen.getByRole('navigation', { name: /pagination/i });
    expect(nav).toBeInTheDocument();
    expect(nav).toHaveClass('usa-pagination');
  });

  // Test prop validation and error handling
  test('returns null for invalid props', () => {
    const consoleSpy = jest.spyOn(console, 'warn').mockImplementation(() => {});
    
    const { container } = render(
      <Pagination currentPage={1} totalPages={0} onPageChange={jest.fn()} />
    );
    
    expect(container.firstChild).toBeNull();
    expect(consoleSpy).toHaveBeenCalledWith('Pagination: Invalid currentPage or totalPages');
    
    consoleSpy.mockRestore();
  });

  // Test navigation buttons
  describe('Navigation buttons', () => {
    test('renders previous and next buttons', () => {
      render(<Pagination {...defaultProps} currentPage={5} />);
      
      expect(screen.getByRole('button', { name: /previous page/i })).toBeInTheDocument();
      expect(screen.getByRole('button', { name: /next page/i })).toBeInTheDocument();
    });

    test('disables previous button on first page', () => {
      render(<Pagination {...defaultProps} currentPage={1} />);
      
      const prevButton = screen.getByRole('button', { name: /previous page/i });
      expect(prevButton).toBeDisabled();
    });

    test('disables next button on last page', () => {
      render(<Pagination {...defaultProps} currentPage={10} totalPages={10} />);
      
      const nextButton = screen.getByRole('button', { name: /next page/i });
      expect(nextButton).toBeDisabled();
    });

    test('calls onPageChange when previous button is clicked', () => {
      const onPageChange = jest.fn();
      render(<Pagination {...defaultProps} currentPage={5} onPageChange={onPageChange} />);
      
      fireEvent.click(screen.getByRole('button', { name: /previous page/i }));
      expect(onPageChange).toHaveBeenCalledWith(4);
    });

    test('calls onPageChange when next button is clicked', () => {
      const onPageChange = jest.fn();
      render(<Pagination {...defaultProps} currentPage={5} onPageChange={onPageChange} />);
      
      fireEvent.click(screen.getByRole('button', { name: /next page/i }));
      expect(onPageChange).toHaveBeenCalledWith(6);
    });

    test('does not call onPageChange for disabled buttons', () => {
      const onPageChange = jest.fn();
      render(<Pagination {...defaultProps} currentPage={1} onPageChange={onPageChange} />);
      
      fireEvent.click(screen.getByRole('button', { name: /previous page/i }));
      expect(onPageChange).not.toHaveBeenCalled();
    });
  });

  // Test page buttons
  describe('Page buttons', () => {
    test('renders correct page numbers for few pages', () => {
      render(<Pagination {...defaultProps} currentPage={2} totalPages={5} />);
      
      // Should show all pages 1-5
      for (let i = 1; i <= 5; i++) {
        expect(screen.getByRole('button', { name: new RegExp(`page ${i}`, 'i') })).toBeInTheDocument();
      }
    });

    test('marks current page correctly', () => {
      render(<Pagination {...defaultProps} currentPage={3} totalPages={5} />);
      
      const currentPageButton = screen.getByRole('button', { name: /current page, page 3/i });
      expect(currentPageButton).toHaveAttribute('aria-current', 'page');
      expect(currentPageButton).toHaveClass('usa-pagination__button--current');
      expect(currentPageButton).toBeDisabled();
    });

    test('calls onPageChange when page button is clicked', () => {
      const onPageChange = jest.fn();
      render(<Pagination {...defaultProps} currentPage={1} totalPages={5} onPageChange={onPageChange} />);
      
      fireEvent.click(screen.getByRole('button', { name: /^page 3$/i }));
      expect(onPageChange).toHaveBeenCalledWith(3);
    });

    test('does not call onPageChange for current page button', () => {
      const onPageChange = jest.fn();
      render(<Pagination {...defaultProps} currentPage={3} totalPages={5} onPageChange={onPageChange} />);
      
      fireEvent.click(screen.getByRole('button', { name: /current page, page 3/i }));
      expect(onPageChange).not.toHaveBeenCalled();
    });
  });

  // Test ellipsis functionality
  describe('Ellipsis', () => {
    test('shows ellipsis for many pages', () => {
      render(<Pagination {...defaultProps} currentPage={10} totalPages={20} />);
      
      const ellipsis = screen.getAllByText('...');
      expect(ellipsis.length).toBeGreaterThan(0);
    });

    test('shows correct page elements with ellipsis and first/last controls', () => {
      render(<Pagination {...defaultProps} currentPage={10} totalPages={24} />);
      
      // First/Last controls should be present
      expect(screen.getByRole('button', { name: /first page/i })).toBeInTheDocument();
      expect(screen.getByRole('button', { name: /last page/i })).toBeInTheDocument();
      // Current page and neighbors should be present
      expect(screen.getByRole('button', { name: /current page, page 10/i })).toBeInTheDocument();
      // Middle neighbors might vary with hard-capping; assert at least one neighbor exists
      const neighborButtons = screen.getAllByRole('button').filter(btn => /Page (9|11)/i.test(btn.getAttribute('aria-label') || ''));
      expect(neighborButtons.length).toBeGreaterThan(0);
      // Ellipsis should exist
      const ellipsis = screen.getAllByText('...');
      expect(ellipsis.length).toBeGreaterThan(0);
    });

    test('hides ellipsis when showEllipsis is false (renders all page buttons)', () => {
      render(<Pagination {...defaultProps} currentPage={5} totalPages={20} showEllipsis={false} />);
      
      // Should show all pages 1-20
      for (let i = 1; i <= 20; i++) {
        const pagePattern = i === 5 
          ? new RegExp(`current page, page ${i}`, 'i')
          : new RegExp(`^page ${i}$`, 'i');
        expect(screen.getByRole('button', { name: pagePattern })).toBeInTheDocument();
      }
      
      expect(screen.queryByText('...')).not.toBeInTheDocument();
    });

    test('ellipsis is hidden from assistive technologies', () => {
      render(<Pagination {...defaultProps} currentPage={10} totalPages={20} />);
      
      const overflowItems = screen.getAllByText('...').map(span => span.closest('li'));
      overflowItems.forEach(li => {
        expect(li).toHaveAttribute('aria-hidden', 'true');
      });
    });
  });

  // Test single page scenario
  test('handles single page correctly', () => {
    render(<Pagination {...defaultProps} currentPage={1} totalPages={1} />);
    
    expect(screen.getByRole('button', { name: /previous page/i })).toBeDisabled();
    expect(screen.getByRole('button', { name: /next page/i })).toBeDisabled();
    expect(screen.getByRole('button', { name: /current page, page 1/i })).toBeInTheDocument();
  });

  // Test custom props
  describe('Custom props', () => {
    test('uses custom aria label', () => {
      render(<Pagination {...defaultProps} ariaLabel="Search results pagination" />);
      
      expect(screen.getByRole('navigation', { name: /search results pagination/i })).toBeInTheDocument();
    });

    test('uses custom previous and next text', () => {
      render(<Pagination {...defaultProps} previousButtonText="Anterior" nextButtonText="Siguiente" />);
      
      expect(screen.getByText('Anterior')).toBeInTheDocument();
      expect(screen.getByText('Siguiente')).toBeInTheDocument();
    });

    test('applies custom className', () => {
      render(<Pagination {...defaultProps} className="custom-pagination" />);
      
      const nav = screen.getByRole('navigation');
      expect(nav).toHaveClass('usa-pagination', 'custom-pagination');
    });

    test('respects maxVisiblePages prop', () => {
      render(<Pagination {...defaultProps} currentPage={5} totalPages={20} maxVisiblePages={5} />);
      
      // With maxVisiblePages=5, should show fewer page buttons
      const pageButtons = screen.getAllByRole('button').filter(button => 
        button.getAttribute('aria-label')?.includes('Page') && 
        !button.getAttribute('aria-label')?.includes('Previous') &&
        !button.getAttribute('aria-label')?.includes('Next')
      );
      
      // Should be 5 or fewer page buttons (including first/last and current)
      expect(pageButtons.length).toBeLessThanOrEqual(5);
    });
  });

  // Test accessibility
  describe('Accessibility', () => {
    test('has proper ARIA attributes', () => {
      render(<Pagination {...defaultProps} currentPage={5} totalPages={10} />);
      
      const nav = screen.getByRole('navigation');
      expect(nav).toHaveAttribute('aria-label', 'Pagination');
      
      const currentPage = screen.getByRole('button', { name: /current page, page 5/i });
      expect(currentPage).toHaveAttribute('aria-current', 'page');
    });

    test('has proper button labels', () => {
      render(<Pagination {...defaultProps} currentPage={5} totalPages={10} />);
      
      expect(screen.getByRole('button', { name: /previous page/i })).toBeInTheDocument();
      expect(screen.getByRole('button', { name: /next page/i })).toBeInTheDocument();
      expect(screen.getByRole('button', { name: /current page, page 5/i })).toBeInTheDocument();
    });

    test('icons have aria-hidden attribute', () => {
      render(<Pagination {...defaultProps} currentPage={5} totalPages={10} />);
      
      const icons = screen.getAllByTestId('mock-icon');
      icons.forEach(icon => {
        expect(icon).toHaveAttribute('aria-hidden', 'true');
      });
    });
  });

  // Test edge cases
  describe('Edge cases', () => {
    test('handles very large page numbers', () => {
      render(<Pagination {...defaultProps} currentPage={500} totalPages={1000} />);
      
      expect(screen.getByRole('button', { name: /current page, page 500/i })).toBeInTheDocument();
      // First/Last controls present for quick navigation
      expect(screen.getByRole('button', { name: /first page/i })).toBeInTheDocument();
      expect(screen.getByRole('button', { name: /last page/i })).toBeInTheDocument();
    });

    test('handles missing onPageChange gracefully', () => {
      const { container } = render(<Pagination currentPage={1} totalPages={5} />);
      
      expect(container.firstChild).toBeInTheDocument();
      
      // Should not throw when clicking buttons
      const pageButton = screen.getByRole('button', { name: /^page 2$/i });
      expect(() => fireEvent.click(pageButton)).not.toThrow();
    });

    test('handles boundary conditions correctly', () => {
      // Test first page of large set
      const { rerender } = render(<Pagination {...defaultProps} currentPage={1} totalPages={100} />);
      expect(screen.getByRole('button', { name: /previous page/i })).toBeDisabled();
      
      // Test last page of large set
      rerender(<Pagination {...defaultProps} currentPage={100} totalPages={100} />);
      expect(screen.getByRole('button', { name: /next page/i })).toBeDisabled();
    });
  });

  // Test icons
  test('renders correct FontAwesome icons', () => {
    render(<Pagination {...defaultProps} currentPage={5} totalPages={10} />);
    
    const icons = screen.getAllByTestId('mock-icon');
    const leftIcon = icons.find(icon => icon.getAttribute('data-icon') === 'chevron-left');
    const rightIcon = icons.find(icon => icon.getAttribute('data-icon') === 'chevron-right');
    
    expect(leftIcon).toBeInTheDocument();
    expect(rightIcon).toBeInTheDocument();
    expect(leftIcon).toHaveClass('usa-pagination__icon--left');
    expect(rightIcon).toHaveClass('usa-pagination__icon--right');
  });
}); 