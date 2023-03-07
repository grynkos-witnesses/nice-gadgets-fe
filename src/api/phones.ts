import axios from 'axios';
import { PhonesResponse } from '../types/PhonesResponse';
import { Phone } from '../types/Phone';

axios.defaults.baseURL = 'https://secret-meadow-92340.herokuapp.com/';

export function getPhones(
  page: number,
  perPage: number,
  sortBy: string,
): Promise<PhonesResponse> {
  return axios
    .get(`/products?page=${page}&perPage=${perPage}&sortBy=${sortBy}`)
    .then((res) => res.data);
}

// export function getOne(phoneId: string): Promise<Phone> {
//   return axios
//     .get(`/products/phones/${phoneId}`)
//     .then(res => res.data);
// }

export function getNewestProducts(): Promise<Phone[]> {
  return axios
    .get('/products/new')
    .then(res => res.data);
}

export function getDiscountProducts(): Promise<Phone[]> {
  return axios
    .get('/products/discount')
    .then(res => res.data);
}
