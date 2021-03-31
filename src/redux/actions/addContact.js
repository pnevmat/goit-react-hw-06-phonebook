import {createAction} from '@reduxjs/toolkit';
import actionTypes from '../actionTypes';
import shortid from 'shortid';

// const onAddContact = contact => ({
//     type: actionTypes.ADD_CONTACT,
//     payload: {
//         id: shortid.generate(),
//         name: contact.name,
//         number: contact.number
//     }
// });

const onAddContact = createAction(actionTypes.ADD_CONTACT, ({name, number}) => ({
    payload: {
        id: shortid.generate(),
        name: name,
        number: number
    }
}));

export default onAddContact;