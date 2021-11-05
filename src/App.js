import { Switch, Redirect } from "react-router-dom";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import Nav from "./Components/Nav/Nav";
import ContactsPage from "./Components/Pages/ContactsPage/ContactsPage";
import "./App.css";
import AuthPage from "./Components/Pages/AuthPage/AuthPage";
import PrivateRoute from "./Components/PrivateRoute/PrivateRoute";
import { currentUser } from "./redux/auth/authOperations";
import PublicRoute from "./Components/PublicRoute/PublicRoute";
import { getIsAuth } from "./redux/auth/authSelectors";

function App() {
  const isAuth = useSelector(getIsAuth);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(currentUser());
  }, [dispatch]);

  return (
    <div className="container">
      <Nav />
      <Switch>
        <PublicRoute path="/users/:authType" restricted>
          <AuthPage />
        </PublicRoute>
        <PrivateRoute path="/contacts">
          <ContactsPage />
        </PrivateRoute>
      </Switch>
      {isAuth ? <Redirect to="/contacts" /> : <Redirect to="/users/login" />}
    </div>
  );
}

export default App;
