import axios from 'axios';

const api = axios.create({
    baseURL: '', //url da api
    timeout: 1000,
    headers: {'X-Custom-Header': 'foobar'}
});

export default api;