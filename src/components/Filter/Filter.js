import React from 'react';
import PropTypes from 'prop-types';

import styles from './Filter.module.css';

const Filter = (props) => (
    <label className={styles.search_label}>
        <span className={styles.search_text}>Find contacts by name</span>
        <input className={styles.search_input} type="text" placeholder="name" onChange={(e) => {
            // console.log("Filter Event Log", e);
            e.preventDefault();
            props.onChange(e);
          }}>
        </input>
    </label>
);

Filter.propTypes = {
    onChange: PropTypes.func.isRequired,
};

export default Filter;