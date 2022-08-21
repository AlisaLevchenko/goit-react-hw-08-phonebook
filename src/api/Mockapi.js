import axios from 'axios';

axios.defaults.baseURL = 'https://62ffc4a79350a1e548e619ea.mockapi.io';

export const getContactsApi = () => {
  return axios.get('/contacts').then(response => response.data);
};

export const addContactsApi = item => {
  return axios.post('/contacts', item).then(response => response.data);
};

export const removeContactsApi = id => {
  return axios.delete(`/contacts/${id}`).then(() => id);
};
