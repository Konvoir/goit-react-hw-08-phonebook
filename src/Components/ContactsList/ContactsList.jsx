// import { removeContact } from "../../redux/actions";
import { useDispatch, useSelector } from "react-redux";
import * as contactsOperations from "../../redux/phonebook/operations";
import {
  getVisibleContacts,
  getIsLoading,
} from "../../redux/phonebook/contacts-selectors.js";
import { useEffect } from "react";
import PropTypes from "prop-types";
import s from "./ContactsList.module.css";
import DeleteIcon from "@mui/icons-material/Delete";
import "react-loader-spinner/dist/loader/css/react-spinner-loader.css";
import Loader from "react-loader-spinner";
import Button from "../Button/Button";

function ContactsList() {
  const contacts = useSelector(getVisibleContacts);
  const isLoading = useSelector(getIsLoading);
  const dispatch = useDispatch();

  useEffect(() => dispatch(contactsOperations.fetchContacts()), [dispatch]);

  const handleRemove = (id) => dispatch(contactsOperations.deleteContacts(id));

  return (
    <ul className={s.list}>
      {isLoading ? (
        <Loader
          className={s.loader}
          type="ThreeDots"
          color="#ee9530"
          height={70}
          width={70}
        />
      ) : (
        contacts.map(({ id, name, number, avatar=null }, summ) => {
          return (
            <li className={s.item} key={id}>
            {/* <img src={avatar} alt="" className={s.image} /> */}
              <p>
                {summ + 1}. {name}: {number}
              </p>
              <Button
                type="button"
                handleClick={(e) => {
                  handleRemove(e.currentTarget.id);
                }}
                buttonName={<DeleteIcon />}
                id={id}
              />
            </li>
          );
        })
      )}
    </ul>
  );
}
ContactsList.propTypes = {
  contactsList: PropTypes.array,
  handleRemove: PropTypes.func,
};

export default ContactsList;
