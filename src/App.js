import React, {Component} from 'react';
import {connect} from 'react-redux';

// import actions from './redux/actions';
import onStoreUpdate from './redux/actions/didMountStoreUpdate';
import onAddContact from './redux/actions/addContact';
import onDeleteContact from './redux/actions/deleteContact';
import onSearchContacts from './redux/actions/searchContacts';

import ContactForm from './components/ContactForm/ContactForm';
import Filter from './components/Filter/Filter';
import ContactList from './components/ContactList/ContactList';

import './App.css';

class PhoneBook extends Component {

  componentDidMount() {
    const {contacts, onStoreUpdate} = this.props;
    // console.log("On Mount Component", this.props.contacts);
    const localStorageContacts = localStorage.getItem('Contacts');

    if (contacts.length === 0 && localStorageContacts !== null) {
      const contacts = JSON.parse(localStorageContacts);
      onStoreUpdate(contacts);

    } else if (localStorageContacts === null) {
      const contacts = JSON.stringify(this.props.contacts);
      localStorage.setItem('Contacts', contacts);
    };
  };

  componentDidUpdate(prevProps, prevState) {
    const {contacts} = this.props;
    const localStorageContacts = localStorage.getItem('Contacts');

    if (contacts !== localStorageContacts) {
      const contacts = JSON.stringify(this.props.contacts);
      localStorage.setItem('Contacts', contacts);

    } else if (contacts.length === 0) {
      localStorage.removeItem('Contacts');
    };
  };

  onStateUpdate = (obj) => {
    const {onAddContact} = this.props;
    // console.log("Function OnStateUpdate", obj);
    // console.log("OnStateUpdate Props Contacts", this.props.contacts);

    if (this.props.contacts.find(contact => contact.name === obj.name)) {
      alert(`${obj.name}is alredy in contacts`);

    } else {
      onAddContact(obj);
    };
  };

  contactsFinderHandler = () => {
    const {contacts} = this.props;

    if (this.props.filter !== '') {
      const foundContacts = contacts.filter(contact => 
        contact.name.toLowerCase().includes(this.props.filter));
      return foundContacts
    };
  };

  render() {
    const {onSearchContacts, contacts, filter, onDeleteContact} = this.props;
    const foundContacts = this.contactsFinderHandler();
    // console.log(this.props);
    return (
      <section className="section">
        <h1>Phone Book</h1>
        <ContactForm onSubmit={this.onStateUpdate}/>
        <h2>Contacts</h2>
        <Filter onChange={onSearchContacts}/>
        {contacts.length !== 0 &&
          <ContactList 
          foundContacts={foundContacts}
          state={contacts}
          filter={filter}
          onDeleteContact={onDeleteContact}
        />}
        
      </section>
    )
  }
};

const mapStateToProps = ({contacts, filter}) => ({
  contacts,
  filter
});

const mapDispatchToProps = dispatch => ({
  onStoreUpdate: contacts => dispatch(onStoreUpdate(contacts)),
  onAddContact: contact => dispatch(onAddContact(contact)),
  onDeleteContact: contactId => dispatch(onDeleteContact(contactId)),
  onSearchContacts: event => dispatch(onSearchContacts(event))
})

export default connect(mapStateToProps, mapDispatchToProps)(PhoneBook);