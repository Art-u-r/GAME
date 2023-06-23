import axios from 'axios';

export const apiService = axios.create({
  baseURL: 'http://localhost:3001',
  withCredentials: true,
});