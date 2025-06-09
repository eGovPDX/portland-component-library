import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import { Accordion, AccordionItem } from './Accordion';

// Mock FontAwesome component
jest.mock('@fortawesome/react-fontawesome', () => ({
  FontAwesomeIcon: () => <span data-testid="mock-icon" />
}));

describe('Accordion', () => {
  // Test default rendering
  test('renders with default props', () => {
    render(
      <Accordion>
        <AccordionItem summary="Test Item">Content</AccordionItem>
      </Accordion>
    );
    
    expect(screen.getByText('Test Item')).toBeInTheDocument();
    expect(screen.getByTestId('mock-icon')).toBeInTheDocument();
  });

  // Test item expansion
  test('expands and collapses item when clicked', () => {
    render(
      <Accordion>
        <AccordionItem summary="Click Me">Hidden Content</AccordionItem>
      </Accordion>
    );
    
    // Initially hidden - height should be 0px
    const content = screen.getByText('Hidden Content');
    const contentContainer = content.closest('.accordion-details-container');
    const button = screen.getByText('Click Me');
    
    expect(contentContainer.style.height).toBe('0px');
    
    // Click to expand
    fireEvent.click(button);
    expect(contentContainer).toHaveAttribute('aria-hidden', 'false');
    
    // Click to collapse
    fireEvent.click(button);
    expect(contentContainer).toHaveAttribute('aria-hidden', 'true');
  });

  // Test initially expanded
  test('renders initially expanded item', () => {
    render(
      <Accordion>
        <AccordionItem summary="Expanded Item" open={true}>
          Visible Content
        </AccordionItem>
      </Accordion>
    );
    
    const content = screen.getByText('Visible Content');
    const contentContainer = content.closest('.accordion-details-container');
    expect(contentContainer).toHaveAttribute('aria-hidden', 'false');
  });

  // Test bordered variant
  test('renders with bordered style', () => {
    render(
      <Accordion type="bordered">
        <AccordionItem summary="Bordered Item">Content</AccordionItem>
      </Accordion>
    );
    
    const accordion = screen.getByText('Bordered Item').closest('.accordion');
    expect(accordion).toHaveClass('accordion--bordered');
  });

  // Test multiselectable
  test('allows multiple items to be expanded when multiselectable is true', () => {
    render(
      <Accordion multiselectable={true}>
        <AccordionItem summary="Item 1">Content 1</AccordionItem>
        <AccordionItem summary="Item 2">Content 2</AccordionItem>
      </Accordion>
    );
    
    // Expand first item
    fireEvent.click(screen.getByText('Item 1'));
    const content1Container = screen.getByText('Content 1').closest('.accordion-details-container');
    expect(content1Container).toHaveAttribute('aria-hidden', 'false');
    
    // Expand second item (first should still be expanded)
    fireEvent.click(screen.getByText('Item 2'));
    const content2Container = screen.getByText('Content 2').closest('.accordion-details-container');
    expect(content1Container).toHaveAttribute('aria-hidden', 'false');
    expect(content2Container).toHaveAttribute('aria-hidden', 'false');
  });

  // Test single select (default)
  test('collapses previous item when a new one is expanded in single select mode', () => {
    render(
      <Accordion>
        <AccordionItem summary="Item 1">Content 1</AccordionItem>
        <AccordionItem summary="Item 2">Content 2</AccordionItem>
      </Accordion>
    );
    
    // Expand first item
    fireEvent.click(screen.getByText('Item 1'));
    const content1Container = screen.getByText('Content 1').closest('.accordion-details-container');
    expect(content1Container).toHaveAttribute('aria-hidden', 'false');
    
    // Expand second item (first should collapse)
    fireEvent.click(screen.getByText('Item 2'));
    const content2Container = screen.getByText('Content 2').closest('.accordion-details-container');
    expect(content1Container).toHaveAttribute('aria-hidden', 'true');
    expect(content2Container).toHaveAttribute('aria-hidden', 'false');
  });

  // Test aria attributes
  test('sets correct ARIA attributes', () => {
    render(
      <Accordion multiselectable={true}>
        <AccordionItem summary="ARIA Test">Content</AccordionItem>
      </Accordion>
    );
    
    const button = screen.getByRole('button', { name: 'ARIA Test' });
    const accordion = button.closest('.accordion');
    
    expect(accordion).toHaveAttribute('data-allow-multiple', 'true');
    expect(button).toHaveAttribute('aria-expanded', 'false');
    
    fireEvent.click(button);
    expect(button).toHaveAttribute('aria-expanded', 'true');
  });
}); 