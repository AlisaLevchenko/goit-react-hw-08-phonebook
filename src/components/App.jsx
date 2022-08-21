import { Routes, Route, Navigate } from 'react-router-dom';
import { lazy, useEffect } from 'react';

import { useDispatch } from 'react-redux';
import { getContacts } from '../redux/contacts/ContactsOperations';
import MainWrapper from './mainWrapper/MainWrapper';

const HomePage = lazy(() => import('../pages/homePage/HomePage'));
const ContactsPage = lazy(() => import('../pages/contactsPage/ContactsPage'));
const SignupPage = lazy(() => import('../pages/signupPage/SignupPage'));
// const LoginPage = lazy(() => import('../pages/loginPage/LoginPage'));

export default function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getContacts());
    // eslint-disable-next-line
  }, []);

  return (
    <>
      <Routes>
        <Route path="/" element={<MainWrapper />}>
          <Route index element={<HomePage />} />
          <Route path="contacts" element={<ContactsPage />} />
          <Route path="register" element={<SignupPage />} />
          {/* <Route path="login" element={<LoginPage />} /> */}
          <Route path="*" element={<Navigate to="/" />} />
        </Route>
      </Routes>
    </>

    // <div className={s.container}>
    //   <h1 className={s.title}>Phonebook</h1>
    //   <ContactForm />
    //   <h1 className={s.title}>Contacts</h1>
    //   <Filter />
    //   <ContactList />
    // </div>
  );
}
