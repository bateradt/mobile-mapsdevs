import axios from 'axios';

const api = axios.create({
    baseURL: 'http://192.168.0.56:3004'
});

export default api;