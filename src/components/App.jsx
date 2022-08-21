import ContactForm from './contactForm/ContactForm';
import ContactList from './contactsList/ContactsList';
import Filter from './filter/Filter';
import s from '../components/contactForm/ContactForm.module.css';
import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { getContacts } from '../redux/contacts/ContactsOperations';

export default function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getContacts());
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
