import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import {
  Typography,
  FontFamilies,
  FontSizes,
  FontWeights,
  LineHeights,
  LetterSpacings,
  FontFamilyDisplay,
  FontSizeDisplay,
  FontWeightDisplay,
  LineHeightDisplay,
  LetterSpacingDisplay
} from './';

describe('Typography', () => {
  test('renders the main Typography component with all sections', () => {
    render(<Typography />);
    
    // Check for main title
    expect(screen.getByText('Typography Tokens')).toBeInTheDocument();
    
    // Check for section titles
    expect(screen.getByText('Font Families')).toBeInTheDocument();
    expect(screen.getByText('Font Sizes')).toBeInTheDocument();
    expect(screen.getByText('Font Weights')).toBeInTheDocument();
    expect(screen.getByText('Line Heights')).toBeInTheDocument();
    expect(screen.getByText('Letter Spacing')).toBeInTheDocument();
  });

  test('renders with only selected sections when specified', () => {
    render(
      <Typography 
        showFontFamilies={true} 
        showFontSizes={false}
        showFontWeights={false}
        showLineHeights={false}
        showLetterSpacings={false}
      />
    );
    
    // Should show font families
    expect(screen.getByText('Font Families')).toBeInTheDocument();
    
    // Shouldn't show other sections
    expect(screen.queryByText('Font Sizes')).not.toBeInTheDocument();
    expect(screen.queryByText('Font Weights')).not.toBeInTheDocument();
    expect(screen.queryByText('Line Heights')).not.toBeInTheDocument();
    expect(screen.queryByText('Letter Spacing')).not.toBeInTheDocument();
  });
});

describe('Individual Components', () => {
  test('FontFamilies renders correctly', () => {
    render(<FontFamilies />);
    expect(screen.getByText('Sans Serif')).toBeInTheDocument();
    expect(screen.getByText('Serif')).toBeInTheDocument();
    expect(screen.getByText('Monospace')).toBeInTheDocument();
  });

  test('FontSizes renders correctly', () => {
    render(<FontSizes />);
    expect(screen.getByText('MD')).toBeInTheDocument();
    expect(screen.getByText('1rem (16px)')).toBeInTheDocument();
  });

  test('FontWeights renders correctly', () => {
    render(<FontWeights />);
    expect(screen.getByText('Regular')).toBeInTheDocument();
    expect(screen.getByText('Bold')).toBeInTheDocument();
  });

  test('LineHeights renders correctly', () => {
    render(<LineHeights />);
    expect(screen.getByText('Normal')).toBeInTheDocument();
    expect(screen.getByText('1.5')).toBeInTheDocument();
  });

  test('LetterSpacings renders correctly', () => {
    render(<LetterSpacings />);
    expect(screen.getByText('Normal')).toBeInTheDocument();
    expect(screen.getByText('0em')).toBeInTheDocument();
  });
});

describe('Display Components', () => {
  test('FontFamilyDisplay renders correctly', () => {
    const props = {
      name: 'Test Font',
      variable: '--test-font',
      value: 'Arial, sans-serif'
    };
    
    render(<FontFamilyDisplay {...props} />);
    expect(screen.getByText('Test Font')).toBeInTheDocument();
    expect(screen.getByText('--test-font')).toBeInTheDocument();
    expect(screen.getByText('Arial, sans-serif')).toBeInTheDocument();
  });

  test('FontSizeDisplay renders correctly', () => {
    const props = {
      name: 'Test Size',
      variable: '--test-size',
      value: '1.5rem',
      sizeInPx: '24px'
    };
    
    render(<FontSizeDisplay {...props} />);
    expect(screen.getByText('Test Size')).toBeInTheDocument();
    expect(screen.getByText('--test-size')).toBeInTheDocument();
    expect(screen.getByText('1.5rem (24px)')).toBeInTheDocument();
  });

  test('FontWeightDisplay renders correctly', () => {
    const props = {
      name: 'Test Weight',
      variable: '--test-weight',
      value: '500'
    };
    
    render(<FontWeightDisplay {...props} />);
    expect(screen.getByText('Test Weight')).toBeInTheDocument();
    expect(screen.getByText('--test-weight')).toBeInTheDocument();
    expect(screen.getByText('500')).toBeInTheDocument();
  });
}); 