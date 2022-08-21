import { configureStore } from '@reduxjs/toolkit';
import contactsSlice from './contacts/ContactsSlice';

export const store = configureStore({
  reducer: {
    contacts: contactsSlice,
  },
  // middleware: getDefaultMiddleware => getDefaultMiddleware(),
  devTools: process.env.NODE_ENV !== 'production',
});
