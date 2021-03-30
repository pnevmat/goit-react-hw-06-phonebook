import actionTypes from '../actionTypes';

const contactsReducer = (state = [], {type, payload}) => {
    switch (type) {
        case actionTypes.UPDATE_STORE :
            return [...payload]

        case actionTypes.ADD_CONTACT :
            return [...state, payload]

        case actionTypes.DELETE_CONTACT :
            return state.filter(contact => contact.id !== payload)
        
        default :
            return state;
    }
}

export default contactsReducer;