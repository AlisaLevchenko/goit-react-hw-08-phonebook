import axios from 'axios';

export const token = {
  set(token) {
    axios.defaults.headers.common.Authorization = `Bearer ${token}`;
  },
  unset() {
    axios.defaults.headers.common.Authorization = '';
  },
};
axios.defaults.baseURL = 'https://connections-api.herokuapp.com/';

export const getContactsApi = userToken => {
  token.set(userToken);
  return axios.get('/contacts').then(response => response.data);
};

export const addContactsApi = item => {
  return axios.post('/contacts', item).then(response => response.data);
};

export const removeContactsApi = id => {
  return axios.delete(`/contacts/${id}`).then(() => id);
};
