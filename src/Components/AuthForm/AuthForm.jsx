import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { userLogin, userRegister } from "../../redux/auth/authOperations";
import { Link } from "react-router-dom";
import { useParams } from "react-router";
import s from "./AuthForm.module.css";
import Button from "../Button/Button";
import HandleError from "../HandleError/HandleError";
import { getAuthError } from "../../redux/auth/authSelectors";
import AuthInput from "../AuthInput/AuthInput";

export default function AuthForm() {
  const [dataForm, setDataForm] = useState({
    name: "",
    email: "",
    password: "",
  });
  const dispatch = useDispatch();
  const error = useSelector(getAuthError);
  const { authType } = useParams();

  const handleSubmit = (e) => {
    e.preventDefault();
    if (dataForm.password.length < 8) {
      alert("Password must be at least 8 characters");
    }
    if (authType === "signup") {
      dispatch(userRegister(dataForm));
    } else {
      dispatch(userLogin(dataForm));
    }
  };

  const handleChange = (e) => {
    const { name, value } = e.target;

    setDataForm((prev) => ({ ...prev, [name]: value }));
  };
  return (
    <div className={s.wrapper}>
      <h2 className={s.title}>{authType === "signup" ? "Sign up" : "Login"}</h2>
      <form className={s.form} onSubmit={handleSubmit}>
        {authType === "signup" && (
          <AuthInput handleChange={handleChange} name="name" label="Name" />
        )}
        <AuthInput
          handleChange={handleChange}
          name="email"
          label="Email"
          type="email"
        />
        <AuthInput
          handleChange={handleChange}
          name="password"
          label="Password"
          type="password"
        />
        <Button
          type="submit"
          buttonName={authType !== "signup" ? "Login" : "Sign Up"}
        />
      </form>
      {authType !== "signup" && (
        <p className={s.registration}>
          <Link to="/users/signup">Or register quickly here!</Link>{" "}
        </p>
      )}
      <HandleError error={error} />
    </div>
  );
}
