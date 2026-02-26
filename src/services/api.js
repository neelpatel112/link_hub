import axios from 'axios';

const API_URL = import.meta.env.VITE_API_URL;

const api = axios.create({
  baseURL: API_URL,
  headers: {
    'Content-Type': 'application/json',
  },
});

// Add token to requests if it exists
api.interceptors.request.use(
  (config) => {
    const token = localStorage.getItem('token');
    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

export const auth = {
  register: (userData) => api.post('/api/auth/register', userData),
  login: (credentials) => api.post('/api/auth/login', credentials),
};

export const users = {
  getProfile: () => api.get('/api/users/me'),
  updateProfile: (data) => api.put('/api/users/profile', data),
  checkUsername: (username) => api.get(`/api/users/check-username/${username}`),
};

export const links = {
  getAll: () => api.get('/api/links'),
  create: (data) => api.post('/api/links', data),
  update: (id, data) => api.put(`/api/links/${id}`, data),
  delete: (id) => api.delete(`/api/links/${id}`),
  reorder: (links) => api.post('/api/links/reorder', { links }),
  trackClick: (id) => api.post(`/api/links/${id}/click`),
};

export const profile = {
  getPublic: (username) => api.get(`/api/profile/${username}`),
};

export default api;
