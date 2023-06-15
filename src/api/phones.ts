import axios from 'axios';
import { PhonesResponse } from '../types/PhonesResponse';
import { TabletsResponse } from '../types/TabletsResponse';
import { Phone } from '../types/Phone';
import { FullPhone } from '../types/FullPhone';

axios.defaults.baseURL = 'https://nice-gadgets-8ipl.onrender.com';

export function getPhones(
  page: number,
  perPage: number,
  sortBy: string,
): Promise<PhonesResponse> {
  return axios
    .get(`/products?page=${page}&perPage=${perPage}&sortBy=${sortBy}`)
    .then((res) => res.data);
}

export function getTablets(
  page: number,
  perPage: number,
  sortBy: string,
): Promise<TabletsResponse> {
  return axios
    .get(`/products/tablets?page=${page}&perPage=${perPage}&sortBy=${sortBy}`)
    .then((res) => res.data);
}

export function getOne(phoneId: string): Promise<FullPhone> {
  return axios.get(`/products/${phoneId}`).then((res) => res.data);
}

export function getNewestProducts(): Promise<Phone[]> {
  return axios.get('/products/new').then((res) => res.data);
}

export function getDiscountProducts(): Promise<Phone[]> {
  return axios.get('/products/discount').then((res) => res.data);
}

export function getRecomendedProducts(): Promise<Phone[]> {
  return axios.get('/products/phoneId/recomended').then((res) => res.data);
}
