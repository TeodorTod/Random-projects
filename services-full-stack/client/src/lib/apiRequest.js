import axios from "axios";

const apiRequest = axios.create({
    baseURL: "http://localhost:8080/api",
    withCredentials: true
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

export default apiRequest;
