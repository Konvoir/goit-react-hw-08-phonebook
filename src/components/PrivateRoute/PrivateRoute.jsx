import { Redirect, Route } from "react-router-dom";
import { useSelector } from "react-redux";
import { authSelectors } from '../../redux/auth/auth-operations'

export default function PrivateRoute({ children, ...routeProps }) {
    const isLoggedIn = useSelector(authSelectors.getIsLoggedIn);
    return (
        <Route {...routeProps}>
            {isLoggedIn ? children : <Redirect to="/login" />}
        </Route>
    );
}