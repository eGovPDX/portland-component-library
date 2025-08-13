import React, { useState } from 'react';
import { Pagination } from './Pagination';

export default {
  title: 'Components/Pagination',
  component: Pagination,
  parameters: {
    layout: 'fullscreen',
    docs: {
      description: {
        component: 'Pagination is navigation for paginated content, allowing users to navigate between pages of results.'
      }
    }
  },
  argTypes: {
    currentPage: {
      control: 'number',
      description: 'The currently active page number'
    },
    totalPages: {
      control: 'number',
      description: 'The total number of pages'
    },
    onPageChange: {
      action: 'page-changed',
      description: 'Callback function called when a page is selected'
    },
    maxVisiblePages: {
      control: 'number',
      description: 'Maximum number of page buttons to show (including ellipsis)'
    },
    showEllipsis: {
      control: 'boolean',
      description: 'Whether to show ellipsis for truncated pages'
    },
    ariaLabel: {
      control: 'text',
      description: 'Aria label for the pagination navigation'
    },
    previousText: {
      control: 'text',
      description: 'Text for the previous button'
    },
    nextText: {
      control: 'text',
      description: 'Text for the next button'
    },
    showFirstLast: {
      control: 'boolean',
      description: 'Show buttons to jump to first/last page'
    },
    firstText: {
      control: 'text',
      description: 'Text for first page button'
    },
    lastText: {
      control: 'text',
      description: 'Text for last page button'
    },
    showStatus: {
      control: 'boolean',
      description: 'Compute status text (current page or results range)'
    },
    showStatusText: {
      control: 'boolean',
      description: 'Render the computed status text'
    },
    resultsPerPage: {
      control: 'number',
      description: 'Results per page (enables results summary when totalResults provided)'
    },
    totalResults: {
      control: 'number',
      description: 'Total number of results (enables results summary when resultsPerPage provided)'
    },
    statusPosition: {
      control: 'radio',
      options: ['before', 'after'],
      description: 'Where to render the status text relative to the controls'
    }
  }
};

// Interactive template
const InteractiveTemplate = (args) => {
  const [currentPage, setCurrentPage] = useState(args.currentPage);
  
  const handlePageChange = (page) => {
    setCurrentPage(page);
    args.onPageChange(page);
  };

  return (
    <Pagination
      {...args}
      currentPage={currentPage}
      onPageChange={handlePageChange}
    />
  );
};

// First page (current page = 1)
export const FirstPage = {
  render: InteractiveTemplate,
  args: {
    currentPage: 1,
    totalPages: 24,
    maxVisiblePages: 7
  }
};

// Middle page with ellipsis on both sides
export const MiddlePage = {
  render: InteractiveTemplate,
  args: {
    currentPage: 10,
    totalPages: 24,
    maxVisiblePages: 7
  }
};

// Last page (current page = total pages)
export const LastPage = {
  render: InteractiveTemplate,
  args: {
    currentPage: 24,
    totalPages: 24,
    maxVisiblePages: 7
  }
};

// Example implementation with state management
export const WithStatusTextAbove = {
  render: InteractiveTemplate,
  args: {
    currentPage: 5,
    totalPages: Math.ceil(247 / 10),
    maxVisiblePages: 7,
    showStatus: true,
    showStatusText: true,
    resultsPerPage: 10,
    totalResults: 247,
    statusPosition: 'before'
  },
  parameters: {
    docs: {
      description: {
        story: 'Example showing how to integrate pagination with state management and result counts.'
      }
    }
  }
};

export const WithStatusTextBelow = {
  render: InteractiveTemplate,
  args: {
    currentPage: 5,
    totalPages: Math.ceil(247 / 10),
    maxVisiblePages: 7,
    showStatus: true,
    showStatusText: true,
    resultsPerPage: 10,
    totalResults: 247,
    statusPosition: 'after'
  },
  parameters: {
    docs: {
      description: {
        story: 'Example showing how to integrate pagination with state management and result counts.'
      }
    }
  }
};