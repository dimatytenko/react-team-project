import axios from 'axios';
import { baseURL } from '../libs/constants';

axios.defaults.baseURL = baseURL;

export async function getKcal(dataCaloriesForm) {
  const data = await axios
    .post('/public/calculator', dataCaloriesForm)
    .then(res => res.data);
  return data;
}
