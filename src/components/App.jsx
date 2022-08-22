import { Routes, Route, Navigate } from 'react-router-dom';
import {
  lazy,
  useEffect,
  // useState
} from 'react';
import { getCurrentUser } from '../redux/auth/authOperations';
import { useDispatch, useSelector } from 'react-redux';
import { getIsAuth } from '../redux/auth/authSelector';
import MainWrapper from './mainWrapper/MainWrapper';
import { token as axiosToken } from '../api/Mockapi';

const HomePage = lazy(() => import('../pages/homePage/HomePage'));
const ContactsPage = lazy(() => import('../pages/contactsPage/ContactsPage'));
const SignupPage = lazy(() => import('../pages/signupPage/SignupPage'));
const LoginPage = lazy(() => import('../pages/loginPage/LoginPage'));

export default function App() {
  const token = useSelector(getIsAuth);
  const dispatch = useDispatch();

  useEffect(() => {
    console.log(token);
    dispatch(getCurrentUser(token));
    // axiosToken.set(token);
    // eslint-disable-next-line
  }, []);

  return (
    <Routes>
      <Route path="/" element={<MainWrapper />}>
        <Route index element={<HomePage />} />
        <Route path="register" element={<SignupPage />} />
        <Route path="login" element={<LoginPage />} />
        <Route path="contacts" element={<ContactsPage />} />
        <Route path="*" element={<Navigate to="/login" />} />
      </Route>
    </Routes>
  );
}
