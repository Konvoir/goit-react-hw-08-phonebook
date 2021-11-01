import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { deleteContacts, fetchContacts } from '../../redux/operations';
import { getVisibleContacts } from '../../redux/selectors';
import s from './Contacts.module.css';

export default function Contacts() {
    const contactsItem = useSelector(getVisibleContacts);
    const dispatch = useDispatch();
    useEffect(() => dispatch(fetchContacts()), [dispatch]);

    if (contactsItem) {
        return (
            <ul className={s.list}>
                {contactsItem.map(item => (
                    <li key={item.id} className={s.item}>
                        <p className={s.text}>
                            {item.name}: {item.number}
                        </p>
                        <button
                            className={s.btn}
                            type="button"
                            onClick={() => dispatch(deleteContacts(item.id))}
                        >
                            Delete
                        </button>
                    </li>
                ))}
            </ul>
        );
    }
    return;
}