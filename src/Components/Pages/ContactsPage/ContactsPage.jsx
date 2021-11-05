import { useSelector } from "react-redux";
import ContactForm from "../../ContactForm/ContactForm";
import ContactsList from "../../ContactsList/ContactsList";
import Filter from "../../Filter/Filter";
import HandleError from "../../HandleError/HandleError";
import s from "./ContactsPage.module.css";
import { getHandleError } from "../../../redux/phonebook/contacts-selectors";

export default function ContactsPage() {
  const error = useSelector(getHandleError);
  return (
    <div className={s.container}>
      {/* <h1 className={s.mainTitle}>Phonebook</h1> */}
      <ContactForm />
      <h2 className={s.contactsTitle}>Contacts</h2>
      <Filter />
      <ContactsList />
      <HandleError error={error} />
    </div>
  );
}
