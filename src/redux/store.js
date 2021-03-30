import {createStore, combineReducers} from 'redux';
import {devToolsEnhancer} from 'redux-devtools-extension';
import contactsReducer from './reducers/contactsReducer';
import filterReducer from './reducers/filterReducer';

const rootReducer = combineReducers({
    contacts: contactsReducer,
    filter: filterReducer
});

const store = createStore(rootReducer, devToolsEnhancer());

export default store;