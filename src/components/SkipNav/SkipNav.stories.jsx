import React from 'react';
import { SkipNav } from './SkipNav';

const meta = {
  title: 'Components/SkipNav',
  component: SkipNav,
  parameters: {
    docs: {
      description: {
        component: 'SkipNav component for accessibility. This component provides a way for keyboard users to skip to the main content of a page.',
      },
    },
  },
  tags: ['autodocs'],
};

export default meta;

// Default SkipNav
export const Default = {
  args: {
    mainContentId: 'main-content',
    text: 'Skip to main content',
  },
  parameters: {
    docs: {
      description: {
        story: 'The default SkipNav component. Tab to it to see it appear at the top of the viewport.',
      },
    },
  },
  decorators: [
    (Story) => (
      <div>
        <Story />
        <div style={{ marginTop: '20px' }}>
          <p>Tab to see the skip link appear at the top of the viewport.</p>
          <div id="main-content" style={{ marginTop: '20px', padding: '20px', border: '1px solid #ddd' }}>
            <h2>Main Content</h2>
            <p>This is the main content area that the skip link targets.</p>
          </div>
        </div>
      </div>
    ),
  ],
};
