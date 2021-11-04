import React, { useEffect, Suspense, lazy } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Switch } from "react-router-dom";
import AppBar from "./components/AppBar/AppBar.jsx";
import Container from "./components/Container/Container.jsx";
// import Contacts from "./components/Contacts/Contacts";
// import Form from "./components/Form/Form";
// import Filter from "./components/Filter/Filter";
import { authSelectors, authOperations } from "./redux/auth";
// import { PrivateRoute } from "./components/PrivateRoute/PrivateRoute.jsx";
import PublicRoute from "./components/PublicRoute/PublicRoute.jsx";

const HomeView = lazy(() => import("./views/HomeView/HomeView.jsx"));
const RegisterView = lazy(() =>
  import("./views/RegisterView/RegisterView.jsx")
);
const LoginView = lazy(() => import("./views/LoginView/LoginView.jsx"));

export default function App() {
  const dispatch = useDispatch();
  const isFetchingCurrentUser = useSelector(authSelectors.getIsFetchingCurrent);

  useEffect(() => {
    dispatch(authOperations.fetchCurrentUser());
  }, [dispatch]);
  return (
    <Container>
      {isFetchingCurrentUser ? (
        <h1>Show React Skeleton</h1>
      ) : (
        <>
          <AppBar />

          <Switch>
            <Suspense fallback={<p>Loading...</p>}>
              {/* <PublicRoute */}
              <PublicRoute exact path="/">
                <HomeView />
              </PublicRoute>

              <PublicRoute exact path="/register" restricted>
                <RegisterView />
              </PublicRoute>

              <PublicRoute exact path="/login" restricted>
                <LoginView />
              </PublicRoute>

              {/* <Route path="/login" component={LoginView} /> */}
              <h1>Phonebook</h1>
              <Form />
              <h2>Contacts</h2>
              <Filter />
              <Contacts />
            </Suspense>
          </Switch>
        </>
      )}
    </Container>
  );
}
