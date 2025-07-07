import React from 'react';
import { render, screen, fireEvent, waitFor } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { LanguageSelector } from './LanguageSelector';

// Mock FontAwesome icons
jest.mock('@fortawesome/react-fontawesome', () => ({
  FontAwesomeIcon: ({ icon, className }) => (
    <span data-testid="icon" className={className}>
      {icon?.iconName || 'icon'}
    </span>
  ),
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
  describe('Default variant', () => {
    test('renders with default props', () => {
      render(<LanguageSelector />);
      expect(screen.getByText('Languages')).toBeInTheDocument();
      expect(screen.getByRole('button')).toBeInTheDocument();
    });

    test('renders with custom button text', () => {
      render(<LanguageSelector buttonText="Select Language" />);
      expect(screen.getByText('Select Language')).toBeInTheDocument();
    });

    test('opens dropdown when button is clicked', async () => {
      render(<LanguageSelector languages={mockLanguages} />);
      
      const button = screen.getByText('Languages');
      fireEvent.click(button);
      
      await waitFor(() => {
        expect(screen.getByRole('listbox')).toBeInTheDocument();
      });
    });

    test('displays language options in dropdown', async () => {
      render(<LanguageSelector languages={mockLanguages} />);
      
      fireEvent.click(screen.getByText('Languages'));
      
      await waitFor(() => {
        expect(screen.getByText('English')).toBeInTheDocument();
        expect(screen.getByText('Español')).toBeInTheDocument();
        expect(screen.getByText('Français')).toBeInTheDocument();
        expect(screen.getByText('العربية')).toBeInTheDocument();
      });
    });

    test('shows English translations in parentheses', async () => {
      render(<LanguageSelector languages={mockLanguages} />);
      
      fireEvent.click(screen.getByText('Languages'));
      
      await waitFor(() => {
        expect(screen.getByText('(Spanish)')).toBeInTheDocument();
        expect(screen.getByText('(French)')).toBeInTheDocument();
        expect(screen.getByText('(Arabic)')).toBeInTheDocument();
      });
    });

    test('calls onLanguageChange when language is selected', async () => {
      const mockOnLanguageChange = jest.fn();
      render(
        <LanguageSelector 
          languages={mockLanguages}
          onLanguageChange={mockOnLanguageChange}
        />
      );
      
      fireEvent.click(screen.getByText('Languages'));
      
      await waitFor(() => {
        fireEvent.click(screen.getByText('Español'));
      });
      
      expect(mockOnLanguageChange).toHaveBeenCalledWith('es', mockLanguages[1]);
    });

    test('closes dropdown when language is selected', async () => {
      render(<LanguageSelector languages={mockLanguages} />);
      
      fireEvent.click(screen.getByText('Languages'));
      
      await waitFor(() => {
        fireEvent.click(screen.getByText('Español'));
      });
      
      await waitFor(() => {
        expect(screen.queryByRole('listbox')).not.toBeInTheDocument();
      });
    });

    test('shows footer text by default', async () => {
      render(<LanguageSelector languages={mockLanguages} />);
      
      fireEvent.click(screen.getByText('Languages'));
      
      await waitFor(() => {
        expect(screen.getByText('Selected content in additional languages')).toBeInTheDocument();
      });
    });

    test('hides footer text when showFooterText is false', async () => {
      render(<LanguageSelector languages={mockLanguages} showFooterText={false} />);
      
      fireEvent.click(screen.getByText('Languages'));
      
      await waitFor(() => {
        expect(screen.queryByText('Selected content in additional languages')).not.toBeInTheDocument();
      });
    });

    test('shows custom footer text', async () => {
      render(
        <LanguageSelector 
          languages={mockLanguages}
          footerText="Custom footer message"
        />
      );
      
      fireEvent.click(screen.getByText('Languages'));
      
      await waitFor(() => {
        expect(screen.getByText('Custom footer message')).toBeInTheDocument();
      });
    });

    test('closes dropdown when clicking outside', async () => {
      render(<LanguageSelector languages={mockLanguages} />);
      
      fireEvent.click(screen.getByText('Languages'));
      
      await waitFor(() => {
        expect(screen.getByRole('listbox')).toBeInTheDocument();
      });
      
      fireEvent.mouseDown(document.body);
      
      await waitFor(() => {
        expect(screen.queryByRole('listbox')).not.toBeInTheDocument();
      });
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
    test('renders with unstyled button', () => {
      render(<LanguageSelector variant="unstyled" />);
      
      const button = screen.getByText('Languages');
      expect(button).toHaveClass('usa-language-selector__button--unstyled');
    });

    test('opens dropdown when clicked', async () => {
      render(<LanguageSelector variant="unstyled" languages={mockLanguages} />);
      
      fireEvent.click(screen.getByText('Languages'));
      
      await waitFor(() => {
        expect(screen.getByRole('listbox')).toBeInTheDocument();
      });
    });

    test('displays chevron icon', () => {
      render(<LanguageSelector variant="unstyled" />);
      
      expect(screen.getByTestId('icon')).toBeInTheDocument();
    });
  });

  describe('Keyboard navigation', () => {
    test('opens dropdown with Enter key', async () => {
      render(<LanguageSelector languages={mockLanguages} />);
      
      const button = screen.getByText('Languages');
      fireEvent.keyDown(button, { key: 'Enter' });
      
      await waitFor(() => {
        expect(screen.getByRole('listbox')).toBeInTheDocument();
      });
    });

    test('opens dropdown with Space key', async () => {
      render(<LanguageSelector languages={mockLanguages} />);
      
      const button = screen.getByText('Languages');
      fireEvent.keyDown(button, { key: ' ' });
      
      await waitFor(() => {
        expect(screen.getByRole('listbox')).toBeInTheDocument();
      });
    });

    test('opens dropdown with ArrowDown key', async () => {
      render(<LanguageSelector languages={mockLanguages} />);
      
      const button = screen.getByText('Languages');
      fireEvent.keyDown(button, { key: 'ArrowDown' });
      
      await waitFor(() => {
        expect(screen.getByRole('listbox')).toBeInTheDocument();
      });
    });

    test('closes dropdown with Escape key', async () => {
      render(<LanguageSelector languages={mockLanguages} />);
      
      const button = screen.getByText('Languages');
      fireEvent.click(button);
      
      await waitFor(() => {
        expect(screen.getByRole('listbox')).toBeInTheDocument();
      });
      
      fireEvent.keyDown(button, { key: 'Escape' });
      
      await waitFor(() => {
        expect(screen.queryByRole('listbox')).not.toBeInTheDocument();
      });
    });

    test('navigates options with arrow keys', async () => {
      render(<LanguageSelector languages={mockLanguages} />);
      
      const button = screen.getByText('Languages');
      fireEvent.keyDown(button, { key: 'ArrowDown' });
      
      await waitFor(() => {
        expect(screen.getByRole('listbox')).toBeInTheDocument();
      });
      
      // Navigate down
      fireEvent.keyDown(button, { key: 'ArrowDown' });
      fireEvent.keyDown(button, { key: 'ArrowDown' });
      
      // Navigate up
      fireEvent.keyDown(button, { key: 'ArrowUp' });
      
      // Should not throw any errors
    });

    test('selects option with Enter key', async () => {
      const mockOnLanguageChange = jest.fn();
      render(
        <LanguageSelector 
          languages={mockLanguages}
          onLanguageChange={mockOnLanguageChange}
        />
      );
      
      const button = screen.getByText('Languages');
      fireEvent.keyDown(button, { key: 'ArrowDown' });
      
      await waitFor(() => {
        expect(screen.getByRole('listbox')).toBeInTheDocument();
      });
      
      fireEvent.keyDown(button, { key: 'Enter' });
      
      expect(mockOnLanguageChange).toHaveBeenCalled();
    });
  });

  describe('Disabled state', () => {
    test('renders disabled button', () => {
      render(<LanguageSelector disabled />);
      
      const button = screen.getByText('Languages');
      expect(button).toBeDisabled();
    });

    test('does not open dropdown when disabled', () => {
      render(<LanguageSelector disabled languages={mockLanguages} />);
      
      const button = screen.getByText('Languages');
      fireEvent.click(button);
      
      expect(screen.queryByRole('listbox')).not.toBeInTheDocument();
    });

    test('does not respond to keyboard when disabled', () => {
      render(<LanguageSelector disabled languages={mockLanguages} />);
      
      const button = screen.getByText('Languages');
      fireEvent.keyDown(button, { key: 'Enter' });
      
      expect(screen.queryByRole('listbox')).not.toBeInTheDocument();
    });
  });

  describe('Accessibility', () => {
    test('has proper ARIA attributes', () => {
      render(<LanguageSelector />);
      
      const button = screen.getByRole('button');
      expect(button).toHaveAttribute('aria-haspopup', 'listbox');
      expect(button).toHaveAttribute('aria-expanded', 'false');
    });

    test('updates aria-expanded when opened', async () => {
      render(<LanguageSelector languages={mockLanguages} />);
      
      const button = screen.getByRole('button');
      fireEvent.click(button);
      
      await waitFor(() => {
        expect(button).toHaveAttribute('aria-expanded', 'true');
      });
    });

    test('has language attributes on options', async () => {
      render(<LanguageSelector languages={mockLanguages} />);
      
      fireEvent.click(screen.getByText('Languages'));
      
      await waitFor(() => {
        const spanishOption = screen.getByText('Español');
        expect(spanishOption).toHaveAttribute('lang', 'es');
      });
    });

    test('has proper role attributes', async () => {
      render(<LanguageSelector languages={mockLanguages} />);
      
      fireEvent.click(screen.getByText('Languages'));
      
      await waitFor(() => {
        expect(screen.getByRole('listbox')).toBeInTheDocument();
        expect(screen.getAllByRole('option')).toHaveLength(mockLanguages.length);
      });
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

    test('applies button variants', () => {
      render(<LanguageSelector buttonVariant="secondary" />);
      
      const button = screen.getByText('Languages');
      expect(button).toHaveClass('usa-button--secondary');
    });

    test('applies button sizes', () => {
      render(<LanguageSelector buttonSize="big" />);
      
      const button = screen.getByText('Languages');
      expect(button).toHaveClass('usa-button--big');
    });
  });

  describe('Language selection state', () => {
    test('marks selected language as selected', async () => {
      render(
        <LanguageSelector 
          languages={mockLanguages}
          selectedLanguage="es"
        />
      );
      
      fireEvent.click(screen.getByText('Languages'));
      
      await waitFor(() => {
        const options = screen.getAllByRole('option');
        const spanishOption = options.find(option => option.textContent?.includes('Español'));
        expect(spanishOption).toHaveAttribute('aria-selected', 'true');
      });
    });

    test('handles invalid selected language gracefully', async () => {
      render(
        <LanguageSelector 
          languages={mockLanguages}
          selectedLanguage="invalid"
        />
      );
      
      fireEvent.click(screen.getByText('Languages'));
      
      await waitFor(() => {
        // Should not throw error and should render dropdown
        expect(screen.getByRole('listbox')).toBeInTheDocument();
      });
    });
  });

  describe('Edge cases', () => {
    test('handles empty language array', () => {
      render(<LanguageSelector languages={[]} />);
      
      expect(screen.getByText('Languages')).toBeInTheDocument();
    });

    test('handles single language', () => {
      render(<LanguageSelector languages={[mockLanguages[0]]} />);
      
      expect(screen.getByText('Languages')).toBeInTheDocument();
    });

    test('handles languages with same native and English names', async () => {
      const languages = [
        { code: 'en', nativeName: 'English', englishName: 'English' }
      ];
      
      render(<LanguageSelector languages={languages} />);
      
      fireEvent.click(screen.getByText('Languages'));
      
      await waitFor(() => {
        expect(screen.getByText('English')).toBeInTheDocument();
        expect(screen.queryByText('(English)')).not.toBeInTheDocument();
      });
    });
  });
}); 