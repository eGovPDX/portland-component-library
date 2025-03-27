/**
 * @jest-environment jsdom
 */
import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import { ProcessSteps } from './ProcessSteps';

describe('ProcessSteps', () => {
  const mockProps = {
    title: 'Test Title',
    mainDescription: 'Test Description',
    steps: [
      {
        heading: 'Step 1',
        description: 'Description 1',
      },
      {
        heading: 'Step 2',
        description: 'Description 2',
      },
    ],
  };

  it('renders the title and main description', () => {
    render(<ProcessSteps {...mockProps} />);
    
    expect(screen.getByText('Test Title')).toBeInTheDocument();
    expect(screen.getByText('Test Description')).toBeInTheDocument();
  });

  it('renders all steps with correct headings and descriptions', () => {
    render(<ProcessSteps {...mockProps} />);
    
    mockProps.steps.forEach((step) => {
      expect(screen.getByText(step.heading)).toBeInTheDocument();
      expect(screen.getByText(step.description)).toBeInTheDocument();
    });
  });

  it('renders correct number of step numbers', () => {
    render(<ProcessSteps {...mockProps} />);
    
    mockProps.steps.forEach((_, index) => {
      expect(screen.getByText(String(index + 1))).toBeInTheDocument();
    });
  });

  it('renders vertical bars between steps but not after the last step', () => {
    const { container } = render(<ProcessSteps {...mockProps} />);
    
    const verticalBars = container.getElementsByClassName('verticalBar');
    expect(verticalBars.length).toBe(mockProps.steps.length - 1);
  });

  it('renders with correct heading hierarchy', () => {
    render(<ProcessSteps {...mockProps} />);
    
    const h2 = screen.getByRole('heading', { level: 2 });
    expect(h2).toHaveTextContent('Test Title');
    
    const h3s = screen.getAllByRole('heading', { level: 3 });
    expect(h3s).toHaveLength(mockProps.steps.length);
    h3s.forEach((h3, index) => {
      expect(h3).toHaveTextContent(mockProps.steps[index].heading);
    });
  });
}); 