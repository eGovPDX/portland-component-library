import React from 'react';
import { render, screen } from '@testing-library/react';
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

  test('displays language selector with English and Spanish', () => {
    renderWithI18n(<I18nDemo />);
    
    // Check that the language selector is present
    expect(screen.getByText('Change Language')).toBeInTheDocument();
    expect(screen.getByRole('button', { name: 'Select language' })).toBeInTheDocument();
    
    // Check that the language selector shows Spanish (current non-selected language)
    expect(screen.getByText('Español')).toBeInTheDocument();
    expect(screen.getByText('(Spanish)')).toBeInTheDocument();
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

  test('language selector button is clickable', () => {
    renderWithI18n(<I18nDemo />);
    
    const languageButton = screen.getByRole('button', { name: 'Select language' });
    expect(languageButton).toBeInTheDocument();
    expect(languageButton).toBeEnabled();
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
    
    // Find and click Spanish language button
    const spanishButton = screen.getByText('Español');
    await user.click(spanishButton);
    
    // Should now show Spanish content
    expect(screen.getByText('Analista de Políticas Senior')).toBeInTheDocument();
    expect(screen.getByText('Oficina de Transporte')).toBeInTheDocument();
    expect(screen.getByText('Oficina')).toBeInTheDocument();
    
    // Check that language info shows Spanish
    expect(screen.getByText(/es/, { selector: 'strong' })).toBeInTheDocument();
  });

  test('maintains accessibility features', () => {
    renderWithI18n(<I18nDemo />);
    
    // Check for proper heading structure
    expect(screen.getByRole('heading', { level: 1 })).toBeInTheDocument();
    expect(screen.getAllByRole('heading', { level: 3 })).toHaveLength(4); // Current language, Component Example, Jane Doe, i18n Features
    expect(screen.getByRole('heading', { level: 4 })).toBeInTheDocument(); // Change Language
    
    // Check for proper button roles
    const languageButton = screen.getByRole('button', { name: 'Select language' });
    expect(languageButton).toBeInTheDocument();
  });

  test('responsive design elements', () => {
    renderWithI18n(<I18nDemo />);
    
    // Check that the language selector wrapper has proper styling
    const languageSelectorWrapper = screen.getByText(/Change Language/i).closest('.i18n-demo__language-selector-wrapper');
    expect(languageSelectorWrapper).toBeInTheDocument();
  });
});
