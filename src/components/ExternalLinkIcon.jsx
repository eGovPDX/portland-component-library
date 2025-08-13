import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowUpRightFromSquare } from '@fortawesome/free-solid-svg-icons';

/**
 * Small external-link icon for use inline with text links.
 *
 * @returns {JSX.Element} FontAwesome external-link icon
 */
export const ExternalLinkIcon = () => (
  <FontAwesomeIcon 
    icon={faArrowUpRightFromSquare} 
    style={{ 
      marginLeft: '0.25rem', 
      fontSize: '0.75em',
      verticalAlign: 'middle'
    }}
    aria-hidden="true"
  />
); 