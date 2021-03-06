import { lazy, Suspense, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { authOperations, authSelectors } from 'redux/auth';
import { Switch, Route } from 'react-router-dom';
import PrivateRoute from './PrivateRoute';
import PublicRoute from './PublicRoute';
import AppBar from './AppBar';
import Layout from 'components/Layout';
import BackTopScroll from './BackTopScroll';
import LoaderSpinner from './LoaderSpinner';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import './App.module.scss';

const HomeView = lazy(() =>
  import('../views/HomeView' /* webpackChunkName: "home-view" */),
);
const RegisterView = lazy(() =>
  import('../views/RegisterView' /* webpackChunkName: "register-view" */),
);
const NotFoundView = lazy(() =>
  import('../views/NotFoundView' /* webpackChunkName: "not-found-view" */),
);
const LoginView = lazy(() =>
  import('../views/LoginView' /* webpackChunkName: "login-view" */),
);
const ContactsView = lazy(() =>
  import('../views/ContactsView' /* webpackChunkName: "contacts-view" */),
);

function App() {
  const dispatch = useDispatch();
  const isLoading = useSelector(authSelectors.getLoading);

  useEffect(() => {
    dispatch(authOperations.fetchCurrentUser());
  }, [dispatch]);

  return (
    !isLoading && (
      <>
        <AppBar />

        <Layout>
          <BackTopScroll />
          <Suspense fallback={<LoaderSpinner />}>
            <Switch>
              <PublicRoute path="/" exact>
                <HomeView />
              </PublicRoute>

              <PublicRoute path="/register" redirectTo="/contacts" restricted>
                <RegisterView />
              </PublicRoute>

              <PublicRoute path="/login" redirectTo="/contacts" restricted>
                <LoginView />
              </PublicRoute>

              <PrivateRoute path="/contacts" redirectTo="/login">
                <ContactsView />
              </PrivateRoute>

              <Route>
                <NotFoundView />
              </Route>
            </Switch>
          </Suspense>

          <ToastContainer autoClose={3000} position="top-center" />
        </Layout>
      </>
    )
  );
}

export default App;
