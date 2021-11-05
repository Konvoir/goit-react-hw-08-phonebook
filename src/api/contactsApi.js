import axios from "axios";

axios.defaults.baseURL = "https://connections-api.herokuapp.com/";

export async function registerUserApi(userData) {
  const { data } = await axios.post("/users/signup", userData);
  return data;
}

export async function loginUserApi(userData) {
  const { data } = await axios.post("/users/login", userData);
  return data;
}

export async function logOutUserApi() {
  await axios.post("/users/logout");
}

export async function fetchCurrentUser() {
  await axios.get("/users/current");
}

export async function fetchContacts() {
  const { data } = await axios.get("/contacts");
  return data;
}

export async function postContact(contact) {
  const { data } = await axios.post("/contacts", contact);
  return data;
}

export async function deleteContact(contactId) {
  const { data } = await axios.delete(`/contacts/${contactId}`);
  return data;
}
