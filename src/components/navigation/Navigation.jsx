import React from 'react';
// import { useSelector } from 'react-redux';
import { NavLink } from 'react-router-dom';
// import { getLoggedIn } from 'redux/authorization/authorization-selectors';

const Navigation = () => {
  // const isLoggedIn = useSelector(getLoggedIn);
  return (
    <nav>
      <NavLink to="/">Home</NavLink>
      {/* {isLoggedIn && ( */}
      <NavLink to="/contacts">Contacts</NavLink>
      {/* )} */}
      <NavLink to="/register">Sign Up</NavLink>
      <NavLink to="/login">Login</NavLink>
    </nav>
  );
};

export default Navigation;
