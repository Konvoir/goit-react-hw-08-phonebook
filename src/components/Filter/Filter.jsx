import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { filterContacts } from '../../redux/actions';
import { getFilter } from '../../redux/selectors';
import s from './Filter.module.css';
import Spiner from '../SpinerLoader/SpinerLoader';
import { getLoading } from '../../redux/selectors';

export default function Filter() {
    const value = useSelector(getFilter);
    const dispatch = useDispatch();
    const isLoaded = useSelector(getLoading);
    
    if (isLoaded) { return <Spiner /> }

    return (
        <div className={s.wrapper}>
            <label className={s.label}>
                Find contacts by name
                <input
                    className={s.input}
                    type="text"
                    name="filter"
                    value={value}
                    onChange={e => dispatch(filterContacts(e.target.value))}
                ></input>
            </label>
        </div>
    );
}