import actionTypes from '../actionTypes';

const onSearchContacts = event => ({
    type: actionTypes.SEARCH_CONTACTS,
    payload: event.target.value.toLowerCase()
});

export default onSearchContacts;