import axios from 'axios';

import { baseURL } from '../libs/constants';

axios.defaults.baseURL = baseURL;

export async function addProduct(product) {
  const data = await axios
    .post(`/days`, product)
    .then(res => res.data);
  return data;
}
