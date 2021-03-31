import {createReducer} from '@reduxjs/toolkit';

// import actionTypes from '../actionTypes';
import onStoreUpdate from '../actions/didMountStoreUpdate';
import onAddContact from '../actions/addContact';
import onDeleteContact from '../actions/deleteContact';

// const contactsReducer = (state = [], {type, payload}) => {
//     switch (type) {
//         case actionTypes.UPDATE_STORE :
//             return [...payload]

//         case actionTypes.ADD_CONTACT :
//             return [...state, payload]

//         case actionTypes.DELETE_CONTACT :
//             return state.filter(contact => contact.id !== payload)
        
//         default :
//             return state;
//     }
// }

// const state = []

const contactsReducer = createReducer([], {
    [onStoreUpdate]: (_, {payload}) => [...payload],
    [onAddContact]: (state, {payload}) => [...state, payload],
    [onDeleteContact]: (state, {payload}) => state.filter(contact => contact.id !== payload)
});

export default contactsReducer;