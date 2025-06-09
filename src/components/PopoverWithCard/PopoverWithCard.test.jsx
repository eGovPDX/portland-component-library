import React from 'react';
import { render, screen, fireEvent, act } from '@testing-library/react';
import { PopoverWithCard } from './PopoverWithCard';

describe('PopoverWithCard', () => {
  beforeEach(() => {
    // Mock FloatingPortal to render children directly
    jest.mock('@floating-ui/react', () => ({
      ...jest.requireActual('@floating-ui/react'),
      FloatingPortal: ({ children }) => children,
    }));
  });

  it('renders the trigger element', () => {
    render(
      <PopoverWithCard cardProps={{ children: <div>Test content</div> }}>
        <button>Hover me</button>
      </PopoverWithCard>
    );

    expect(screen.getByText('Hover me')).toBeInTheDocument();
  });

  it('shows content on hover', async () => {
    render(
      <PopoverWithCard cardProps={{ children: <div>Test content</div> }}>
        <button>Hover me</button>
      </PopoverWithCard>
    );

    const trigger = screen.getByText('Hover me');
    
    // Simulate hover
    await act(async () => {
      fireEvent.mouseEnter(trigger);
    });

    // Wait for content to appear
    expect(await screen.findByText('Test content')).toBeInTheDocument();
  });

  it('hides content when mouse leaves', async () => {
    render(
      <PopoverWithCard cardProps={{ children: <div>Test content</div> }}>
        <button>Hover me</button>
      </PopoverWithCard>
    );

    const trigger = screen.getByText('Hover me');
    
    // Show content
    await act(async () => {
      fireEvent.mouseEnter(trigger);
    });
    expect(await screen.findByText('Test content')).toBeInTheDocument();

    // Hide content
    await act(async () => {
      fireEvent.mouseLeave(trigger);
    });
    expect(screen.queryByText('Test content')).not.toBeInTheDocument();
  });

  it('applies custom className', () => {
    render(
      <PopoverWithCard 
        cardProps={{ children: <div>Test content</div> }}
        className="custom-class"
      >
        <button>Hover me</button>
      </PopoverWithCard>
    );

    const trigger = screen.getByText('Hover me');
    
    // Show content
    fireEvent.mouseEnter(trigger);
    
    // Check for custom class
    const popover = document.querySelector('.custom-class');
    expect(popover).toBeInTheDocument();
  });

  it('renders with different positions', () => {
    const positions = ['top', 'right', 'bottom', 'left'];
    
    positions.forEach(position => {
      const { unmount } = render(
        <PopoverWithCard 
          cardProps={{ children: <div>Test content</div> }}
          position={position}
        >
          <button>Hover me</button>
        </PopoverWithCard>
      );

      const trigger = screen.getByText('Hover me');
      fireEvent.mouseEnter(trigger);
      
      // Verify content is rendered
      expect(screen.getByText('Test content')).toBeInTheDocument();
      
      unmount();
    });
  });
}); 