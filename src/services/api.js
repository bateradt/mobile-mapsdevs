import axios from 'axios';

const api = axios.create({
    baseURL: 'https://backend-mapsdevs.herokuapp.com'//'http://192.168.0.56:3004'
});

export default api;