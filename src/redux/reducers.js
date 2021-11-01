import { combineReducers } from "redux";
import { createReducer } from "@reduxjs/toolkit";
import {
  addContactRequest,
  addContactSuccess,
  addContactError,
  deleteContactRequest,
  deleteContactSuccess,
  deleteContactError,
  filterContacts,
  fetchContactsRequest,
  fetchContactsSuccess,
  fetchContactsError,
} from "./actions";

// const contactsInitialState = {
//   items: [],
//   filter: "",
// };

const items = createReducer([], {
  [fetchContactsSuccess]: (_, { payload }) => {
    return payload;
  },
  [addContactSuccess]: (state, { payload }) => {
    return [...state, payload];
  },
  [deleteContactSuccess]: (state, { payload }) => {
    return state.filter(({ id }) => id !== payload);
  },
});

const filter = createReducer("", {
  [filterContacts]: (_, { payload }) => {
    return payload.toLowerCase();
  },
});

const error = createReducer(null, {
  [addContactError]: (_, action) => window.alert(action.payload),
  [deleteContactError]: (_, action) => action.payload,
});

export default combineReducers({
  items,
  filter,
  error,
});
