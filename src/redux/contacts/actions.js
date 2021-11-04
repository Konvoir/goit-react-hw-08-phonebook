import { createAction } from "@reduxjs/toolkit";

export const fetchContactsRequest = createAction("contacts/fetchRequest");
export const fetchContactsSuccess = createAction("contacts/fetchSuccess");
export const fetchContactsError = createAction("contacts/fetchError");

export const addContactRequest = createAction("contacts/addRequest");
export const addContactSuccess = createAction("contacts/faddSuccess");
export const addContactError = createAction("contacts/addError");

export const deleteContactRequest = createAction("contacts/deleteRequest");
export const deleteContactSuccess = createAction("contacts/deleteSuccess");
export const deleteContactError = createAction("contacts/deleteError");

// export const deleteContact = createAction("contacts/delete");
export const filterContacts = createAction("contacts/filterContacts");
export const toggleCompletedRequest = createAction(
  "contacts/toggleCompletedRequest"
);
export const toggleCompletedSuccess = createAction(
  "contacts/toggleCompletedSuccess"
);
export const toggleCompletedError = createAction(
  "contacts/toggleCompletedError"
);

export const changeFilter = createAction("contacts/changeFilter");
