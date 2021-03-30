import actionTypes from '../actionTypes';
import shortid from 'shortid';

const onAddContact = contact => ({
    type: actionTypes.ADD_CONTACT,
    payload: {
        id: shortid.generate(),
        name: contact.name,
        number: contact.number
    }
});

export default onAddContact;