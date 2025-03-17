import '@testing-library/jest-dom';

// Add any global test setup here
window.matchMedia = window.matchMedia || function() {
  return {
    matches: false,
    addListener: function() {},
    removeListener: function() {}
  };
}; 