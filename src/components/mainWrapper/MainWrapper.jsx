import React from 'react';
import { Outlet } from 'react-router-dom';
import { Suspense } from 'react';
import Loader from 'components/loader/Loader';
import Navigation from '../navigation/Navigation';

export default function MainWrapper() {
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
