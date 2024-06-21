import axios from 'axios';

const instance = axios.create({
    baseURL: 'https://amandapuceixo4.vercel.app', // Atualize com o domínio correto do back-end
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
