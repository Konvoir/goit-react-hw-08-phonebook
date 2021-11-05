import { createSelector } from "@reduxjs/toolkit";

const getContacts = (state) => state.contacts.items;
const getFilter = (state) => state.contacts.filter;
const getIsLoading = (state) => state.contacts.isLoading;
const getHandleError = (state) => state.contacts.error;
const getVisibleContacts = createSelector(
  [getContacts, getFilter],
  (contacts, filter) => {
    const normalizedFilter = filter.toLowerCase();
    return contacts.filter((contact) => {
      return contact.name.toLowerCase().includes(normalizedFilter);
    });
  }
);

export {
  getContacts,
  getFilter,
  getVisibleContacts,
  getIsLoading,
  getHandleError,
};
