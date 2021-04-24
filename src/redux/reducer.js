import { combineReducers } from 'redux';
import { createReducer } from '@reduxjs/toolkit';

import action from './action';

const items = createReducer([], {
    [action.addContact]: (state, { payload }) => [...state, payload],
    [action.deleteContact]: (state, { payload }) =>
        state.filter(contact => contact.id !== payload),
});

const filter = createReducer('', {
    [action.filterContact]: (_, { payload }) => payload,
});

export default combineReducers({
    items,
    filter,
});