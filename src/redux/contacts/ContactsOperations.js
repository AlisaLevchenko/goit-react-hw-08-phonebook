import { createAsyncThunk } from '@reduxjs/toolkit';
import {
  getContactsApi,
  addContactsApi,
  removeContactsApi,
} from '../../api/Mockapi';

export const getContacts = createAsyncThunk(
  'getContacts',
  async (param, thunkApi) => {
    try {
      const contact = await getContactsApi();
      return contact;
    } catch (error) {
      return thunkApi.rejectWithValue(error.message);
    }
  }
);

export const addContacts = createAsyncThunk(
  'addContacts',
  async (item, thunkApi) => {
    try {
      const newContact = await addContactsApi(item);
      return newContact;
    } catch (error) {
      return thunkApi.rejectWithValue(error.message);
    }
  }
);

export const removeContacts = createAsyncThunk(
  'removeContacts',
  async (id, thunkApi) => {
    try {
      const del = await removeContactsApi(id);
      return del;
    } catch (error) {
      return thunkApi.rejectWithValue(error.message);
    }
  }
);
