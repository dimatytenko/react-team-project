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

export async function fetchLogOut() {
  const data = await axios
    .post('/users/logout')
    .then(res => res.data);
  return data;
}
