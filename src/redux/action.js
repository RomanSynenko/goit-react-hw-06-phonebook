import { v4 as uuidv4 } from 'uuid';
import { createAction } from '@reduxjs/toolkit';


const addContact = createAction('contact/add', data => ({
    payload: {
        id: uuidv4(),
        ...data,
    },
}));
const deleteContact = createAction('contact/delete');
const filterContact = createAction('contact/changeFilter');

export default { addContact, deleteContact, filterContact };
