import axios from 'axios';

export const gitCribAPI = axios.create({
    baseURL: 'localhost:8080',
    timeout: 1000
});