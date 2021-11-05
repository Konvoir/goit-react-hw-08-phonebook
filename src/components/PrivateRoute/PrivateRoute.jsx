import { Route, Redirect } from "react-router";
import { useSelector } from "react-redux";
import { getIsAuth } from "../../redux/auth/authSelectors";

export default function PrivateRoute({ children, ...routeProps }) {
  const isAuth = useSelector(getIsAuth);
  return (
    <Route {...routeProps}>
      {isAuth ? children : <Redirect to="/users/login" />}
    </Route>
  );
}
