import React, { useState, useRef, useEffect } from 'react';
import PropTypes from 'prop-types';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlus, faMinus } from '@fortawesome/free-solid-svg-icons';
import classNames from 'classnames';
import './Accordion.css';

/**
 * Accordion Item Component
 */
export const AccordionItem = ({
  children,
  summary,
  open = false,
  type = 'default',
  onToggle,
  ...props
}) => {
  const [isExpanded, setIsExpanded] = useState(open);
  const detailsRef = useRef(null);
  const [detailsHeight, setDetailsHeight] = useState('0px');

  useEffect(() => {
    if (isExpanded && detailsRef.current) {
      setDetailsHeight(`${detailsRef.current.scrollHeight}px`);
    } else {
      setDetailsHeight('0px');
    }
  }, [isExpanded]);

  useEffect(() => {
    setIsExpanded(open);
  }, [open]);

  const toggleAccordion = () => {
    const newExpandedState = !isExpanded;
    setIsExpanded(newExpandedState);
    if (onToggle) {
      onToggle(newExpandedState);
    }
  };

  const itemClass = classNames('accordion-item', {
    'accordion-item--bordered': type === 'bordered',
    'accordion-item--open': isExpanded,
  });

  return (
    <div className={itemClass} {...props}>
      <button
        className="accordion-button"
        aria-expanded={isExpanded}
        type="button"
        onClick={toggleAccordion}
      >
        <span className="accordion-summary">{summary}</span>
        <span className="accordion-icon">
          <FontAwesomeIcon icon={isExpanded ? faMinus : faPlus} />
        </span>
      </button>
      <div
        className="accordion-details-container"
        style={{ height: detailsHeight }}
        aria-hidden={!isExpanded}
      >
        <div className="accordion-details" ref={detailsRef}>
          {children}
        </div>
      </div>
    </div>
  );
};

AccordionItem.propTypes = {
  /** Content to display when accordion is expanded */
  children: PropTypes.node.isRequired,
  /** Summary text displayed in the accordion header */
  summary: PropTypes.node.isRequired,
  /** Whether the accordion item is initially expanded */
  open: PropTypes.bool,
  /** The variant style of the accordion item */
  type: PropTypes.oneOf(['default', 'bordered']),
  /** Callback when accordion item is toggled */
  onToggle: PropTypes.func,
};

/**
 * Accordion Component
 */
export const Accordion = ({
  children,
  type = 'default',
  multiselectable = false,
  className,
  ...props
}) => {
  // Initialize openItems with any initially expanded children
  const [openItems, setOpenItems] = useState(() => {
    const initialOpenItems = [];
    React.Children.forEach(children, (child, index) => {
      if (React.isValidElement(child) && child.props.open) {
        initialOpenItems.push(index);
      }
    });
    return initialOpenItems;
  });

  // Handle child expansion state
  const handleItemToggle = (index, isOpen) => {
    setOpenItems(prev => {
      // For multiselectable, add or remove the toggled item
      if (multiselectable) {
        if (isOpen) {
          return [...prev, index];
        } else {
          return prev.filter(i => i !== index);
        }
      } 
      // For single select, replace the open item or clear if toggling off
      else {
        return isOpen ? [index] : [];
      }
    });
  };

  const accordionClass = classNames('accordion', className, {
    'accordion--bordered': type === 'bordered',
  });

  // Clone children to add props
  const accordionItems = React.Children.map(children, (child, index) => {
    if (React.isValidElement(child)) {
      return React.cloneElement(child, {
        type,
        open: openItems.includes(index),
        onToggle: (isOpen) => handleItemToggle(index, isOpen),
      });
    }
    return child;
  });

  return (
    <div 
      className={accordionClass}
      data-allow-multiple={multiselectable}
      {...props}
    >
      {accordionItems}
    </div>
  );
};

Accordion.propTypes = {
  /** AccordionItem components */
  children: PropTypes.node.isRequired,
  /** The variant style of the accordion */
  type: PropTypes.oneOf(['default', 'bordered']),
  /** Whether multiple accordion items can be expanded at once */
  multiselectable: PropTypes.bool,
  /** Additional CSS class names */
  className: PropTypes.string,
};

export default Accordion; 