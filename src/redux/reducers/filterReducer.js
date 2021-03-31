import {createReducer} from '@reduxjs/toolkit';

// import actionTypes from '../actionTypes';
import onSearchContacts from '../actions/searchContacts';

// const filterReducer = (state = '', {type, payload}) => {
//     switch (type) {
//         case actionTypes.SEARCH_CONTACTS :
//             return payload

//         default :
//             return state;
//     }
// }

const filterReducer = createReducer('', {
    [onSearchContacts]: (_, {payload}) => payload
});

export default filterReducer;