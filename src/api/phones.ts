import axios from 'axios';
// import { Phone } from '../types/Phone';

axios.defaults.baseURL = 'https://secret-meadow-92340.herokuapp.com/';

export function getPhones(page: number, perPage: number) {
  return axios
    .get(`/phones?page=${page}&perPage=${perPage}`)
    .then((res) => res.data)
    .catch((err) => {
      throw new Error(`${err}`);
    });
}

// export function getAll(): Promise<Phone[]> {
//   return axios
//     .get('/phones')
//     .then(res => res.data)
//     .catch((err) => {
//       throw new Error(`${err}`);
//     });
// }

// export function getOne(phoneId: string): Promise<Phone> {
//   return axios
//     .get(`/phones/${phoneId}`)
//     .then(res => res.data)
//     .catch((err) => {
//       throw new Error(`${err}`);
//     });
// }
