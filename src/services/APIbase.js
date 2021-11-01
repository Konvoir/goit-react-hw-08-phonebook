import axios from "axios";

axios.defaults.baseURL = "http://localhost:3000";

export async function fetchContactsAPI() {
  const { data } = await axios.get("/contacts");
  return data;
}

export async function addContactAPI(contact) {
  const { data } = await axios.post(`/contacts`, contact);
  return data;
}

export async function deleteContactAPI(id) {
  await axios.delete(`/contacts/${id}`);
}
