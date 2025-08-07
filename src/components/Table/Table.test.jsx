import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import { 
  Table, 
  TableCaption,
  TableHeader, 
  TableHeaderCell, 
  TableBody, 
  TableRow, 
  TableCell 
} from './index';

describe('Table', () => {
  const basicTable = (
    <Table>
      <TableCaption>Test table</TableCaption>
      <TableHeader>
        <TableRow>
          <TableHeaderCell>Header 1</TableHeaderCell>
          <TableHeaderCell>Header 2</TableHeaderCell>
        </TableRow>
      </TableHeader>
      <TableBody>
        <TableRow>
          <TableCell>Cell 1</TableCell>
          <TableCell>Cell 2</TableCell>
        </TableRow>
      </TableBody>
    </Table>
  );

  test('renders table with correct structure', () => {
    render(basicTable);
    
    expect(screen.getByRole('table')).toBeInTheDocument();
    expect(screen.getByText('Test table')).toBeInTheDocument();
    expect(screen.getByText('Header 1')).toBeInTheDocument();
    expect(screen.getByText('Header 2')).toBeInTheDocument();
    expect(screen.getByText('Cell 1')).toBeInTheDocument();
    expect(screen.getByText('Cell 2')).toBeInTheDocument();
  });

  test('applies bordered class by default', () => {
    render(basicTable);
    const table = screen.getByRole('table');
    expect(table).toHaveClass('usa-table');
    expect(table).not.toHaveClass('usa-table--borderless');
  });

  test('applies borderless class when bordered is false', () => {
    render(
      <Table bordered={false}>
        <TableBody>
          <TableRow>
            <TableCell>Test</TableCell>
          </TableRow>
        </TableBody>
      </Table>
    );
    const table = screen.getByRole('table');
    expect(table).toHaveClass('usa-table--borderless');
  });

  test('applies striped class when striped is true', () => {
    render(
      <Table striped>
        <TableBody>
          <TableRow>
            <TableCell>Test</TableCell>
          </TableRow>
        </TableBody>
      </Table>
    );
    const table = screen.getByRole('table');
    expect(table).toHaveClass('usa-table--striped');
  });

  test('wraps table in scrollable container when scrollable is true', () => {
    render(
      <Table scrollable>
        <TableBody>
          <TableRow>
            <TableCell>Test</TableCell>
          </TableRow>
        </TableBody>
      </Table>
    );
    const scrollableContainer = screen.getByRole('region', { name: 'Scrollable table' });
    expect(scrollableContainer).toHaveClass('usa-table--scrollable');
    expect(scrollableContainer).toHaveAttribute('tabIndex', '0');
  });

  test('applies sticky header class when stickyHeader is true', () => {
    render(
      <Table stickyHeader>
        <TableBody>
          <TableRow>
            <TableCell>Test</TableCell>
          </TableRow>
        </TableBody>
      </Table>
    );
    const table = screen.getByRole('table');
    expect(table).toHaveClass('usa-table--sticky-header');
  });

  test('applies custom className', () => {
    render(
      <Table className="custom-class">
        <TableBody>
          <TableRow>
            <TableCell>Test</TableCell>
          </TableRow>
        </TableBody>
      </Table>
    );
    const table = screen.getByRole('table');
    expect(table).toHaveClass('custom-class');
  });
});

describe('TableHeaderCell', () => {
  test('renders sortable header with correct attributes', () => {
    const mockSort = jest.fn();
    render(
      <table>
        <thead>
          <tr>
            <TableHeaderCell 
              sortKey="test" 
              onSort={mockSort}
              sortConfig={{ column: null, direction: null }}
            >
              Sortable Header
            </TableHeaderCell>
          </tr>
        </thead>
      </table>
    );
    
    const header = screen.getByRole('columnheader');
    expect(header).toHaveAttribute('tabIndex', '0');
    expect(header).toHaveAttribute('aria-label', 'Sortable Header, activate to sort column');
  });

  test('calls onSort when sortable header is clicked', () => {
    const mockSort = jest.fn();
    render(
      <table>
        <thead>
          <tr>
            <TableHeaderCell 
              sortKey="test" 
              onSort={mockSort}
              sortConfig={{ column: null, direction: null }}
            >
              Sortable Header
            </TableHeaderCell>
          </tr>
        </thead>
      </table>
    );
    
    const header = screen.getByText('Sortable Header');
    fireEvent.click(header);
    expect(mockSort).toHaveBeenCalledWith('test', 'asc');
  });

  test('toggles sort direction on subsequent clicks', () => {
    const mockSort = jest.fn();
    const { rerender } = render(
      <table>
        <thead>
          <tr>
            <TableHeaderCell 
              sortKey="test" 
              onSort={mockSort}
              sortConfig={{ column: 'test', direction: 'asc' }}
            >
              Sortable Header
            </TableHeaderCell>
          </tr>
        </thead>
      </table>
    );
    
    const header = screen.getByText('Sortable Header');
    fireEvent.click(header);
    expect(mockSort).toHaveBeenCalledWith('test', 'desc');
  });

  test('handles keyboard activation for sortable headers', () => {
    const mockSort = jest.fn();
    render(
      <table>
        <thead>
          <tr>
            <TableHeaderCell 
              sortKey="test" 
              onSort={mockSort}
              sortConfig={{ column: null, direction: null }}
            >
              Sortable Header
            </TableHeaderCell>
          </tr>
        </thead>
      </table>
    );
    
    const header = screen.getByRole('columnheader');
    fireEvent.keyDown(header, { key: 'Enter' });
    expect(mockSort).toHaveBeenCalledWith('test', 'asc');
    
    mockSort.mockClear();
    fireEvent.keyDown(header, { key: ' ' });
    expect(mockSort).toHaveBeenCalledWith('test', 'asc');
  });
});

describe('TableCell', () => {
  test('renders as td by default', () => {
    render(
      <table>
        <tbody>
          <tr>
            <TableCell>Test Cell</TableCell>
          </tr>
        </tbody>
      </table>
    );
    
    const cell = screen.getByText('Test Cell');
    expect(cell.tagName).toBe('TD');
  });

  test('renders as th when header is true', () => {
    render(
      <table>
        <tbody>
          <tr>
            <TableCell header scope="row">Header Cell</TableCell>
          </tr>
        </tbody>
      </table>
    );
    
    const cell = screen.getByText('Header Cell');
    expect(cell.tagName).toBe('TH');
    expect(cell).toHaveAttribute('scope', 'row');
  });
});

describe('Responsive behavior', () => {
  beforeEach(() => {
    // Mock window.innerWidth
    Object.defineProperty(window, 'innerWidth', {
      writable: true,
      configurable: true,
      value: 1024,
    });
  });

  test('applies stacked class on mobile screens', () => {
    // Set mobile viewport
    window.innerWidth = 500;
    
    render(
      <Table>
        <TableBody>
          <TableRow>
            <TableCell>Test</TableCell>
          </TableRow>
        </TableBody>
      </Table>
    );
    
    // Trigger resize event
    fireEvent(window, new Event('resize'));
    
    const table = screen.getByRole('table');
    expect(table).toHaveClass('usa-table--stacked');
  });

  test('removes stacked class on desktop screens', () => {
    // Start with mobile
    window.innerWidth = 500;
    
    const { rerender } = render(
      <Table>
        <TableBody>
          <TableRow>
            <TableCell>Test</TableCell>
          </TableRow>
        </TableBody>
      </Table>
    );
    
    // Change to desktop
    window.innerWidth = 1024;
    fireEvent(window, new Event('resize'));
    
    const table = screen.getByRole('table');
    expect(table).not.toHaveClass('usa-table--stacked');
  });

  test('displays headers above data cells in stacked view', () => {
    // Set mobile viewport
    window.innerWidth = 500;
    
    render(
      <Table stacked>
        <TableHeader>
          <TableRow>
            <TableHeaderCell>Document title</TableHeaderCell>
            <TableHeaderCell>Description</TableHeaderCell>
            <TableHeaderCell>Year</TableHeaderCell>
          </TableRow>
        </TableHeader>
        <TableBody>
          <TableRow>
            <TableCell>Declaration of Independence</TableCell>
            <TableCell>Statement adopted by the Continental Congress</TableCell>
            <TableCell>1776</TableCell>
          </TableRow>
        </TableBody>
      </Table>
    );
    
    // Trigger resize event to enable stacked view
    fireEvent(window, new Event('resize'));
    
    // Check that headers are displayed in stacked layout
    expect(screen.getByText('Document title')).toBeInTheDocument();
    expect(screen.getByText('Description')).toBeInTheDocument();
    expect(screen.getByText('Year')).toBeInTheDocument();
    
    // Check that data cells are displayed
    expect(screen.getByText('Declaration of Independence')).toBeInTheDocument();
    expect(screen.getByText('Statement adopted by the Continental Congress')).toBeInTheDocument();
    expect(screen.getByText('1776')).toBeInTheDocument();
    
    // Verify stacked layout structure
    const table = screen.getByRole('table');
    expect(table).toHaveClass('usa-table--stacked');
  });
}); 