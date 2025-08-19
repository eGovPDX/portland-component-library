import PropTypes from 'prop-types';
import { useComponentTranslation } from '../../hooks/useTranslation';
import './SkipNav.css';

/**
 * SkipNav component for keyboard accessibility
 * Provides a link to skip to the main content
 * 
 * @i18n This component is internationalized and supports multiple languages for accessibility.
 * The default "Skip to main content" text is translated. The component automatically loads
 * translations from its co-located i18n folder.
 */
export const SkipNav = ({
  text,
  mainContentId = 'main-content',
  className = ''
}) => {
  const { t } = useComponentTranslation('SkipNav');
  const containerClassName = ['skipnav', className].filter(Boolean).join(' ');
  
  return (
    <a 
      href={`#${mainContentId}`}
      className={containerClassName}
      data-testid="skip-nav"
    >
      {text || t('defaults.skipToMainContent')}
    </a>
  );
};

SkipNav.propTypes = {
  /** The text to display in the skip nav link */
  text: PropTypes.string,
  /** The ID of the main content element to skip to */
  mainContentId: PropTypes.string,
  /** Custom class name */
  className: PropTypes.string
};

SkipNav.defaultProps = {
  text: undefined,
  mainContentId: 'main-content',
  className: ''
}; 