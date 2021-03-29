import React from 'react';
import PropTypes from 'prop-types';

import styles from './ContactList.module.css';

const ContactList = (props) => (
  <ul className={styles.contactList}>
    {props.filter === '' ?
      props.state.map(contact => (
        <li className={styles.contact_item} key={contact.id}>
          <div className={styles.contact_item_container}>
            <p className={styles.contact_name}>{contact.name}: {contact.number}</p>
            <button className={styles.contact_button} type="button" onClick={() => props.onDeleteContact(contact.id)}>Delete</button>
          </div>
        </li>
      )) :
      props.foundContacts.map(contact => (
        <li className={styles.contact_item} key={contact.id}>
          <div className={styles.contact_item_container}>
            <p className={styles.contact_name}>{contact.name}: {contact.number}</p>
            <button className={styles.contact_button} type="button">Delete</button>
          </div>
        </li>
      ))
    }
  </ul>
);

ContactList.defaultProps = {
  avatar: {}
};

ContactList.propTypes = {
  foundContacts: PropTypes.arrayOf(
      PropTypes.object
  ),
  state: PropTypes.arrayOf(
    PropTypes.object.isRequired
  ).isRequired,
  filter: PropTypes.string.isRequired,
  onDeleteContact: PropTypes.func.isRequired,
};

export default ContactList;