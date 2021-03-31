import {createAction} from '@reduxjs/toolkit';
import actionTypes from '../actionTypes';

// const onStoreUpdate = contacts => ({
//     type: actionTypes.UPDATE_STORE,
//     payload: contacts
// });

const onStoreUpdate = createAction(actionTypes.UPDATE_STORE);

export default onStoreUpdate;