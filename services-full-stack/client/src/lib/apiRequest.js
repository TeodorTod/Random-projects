import axios from 'axios';
import { navigateTo } from '../navigation'; // Adjust the path as necessary

const apiRequest = axios.create({
    baseURL: 'http://localhost:8080/api',
    withCredentials: true,
  });
  
  apiRequest.interceptors.request.use(
    (config) => {
      const user = JSON.parse(localStorage.getItem('user'));
      const token = user?.accessToken;
  
      if (token) {
        config.headers.Authorization = `Bearer ${token}`;
      }
  
      return config;
    },
    (error) => {
      return Promise.reject(error);
    }
  );
  
  apiRequest.interceptors.response.use(
    (response) => {
      return response;
    },
    (error) => {
      if (error.response && error.response.status === 401) {
        console.log('Unauthorized, redirecting to login!');
        localStorage.clear();
        navigateTo('/signin');
        window.location.reload();
      }
      return Promise.reject(error);
    }
  );
  
  export default apiRequest;
