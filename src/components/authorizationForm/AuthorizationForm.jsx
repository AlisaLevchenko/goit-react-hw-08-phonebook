import React, { useState } from 'react';
import {
  // useSelector,
  useDispatch,
} from 'react-redux';

export default function AuthorizationForm() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const dispatch = useDispatch();

  const handleChangeInput = evt => {
    const { name, value } = evt.target;
    switch (name) {
      case 'name':
        setName(value);
        break;
      case 'email':
        setEmail(value);
        break;
      case 'password':
        setPassword(value);
        break;
      default:
        return;
    }
  };

  const handleSubmit = evt => {
    evt.preventDefault();
    // const repeatName = items.find(el => {
    //   return el.name.toLowerCase() === name.toLowerCase();
    // });
    // if (repeatName) {
    //   alert(`${name} ia already in contacts`);
    //   return;
    // }
    // const oneContact = { name, phone };
    dispatch();
    resetForm();
  };

  const resetForm = () => {
    setName('');
    setEmail('');
    setPassword('');
  };

  return (
    <div>
      {' '}
      <form onSubmit={handleSubmit} autoComplete="off">
        <label className="{s.lable}">
          Name
          <input
            className="{s.input}"
            type="text"
            name="name"
            value={name}
            onChange={handleChangeInput}
            pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
            title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
            required
          />
        </label>
        <label className="{s.lable}">
          Email
          <input
            className="{s.input}"
            type="tel"
            name="email"
            value={email}
            onChange={handleChangeInput}
            pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
            title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
            required
          />
        </label>
        <label className="{s.lable}">
          Password
          <input
            className="{s.input}"
            type="tel"
            name="password"
            value={password}
            onChange={handleChangeInput}
            pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
            title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
            required
          />
        </label>
        <button className="{s.button}" type="submit">
          Add contact
          {/* {location === '/login' ? 'Login' : 'Sign Up'} */}
        </button>

        {/* <div className={styles.errorContainer}>
          {error && (
            <p className={styles.error}>
              {location === '/login'
                ? ' Incorrect email or password'
                : 'This email is alredy used'}
            </p>
          )}
        </div> */}
      </form>
    </div>
  );
}
