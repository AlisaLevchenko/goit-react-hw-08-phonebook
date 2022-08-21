import { useDispatch, useSelector } from 'react-redux';
import React, { useEffect } from 'react';
import ContactForm from '../../components/contactForm/ContactForm';
import ContactList from '../../components/contactsList/ContactsList';
import Filter from '../../components/filter/Filter';
import { getIsAuth } from '../../redux/auth/authSelector';
import { getContacts } from '../../redux/contacts/ContactsOperations';
import s from '../../components/contactForm/ContactForm.module.css';

export default function ContactsPage() {
  const dispatch = useDispatch();
  const token = useSelector(getIsAuth);
  useEffect(() => {
    dispatch(getContacts(token));
    // eslint-disable-next-line
  }, []);
  return (
    <div className={s.container}>
      <h1 className={s.title}>Phonebook</h1>
      <ContactForm />
      <h1 className={s.title}>Contacts</h1>
      <Filter />
      <ContactList />
    </div>
  );
}
