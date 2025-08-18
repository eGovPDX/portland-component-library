import React from 'react';
import PropTypes from 'prop-types';

/**
 * Avatar component.
 *
 * Renders either an image when `avatarUrl` is provided, or an initials fallback
 * derived from `name`. When no name is provided, displays a '?' fallback.
 *
 * Styling is expected to be provided by the parent via `.person__avatar` and
 * size modifiers on the Person root (e.g., `.person--sm .person__avatar`).
 *
 * @component
 * @param {Object} props - Component props
 * @param {string} [props.name] - Full name used to compute initials
 * @param {string} [props.avatarUrl] - URL of the avatar image
 * @param {string} [props.avatarAlt] - Alt text for the avatar image (use empty string if decorative)
 * @param {string} [props.className] - Additional CSS classes to apply
 * @returns {JSX.Element} Avatar element
 */
export const Avatar = ({ name, avatarUrl, avatarAlt, className, ...rest }) => {
  /**
   * Compute initials from name. Uses first letter of first and last tokens.
   * If only one token, uses first letter. Falls back to '?' when no name.
   * @param {string|undefined} fullName
   * @returns {string}
   */
  const computeInitials = (fullName) => {
    if (!fullName || typeof fullName !== 'string') return '?';
    const tokens = fullName
      .trim()
      .split(/\s+/)
      .filter(Boolean);
    if (tokens.length === 0) return '?';
    if (tokens.length === 1) return tokens[0].charAt(0).toUpperCase();
    const first = tokens[0].charAt(0).toUpperCase();
    const last = tokens[tokens.length - 1].charAt(0).toUpperCase();
    return `${first}${last}`;
  };

  if (avatarUrl) {
    return (
      <img
        className={`person__avatar ${className || ''}`.trim()}
        src={avatarUrl}
        alt={typeof avatarAlt === 'string' ? avatarAlt : ''}
        {...rest}
      />
    );
  }

  const initials = computeInitials(name);
  return (
    <div
      className={`person__avatar person__avatar--initials ${className || ''}`.trim()}
      aria-hidden="true"
      {...rest}
    >
      {initials}
    </div>
  );
};

Avatar.propTypes = {
  name: PropTypes.string,
  avatarUrl: PropTypes.string,
  avatarAlt: PropTypes.string,
  className: PropTypes.string,
};

Avatar.defaultProps = {
  name: undefined,
  avatarUrl: undefined,
  avatarAlt: '',
  className: undefined,
};


