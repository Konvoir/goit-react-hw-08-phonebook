import { combineReducers, createReducer } from "@reduxjs/toolkit";
import * as actions from "./actions";

const isLoading = createReducer(false, {
  [actions.fetchContactsRequest]: () => true,
  [actions.fetchContactsSuccess]: () => false,
  [actions.fetchContactsError]: () => false,
});

const ContactReducer = createReducer([], {
  [actions.fetchContactsSuccess]: (_, action) => action.payload,

  [actions.addContactsSuccess]: (state, { payload }) => {
    const newContact = [...state, payload];
    return newContact;
  },

  [actions.deleteContactsSuccess]: (state, { payload }) => {
    return state.filter((contact) => contact.id !== payload);
  },
});

const filterContactReducer = createReducer("", {
  [actions.filterContact]: (_, { payload }) => {
    return payload.target.value;
  },
});
const ErrorReducer = createReducer(null, {
  [actions.fetchContactsError]: (_, action) =>
    "Oops, we have a problem! Try again later. =(",
  [actions.addContactsError]: (_, action) =>
    "Oops, something went wrong! Try again later. =(",
  [actions.deleteContactsError]: (_, action) =>
    "Oops, something went wrong! Try again later. =(",
});

const contactsReducer = combineReducers({
  items: ContactReducer,
  isLoading,
  filter: filterContactReducer,
  error: ErrorReducer,
});

export default contactsReducer;
