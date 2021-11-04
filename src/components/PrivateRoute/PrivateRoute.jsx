import { Redirect, Route } from "react-router-dom";
import { useSelector } from "react-redux";
import { authSelectors } from '../../redux/auth/auth-operations'
import  route  from '../utils/route/route'

export default function PrivateRoute({ children,
    redirectTo = route.homePage,
    ...routeProps
}) {
    const isLoggedIn = useSelector(authSelectors.getIsLoggedIn);
    return (
        <Route {...routeProps}>
            {isLoggedIn ? children : <Redirect to={redirectTo} />}
        </Route>
    );
}