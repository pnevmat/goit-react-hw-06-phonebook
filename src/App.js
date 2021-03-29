import React, {Component} from 'react';
import {connect} from 'react-redux';
import actions from './redux/actions';
import ContactForm from './components/ContactForm/ContactForm';
import Filter from './components/Filter/Filter';
import ContactList from './components/ContactList/ContactList';

import './App.css';

class PhoneBook extends Component {

  componentDidMount() {
    const localStorageContacts = localStorage.getItem('Contacts');
    if (this.props.contacts.length === 0 && localStorageContacts !== null) {
      const contacts = JSON.parse(localStorageContacts);
      this.props.onStoreUpdate(contacts);
    } else if (localStorageContacts === null) {
      const contacts = JSON.stringify(this.props.contacts);
      localStorage.setItem('Contacts', contacts);
    };
  };

  componentDidUpdate(prevProps, prevState) {
    const localStorageContacts = localStorage.getItem('Contacts');
    if (this.props.contacts !== localStorageContacts) {
      const contacts = JSON.stringify(this.props.contacts);
      localStorage.setItem('Contacts', contacts);
    } else if (this.props.contacts.length === 0) {
      localStorage.removeItem('Contacts');
    };
  };

  onStateUpdate = (obj) => {
    console.log("Function onUpdateStore", obj);
    if (this.props.contacts.find(contact => contact.name === obj.name)) {
      alert(`${obj.name}is alredy in contacts`)
    } else {
      this.props.onAddContact(obj);
    };
  };

  contactsFinderHandler = () => {
    if (this.props.filter !== '') {
      const foundContacts = this.props.contacts.filter(contact => 
        contact.name.toLowerCase().includes(this.props.filter));
      return foundContacts
    };
  };

  render() {
    const foundContacts = this.contactsFinderHandler();
    return (
      <section className="section">
        <h1>Phone Book</h1>
        <ContactForm onSubmit={this.onStateUpdate}/>
        <h2>Contacts</h2>
        <Filter onChange={this.props.onSearchContacts}/>
        {this.props.contacts.length !== 0 &&
          <ContactList 
          foundContacts={foundContacts}
          state={this.props.contacts}
          filter={this.props.filter}
          onDeleteContact={this.props.onDeleteContact}
        />}
        
      </section>
    )
  }
};

const mapStateToProps = state => ({
  contacts: state.contacts,
  filter: state.filter
});

const mapDispatchToProps = dispatch => ({
  onStoreUpdate: contacts => dispatch(actions.onStoreUpdate(contacts)),
  onAddContact: contact => dispatch(actions.onAddContact(contact)),
  onDeleteContact: contactId => dispatch(actions.onDeleteContact(contactId)),
  onSearchContacts: event => dispatch(actions.onSearchContacts(event))
})

export default connect(mapStateToProps, mapDispatchToProps)(PhoneBook);