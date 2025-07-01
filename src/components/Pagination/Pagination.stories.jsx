import React, { useState } from 'react';
import { Pagination } from './Pagination';

export default {
  title: 'Components/Pagination',
  component: Pagination,
  parameters: {
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
    totalPages: 10,
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

// Few pages (no ellipsis needed)
export const FewPages = {
  render: InteractiveTemplate,
  args: {
    currentPage: 3,
    totalPages: 5,
    maxVisiblePages: 7
  }
};

// Single page (no navigation needed)
export const SinglePage = {
  render: InteractiveTemplate,
  args: {
    currentPage: 1,
    totalPages: 1,
    maxVisiblePages: 7
  }
};

// Many pages (stress test)
export const ManyPages = {
  render: InteractiveTemplate,
  args: {
    currentPage: 50,
    totalPages: 100,
    maxVisiblePages: 7
  }
};

// No ellipsis (show all pages)
export const NoEllipsis = {
  render: InteractiveTemplate,
  args: {
    currentPage: 5,
    totalPages: 10,
    maxVisiblePages: 7,
    showEllipsis: false
  }
};

// Custom labels
export const CustomLabels = {
  render: InteractiveTemplate,
  args: {
    currentPage: 3,
    totalPages: 8,
    maxVisiblePages: 7,
    previousText: 'Anterior',
    nextText: 'Siguiente',
    ariaLabel: 'Paginación'
  }
};

// Compact version (fewer visible pages)
export const Compact = {
  render: InteractiveTemplate,
  args: {
    currentPage: 5,
    totalPages: 20,
    maxVisiblePages: 5
  }
};

// Large dataset pagination
export const LargeDataset = {
  render: InteractiveTemplate,
  args: {
    currentPage: 156,
    totalPages: 1000,
    maxVisiblePages: 7
  }
};

// Example implementation with state management
export const WithStateManagement = {
  render: () => {
    const [currentPage, setCurrentPage] = useState(5);
    const [resultsPerPage] = useState(10);
    const totalResults = 247;
    const totalPages = Math.ceil(totalResults / resultsPerPage);

    const handlePageChange = (page) => {
      setCurrentPage(page);
      // In a real app, you would fetch new data here
      console.log(`Fetching page ${page} with ${resultsPerPage} results per page`);
    };

    return (
      <div style={{ padding: '20px' }}>
        <div style={{ marginBottom: '20px', fontSize: '14px', color: '#666' }}>
          Showing results {((currentPage - 1) * resultsPerPage) + 1} - {Math.min(currentPage * resultsPerPage, totalResults)} of {totalResults}
        </div>
        <Pagination
          currentPage={currentPage}
          totalPages={totalPages}
          onPageChange={handlePageChange}
          maxVisiblePages={7}
        />
      </div>
    );
  },
  parameters: {
    docs: {
      description: {
        story: 'Example showing how to integrate pagination with state management and result counts.'
      }
    }
  }
}; 