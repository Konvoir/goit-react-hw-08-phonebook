import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addContact } from '../../redux/contacts/operations';
import s from './Form.module.css';
import Spiner from '../SpinerLoader/SpinerLoader';
import { getLoading } from '../../redux/contacts/selectors';

export default function Form() {
    const [name, setName] = useState('');
    const [number, setNumber] = useState('');
    const dispatch = useDispatch();
    const isLoaded = useSelector(getLoading);

    const handleInput = event => {
        const { name, value } = event.currentTarget;
        if (name === 'name') {
            setName(value);
        } else if (name === 'number') {
            setNumber(value);
        }
    };
    const handleSubmit = event => {
        event.preventDefault();
        dispatch(
            addContact({
                name,
                number,
            }),
        );
        reset();
    };

    const reset = () => {
        setName('');
        setNumber('');
    };

    if (isLoaded) { return <Spiner /> }
    
    return (
        <form onSubmit={handleSubmit} className={s.form}>
            <label className={s.label}>
                Name
                <input
                    className={s.input}
                    value={name}
                    onChange={handleInput}
                    type="text"
                    name="name"
                    pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
                    title="Имя может состоять только из букв, апострофа, тире и пробелов. Например Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan и т. п."
                    required
                />
            </label>
            <label className={s.label}>
                Number
                <input
                    className={s.input}
                    value={number}
                    onChange={handleInput}
                    type="tel"
                    name="number"
                    pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
                    title="Номер телефона должен состоять цифр и может содержать пробелы, тире, круглые скобки и может начинаться с +"
                    required
                />
            </label>
            <button type="submit" className={s.btn}>
                Add to contacts
            </button>
        </form>
    );
}