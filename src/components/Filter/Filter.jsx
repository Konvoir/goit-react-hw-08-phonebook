import { useDispatch, useSelector } from "react-redux";
import { filterContacts } from '../../redux/contacts/actions';
import { getFilter, getLoading } from '../../redux/contacts/selectors';
import s from './Filter.module.css';
import Spiner from '../SpinerLoader/SpinerLoader';

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