import axios from 'axios';
import { PhonesResponse } from '../types/PhonesResponse';

axios.defaults.baseURL = 'https://secret-meadow-92340.herokuapp.com/';

export function getPhones(
  page: number,
  perPage: number,
): Promise<PhonesResponse> {
  return axios
    .get(`/products?page=${page}&perPage=${perPage}`)
    .then((res) => res.data);
}

// export function getOne(phoneId: string): Promise<Phone> {
//   return axios
//     .get(`/products/phones/${phoneId}`)
//     .then(res => res.data);
// }
