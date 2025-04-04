import React from 'react';
import { render, screen, fireEvent, act } from '@testing-library/react';
import { Tooltip } from './Tooltip';
import { useTooltip } from './useTooltip';

// Mock Popper.js
jest.mock('@popperjs/core', () => ({
  createPopper: jest.fn(() => ({
    destroy: jest.fn(),
    update: jest.fn()
  }))
}));

describe('Tooltip', () => {
  beforeEach(() => {
    jest.clearAllMocks();
  });

  // Wrapper component tests
  describe('Wrapper Component', () => {
    const setup = () => {
      render(
        <Tooltip content="Test tooltip">
          <button>Hover me</button>
        </Tooltip>
      );
      
      const trigger = screen.getByText('Hover me');
      const tooltipId = trigger.getAttribute('aria-describedby');
      const tooltip = document.getElementById(tooltipId);
      
      return { trigger, tooltip };
    };

    it('renders trigger element', () => {
      const { trigger } = setup();
      expect(trigger).toBeInTheDocument();
    });

    it('shows tooltip on hover', () => {
      const { trigger, tooltip } = setup();
      fireEvent.mouseEnter(trigger);
      expect(tooltip).toHaveStyle({ visibility: 'visible' });
      expect(tooltip).toHaveAttribute('aria-hidden', 'false');
    });

    it('hides tooltip on mouse leave', () => {
      const { trigger, tooltip } = setup();
      fireEvent.mouseEnter(trigger);
      fireEvent.mouseLeave(trigger);
      expect(tooltip).toHaveStyle({ visibility: 'hidden' });
      expect(tooltip).toHaveAttribute('aria-hidden', 'true');
    });

    it('shows tooltip on focus', () => {
      const { trigger, tooltip } = setup();
      fireEvent.focus(trigger);
      expect(tooltip).toHaveStyle({ visibility: 'visible' });
      expect(tooltip).toHaveAttribute('aria-hidden', 'false');
    });

    it('hides tooltip on blur', () => {
      const { trigger, tooltip } = setup();
      fireEvent.focus(trigger);
      fireEvent.blur(trigger);
      expect(tooltip).toHaveStyle({ visibility: 'hidden' });
      expect(tooltip).toHaveAttribute('aria-hidden', 'true');
    });

    it('applies theme class correctly', () => {
      render(
        <Tooltip content="Test tooltip" theme="dark">
          <button>Theme test</button>
        </Tooltip>
      );
      const trigger = screen.getByText('Theme test');
      fireEvent.mouseEnter(trigger);
      const tooltipId = trigger.getAttribute('aria-describedby');
      const tooltip = document.getElementById(tooltipId);
      expect(tooltip).toHaveClass('usa-tooltip__body--dark');
    });

    it('hides tooltip on escape key', () => {
      const { trigger, tooltip } = setup();
      fireEvent.mouseEnter(trigger);
      fireEvent.keyDown(document, { key: 'Escape' });
      expect(tooltip).toHaveStyle({ visibility: 'hidden' });
      expect(tooltip).toHaveAttribute('aria-hidden', 'true');
    });
  });

  // Hook tests
  describe('useTooltip Hook', () => {
    const TestComponent = ({ tooltipProps }) => {
      const { triggerProps, tooltipProps: hookTooltipProps } = useTooltip(tooltipProps);
      return (
        <>
          <button {...triggerProps}>Trigger</button>
          <div {...hookTooltipProps}>Hook tooltip</div>
        </>
      );
    };

    const setup = () => {
      render(<TestComponent tooltipProps={{ content: 'Hook tooltip' }} />);
      const trigger = screen.getByText('Trigger');
      const tooltip = screen.getByText('Hook tooltip');
      return { trigger, tooltip };
    };

    it('initializes with correct props', () => {
      const { trigger, tooltip } = setup();
      expect(trigger).toHaveAttribute('aria-describedby');
      expect(tooltip).toBeInTheDocument();
      expect(tooltip).toHaveAttribute('role', 'tooltip');
    });

    it('shows and hides tooltip', () => {
      const { trigger, tooltip } = setup();
      
      fireEvent.mouseEnter(trigger);
      expect(tooltip).toHaveStyle({ visibility: 'visible' });
      expect(tooltip).toHaveAttribute('aria-hidden', 'false');
      
      fireEvent.mouseLeave(trigger);
      expect(tooltip).toHaveStyle({ visibility: 'hidden' });
      expect(tooltip).toHaveAttribute('aria-hidden', 'true');
    });

    it('cleans up popper instance on unmount', () => {
      const { unmount } = render(<TestComponent tooltipProps={{ content: 'Hook tooltip' }} />);
      unmount();
      // No error means cleanup was successful
    });
  });
}); 