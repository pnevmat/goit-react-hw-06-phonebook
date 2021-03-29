import {createStore} from 'redux';
import {devToolsEnhancer} from 'redux-devtools-extension';

const initialState = {
    contacts: [],
    filter: ''
};

const reducer = (state = initialState, {type, payload}) => {
    console.log("Store Log", state);
    switch (type) {
        case 'update/store' :
            return {
                ...state,
                contacts: [...payload]
            }

        case 'add/contact' :
            return {
                ...state,
                contacts: [...state.contacts, payload]
            }
        
        case 'delete/contact' :
            return {
                ...state,
                contacts: state.contacts.filter(contact => contact.id !== payload)
            }

        case 'search/contacts' :
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