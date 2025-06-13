import React, { useState } from 'react';
import { Modal } from './Modal';
import { Button } from '../Button/Button';

export default {
  title: 'Components/Modal',
  component: Modal,
  parameters: {
    docs: {
      description: {
        component: 'A modal disables page content and focuses the user\'s attention on a single task or message. Use modals sparingly to minimize unnecessary disruptions.'
      }
    }
  },
  argTypes: {
    isOpen: {
      control: 'boolean',
      description: 'Whether the modal is open'
    },
    size: {
      control: 'select',
      options: ['default', 'large'],
      description: 'Size of the modal'
    },
    forcedAction: {
      control: 'boolean',
      description: 'Whether user must take action (cannot close with escape or backdrop click)'
    },
    heading: {
      control: 'text',
      description: 'Modal heading text'
    },
    children: {
      control: 'text',
      description: 'Modal content'
    },
    onClose: {
      action: 'onClose',
      description: 'Function called when modal should close'
    },
    onConfirm: {
      action: 'onConfirm', 
      description: 'Function called when primary action is confirmed'
    }
  }
};

// Template component for interactive stories
const ModalTemplate = (args) => {
  const [isOpen, setIsOpen] = useState(args.isOpen || false);

  const handleOpen = () => setIsOpen(true);
  const handleClose = () => {
    setIsOpen(false);
    args.onClose?.();
  };
  const handleConfirm = () => {
    args.onConfirm?.();
    setIsOpen(false);
  };

  return (
    <>
      <Button onClick={handleOpen}>
        Open Modal
      </Button>
      <Modal
        {...args}
        isOpen={isOpen}
        onClose={handleClose}
        onConfirm={handleConfirm}
      />
    </>
  );
};

// Basic modal
export const Default = {
  render: ModalTemplate,
  args: {
    heading: 'Are you sure you want to continue?',
    children: <p>You have unsaved changes that will be lost.</p>,
    confirmButton: <Button>Continue without saving</Button>,
    cancelButton: <Button variant="outline">Go back</Button>,
    size: 'default',
    forcedAction: false
  }
};

// Large modal
export const Large = {
  render: ModalTemplate,
  args: {
    heading: 'Are you sure you want to continue?',
    children: (
      <div>
        <p>You have unsaved changes that will be lost.</p>
        <p>This is a larger modal that can accommodate more content and longer explanations for complex actions.</p>
      </div>
    ),
    confirmButton: <Button>Continue without saving</Button>,
    cancelButton: <Button variant="outline">Go back</Button>,
    size: 'large',
    forcedAction: false
  }
};

// Forced action modal
export const ForcedAction = {
  render: ModalTemplate,
  args: {
    heading: 'Your session will end soon.',
    children: (
      <p>You've been inactive for too long. Please choose to stay signed in or sign out. Otherwise, you'll be signed out automatically in 5 minutes.</p>
    ),
    confirmButton: <Button>Yes, stay signed in</Button>,
    cancelButton: <Button variant="outline">Sign out</Button>,
    size: 'default',
    forcedAction: true
  }
};

// Modal with only confirm button
export const ConfirmOnly = {
  render: ModalTemplate,
  args: {
    heading: 'Information saved',
    children: <p>Your changes have been successfully saved to the system.</p>,
    confirmButton: <Button>Continue</Button>,
    size: 'default',
    forcedAction: true
  }
};

// Modal with different button variants
export const ButtonVariants = {
  render: ModalTemplate,
  args: {
    heading: 'Delete this item?',
    children: <p>This action cannot be undone. The item will be permanently removed from your account.</p>,
    confirmButton: <Button variant="secondary">Delete</Button>,
    cancelButton: <Button variant="outline">Keep item</Button>,
    size: 'default',
    forcedAction: false
  }
};

// Modal without buttons (content only)
export const ContentOnly = {
  render: ModalTemplate,
  args: {
    heading: 'Terms and Conditions',
    children: (
      <div>
        <p>Please read the following terms and conditions carefully.</p>
        <p>By using this service, you agree to comply with and be bound by the following terms and conditions of use.</p>
        <p>If you disagree with any part of these terms and conditions, please do not use our service.</p>
      </div>
    ),
    size: 'default',
    forcedAction: false
  }
};

// Modal with complex content
export const ComplexContent = {
  render: ModalTemplate,
  args: {
    heading: 'Update your profile',
    children: (
      <div>
        <p>Please review and update your profile information below:</p>
        <div style={{ marginBottom: '1rem' }}>
          <label style={{ display: 'block', marginBottom: '0.5rem' }}>Name:</label>
          <input type="text" defaultValue="John Doe" style={{ width: '100%', padding: '0.5rem' }} />
        </div>
        <div style={{ marginBottom: '1rem' }}>
          <label style={{ display: 'block', marginBottom: '0.5rem' }}>Email:</label>
          <input type="email" defaultValue="john@example.com" style={{ width: '100%', padding: '0.5rem' }} />
        </div>
      </div>
    ),
    confirmButton: <Button>Save changes</Button>,
    cancelButton: <Button variant="outline">Cancel</Button>,
    size: 'large',
    forcedAction: false
  }
};
