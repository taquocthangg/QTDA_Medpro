// api.js
import axios from 'axios';
import { getAccessToken } from './auth';

const api = axios.create({
  baseURL: 'https://medprov2.onrender.com/api/v2',
});

export const setAuthToken = () => {
  const token = getAccessToken();
  if (token) {
    api.defaults.headers.common['Authorization'] = `Bearer ${token}`;
  } else {
    delete api.defaults.headers.common['Authorization'];
  }
};

export default api;
