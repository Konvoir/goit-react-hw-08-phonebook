import { useCallback, useState } from "react";
import { useDispatch } from 'react-redux';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import Button from '@material-ui/core/Button';
import { Link } from 'react-router-dom';
import routes from 'utils/routes';
import { logIn } from 'redux/Auth/usersAPI';
import styles from './styles.module.css';

const INITIAL_VALUES = {
  email: '',
  password: '',
};
export default function LogIn() {
  const [showPassword, setShowPassword] = useState(false);
  const dispatch = useDispatch();

  const onClickToggle = useCallback(prevState => {
    setShowPassword(prevState => !prevState);
  }, []);

  const validate = useCallback(values => {
    const errors = {};
    if (!values.email) {
      errors.email = 'Required';
    } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)) {
      errors.email = 'Invalid email address';
    }
    return errors;
  }, []);

  const handleSubmit = useCallback(
    (values, { setSubmitting }) => {
      dispatch(logIn(values));
      setSubmitting(false);
    },
    [dispatch],
  );

  return (
    <div>
      <h1 className={styles.form_title}>Login form</h1>
      <Formik
        initialValues={INITIAL_VALUES}
        validate={validate}
        onSubmit={handleSubmit}
      >
        {({
          values,
          errors,
          touched,
          handleChange,
          handleBlur,
          handleSubmit,
          isSubmitting,
        }) => (
          <Form className={styles.form}>
            <label htmlFor="email">Email </label>
            <Field
              className={styles.form_field}
              type="email"
              name="email"
              placeholder="Enter email"
              onBlur={handleBlur}
            />
            <br />
            <ErrorMessage
              className={styles.error_message}
              name="email"
              component="div"
            />
            <label htmlFor="password">Password </label>
            <Field
              className={styles.form_field}
              type={showPassword ? 'text' : 'password'}
              name="password"
              placeholder="Enter password"
              onBlur={handleBlur}
            />
            <ErrorMessage
              className={styles.error_message}
              name="password"
              component="div"
            />
            <button type="button" onClick={onClickToggle}>
              Show password
            </button>
            <br />
            <Button
              className={styles.form_btn}
              color="primary"
              variant="contained"
              type="submit"
              disabled={
                isSubmitting ||
                !(
                  Object.keys(touched).length ===
                    Object.keys(INITIAL_VALUES).length &&
                  values.password.length !== 0 &&
                  Object.keys(errors).length === 0
                )
              }
            >
              Submit
            </Button>
          </Form>
        )}
      </Formik>
      <Link to={routes.registration} className={styles.link}>
        Have not account yet?We are waiting for you on registration page!
      </Link>
    </div>
  );
}