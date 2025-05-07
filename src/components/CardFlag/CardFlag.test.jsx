import React from 'react';
import { render, screen } from '@testing-library/react';
import { CardFlag } from './CardFlag';

const DemoMedia = (props) => <img src="#" alt="demo" data-testid="demo-media" {...props} />;

describe('CardFlag', () => {
  test('renders with required props', () => {
    render(
      <CardFlag
        heading="Test Heading"
        text="Test text content"
        media={<DemoMedia />}
      />
    );
    expect(screen.getByTestId('card-flag')).toBeInTheDocument();
    expect(screen.getByTestId('card-flag-heading')).toHaveTextContent('Test Heading');
    expect(screen.getByTestId('card-flag-body')).toHaveTextContent('Test text content');
    expect(screen.getByTestId('card-flag-media')).toBeInTheDocument();
  });

  test('renders media on the right', () => {
    render(
      <CardFlag
        heading="Test Heading"
        text="Test text content"
        media={<DemoMedia />}
        mediaPosition="right"
      />
    );
    const card = screen.getByTestId('card-flag');
    expect(card.className).toMatch(/media-right/);
  });

  test('renders inset media', () => {
    render(
      <CardFlag
        heading="Test Heading"
        text="Test text content"
        media={<DemoMedia />}
        mediaInset
      />
    );
    const media = screen.getByTestId('card-flag-media');
    expect(media.className).toMatch(/media--inset/);
  });

  test('applies alt text to media', () => {
    render(
      <CardFlag
        heading="Test Heading"
        text="Test text content"
        media={<DemoMedia />}
        mediaAlt="Alt text!"
      />
    );
    expect(screen.getByAltText('Alt text!')).toBeInTheDocument();
  });

  test('renders action button if provided', () => {
    render(
      <CardFlag
        heading="Test Heading"
        text="Test text content"
        media={<DemoMedia />}
        actionButton={<button data-testid="test-action">Action</button>}
      />
    );
    expect(screen.getByTestId('test-action')).toBeInTheDocument();
  });
}); 