import React from 'react';
import PropTypes from 'prop-types';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch } from '@fortawesome/free-solid-svg-icons';
import './Search.css';

export const Search = ({ 
  variant = 'default', 
  buttonText = 'Search',
  className,
  id,
  name = 'search',
  placeholder,
  onSubmit,
  ...props 
}) => {
  const baseClassName = 'usa-search';
  const variantClassName = variant === 'big' ? 'usa-search--big' : 
                         variant === 'small' ? 'usa-search--small' : '';
  const classes = [baseClassName, variantClassName, className].filter(Boolean).join(' ');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (onSubmit) {
      onSubmit(e);
    }
  };

  return (
    <section aria-label={`${variant} search component`}>
      <form className={classes} role="search" onSubmit={handleSubmit}>
        <label className="usa-sr-only" htmlFor={id}>
          {buttonText}
        </label>
        <input
          className="usa-input"
          id={id}
          type="search"
          name={name}
          placeholder={placeholder}
          {...props}
        />
        <button className="usa-button" type="submit">
          {variant === 'small' ? (
            <FontAwesomeIcon 
              icon={faSearch} 
              className="usa-search__submit-icon"
              aria-hidden="true"
            />
          ) : (
            <span className="usa-search__submit-text">{buttonText}</span>
          )}
        </button>
      </form>
    </section>
  );
};

Search.propTypes = {
  /** The variant of the search component */
  variant: PropTypes.oneOf(['default', 'big', 'small']),
  /** The text to display on the search button */
  buttonText: PropTypes.string,
  /** Additional className to be applied to the search component */
  className: PropTypes.string,
  /** The id of the search input */
  id: PropTypes.string.isRequired,
  /** The name of the search input */
  name: PropTypes.string,
  /** The placeholder text for the search input */
  placeholder: PropTypes.string,
  /** Function to call when the form is submitted */
  onSubmit: PropTypes.func,
}; 