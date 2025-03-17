import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import TypographyDisplay, { 
  FontFamilies,
  FontSizes,
  FontWeights,
  LineHeights,
  LetterSpacings
} from './Typography';

describe('Typography components', () => {
  test('FontFamilies renders all font families', () => {
    render(<FontFamilies />);
    
    expect(screen.getByText('Sans Serif')).toBeInTheDocument();
    expect(screen.getByText('Serif')).toBeInTheDocument();
    expect(screen.getByText('Monospace')).toBeInTheDocument();
    
    expect(screen.getByText('--pgov-font-family-sans')).toBeInTheDocument();
    expect(screen.getByText('--pgov-font-family-serif')).toBeInTheDocument();
    expect(screen.getByText('--pgov-font-family-mono')).toBeInTheDocument();
  });
  
  test('FontSizes renders size tokens', () => {
    render(<FontSizes />);
    
    // Test a few representative sizes
    expect(screen.getByText('3XS')).toBeInTheDocument();
    expect(screen.getByText('MD')).toBeInTheDocument();
    expect(screen.getByText('10XL')).toBeInTheDocument();
    
    expect(screen.getByText('--pgov-font-size-3xs')).toBeInTheDocument();
    expect(screen.getByText('--pgov-font-size-md')).toBeInTheDocument();
    expect(screen.getByText('--pgov-font-size-10xl')).toBeInTheDocument();
  });
  
  test('FontWeights renders weight tokens', () => {
    render(<FontWeights />);
    
    expect(screen.getByText('Thin')).toBeInTheDocument();
    expect(screen.getByText('Regular')).toBeInTheDocument();
    expect(screen.getByText('Bold')).toBeInTheDocument();
    
    expect(screen.getByText('--pgov-font-weight-thin')).toBeInTheDocument();
    expect(screen.getByText('--pgov-font-weight-regular')).toBeInTheDocument();
    expect(screen.getByText('--pgov-font-weight-bold')).toBeInTheDocument();
  });
  
  test('LineHeights renders line height tokens', () => {
    render(<LineHeights />);
    
    expect(screen.getByText('Tight')).toBeInTheDocument();
    expect(screen.getByText('Normal')).toBeInTheDocument();
    expect(screen.getByText('Loose')).toBeInTheDocument();
    
    expect(screen.getByText('--pgov-line-height-tight')).toBeInTheDocument();
    expect(screen.getByText('--pgov-line-height-normal')).toBeInTheDocument();
    expect(screen.getByText('--pgov-line-height-loose')).toBeInTheDocument();
  });
  
  test('LetterSpacings renders letter spacing tokens', () => {
    render(<LetterSpacings />);
    
    expect(screen.getByText('Tighter')).toBeInTheDocument();
    expect(screen.getByText('Normal')).toBeInTheDocument();
    expect(screen.getByText('Widest')).toBeInTheDocument();
    
    expect(screen.getByText('--pgov-letter-spacing-tighter')).toBeInTheDocument();
    expect(screen.getByText('--pgov-letter-spacing-normal')).toBeInTheDocument();
    expect(screen.getByText('--pgov-letter-spacing-widest')).toBeInTheDocument();
  });
  
  test('TypographyDisplay renders main component', () => {
    render(<TypographyDisplay />);
    
    expect(screen.getByText('Typography Tokens')).toBeInTheDocument();
    expect(screen.getByText('The PGOV design system includes a comprehensive set of typography tokens for use in the UI.')).toBeInTheDocument();
  });
}); 