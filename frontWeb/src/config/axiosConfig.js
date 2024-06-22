/* eslint-env node */
import axios from 'axios';

const instance = axios.create({
    baseURL: process.env.REACT_APP_API_URL || 'http://localhost:3000',
    headers: {
        'Content-Type': 'application/json',
        'accept': 'application/json'
    },
});

instance.interceptors.request.use(
    (config) => {
        const token = localStorage.getItem('token');
        if (token) {
            config.headers['Authorization'] = `Bearer ${token}`;
        }
        return config;
    },
    (error) => {
        return Promise.reject(error);
    }
);

export default instance;
