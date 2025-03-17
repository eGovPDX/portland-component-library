import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import SpacingDisplay, { SpacingTokens, SpacingExamples } from './Spacing';

describe('SpacingDisplay component', () => {
  test('renders spacing display correctly', () => {
    render(
      <SpacingDisplay 
        name="Test Spacing" 
        variable="--test-spacing" 
        value="1rem" 
        pixels="16px" 
      />
    );
    
    expect(screen.getByText('Test Spacing')).toBeInTheDocument();
    expect(screen.getByText('--test-spacing')).toBeInTheDocument();
    expect(screen.getByText('1rem (16px)')).toBeInTheDocument();
  });
});

describe('SpacingTokens component', () => {
  test('renders all spacing tokens', () => {
    render(<SpacingTokens />);
    
    // Test for each token name
    expect(screen.getByText('3XS')).toBeInTheDocument();
    expect(screen.getByText('2XS')).toBeInTheDocument();
    expect(screen.getByText('XS')).toBeInTheDocument();
    expect(screen.getByText('SM')).toBeInTheDocument();
    expect(screen.getByText('MD')).toBeInTheDocument();
    expect(screen.getByText('LG')).toBeInTheDocument();
    expect(screen.getByText('XL')).toBeInTheDocument();
    expect(screen.getByText('2XL')).toBeInTheDocument();
    expect(screen.getByText('3XL')).toBeInTheDocument();
    
    // Test for each variable
    expect(screen.getByText('--pgov-spacing-3xs')).toBeInTheDocument();
    expect(screen.getByText('--pgov-spacing-2xs')).toBeInTheDocument();
    expect(screen.getByText('--pgov-spacing-xs')).toBeInTheDocument();
    expect(screen.getByText('--pgov-spacing-sm')).toBeInTheDocument();
    expect(screen.getByText('--pgov-spacing-md')).toBeInTheDocument();
    expect(screen.getByText('--pgov-spacing-lg')).toBeInTheDocument();
    expect(screen.getByText('--pgov-spacing-xl')).toBeInTheDocument();
    expect(screen.getByText('--pgov-spacing-2xl')).toBeInTheDocument();
    expect(screen.getByText('--pgov-spacing-3xl')).toBeInTheDocument();
  });
});

describe('SpacingExamples component', () => {
  test('renders examples section headers', () => {
    render(<SpacingExamples />);
    
    expect(screen.getByText('Margin Examples')).toBeInTheDocument();
    expect(screen.getByText('Padding Examples')).toBeInTheDocument();
    expect(screen.getByText('Gap Examples')).toBeInTheDocument();
  });
  
  test('renders margin example', () => {
    render(<SpacingExamples />);
    
    expect(screen.getByText('Element with margin-bottom: var(--pgov-spacing-md)')).toBeInTheDocument();
    expect(screen.getByText('Next element')).toBeInTheDocument();
  });
  
  test('renders padding examples', () => {
    render(<SpacingExamples />);
    
    expect(screen.getByText('Padding: var(--pgov-spacing-xs)')).toBeInTheDocument();
    expect(screen.getByText('Padding: var(--pgov-spacing-md)')).toBeInTheDocument();
    expect(screen.getByText('Padding: var(--pgov-spacing-xl)')).toBeInTheDocument();
  });
}); 