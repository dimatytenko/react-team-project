import axios from 'axios';

axios.defaults.baseURL = 'http://localhost:8080/api';

export const token = {
  set(token) {
    axios.defaults.headers.common.Authorization = `Bearer ${token}`;
  },
  unset() {
    axios.defaults.headers.common.Authorization = '';
  },
};

export async function fetchLogIn(userData) {
  const data = await axios
    .post('/users/login',userData)
    .then(res => res.data);
  return data;
}

export async function fetchLogOut() {
  const data = await axios
    .post('/users/logout')
    .then(res => res.data);
  return data;
}

export async function getKcal(dataCaloriesForm) {
  const data = await axios
    .post('/public/calculator', dataCaloriesForm)
    .then(res => res.data);
  return data;
}
