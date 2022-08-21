import React, { useState } from 'react';
import {
  // useSelector,
  useDispatch,
} from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { signupUser, loginUser } from '../../redux/auth/authOperations';
import s from './AuthorizationForm.module.css';

export default function AuthorizationForm({ title }) {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const dispatch = useDispatch();
  const navigate = useNavigate();

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
    // dispatch();
    if (
      (title === 'SignUp' && name === '') ||
      password === '' ||
      email === ''
    ) {
      alert('completed all fields ');
      return;
    }
    if (title === 'SignUp') {
      const userRegisterData = { name, email, password };
      dispatch(signupUser(userRegisterData));
      navigate('/contacts');
      resetForm();
      return;
    }
    console.log({ name, email, password });

    const userLoginData = { email, password };
    dispatch(loginUser(userLoginData));

    navigate('/contacts');
    resetForm();
  };

  const resetForm = () => {
    setName('');
    setEmail('');
    setPassword('');
  };

  return (
    <form className={s.form} onSubmit={handleSubmit} autoComplete="off">
      <label className={s.lable}>
        Name
        <input
          className={s.input}
          type="text"
          name="name"
          value={name}
          onChange={handleChangeInput}
          required
        />
      </label>
      <label className={s.lable}>
        Email
        <input
          className={s.input}
          type="tel"
          name="email"
          value={email}
          onChange={handleChangeInput}
          required
        />
      </label>
      <label className={s.lable}>
        Password
        <input
          className={s.input}
          type="tel"
          name="password"
          value={password}
          onChange={handleChangeInput}
          required
        />
      </label>
      <button className={s.button} type="submit">
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
  );
}
