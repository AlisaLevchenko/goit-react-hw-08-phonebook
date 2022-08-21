import { createAsyncThunk } from '@reduxjs/toolkit';
import {
  getContactsApi,
  addContactsApi,
  removeContactsApi,
} from '../../api/Mockapi';
// import  getContactsRequest,
// getContactsSuccess,
// getContactsError,
// addContactsRequest,
// addContactsSuccess,
// addContactsError,
// removeContactsRequest,
// removeContactsSuccess,
// removeContactsError,
// './ContactsAction';

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

// export const getContacts = () => dispatch => {
//   dispatch(getContactsRequest());

//   getContactsApi()
//     .then(contact => dispatch(getContactsSuccess(contact)))
//     .catch(err => dispatch(getContactsError(err.message)));
// };

// export const addContacts = item => dispatch => {
//   dispatch(addContactsRequest());

//   addContactsApi(item)
//     .then(newContact => dispatch(addContactsSuccess(newContact)))
//     .catch(err => dispatch(addContactsError(err.message)));
// };

// export const removeContacts = id => dispatch => {
//   dispatch(removeContactsRequest());

//   removeContactsApi(id)
//     .then(id => dispatch(removeContactsSuccess(id)))
//     .catch(err => dispatch(removeContactsError(err.message)));
// };
