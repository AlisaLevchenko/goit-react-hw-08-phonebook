import { Routes, Route, Navigate } from 'react-router-dom';
import { lazy, useEffect } from 'react';
import PrivateRoute from './rote/PrivateRoute';
import PublicRoute from './rote/PublicRoute';
import { getCurrentUser } from '../redux/auth/authOperations';
import { useDispatch, useSelector } from 'react-redux';
import { getIsAuth } from '../redux/auth/authSelector';
import MainWrapper from './mainWrapper/MainWrapper';

const HomePage = lazy(() => import('../pages/homePage/HomePage'));
const ContactsPage = lazy(() => import('../pages/contactsPage/ContactsPage'));
const SignupPage = lazy(() => import('../pages/signupPage/SignupPage'));
const LoginPage = lazy(() => import('../pages/loginPage/LoginPage'));

export default function App() {
  const token = useSelector(getIsAuth);
  const dispatch = useDispatch();

  useEffect(() => {
    if (token) {
      dispatch(getCurrentUser(token));
    }
    // eslint-disable-next-line
  }, []);

  return (
    <Routes>
      <Route path="/" element={<MainWrapper />}>
        <Route index element={<HomePage />} />
        <Route
          path="register"
          element={<PublicRoute component={SignupPage} restricted />}
        />
        <Route
          path="login"
          element={<PublicRoute component={LoginPage} restricted />}
        />
        <Route
          path="contacts"
          element={<PrivateRoute component={ContactsPage} />}
        />
      </Route>
      <Route path="*" element={<Navigate to="/login" />} />
    </Routes>
  );
}
