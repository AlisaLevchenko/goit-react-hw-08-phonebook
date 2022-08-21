import { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { addContacts } from '../../redux/contacts/ContactsOperations';
import { getContacts } from '../../redux/contacts/ContactsSelectors';
import s from './ContactForm.module.css';

export default function ContactForm() {
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const items = useSelector(getContacts);
  const dispatch = useDispatch();

  const handleChangeInput = evt => {
    const { name, value } = evt.target;
    switch (name) {
      case 'name':
        setName(value);
        break;
      case 'number':
        setPhone(value);
        break;
      default:
        return;
    }
  };

  const resetForm = () => {
    setName('');
    setPhone('');
  };

  const handleSubmit = evt => {
    evt.preventDefault();
    const repeatName = items.find(el => {
      return el.name.toLowerCase() === name.toLowerCase();
    });
    if (repeatName) {
      alert(`${name} ia already in contacts`);
      return;
    }
    const oneContact = { name, phone };
    dispatch(addContacts(oneContact));
    resetForm();
  };

  return (
    <form className={s.form} onSubmit={handleSubmit}>
      <label className={s.lable}>
        Name
        <input
          className={s.input}
          type="text"
          name="name"
          value={name}
          onChange={handleChangeInput}
          pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
          title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
          required
        />
      </label>
      <label className={s.lable}>
        Number
        <input
          className={s.input}
          type="tel"
          name="number"
          value={phone}
          onChange={handleChangeInput}
          pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
          title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
          required
        />
      </label>
      <button className={s.button} type="submit">
        Add contact
      </button>
    </form>
  );
}
