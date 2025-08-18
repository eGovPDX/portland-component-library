import React from 'react';
import PropTypes from 'prop-types';
import './Person.css';
import { Avatar } from './Avatar';

/**
 * A reusable profile block for individuals (staff, officials, program contacts).
 *
 * Supports two layouts (row, column), avatar alignment (top, center), size variants,
 * a bordered/card-like container, contact actions, meta, and tags (strings or custom components).
 *
 * This component is not part of USWDS. It uses component-scoped CSS custom properties which
 * can be mapped to design system tokens in theme files.
 *
 * @component
 */

/**
 * @typedef {Object} Phone
 * @property {string} label - Descriptive label for the phone number (e.g., "Office").
 * @property {string} value - The phone number value (e.g., "+1-503-555-1234").
 */

/**
 * Tags can be strings (rendered with a default pill style) or React nodes (e.g., Tag component).
 * @typedef {(string|React.ReactNode)} TagContent
 */

/**
 * @typedef {Object} PersonProps
 * @property {string} name - Full name of the person.
 * @property {string} [title] - Job title or role.
 * @property {string} [department] - Department, bureau, or team name.
 * @property {string} [profileUrl] - URL to the person's profile; when provided, wraps the name with a link.
 * @property {string} [avatarUrl] - URL of the avatar photo.
 * @property {string} [avatarAlt] - Accessible alt text for the avatar image. Use empty string if decorative.
 * @property {string} [email] - Email address for contact action.
 * @property {Phone[]} [phones] - List of phone numbers to display.
 * @property {string[]} [meta] - Additional small text lines (e.g., pronouns, languages).
 * @property {TagContent[]} [tags] - Tags shown below actions; strings render with default style, nodes render as-is.
 * @property {React.ReactNode} [children] - Optional custom content area (rendered below tags).
 * @property {React.ReactNode} [extraActions] - Optional custom actions appended to the actions row (e.g., a Button component).
 * @property {'row'|'column'} [layout='row'] - Layout direction.
 * @property {'top'|'center'} [imageAlign='top'] - Avatar alignment relative to the content.
 * @property {'left'|'right'} [avatarPosition='left'] - Avatar horizontal position in row layout.
 * @property {'sm'|'md'|'lg'} [avatarSize='md'] - Size variant controlling avatar and spacing scale.
 * @property {boolean} [bordered=false] - Adds a border and padding for card-like appearance.
 * @property {2|3|4|5|6} [headingLevel=3] - Heading level used for the name.
 * @property {string} [className] - Additional CSS class names for the root element.
 */

/**
 * Person component.
 * @param {PersonProps} props - Component props.
 * @returns {JSX.Element} Rendered person component.
 */
export const Person = ({
  avatarAlt,
  avatarSize = 'md',
  avatarUrl,
  avatarPosition = 'left',
  bordered = false,
  className,
  department,
  email,
  headingLevel = 3,
  imageAlign = 'top',
  layout = 'row',
  meta,
  name,
  phones,
  profileUrl,
  tags,
  title,
  children,
  extraActions,
  ...rest
}) => {
  const HeadingTag = `h${headingLevel}`;

  const rootClassName = [
    'person',
    layout === 'row' ? 'person--row' : 'person--column',
    imageAlign === 'center' ? 'person--align-center' : 'person--align-top',
    layout === 'row' && avatarPosition === 'right' ? 'person--avatar-right' : null,
    avatarSize ? `person--${avatarSize}` : null,
    bordered ? 'person--bordered' : null,
    className,
  ].filter(Boolean).join(' ');

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

  const renderAvatar = () => (
    <Avatar name={name} avatarUrl={avatarUrl} avatarAlt={avatarAlt} />
  );

  return (
    <div className={rootClassName} {...rest}>
      <div className="person__media">
        {renderAvatar()}
      </div>

      <div className="person__body">
        {name && (
          <HeadingTag className="person__name">
            {profileUrl ? (
              <a href={profileUrl}>{name}</a>
            ) : (
              name
            )}
          </HeadingTag>
        )}

        {title && (
          <div className="person__title">{title}</div>
        )}

        {department && (
          <div className="person__department">{department}</div>
        )}

        {Array.isArray(meta) && meta.length > 0 && (
          <div className="person__meta">
            {meta.map((item, index) => (
              <span key={`meta-${index}`}>{item}</span>
            ))}
          </div>
        )}

        {(email || (Array.isArray(phones) && phones.length > 0) || extraActions) && (
          <div className="person__actions">
            {email && (
              <a
                href={`mailto:${email}`}
                aria-label={`Email ${name}`}
                className="person__action-link"
              >
                {email}
              </a>
            )}
            {Array.isArray(phones) && phones.map((phone, index) => (
              <a
                key={`phone-${index}`}
                href={`tel:${phone.value}`}
                aria-label={`Call ${name}${phone.label ? ` (${phone.label})` : ''}`}
                className="person__action-link"
              >
                {phone.value}
              </a>
            ))}
            {extraActions}
          </div>
        )}

        {Array.isArray(tags) && tags.length > 0 && (
          <div className="person__tags">
            {tags.map((tag, index) => (
              typeof tag === 'string' ? (
                <span className="person__tag" key={`tag-${index}`}>{tag}</span>
              ) : (
                <span className="person__tag-wrapper" key={`tag-${index}`}>{tag}</span>
              )
            ))}
          </div>
        )}

        {children && (
          <div className="person__children">
            {children}
          </div>
        )}
      </div>
    </div>
  );
};

Person.propTypes = {
  name: PropTypes.string.isRequired,
  title: PropTypes.string,
  department: PropTypes.string,
  profileUrl: PropTypes.string,
  avatarUrl: PropTypes.string,
  avatarAlt: PropTypes.string,
  email: PropTypes.string,
  phones: PropTypes.arrayOf(PropTypes.shape({
    label: PropTypes.string,
    value: PropTypes.string.isRequired,
  })),
  meta: PropTypes.arrayOf(PropTypes.string),
  tags: PropTypes.arrayOf(PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.node,
  ])),
  layout: PropTypes.oneOf(['row', 'column']),
  imageAlign: PropTypes.oneOf(['top', 'center']),
  avatarPosition: PropTypes.oneOf(['left', 'right']),
  avatarSize: PropTypes.oneOf(['sm', 'md', 'lg']),
  bordered: PropTypes.bool,
  headingLevel: PropTypes.oneOf([2, 3, 4, 5, 6]),
  className: PropTypes.string,
  children: PropTypes.node,
  extraActions: PropTypes.node,
};

Person.defaultProps = {
  title: undefined,
  department: undefined,
  profileUrl: undefined,
  avatarUrl: undefined,
  avatarAlt: '',
  email: undefined,
  phones: undefined,
  meta: undefined,
  tags: undefined,
  layout: 'row',
  imageAlign: 'top',
  avatarPosition: 'left',
  avatarSize: 'md',
  bordered: false,
  headingLevel: 3,
  className: undefined,
  children: undefined,
  extraActions: undefined,
};


