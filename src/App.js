import React, { useEffect, Suspense, lazy } from "react";
import { Switch } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import PrivateRoute from "./components/PrivateRoute/PrivateRoute";
import AppBar from "./components/AppBar/AppBar.jsx";
import Container from "./components/Container/Container.jsx";
import Spiner from "./components/SpinerLoader/SpinerLoader";
import { authSelectors, authOperations } from "./redux/auth";
import route from "./components/utils/route/route";
import PublicRoute from "./components/PublicRoute/PublicRoute.jsx";
// import { ToastContainer } from 'react-toastify';
// import 'react-toastify/dist/ReactToastify.css';
const HomePage = lazy(() => import("./views/HomeView/HomeView.jsx"));
const RegisterPage = lazy(() =>
  import("./views/RegisterView/RegisterView.jsx")
);
const LoginPage = lazy(() => import("./views/LoginView/LoginView.jsx"));
const PrivateContactsView = lazy(() =>
  import("./views/PrivateContactsView/PrivateContactsView.jsx")
);

export default function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(authOperations.fetchCurrentUser());
  }, [dispatch]);
  const isFetchingCurrentUser = useSelector(authSelectors.getIsFetchingCurrent);
  return isFetchingCurrentUser ? (
    <Spiner />
  ) : (
    <Container>
      <AppBar />

      <Switch>
        <Suspense fallback={<p>Loading...</p>}>
          {/* SPINER */}
          <PublicRoute exact path={route.homePage}>
            <HomePage />
          </PublicRoute>

          <PublicRoute
            exact
            path={route.register}
            redirectTo={route.privateContacts}
            restricted
          >
            <RegisterPage />
          </PublicRoute>

          <PublicRoute
            exact
            path={route.login}
            redirectTo={route.privateContacts}
            restricted
          >
            <LoginPage />
          </PublicRoute>

          <PrivateRoute path={route.privateContacts} redirectTo={route.login}>
            <PrivateContactsView />
          </PrivateRoute>

          {/* <Route path="/login" component={LoginView} /> */}
        </Suspense>
      </Switch>
    </Container>
  );
}
