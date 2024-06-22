import axios from 'axios';

// Defina a URL base para o Vercel
const baseURL = 'https://amandapuceixo4-8mmefdz7y-amanda-britos-projects-5d771073.vercel.app';

const instance = axios.create({
    baseURL: baseURL,
    headers: {
        'Content-Type': 'application/json',
        'accept': 'application/json'
    },
});

// Remover temporariamente o interceptor de token
/*
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
*/

export default instance;
