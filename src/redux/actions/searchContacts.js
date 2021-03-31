import {createAction} from '@reduxjs/toolkit';
import actionTypes from '../actionTypes';

// const onSearchContacts = event => ({
//     type: actionTypes.SEARCH_CONTACTS,
//     payload: event.target.value.toLowerCase()
// });

const onSearchContacts = createAction(actionTypes.SEARCH_CONTACTS, ({target}) => ({
    payload: target.value.toLowerCase()
}));

export default onSearchContacts;