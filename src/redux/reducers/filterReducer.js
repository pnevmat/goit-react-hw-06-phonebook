import actionTypes from '../actionTypes';

const filterReducer = (state = '', {type, payload}) => {
    switch (type) {
        case actionTypes.SEARCH_CONTACTS :
            return payload

        default :
            return state;
    }
}

export default filterReducer;