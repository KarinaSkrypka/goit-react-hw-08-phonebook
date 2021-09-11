import React from 'react';
import PropTypes from 'prop-types';

import styles from './IconButton.module.scss';

const IconButton = ({ children, onDeleteContact, ...allyProps }) => (
  <button
    type="button"
    className={styles.IconButton}
    onClick={onDeleteContact}
    {...allyProps}
  >
    {children}
  </button>
);

IconButton.defaultProps = {
  onDeleteContact: () => null,
  children: null,
};

IconButton.propTypes = {
  onDeleteContact: PropTypes.func,
  children: PropTypes.node,
  'aria-label': PropTypes.string.isRequired,
};

export default IconButton;
