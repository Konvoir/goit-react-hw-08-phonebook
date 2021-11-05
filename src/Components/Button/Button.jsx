import PropTypes from "prop-types";
import Btn from "@mui/material/Button";
import s from "./Button.module.css";
function Button({ type, buttonName, handleClick, id }) {
  return (
    // <button className={s.button} onClick={handleClick} id={id} type={type}>
    //   {buttonName}
    // </button>
    <Btn
      className={s.button}
      variant="contained"
      size="small"
      type={type}
      id={id}
      onClick={handleClick}
    >
      {buttonName}
    </Btn>
  );
}

Button.propTypes = {
  type: PropTypes.string,

  handleClick: PropTypes.func,
};

export default Button;
