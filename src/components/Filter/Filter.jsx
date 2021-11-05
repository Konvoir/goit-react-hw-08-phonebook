import PropTypes from "prop-types";
import { filterContact } from "../../redux/phonebook/actions";
import { useDispatch } from "react-redux";
import s from "./Filter.module.css";
import { v4 as uuidv4 } from "uuid";

function Filter() {
  const dispatch = useDispatch();

  const changeFilter = (e) => {
    return dispatch(filterContact(e));
  };
  return (
    <label className={s.label} htmlFor={uuidv4()}>
      Find contacts by name
      <input
        className={s.input}
        type="text"
        onChange={changeFilter}
        name="filter"
        required
      />
    </label>
  );
}

Filter.propTypes = {
  onChange: PropTypes.func,
};

export default Filter;
