import axios from 'axios';

const token = {
  set(token) {
    axios.defaults.headers.common.Authorization = `Bearer ${token}`;
  },
  unset() {
    axios.defaults.headers.common.Authorization = '';
  },
};

// const authApi = axios.create({
//   baseURL: 'https://connections-api.herokuapp.com/',
// });
axios.defaults.baseURL = 'https://connections-api.herokuapp.com/';

export const signupUserApi = data => {
  token.unset();
  return axios.post('/users/signup', data).then(response => response.data);
};

export const loginUserApi = data => {
  token.unset();
  return axios.post('/users/login', data).then(response => response.data);
};

export const getCurrentUserApi = userToken => {
  token.set(userToken);
  return axios.get('/users/current').then(response => response.data);
};

// export const userLogout = async userToken => {
//   token.set(userToken);
//   const data = await axios.post('/users/logout');
//   token.unSet();
//   return data;
// };
