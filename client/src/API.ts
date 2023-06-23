import axios from 'axios';

const apiService = axios.create({
  baseURL: 'http://localhost:3001',
  withCredentials: true,
});

export default apiService;
