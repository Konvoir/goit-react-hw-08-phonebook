import axios from "axios";

import {
  addContactRequest,
  addContactSuccess,
  addContactError,
  deleteContactRequest,
  deleteContactSuccess,
  deleteContactError,
  changeFilter,
  // toggleCompletedRequest,
  // toggleCompletedSuccess,
  // toggleCompletedError,
  fetchContactsRequest,
  fetchContactsSuccess,
  fetchContactsError,
} from "../actions";

import {
  addContactAPI,
  deleteContactAPI,
  fetchContactsAPI,
} from "../../services/APIbase";

const fetchContacts = () => async (dispatch) => {
  dispatch(fetchContactsRequest());
  try {
    const contacts = await fetchContactsAPI();
    dispatch(fetchContactsSuccess(contacts));
  } catch (error) {
    dispatch(fetchContactsError(error));
  }
};

const addContact = (contact) => async (dispatch) => {
  dispatch(addContactRequest());
  const gettingData = await fetchContactsAPI();
  if (gettingData) {
    const nameArray = gettingData.map((item) => item.name);
    const alreadyInContacts = nameArray.includes(contact.name);
    if (!alreadyInContacts) {
      try {
        const addingContact = await addContactAPI(contact);
        dispatch(addContactSuccess(addingContact));
      } catch (error) {
        dispatch(addContactError(error));
      }
    } else {
      dispatch(addContactError(`${contact.name} is already in contacts`));
    }
  }
};

const deleteContacts = (id) => async (dispatch) => {
  dispatch(deleteContactRequest());
  try {
    await deleteContactAPI(id);
    dispatch(deleteContactSuccess(id));
  } catch (error) {
    dispatch(deleteContactError(error));
  }
};

// const toggleCompleted = ({ id, completed }) => dispatch => {
//   const update = { completed };

//   dispatch(toggleCompletedRequest());

//   axios
//     .patch(`/tasks/${id}`, update)
//     .then(({ data }) => dispatch(toggleCompletedSuccess(data)))
//     .catch(error => dispatch(toggleCompletedError(error.message)));
// };

const contactsOperations = {
  // fetchTodos,
  addTodo,
  deleteTodo,
  toggleCompleted,
};
export default contactsOperations;
