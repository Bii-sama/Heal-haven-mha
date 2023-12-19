import axios from 'axios';

export const baseUrl = 'https://heal-haven.onrender.com';
export const apiUrls = {
  register: '/api/users/register',
};

export const axiosInstance = axios.create({
  baseURL: 'https://heal-haven.onrender.com',
  headers: {
    'Content-Type': 'application/json',
    'Access-Control-Allow-Origin': '*',
  },
});
// export const axiosInstance = axios.create({
//   baseURL: 'http://localhost:4000',
//   headers: {
//     'Content-Type': 'application/json',
//     'Access-Control-Allow-Origin': '*',
//   },
// });
