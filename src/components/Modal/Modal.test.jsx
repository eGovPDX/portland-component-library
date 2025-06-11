import React from 'react';
import { render, screen, fireEvent, waitFor } from '@testing-library/react';
import { faTimes } from '@fortawesome/free-solid-svg-icons';
import { Modal } from './Modal';
import { Button } from '../Button/Button';

// Mock FontAwesome component
jest.mock('@fortawesome/react-fontawesome', () => ({
  FontAwesomeIcon: ({ icon }) => <span data-testid="mock-icon" data-icon={icon?.iconName || 'times'} />
}));

// Mock focus-trap-react to avoid issues in tests
jest.mock('focus-trap-react', () => {
  return function MockFocusTrap({ children, active }) {
    return active ? <div data-testid="focus-trap">{children}</div> : children;
  };
});

describe('Modal', () => {
  const defaultProps = {
    isOpen: true,
    onClose: jest.fn(),
    heading: 'Test Modal',
    children: <p>Modal content</p>
  };

  beforeEach(() => {
    jest.clearAllMocks();
    // Reset body classes before each test
    document.body.className = '';
  });

  // Test default rendering
  test('renders with default props', () => {
    render(<Modal {...defaultProps} />);
    
    const modal = screen.getByRole('dialog');
    expect(modal).toBeInTheDocument();
    expect(modal).toHaveClass('usa-modal');
    expect(screen.getByText('Test Modal')).toBeInTheDocument();
    expect(screen.getByText('Modal content')).toBeInTheDocument();
  });

  // Test modal not rendered when closed
  test('does not render when isOpen is false', () => {
    render(<Modal {...defaultProps} isOpen={false} />);
    
    // When closed, dialog element exists but is not open and not visible
    const modal = document.querySelector('dialog');
    expect(modal).toBeInTheDocument();
    expect(modal).not.toHaveClass('usa-modal--visible');
    expect(modal.open).toBe(false);
  });

  // Test size variants
  test('renders default size correctly', () => {
    render(<Modal {...defaultProps} size="default" />);
    const modal = screen.getByRole('dialog');
    expect(modal).toHaveClass('usa-modal');
    expect(modal).not.toHaveClass('usa-modal--lg');
  });

  test('renders large size correctly', () => {
    render(<Modal {...defaultProps} size="large" />);
    const modal = screen.getByRole('dialog');
    expect(modal).toHaveClass('usa-modal', 'usa-modal--lg');
  });

  // Test forced action mode
  test('renders forced action mode correctly', () => {
    render(<Modal {...defaultProps} forcedAction={true} />);
    const modal = screen.getByRole('dialog');
    expect(modal).toHaveClass('usa-modal--forced-action');
    
    // Close button should not be present in forced action mode
    expect(screen.queryByLabelText('Close this modal')).not.toBeInTheDocument();
  });

  test('renders close button in normal mode', () => {
    render(<Modal {...defaultProps} forcedAction={false} />);
    expect(screen.getByLabelText('Close this modal')).toBeInTheDocument();
  });

  // Test button rendering
  test('renders confirm button correctly', () => {
    const confirmButton = <Button>Confirm</Button>;
    render(<Modal {...defaultProps} confirmButton={confirmButton} />);
    expect(screen.getByText('Confirm')).toBeInTheDocument();
  });

  test('renders cancel button correctly', () => {
    const cancelButton = <Button variant="outline">Cancel</Button>;
    render(<Modal {...defaultProps} cancelButton={cancelButton} />);
    expect(screen.getByText('Cancel')).toBeInTheDocument();
  });

  test('renders both confirm and cancel buttons', () => {
    const confirmButton = <Button>Save</Button>;
    const cancelButton = <Button variant="outline">Cancel</Button>;
    render(
      <Modal 
        {...defaultProps} 
        confirmButton={confirmButton} 
        cancelButton={cancelButton} 
      />
    );
    expect(screen.getByText('Save')).toBeInTheDocument();
    expect(screen.getByText('Cancel')).toBeInTheDocument();
  });

  // Test click handlers
  test('calls onClose when close button is clicked', () => {
    const onClose = jest.fn();
    render(<Modal {...defaultProps} onClose={onClose} />);
    
    fireEvent.click(screen.getByLabelText('Close this modal'));
    expect(onClose).toHaveBeenCalledTimes(1);
  });

  test('calls onConfirm when confirm button is clicked', () => {
    const onConfirm = jest.fn();
    const confirmButton = <Button>Confirm</Button>;
    render(
      <Modal 
        {...defaultProps} 
        onConfirm={onConfirm} 
        confirmButton={confirmButton} 
      />
    );
    
    fireEvent.click(screen.getByText('Confirm'));
    expect(onConfirm).toHaveBeenCalledTimes(1);
  });

  test('calls onClose when cancel button is clicked', () => {
    const onClose = jest.fn();
    const cancelButton = <Button>Cancel</Button>;
    render(
      <Modal 
        {...defaultProps} 
        onClose={onClose} 
        cancelButton={cancelButton} 
      />
    );
    
    fireEvent.click(screen.getByText('Cancel'));
    expect(onClose).toHaveBeenCalledTimes(1);
  });

  // Test keyboard interactions
  test('calls onClose when Escape key is pressed in normal mode', () => {
    const onClose = jest.fn();
    render(<Modal {...defaultProps} onClose={onClose} forcedAction={false} />);
    
    fireEvent.keyDown(screen.getByRole('dialog'), { key: 'Escape' });
    expect(onClose).toHaveBeenCalledTimes(1);
  });

  test('does not call onClose when Escape key is pressed in forced action mode', () => {
    const onClose = jest.fn();
    render(<Modal {...defaultProps} onClose={onClose} forcedAction={true} />);
    
    fireEvent.keyDown(screen.getByRole('dialog'), { key: 'Escape' });
    expect(onClose).not.toHaveBeenCalled();
  });

  // Test backdrop click
  test('calls onClose when backdrop is clicked in normal mode', () => {
    const onClose = jest.fn();
    render(<Modal {...defaultProps} onClose={onClose} forcedAction={false} />);
    
    const modal = screen.getByRole('dialog');
    fireEvent.click(modal);
    expect(onClose).toHaveBeenCalledTimes(1);
  });

  test('does not call onClose when backdrop is clicked in forced action mode', () => {
    const onClose = jest.fn();
    render(<Modal {...defaultProps} onClose={onClose} forcedAction={true} />);
    
    const modal = screen.getByRole('dialog');
    fireEvent.click(modal);
    expect(onClose).not.toHaveBeenCalled();
  });

  // Test custom className
  test('applies custom className', () => {
    render(<Modal {...defaultProps} className="custom-modal" />);
    const modal = screen.getByRole('dialog');
    expect(modal).toHaveClass('custom-modal');
  });

  // Test ARIA attributes
  test('applies correct ARIA attributes', () => {
    render(
      <Modal 
        {...defaultProps} 
        ariaLabelledBy="modal-title" 
        ariaDescribedBy="modal-desc" 
      />
    );
    
    const modal = screen.getByRole('dialog');
    expect(modal).toHaveAttribute('aria-modal', 'true');
    expect(modal).toHaveAttribute('aria-labelledby', 'modal-title');
    expect(modal).toHaveAttribute('aria-describedby', 'modal-desc');
  });

  // Test focus trap activation
  test('activates focus trap when modal is open', () => {
    render(<Modal {...defaultProps} isOpen={true} />);
    expect(screen.getByTestId('focus-trap')).toBeInTheDocument();
  });

  test('does not activate focus trap when modal is closed', () => {
    render(<Modal {...defaultProps} isOpen={false} />);
    expect(screen.queryByTestId('focus-trap')).not.toBeInTheDocument();
  });

  // Test body scroll prevention
  test('adds scroll prevention class to body when modal opens', () => {
    render(<Modal {...defaultProps} isOpen={true} />);
    expect(document.body).toHaveClass('usa-js-modal--active');
  });

  // Test button click handlers are preserved
  test('preserves original button onClick handlers', () => {
    const originalConfirmClick = jest.fn();
    const originalCancelClick = jest.fn();
    const onConfirm = jest.fn();
    const onClose = jest.fn();
    
    const confirmButton = <Button onClick={originalConfirmClick}>Confirm</Button>;
    const cancelButton = <Button onClick={originalCancelClick}>Cancel</Button>;
    
    render(
      <Modal 
        {...defaultProps} 
        onConfirm={onConfirm}
        onClose={onClose}
        confirmButton={confirmButton} 
        cancelButton={cancelButton} 
      />
    );
    
    fireEvent.click(screen.getByText('Confirm'));
    expect(originalConfirmClick).toHaveBeenCalledTimes(1);
    expect(onConfirm).toHaveBeenCalledTimes(1);
    
    fireEvent.click(screen.getByText('Cancel'));
    expect(originalCancelClick).toHaveBeenCalledTimes(1);
    expect(onClose).toHaveBeenCalledTimes(1);
  });

  // Test modal without buttons
  test('renders without footer when no buttons provided', () => {
    render(<Modal {...defaultProps} />);
    const footer = screen.queryByTestId('modal-footer');
    expect(footer).not.toBeInTheDocument();
  });

  // Test additional props pass-through
  test('passes additional props to dialog element', () => {
    render(<Modal {...defaultProps} data-testid="custom-modal" />);
    const modal = screen.getByTestId('custom-modal');
    expect(modal).toBeInTheDocument();
  });

  // Test fallback focus button when no other focusable elements exist
  test('renders fallback focus button when no other focusable elements exist', () => {
    render(
      <Modal 
        {...defaultProps} 
        forcedAction={true} // No close button
        confirmButton={undefined} // No confirm button
        cancelButton={undefined} // No cancel button
      />
    );
    
    // Should have a fallback focus button
    const fallbackButton = document.querySelector('.usa-modal__fallback-focus');
    expect(fallbackButton).toBeInTheDocument();
    expect(fallbackButton).toHaveAttribute('tabIndex', '0');
    expect(fallbackButton).toHaveAttribute('aria-label', 'Focus target');
    
    // Modal content should be focusable
    const modalContent = document.querySelector('.usa-modal__content');
    expect(modalContent).toHaveAttribute('tabIndex', '0');
  });

  // Test no fallback focus button when other focusable elements exist
  test('does not render fallback focus button when other focusable elements exist', () => {
    render(<Modal {...defaultProps} forcedAction={false} />); // Has close button
    
    // Should not have fallback focus button
    const fallbackButton = document.querySelector('.usa-modal__fallback-focus');
    expect(fallbackButton).not.toBeInTheDocument();
    
    // Modal content should not be focusable
    const modalContent = document.querySelector('.usa-modal__content');
    expect(modalContent).not.toHaveAttribute('tabIndex');
  });
}); 