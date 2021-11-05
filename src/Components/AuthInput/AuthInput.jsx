import TextField from "@mui/material/TextField";
import { v4 as uuidv4 } from "uuid";
import s from "./AuthInput.module.css";

export default function AuthInput({
  name,
  label,
  handleChange,
  type = "text",
}) {
  return (
    <label className={s.input}>
      <TextField
        size="small"
        required
        id={uuidv4()}
        name={name}
        type={type}
        label={label}
        onChange={handleChange}
        variant="filled"
      />
    </label>
  );
}
