import shortid from 'shortid';

const onStoreUpdate = contacts => ({
    type: 'update/store',
    payload: contacts
});

const onAddContact = contact => ({
    type: 'add/contact',
    payload: {
        id: shortid.generate(),
        name: contact.name,
        number: contact.number
    }
});

const onDeleteContact = contactId => ({
    type: 'delete/contact',
    payload: contactId
});

const onSearchContacts = event => ({
    type: 'search/contacts',
    payload: event.target.value.toLowerCase()
});

export default {onAddContact, onStoreUpdate, onDeleteContact, onSearchContacts};