import React from 'react';
import { Outlet, useNavigate, useLocation } from 'react-router-dom';
import { Suspense, useEffect } from 'react';
import { useSelector } from 'react-redux';
import Loader from 'components/loader/Loader';
import Navigation from '../navigation/Navigation';
import { getIsAuth } from '../../redux/auth/authSelector';

export default function MainWrapper() {
  const isAuth = useSelector(getIsAuth);
  const { pathname } = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    if (pathname === '/') {
      isAuth ? navigate('/contacts') : navigate('/login');
    }
    // eslint-disable-next-line
  }, []);

  return (
    <div>
      <header>
        <Navigation />
      </header>
      <main>
        <Suspense fallback={<Loader />}>
          <Outlet />
        </Suspense>
      </main>
    </div>
  );
}
