import axios from 'axios';

// Sistema
export const api = axios.create({
	baseURL: `https://jsonplaceholder.typicode.com`
});

