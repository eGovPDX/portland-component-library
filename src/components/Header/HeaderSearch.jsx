import React, { useState } from 'react';

/**
 * Search component for the Header
 */
export const HeaderSearch = ({
  placeholder = 'Search',
  onSearch,
  inline = false,
}) => {
  const [searchQuery, setSearchQuery] = useState('');
  const [isExpanded, setIsExpanded] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (onSearch && searchQuery.trim()) {
      onSearch(searchQuery.trim());
    }
  };

  const toggleSearch = () => {
    setIsExpanded(!isExpanded);
    if (!isExpanded) {
      // Focus the input when expanding
      setTimeout(() => {
        const input = document.getElementById('header-search-input');
        if (input) {
          input.focus();
        }
      }, 100);
    }
  };

  if (inline) {
    return (
      <div className="header-search header-search-inline">
        <form 
          className="header-search-form"
          onSubmit={handleSubmit}
          role="search"
        >
          <label 
            htmlFor="header-search-input"
            className="header-sr-only"
          >
            {placeholder}
          </label>
          <div className="header-search-input-wrapper">
            <input
              id="header-search-input"
              className="header-search-input"
              type="search"
              placeholder={placeholder}
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
            />
            <button 
              type="submit"
              className="header-search-submit"
              aria-label="Submit search"
            >
              <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <circle cx="11" cy="11" r="8"></circle>
                <line x1="21" y1="21" x2="16.65" y2="16.65"></line>
              </svg>
            </button>
          </div>
        </form>
      </div>
    );
  }

  return (
    <div className={`header-search ${isExpanded ? 'is-expanded' : ''}`}>
      <button 
        className="header-search-button"
        onClick={toggleSearch}
        aria-expanded={isExpanded}
        aria-label={isExpanded ? 'Close search' : 'Open search'}
        type="button"
      >
        <span className="header-search-button-text">Search</span>
        <span className="header-search-button-icon">
          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <circle cx="11" cy="11" r="8"></circle>
            <line x1="21" y1="21" x2="16.65" y2="16.65"></line>
          </svg>
        </span>
      </button>
      
      <form 
        className="header-search-form"
        onSubmit={handleSubmit}
        role="search"
      >
        <label 
          htmlFor="header-search-input"
          className="header-sr-only"
        >
          {placeholder}
        </label>
        
        <input
          id="header-search-input"
          className="header-search-input"
          type="search"
          placeholder={placeholder}
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
        />
        
        <button 
          type="submit"
          className="header-search-submit"
          aria-label="Submit search"
        >
          <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <circle cx="11" cy="11" r="8"></circle>
            <line x1="21" y1="21" x2="16.65" y2="16.65"></line>
          </svg>
        </button>
      </form>
    </div>
  );
};
