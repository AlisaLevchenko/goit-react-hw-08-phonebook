// import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import {
  // getContacts,
  removeContacts,
} from '../../redux/contacts/ContactsOperations';
import {
  getFilteredContacts,
  getIsLoading,
} from '../../redux/contacts/ContactsSelectors';

import s from './ContactsList.module.css';

function ContactList() {
  const dispatch = useDispatch();
  const filteredContact = useSelector(getFilteredContacts);
  const isLoading = useSelector(getIsLoading);

  // useEffect(() => {
  //   dispatch(getContacts());
  // }, [dispatch]);

  return (
    <section className={s.container}>
      <ul className={s.contactsList}>
        {filteredContact.map(({ id, name, number }) => (
          <li key={id} className={s.contactsItem}>
            <p>
              {name}: <span>{number}</span>
            </p>
            <button
              className={s.button}
              onClick={() => dispatch(removeContacts(id))}
            >
              Delete
            </button>
          </li>
        ))}
      </ul>
      {isLoading && <h3>Loading...</h3>}
    </section>
  );
}

export default ContactList;
