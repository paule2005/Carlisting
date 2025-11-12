import axios from 'axios';

const API_BASE_URL = 'http://localhost:8000/api';

const api = axios.create({
  baseURL: API_BASE_URL,
  headers: {
    'Content-Type': 'application/json',
    'Accept': 'application/json'
  }
});

export const carService = {
  getAllCars: async () => {
    const response = await api.get('/cars');
    return response.data;
  },
  
  getCarById: async (id) => {
    const response = await api.get(`/cars/${id}`);
    return response.data;
  }
};

export const orderService = {
  createOrder: async (orderData) => {
    const response = await api.post('/orders', orderData);
    return response.data;
  }
};

export default api;
