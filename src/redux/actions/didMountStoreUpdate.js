import actionTypes from '../actionTypes';

const onStoreUpdate = contacts => ({
    type: actionTypes.UPDATE_STORE,
    payload: contacts
});

export default onStoreUpdate;