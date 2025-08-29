import React from 'react';
import { screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { I18nDemo } from './I18nDemo';
import { renderWithI18n, resetLanguageInTest } from '../../test-utils/i18n-test-utils';

// Mock the Person component to avoid complex dependencies
jest.mock('../Person', () => ({
  Person: ({ name, title, department, phones, meta, tags }) => (
    <div data-testid="person-component">
      <h3>{name}</h3>
      <p>{title}</p>
      <p>{department}</p>
      {phones && phones.map((phone, index) => (
        <p key={index}>{phone.label}</p>
      ))}
      {meta && meta.map((item, index) => (
        <p key={index}>{item}</p>
      ))}
      {tags && tags.map((tag, index) => (
        <p key={index}>{tag}</p>
      ))}
    </div>
  )
}));

describe('I18nDemo', () => {
  beforeEach(async () => {
    // Reset to English for each test
    await resetLanguageInTest();
  });

  test('renders the demo component', () => {
    renderWithI18n(<I18nDemo />);
    
    expect(screen.getByText(/Language Demo/i)).toBeInTheDocument();
    expect(screen.getByText(/Select language/i)).toBeInTheDocument();
    expect(screen.getByText(/Change Language/i)).toBeInTheDocument();
  });

  test('displays language selector with English and Spanish', async () => {
    renderWithI18n(<I18nDemo />);
    
    // Check that the language selector section is present
    expect(screen.getByText('Change Language')).toBeInTheDocument();

    // The language selector renders a combobox button whose name is the selected language
    const combo = screen.getByRole('combobox');
    expect(combo).toBeInTheDocument();
    expect(combo).toBeEnabled();
    expect(screen.getByText('English')).toBeInTheDocument();

    // Open the list and verify Spanish option is available
    await userEvent.click(combo);
    expect(screen.getByRole('option', { name: /Español \(Spanish\)/ })).toBeInTheDocument();
  });

  test('shows current language information', () => {
    renderWithI18n(<I18nDemo />);
    
    expect(screen.getByText(/Current language/i)).toBeInTheDocument();
    expect(screen.getByText(/English/, { selector: 'strong' })).toBeInTheDocument();
    expect(screen.getByText(/en/, { selector: 'code' })).toBeInTheDocument();
    expect(screen.getByText(/ltr/)).toBeInTheDocument();
  });

  test('displays component example', () => {
    renderWithI18n(<I18nDemo />);
    
    expect(screen.getByText(/Component Example/i)).toBeInTheDocument();
    expect(screen.getByText(/This Person component automatically adapts/i)).toBeInTheDocument();
    expect(screen.getByTestId('person-component')).toBeInTheDocument();
  });

  test('shows i18n features list', () => {
    renderWithI18n(<I18nDemo />);
    
    expect(screen.getByText(/i18n Features/i)).toBeInTheDocument();
    expect(screen.getByText(/Automatic language detection/i)).toBeInTheDocument();
    expect(screen.getByText(/Component-specific translations/i)).toBeInTheDocument();
    expect(screen.getByText(/Accessibility support/i)).toBeInTheDocument();
  });

  test('renders with proper language attribute', () => {
    const { container } = renderWithI18n(<I18nDemo />);
    
    const demoElement = container.querySelector('.i18n-demo');
    expect(demoElement).toHaveAttribute('lang');
  });

  test('language selector control is clickable', async () => {
    renderWithI18n(<I18nDemo />);
    const combo = screen.getByRole('combobox');
    expect(combo).toBeInTheDocument();
    expect(combo).toBeEnabled();
    await userEvent.click(combo);
    expect(screen.getByRole('listbox')).toBeInTheDocument();
  });

  test('displays language direction information', () => {
    renderWithI18n(<I18nDemo />);
    
    // English should be LTR
    expect(screen.getByText(/Direction:/)).toBeInTheDocument();
    expect(screen.getByText(/ltr/)).toBeInTheDocument();
  });

  test('shows person component with demo data', () => {
    renderWithI18n(<I18nDemo />);
    
    expect(screen.getByText('Jane Doe')).toBeInTheDocument();
    expect(screen.getByText('Senior Policy Analyst')).toBeInTheDocument();
    expect(screen.getByText('Bureau of Transportation')).toBeInTheDocument();
  });

  test('person component updates when language changes', async () => {
    const user = userEvent.setup();
    renderWithI18n(<I18nDemo />);
    
    // Initially should show English content
    expect(screen.getByText('Senior Policy Analyst')).toBeInTheDocument();
    expect(screen.getByText('Bureau of Transportation')).toBeInTheDocument();
    expect(screen.getByText('Office')).toBeInTheDocument();
    
    // Open the language menu and select Spanish
    const combo = screen.getByRole('combobox');
    await user.click(combo);
    const spanishOption = screen.getByRole('option', { name: /Español \(Spanish\)/ });
    await user.click(spanishOption);
    
    // Should now show Spanish content
    expect(screen.getByText('Analista de Políticas Senior')).toBeInTheDocument();
    expect(screen.getByText('Oficina de Transporte')).toBeInTheDocument();
    expect(screen.getByText('Oficina')).toBeInTheDocument();
    
    // Check that language info shows Spanish
    expect(screen.getByText(/es/, { selector: 'strong' })).toBeInTheDocument();
  });

  test('maintains accessibility features', async () => {
    renderWithI18n(<I18nDemo />);
    
    // Check headings exist
    expect(screen.getByRole('heading', { name: /Features/i })).toBeInTheDocument();
    expect(screen.getByRole('heading', { name: /Current Language/i })).toBeInTheDocument();
    expect(screen.getByRole('heading', { name: /Change Language/i })).toBeInTheDocument();
    expect(screen.getByRole('heading', { name: /Select a component/i })).toBeInTheDocument();
    expect(screen.getByRole('heading', { name: /Selected Component/i })).toBeInTheDocument();

    // Language selector is a combobox with a listbox that opens on click
    const combo = screen.getByRole('combobox');
    expect(combo).toBeInTheDocument();
    await userEvent.click(combo);
    expect(screen.getByRole('listbox')).toBeInTheDocument();
  });

  test('responsive design elements', () => {
    renderWithI18n(<I18nDemo />);
    
    // Check that the language selector wrapper has proper styling
    const languageSelectorWrapper = screen.getByText(/Change Language/i).closest('.i18n-demo__language-selector-wrapper');
    expect(languageSelectorWrapper).toBeInTheDocument();
  });
});
