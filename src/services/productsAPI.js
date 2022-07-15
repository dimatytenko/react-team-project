import axios from 'axios';

import { baseURL } from '../libs/constants';

axios.defaults.baseURL = baseURL;

export async function addProduct(product) {
  const data = await axios
    .post(`/days`, product)
    .then(res => res.data);
  return data;
}
export async function getUnhealthyProducts(
  limit,
  page = 1
) {
  const data = await axios
    .get(`/products/unhealthy?page=${page}&limit=${limit}`)
    .then(res => res.data);
  return data;
}
