import { Redirect, Route } from "react-router-dom";
import { useSelector } from "react-redux";
import { authSelectors } from '../../redux/auth';
import  route  from "../utils/route/route.jsx";

export default function PublicRoute({
    children,
    restricted = false,
    ...routeProps }) {
    const isLoggedIn = useSelector(authSelectors.getIsLoggedIn);
    const shouldRedirect = isLoggedIn && restricted;
    return (
        <Route {...routeProps}>
            {shouldRedirect ? <Redirect to="/" /> : children}
        </Route>
    );
}