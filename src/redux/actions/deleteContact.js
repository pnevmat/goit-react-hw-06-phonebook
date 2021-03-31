import {createAction} from '@reduxjs/toolkit';
import actionTypes from '../actionTypes';

// const onDeleteContact = contactId => ({
//     type: actionTypes.DELETE_CONTACT,
//     payload: contactId
// });

const onDeleteContact = createAction(actionTypes.DELETE_CONTACT);

export default onDeleteContact;