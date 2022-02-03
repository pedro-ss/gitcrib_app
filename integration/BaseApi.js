import axios from 'axios';

export const gitCribAPI = axios.create({
    baseURL: 'localhost:8081',
    timeout: 1000
});