import actionTypes from '../actionTypes';

const onDeleteContact = contactId => ({
    type: actionTypes.DELETE_CONTACT,
    payload: contactId
});

export default onDeleteContact;