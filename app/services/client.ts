import axios from 'axios';
const apiClient = axios.create({
  baseURL: 'http://192.168.0.114:9090',
  responseType: 'json',
  withCredentials: true,
});
export { apiClient };
