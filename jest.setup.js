import '@testing-library/jest-dom';

// Add any global test setup here
window.matchMedia = window.matchMedia || function() {
  return {
    matches: false,
    addListener: function() {},
    removeListener: function() {}
  };
};

// Mock HTML dialog element methods for testing
HTMLDialogElement.prototype.showModal = jest.fn(function() {
  this.open = true;
});

HTMLDialogElement.prototype.close = jest.fn(function() {
  this.open = false;
}); 