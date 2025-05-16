import React from 'react';
import { render, screen } from '@testing-library/react';
import { StepIndicator } from './StepIndicator';

// Mock FontAwesome component
jest.mock('@fortawesome/react-fontawesome', () => ({
  FontAwesomeIcon: () => <span data-testid="mock-icon" />
}));

describe('StepIndicator', () => {
  const defaultSteps = [
    { label: 'Personal information' },
    { label: 'Household status' },
    { label: 'Supporting documents' },
    { label: 'Signature' },
    { label: 'Review and submit' }
  ];

  // Test basic rendering
  test('renders with default props', () => {
    render(<StepIndicator steps={defaultSteps} currentStep={3} title="Supporting documents" />);
    
    // Check segments
    expect(screen.getAllByRole('listitem')).toHaveLength(5);
    
    // Check current step indicator
    expect(screen.getByText('3')).toBeInTheDocument();
    expect(screen.getByText('of 5')).toBeInTheDocument();
    
    // Check counter container
    expect(screen.getByText('3').closest('div')).toHaveClass('usa-step-indicator__counter-container');
    
    // Check title (specifically the heading text, not the segment label)
    const headingTexts = screen.getAllByText('Supporting documents');
    const heading = headingTexts.find(el => el.classList.contains('usa-step-indicator__heading-text'));
    expect(heading).toBeInTheDocument();
  });

  // Test complete, current, and not-complete segments
  test('renders correct segment statuses', () => {
    render(<StepIndicator steps={defaultSteps} currentStep={3} />);
    
    const segments = screen.getAllByRole('listitem');
    
    // First two steps should be complete
    expect(segments[0]).toHaveClass('usa-step-indicator__segment--complete');
    expect(segments[1]).toHaveClass('usa-step-indicator__segment--complete');
    
    // Third step should be current
    expect(segments[2]).toHaveClass('usa-step-indicator__segment--current');
    expect(segments[2]).toHaveAttribute('aria-current', 'true');
    
    // Last two steps should be not-complete
    expect(segments[3]).toHaveClass('usa-step-indicator__segment--not-complete');
    expect(segments[4]).toHaveClass('usa-step-indicator__segment--not-complete');
  });

  // Test no-labels variant
  test('renders without labels when showLabels is false', () => {
    render(<StepIndicator steps={defaultSteps} currentStep={3} showLabels={false} />);
    expect(screen.getByRole('list')).toHaveClass('usa-step-indicator__segments');
    expect(screen.getByRole('list').parentElement).toHaveClass('usa-step-indicator--no-labels');
  });

  // Test centered variant
  test('renders centered when centered is true', () => {
    render(<StepIndicator steps={defaultSteps} currentStep={3} centered={true} />);
    expect(screen.getByRole('list').parentElement).toHaveClass('usa-step-indicator--center');
  });

  // Test counters variant
  test('renders with counters when showCounters is true', () => {
    render(<StepIndicator steps={defaultSteps} currentStep={3} showCounters={true} />);
    expect(screen.getByRole('list').parentElement).toHaveClass('usa-step-indicator--counters');
  });

  // Test small counters variant
  test('renders with small counters when smallCounters is true', () => {
    render(<StepIndicator steps={defaultSteps} currentStep={3} showCounters={true} smallCounters={true} />);
    expect(screen.getByRole('list').parentElement).toHaveClass('usa-step-indicator--counters-sm');
  });

  // Test with icon
  test('renders with icon in heading', () => {
    render(<StepIndicator steps={defaultSteps} currentStep={3} title="Supporting documents" />);
    expect(screen.getByTestId('mock-icon')).toBeInTheDocument();
  });
}); 