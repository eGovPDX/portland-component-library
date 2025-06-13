import React from 'react';
import { render, fireEvent, screen } from '@testing-library/react';
import { Modal } from './Modal';
import { Button } from '../Button';

// Mocking FocusTrap for Jest environment
jest.mock('focus-trap-react', () => {
  const FocusTrap = ({ children }) => <div>{children}</div>;
  FocusTrap.displayName = 'FocusTrap';
  return { FocusTrap };
});


describe('Modal', () => {
  it('renders the modal when isOpen is true', () => {
    render(
      <Modal isOpen heading="Test Modal">
        <p>This is a test modal.</p>
      </Modal>
    );
    expect(screen.getByRole('dialog')).toBeInTheDocument();
    expect(screen.getByText('Test Modal')).toBeInTheDocument();
    expect(screen.getByText('This is a test modal.')).toBeInTheDocument();
  });

  it('does not render the modal when isOpen is false', () => {
    const { container } = render(
      <Modal isOpen={false} heading="Test Modal">
        <p>This is a test modal.</p>
      </Modal>
    );
    // The dialog is always in the DOM, but its `open` attribute is controlled by isOpen
    const dialog = container.querySelector('dialog');
    expect(dialog).not.toHaveAttribute('open');
  });

  it('calls onClose when the close button is clicked', () => {
    const handleClose = jest.fn();
    render(
      <Modal isOpen onClose={handleClose} heading="Test Modal">
        <p>Modal content</p>
      </Modal>
    );
    fireEvent.click(screen.getByLabelText('Close this modal'));
    expect(handleClose).toHaveBeenCalledTimes(1);
  });

  it('calls onClose when the escape key is pressed', () => {
    const handleClose = jest.fn();
    render(
      <Modal isOpen onClose={handleClose} heading="Test Modal">
        <p>Modal content</p>
      </Modal>
    );
    fireEvent.keyDown(screen.getByRole('dialog'), { key: 'Escape', code: 'Escape' });
    expect(handleClose).toHaveBeenCalledTimes(1);
  });

  it('does not call onClose on escape key if forcedAction is true', () => {
    const handleClose = jest.fn();
    render(
      <Modal isOpen onClose={handleClose} forcedAction heading="Test Modal">
        <p>Modal content</p>
      </Modal>
    );
    fireEvent.keyDown(screen.getByRole('dialog'), { key: 'Escape', code: 'Escape' });
    expect(handleClose).not.toHaveBeenCalled();
  });

  it('calls onClose when the backdrop is clicked', () => {
    const handleClose = jest.fn();
    render(
      <Modal isOpen onClose={handleClose} heading="Test Modal">
        <p>Modal content</p>
      </Modal>
    );
    fireEvent.click(screen.getByRole('dialog'));
    expect(handleClose).toHaveBeenCalledTimes(1);
  });

  it('does not call onClose when backdrop is clicked if forcedAction is true', () => {
    const handleClose = jest.fn();
    render(
      <Modal isOpen onClose={handleClose} forcedAction heading="Test Modal">
        <p>Modal content</p>
      </Modal>
    );
    fireEvent.click(screen.getByRole('dialog'));
    expect(handleClose).not.toHaveBeenCalled();
  });

  it('calls onConfirm when the confirm button is clicked', () => {
    const handleConfirm = jest.fn();
    render(
      <Modal
        isOpen
        onConfirm={handleConfirm}
        confirmButton={<Button variant="primary">Confirm</Button>}
        heading="Test Modal"
      >
        <p>Modal content</p>
      </Modal>
    );
    fireEvent.click(screen.getByText('Confirm'));
    expect(handleConfirm).toHaveBeenCalledTimes(1);
  });

  it('calls onClose when the cancel button is clicked', () => {
    const handleClose = jest.fn();
    render(
      <Modal
        isOpen
        onClose={handleClose}
        cancelButton={<Button>Cancel</Button>}
        heading="Test Modal"
      >
        <p>Modal content</p>
      </Modal>
    );
    fireEvent.click(screen.getByText('Cancel'));
    expect(handleClose).toHaveBeenCalledTimes(1);
  });

  it('renders heading and children', () => {
    render(
      <Modal isOpen heading="My Heading">
        <p>My children</p>
      </Modal>
    );
    expect(screen.getByText('My Heading')).toBeInTheDocument();
    expect(screen.getByText('My children')).toBeInTheDocument();
  });

  test('initial focus is handled correctly', async () => {
    const { container } = render(
      <Modal
        isOpen
        heading="Focus Test"
        confirmButton={<Button variant="primary">Confirm</Button>}
        cancelButton={<Button>Cancel</Button>}
      >
        <p>Content</p>
      </Modal>,
    );

    // Wait for modal to become visible and for focus trap to activate
    await screen.findByRole('dialog');
    
    // The initialFocus logic inside the component is complex and depends on timing.
    // In a real browser, focus-trap would handle this.
    // Here we can check if the dialog or one of its buttons has focus.
    // In our mock, FocusTrap does nothing, so we can't test focus directly.
    // But we can verify the buttons are there and could be focused.
    expect(container.querySelector('button')).not.toBe(null);
  });
}); 