import {createStore} from 'redux';
import {devToolsEnhancer} from 'redux-devtools-extension';
import actionTypes from './actionTypes';

const initialState = {
    contacts: [],
    filter: ''
};

const reducer = (state = initialState, {type, payload}) => {
    console.log("Store Log", state);
    switch (type) {
        case actionTypes.UPDATE_STORE :
            return {
                ...state,
                contacts: [...payload]
            }

        case actionTypes.ADD_CONTACT :
            return {
                ...state,
                contacts: [...state.contacts, payload]
            }
        
        case actionTypes.DELETE_CONTACT :
            return {
                ...state,
                contacts: state.contacts.filter(contact => contact.id !== payload)
            }

        case actionTypes.SEARCH_CONTACTS :
            return {
                ...state,
                filter: payload,
                // contacts: state.contacts.filter(contact => contact.name.toLowerCase().includes(payload))
            }

        default :
            return state;
    }
};

const store = createStore(reducer, devToolsEnhancer());

export default store;