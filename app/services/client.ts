import axios from 'axios';
const apiClient = axios.create({
  baseURL: 'http://157.245.97.9',
  responseType: 'json',
  withCredentials: true,
});
export { apiClient };
