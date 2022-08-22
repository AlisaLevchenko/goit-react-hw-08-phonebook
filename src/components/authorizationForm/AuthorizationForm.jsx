import React, { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useNavigate, Link } from 'react-router-dom';
import { TextField, Box, Button } from '@mui/material';
import { signupUser, loginUser } from '../../redux/auth/authOperations';
import { getOutError } from '../../redux/auth/authSelector';
import { changeError } from '../../redux/auth/authSlice';

export default function AuthorizationForm({ title }) {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const error = useSelector(getOutError);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  useEffect(() => {
    if (!error) return;
    alert('You have entered invalid data.');
  }, [error]);

  const onLinkClick = e => {
    dispatch(changeError());
  };

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
    if (
      (title === 'Sign Up' && name === '') ||
      password === '' ||
      email === ''
    ) {
      alert('completed all fields ');
      return;
    }
    if (title === 'Sign Up') {
      const userRegisterData = { name, email, password };
      dispatch(signupUser(userRegisterData));
      navigate('/contacts');
      resetForm();
      return;
    }

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
    <Box component="form" onSubmit={handleSubmit} noValidate sx={{ mt: 1 }}>
      {title === 'Sign Up' && (
        <TextField
          margin="normal"
          fullWidth
          id="name"
          label="Name"
          name="name"
          type="text"
          autoComplete="current-name"
          required
          value={name}
          onChange={handleChangeInput}
        />
      )}
      <TextField
        margin="normal"
        fullWidth
        id="email"
        label="Email"
        type="email"
        autoComplete="email"
        name="email"
        value={email}
        onChange={handleChangeInput}
        required
      />
      <TextField
        margin="normal"
        fullWidth
        id="password"
        label="Password"
        name="password"
        type="password"
        autoComplete="current-password"
        minLength={7}
        required
        value={password}
        onChange={handleChangeInput}
      />
      <Button type="submit" fullWidth variant="contained" sx={{ mt: 3, mb: 2 }}>
        {title}
      </Button>
      <Link
        to={title === 'Sign Up' ? '/login' : '/register'}
        variant="body2"
        onClick={onLinkClick}
      >
        {title === 'Sign Up'
          ? 'Do you have already account? Sign In'
          : "Don't have an account? Sign Up"}
      </Link>
    </Box>
  );
}
