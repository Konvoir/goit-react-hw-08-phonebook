import { createSelector } from "@reduxjs/toolkit";

export const getItems = (state) => state.contacts.items;
export const getFilter = (state) => state.contacts.filter;
export const getVisibleContacts = createSelector(
  [getItems, getFilter],
  (items, filter) => {
    return items.filter(({ name }) => name.toLowerCase().includes(filter));
  }
);
export const getLoading = (state) => state.contacts.loading;
