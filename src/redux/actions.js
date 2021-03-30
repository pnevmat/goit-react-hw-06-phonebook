import actionTypes from './actionTypes';
import shortid from 'shortid';

const onStoreUpdate = contacts => ({
    type: actionTypes.UPDATE_STORE,
    payload: contacts
});

const onAddContact = contact => ({
    type: actionTypes.ADD_CONTACT,
    payload: {
        id: shortid.generate(),
        name: contact.name,
        number: contact.number
    }
});

const onDeleteContact = contactId => ({
    type: actionTypes.DELETE_CONTACT,
    payload: contactId
});

const onSearchContacts = event => ({
    type: actionTypes.SEARCH_CONTACTS,
    payload: event.target.value.toLowerCase()
});

export default {onAddContact, onStoreUpdate, onDeleteContact, onSearchContacts};