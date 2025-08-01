import React from 'react';
import { render, screen, fireEvent, waitFor } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { LanguageSelector } from './LanguageSelector';

// Mock the Dropdown component with a simple implementation
const mockDropdown = jest.fn();
jest.mock('../Dropdown', () => ({
  Dropdown: function MockDropdown(props) {
    mockDropdown(props);
    const { 
      id, 
      options, 
      selectedOptionValue, 
      onSelect, 
      disabled, 
      className, 
      defaultOptionLabel,
      'aria-label': ariaLabel 
    } = props;
    
    const selectedOption = options?.find(opt => opt.value === selectedOptionValue);
    
    return (
      <div className={className}>
        <button
          id={id}
          onClick={() => !disabled && onSelect && onSelect(selectedOptionValue || options?.[0]?.value)}
          disabled={disabled}
          aria-label={ariaLabel}
          aria-haspopup="listbox"
          aria-expanded="false"
          className="dropdown__button"
        >
          {selectedOption ? selectedOption.label : defaultOptionLabel}
        </button>
      </div>
    );
  }
}));

const mockLanguages = [
  { code: 'en', nativeName: 'English', englishName: 'English' },
  { code: 'es', nativeName: 'Español', englishName: 'Spanish' },
  { code: 'fr', nativeName: 'Français', englishName: 'French' },
  { code: 'ar', nativeName: 'العربية', englishName: 'Arabic' },
];

const twoLanguages = [
  { code: 'en', nativeName: 'English', englishName: 'English' },
  { code: 'es', nativeName: 'Español', englishName: 'Spanish' },
];

describe('LanguageSelector', () => {
  beforeEach(() => {
    mockDropdown.mockClear();
  });

  describe('Default variant', () => {
    test('renders with default props', () => {
      render(<LanguageSelector />);
      expect(screen.getByText('English')).toBeInTheDocument();
      expect(screen.getByRole('button')).toBeInTheDocument();
    });

    test('displays selected language name in button', () => {
      render(<LanguageSelector buttonText="Select Language" />);
      expect(screen.getByText('English')).toBeInTheDocument();
    });

    test('passes buttonText as defaultOptionLabel to Dropdown', () => {
      const customButtonText = 'Choose Language';
      render(<LanguageSelector buttonText={customButtonText} />);
      
      // The mock Dropdown should have received the buttonText as defaultOptionLabel
      // We can verify this by checking that the mock was called with the correct props
      expect(mockDropdown).toHaveBeenLastCalledWith(
        expect.objectContaining({
          defaultOptionLabel: customButtonText
        })
      );
    });

    test('calls onLanguageChange when language is selected', () => {
      const mockOnLanguageChange = jest.fn();
      render(
        <LanguageSelector 
          languages={mockLanguages}
          onLanguageChange={mockOnLanguageChange}
        />
      );
      
      fireEvent.click(screen.getByText('English'));
      
      expect(mockOnLanguageChange).toHaveBeenCalledWith('en', mockLanguages[0]);
    });

    test('shows selected language in button', () => {
      render(
        <LanguageSelector 
          languages={mockLanguages}
          selectedLanguage="es"
        />
      );
      
      expect(screen.getByText('Español (Spanish)')).toBeInTheDocument();
    });
  });

  describe('Two Languages variant', () => {
    test('renders as button without dropdown', () => {
      render(
        <LanguageSelector 
          variant="two-languages"
          languages={twoLanguages}
          selectedLanguage="en"
        />
      );
      
      expect(screen.getByText('Español')).toBeInTheDocument();
      expect(screen.getByText('(Spanish)')).toBeInTheDocument();
    });

    test('toggles language when clicked', () => {
      const mockOnLanguageChange = jest.fn();
      render(
        <LanguageSelector 
          variant="two-languages"
          languages={twoLanguages}
          selectedLanguage="en"
          onLanguageChange={mockOnLanguageChange}
        />
      );
      
      fireEvent.click(screen.getByRole('button'));
      
      expect(mockOnLanguageChange).toHaveBeenCalledWith('es', twoLanguages[1]);
    });

    test('shows other language when current language changes', () => {
      const { rerender } = render(
        <LanguageSelector 
          variant="two-languages"
          languages={twoLanguages}
          selectedLanguage="en"
        />
      );
      
      expect(screen.getByText('Español')).toBeInTheDocument();
      
      rerender(
        <LanguageSelector 
          variant="two-languages"
          languages={twoLanguages}
          selectedLanguage="es"
        />
      );
      
      expect(screen.getByText('English')).toBeInTheDocument();
    });
  });

  describe('Unstyled variant', () => {
    test('renders with unstyled dropdown', () => {
      render(<LanguageSelector variant="unstyled" />);
      
      const dropdown = screen.getByRole('button').closest('.usa-language-selector__dropdown--unstyled');
      expect(dropdown).toBeInTheDocument();
    });
  });

  describe('Disabled state', () => {
    test('renders disabled button', () => {
      render(<LanguageSelector disabled />);
      
      const button = screen.getByText('English');
      expect(button).toBeDisabled();
    });

    test('does not call onLanguageChange when disabled', () => {
      const mockOnLanguageChange = jest.fn();
      render(<LanguageSelector disabled languages={mockLanguages} onLanguageChange={mockOnLanguageChange} />);
      
      const button = screen.getByText('English');
      fireEvent.click(button);
      
      expect(mockOnLanguageChange).not.toHaveBeenCalled();
    });
  });

  describe('Accessibility', () => {
    test('has proper ARIA attributes', () => {
      render(<LanguageSelector />);
      
      const button = screen.getByRole('button');
      expect(button).toHaveAttribute('aria-haspopup', 'listbox');
      expect(button).toHaveAttribute('aria-expanded', 'false');
    });

    test('uses custom aria-label', () => {
      render(<LanguageSelector ariaLabel="Choose language" />);
      
      const button = screen.getByLabelText('Choose language');
      expect(button).toBeInTheDocument();
    });
  });

  describe('Custom styling', () => {
    test('applies custom className', () => {
      render(<LanguageSelector className="custom-class" />);
      
      const container = screen.getByRole('button').closest('.usa-language-selector');
      expect(container).toHaveClass('custom-class');
    });

    test('applies button variants for two-languages variant', () => {
      render(
        <LanguageSelector 
          variant="two-languages"
          languages={twoLanguages}
          buttonVariant="secondary"
        />
      );
      
      const button = screen.getByRole('button');
      expect(button).toHaveClass('usa-button--secondary');
    });

    test('applies button sizes for two-languages variant', () => {
      render(
        <LanguageSelector 
          variant="two-languages"
          languages={twoLanguages}
          buttonSize="big"
        />
      );
      
      const button = screen.getByRole('button');
      expect(button).toHaveClass('usa-button--big');
    });
  });

  describe('Language selection state', () => {
    test('handles invalid selected language gracefully', () => {
      render(
        <LanguageSelector 
          languages={mockLanguages}
          selectedLanguage="invalid"
        />
      );
      
      expect(screen.getByText('Languages')).toBeInTheDocument();
    });
  });

  describe('Edge cases', () => {
    test('handles empty language array', () => {
      render(<LanguageSelector languages={[]} />);
      
      expect(screen.getByText('Languages')).toBeInTheDocument();
    });

    test('handles single language', () => {
      render(<LanguageSelector languages={[mockLanguages[0]]} />);
      
      expect(screen.getByText('English')).toBeInTheDocument();
    });

    test('handles languages with same native and English names', () => {
      const languages = [
        { code: 'en', nativeName: 'English', englishName: 'English' }
      ];
      
      render(<LanguageSelector languages={languages} />);
      
      expect(screen.getByText('English')).toBeInTheDocument();
    });
  });
}); 