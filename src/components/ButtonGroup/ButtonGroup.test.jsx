import React from 'react';
import { render, screen } from '@testing-library/react';
import { ButtonGroup } from './ButtonGroup';
import { Button } from '../Button';

describe('ButtonGroup', () => {
  // Test default rendering
  test('renders with default props', () => {
    render(
      <ButtonGroup>
        <Button>Button 1</Button>
        <Button>Button 2</Button>
      </ButtonGroup>
    );
    
    const buttonGroup = screen.getByRole('group');
    expect(buttonGroup).toBeInTheDocument();
    expect(buttonGroup).toHaveClass('usa-button-group');
    expect(buttonGroup).not.toHaveClass('usa-button-group--segmented');
    
    const buttons = screen.getAllByRole('button');
    expect(buttons).toHaveLength(2);
    expect(buttons[0]).toHaveTextContent('Button 1');
    expect(buttons[1]).toHaveTextContent('Button 2');
    
    const listItems = buttonGroup.querySelectorAll('.usa-button-group__item');
    expect(listItems).toHaveLength(2);
  });

  // Test segmented button group
  test('renders segmented button group correctly', () => {
    render(
      <ButtonGroup segmented>
        <Button>Button 1</Button>
        <Button>Button 2</Button>
        <Button>Button 3</Button>
      </ButtonGroup>
    );
    
    const buttonGroup = screen.getByRole('group');
    expect(buttonGroup).toHaveClass('usa-button-group--segmented');
    
    const buttons = screen.getAllByRole('button');
    expect(buttons).toHaveLength(3);
  });

  // Test with custom class name
  test('applies custom className', () => {
    render(
      <ButtonGroup className="custom-class">
        <Button>Button 1</Button>
      </ButtonGroup>
    );
    
    const buttonGroup = screen.getByRole('group');
    expect(buttonGroup).toHaveClass('custom-class');
  });

  // Test with custom aria-label
  test('applies custom aria-label', () => {
    render(
      <ButtonGroup aria-label="Custom Label">
        <Button>Button 1</Button>
      </ButtonGroup>
    );
    
    const buttonGroup = screen.getByRole('group', { name: 'Custom Label' });
    expect(buttonGroup).toBeInTheDocument();
  });

  // Test with non-button children
  test('renders with non-button children', () => {
    render(
      <ButtonGroup>
        <Button>Button 1</Button>
        <span>Not a button</span>
      </ButtonGroup>
    );
    
    const listItems = screen.getByRole('group').querySelectorAll('.usa-button-group__item');
    expect(listItems).toHaveLength(2);
    
    const buttons = screen.getAllByRole('button');
    expect(buttons).toHaveLength(1);
  });
}); 