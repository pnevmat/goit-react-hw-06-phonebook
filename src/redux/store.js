// import {createStore, combineReducers} from 'redux';
// import {devToolsEnhancer} from 'redux-devtools-extension';
import {configureStore, combineReducers, getDefaultMiddleware} from '@reduxjs/toolkit';

import contactsReducer from './reducers/contactsReducer';
import filterReducer from './reducers/filterReducer';

import logger from 'redux-logger';

// const rootReducer = combineReducers({
//     contacts: contactsReducer,
//     filter: filterReducer
// });

// const store = createStore(rootReducer, devToolsEnhancer());

// const store = configureStore({
//     reducer: rootReducer
// });

const store = configureStore({
    reducer: {
        contacts: contactsReducer,
        filter: filterReducer
    },
    middleware: [
        ...getDefaultMiddleware(),
        logger
    ],
    devTools: process.env.NODE_ENV === 'development'
});

export default store;