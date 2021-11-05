import { Route, Redirect } from "react-router";
import { useSelector } from "react-redux";
import { getIsAuth } from "../../redux/auth/authSelectors";

export default function PublicRoute({
  children,
  restricted = false,
  ...routeProps
}) {
  const isAuth = useSelector(getIsAuth);
  const shouldRedirect = isAuth && restricted;

  return (
    <Route {...routeProps}>
      {shouldRedirect ? <Redirect to="/contacts" /> : children}
    </Route>
  );
}
