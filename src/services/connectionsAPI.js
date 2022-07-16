import axios from 'axios';
// import { func } from 'prop-types';

import { baseURL } from '../libs/constants';

axios.defaults.baseURL = baseURL;

export const token = {
  set(token) {
    axios.defaults.headers.common.Authorization = `Bearer ${token}`;
  },
  unset() {
    axios.defaults.headers.common.Authorization = '';
  },
};

export async function fetchGoogleAuth() {
  const data = await axios
    .get('/users/google')
    .then(res => res.data);
  return data;
}

export async function fetchRegister(userData) {
  const data = await axios
    .post('/users/register', userData)
    .then(res => res.data);
  return data;
}

export async function fetchLogIn(userData) {
  const data = await axios
    .post('/users/login', userData)
    .then(res => res.data);
  return data;
}

export async function fetchLogOut() {
  const data = await axios
    .post('/users/logout')
    .then(res => res.data);
  return data;
}

export async function fetchUsers() {
  const data = await axios
    .get('/users/current')
    .then(res => res.data);
  return data;
}

export async function fetchUserData(calculatorData) {
  const data = await axios
    .patch('/users/calculator', calculatorData)
    .then(res => res.data);
  return data;
}

export async function getInfoByDate(date) {
  const data = await axios
    .get(`/days/${date}`)
    .then(res => res.data);

  return data;
}
