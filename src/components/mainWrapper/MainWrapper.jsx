import React from 'react';
import { Outlet } from 'react-router-dom';
import { Suspense } from 'react';
import Loader from 'components/loader/Loader';
import Navigation from '../navigation/Navigation';
import { useDispatch } from 'react-redux';
import { authToggle } from '../../redux/auth/authSlice';
// import { useState } from 'react';

export default function MainWrapper({ isAuth }) {
  // const [isLoggedIn] = useState();
  const dispatch = useDispatch();
  return (
    <div>
      <header>
        <Navigation isAuth={isAuth} />
        <button onClick={() => dispatch(authToggle())}>
          Auth Toggle(in, out)
        </button>
      </header>
      <main>
        {/* {!isLoggedIn ? <AuthorizationNav /> : <UserMenu />} */}
        <Suspense fallback={<Loader />}>
          <Outlet />
        </Suspense>
      </main>
    </div>
  );
}
