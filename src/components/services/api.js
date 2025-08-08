// api.js
import axios from 'axios';

// Use React environment variable (not Vite)
const API_BASE_URL =
  process.env.REACT_APP_API_URL || 'https://centerbeam.proxy.rlwy.net/api';

console.log('API Base URL:', API_BASE_URL); // For debugging

// Create axios instance with default config
const api = axios.create({
  baseURL: API_BASE_URL,
  headers: {
    'Content-Type': 'application/json',
    Accept: 'application/json',
  },
  // Add timeout to prevent hanging requests
  timeout: 30000, // Increased timeout for Railway
  withCredentials: false, // Set to false for Railway CORS
});

// Add token to requests
api.interceptors.request.use(
  (config) => {
    const token = localStorage.getItem('auth_token');
    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    }
    console.log('Making request to:', config.baseURL + config.url); // For debugging
    console.log('Request headers:', config.headers); // For debugging
    return config;
  },
  (error) => {
    console.error('Request interceptor error:', error);
    return Promise.reject(error);
  }
);

// Handle token expiration and errors
api.interceptors.response.use(
  (response) => {
    console.log('Response received:', response.status, response.data); // Enhanced debugging
    return response;
  },
  (error) => {
    console.error('API Error Details:'); // Enhanced debugging
    console.error('Status:', error.response?.status);
    console.error('Data:', error.response?.data);
    console.error('Headers:', error.response?.headers);
    console.error('Config:', error.config);

    if (error.response?.status === 401) {
      localStorage.removeItem('auth_token');
      window.location.href = '/login';
    }
    return Promise.reject(error);
  }
);

export const authAPI = {
  register: async (userData) => {
    try {
      console.log('Registering user with data:', userData);
      const response = await api.post('/register', userData);
      return response.data;
    } catch (error) {
      console.error('Register error:', error);
      throw error;
    }
  },

  login: async (credentials) => {
    try {
      console.log('Logging in with credentials:', { email: credentials.email });
      const response = await api.post('/login', credentials);
      return response.data;
    } catch (error) {
      console.error('Login error:', error);
      throw error;
    }
  },

  logout: async () => {
    try {
      const response = await api.post('/logout');
      return response.data;
    } catch (error) {
      console.error('Logout error:', error);
      throw error;
    }
  },

  me: async () => {
    try {
      const response = await api.get('/me');
      return response.data;
    } catch (error) {
      console.error('Me endpoint error:', error);
      throw error;
    }
  },

  resetPassword: async (passwordData) => {
    try {
      const response = await api.post('/reset-password', passwordData);
      return response.data;
    } catch (error) {
      console.error('Reset password error:', error);
      throw error;
    }
  },
};

export const clientAPI = {
  getAll: async () => {
    try {
      const response = await api.get('/clients');
      return response.data;
    } catch (error) {
      console.error('Get clients error:', error);
      throw error;
    }
  },

  getById: async (id) => {
    try {
      const response = await api.get(`/clients/${id}`);
      return response.data;
    } catch (error) {
      console.error('Get client by ID error:', error);
      throw error;
    }
  },

  create: async (clientData) => {
    try {
      const response = await api.post('/clients', clientData);
      return response.data;
    } catch (error) {
      console.error('Create client error:', error);
      throw error;
    }
  },

  update: async (id, clientData) => {
    try {
      const response = await api.put(`/clients/${id}`, clientData);
      return response.data;
    } catch (error) {
      console.error('Update client error:', error);
      throw error;
    }
  },

  delete: async (id) => {
    try {
      const response = await api.delete(`/clients/${id}`);
      return response.data;
    } catch (error) {
      console.error('Delete client error:', error);
      throw error;
    }
  },
};

export const invoiceAPI = {
  getAll: async () => {
    try {
      const response = await api.get('/invoices');
      return response.data;
    } catch (error) {
      console.error('Get invoices error:', error);
      throw error;
    }
  },

  getById: async (id) => {
    try {
      const response = await api.get(`/invoices/${id}`);
      return response.data;
    } catch (error) {
      console.error('Get invoice by ID error:', error);
      throw error;
    }
  },

  create: async (invoiceData) => {
    try {
      const response = await api.post('/invoices', invoiceData);
      return response.data;
    } catch (error) {
      console.error('Create invoice error:', error);
      throw error;
    }
  },

  update: async (id, invoiceData) => {
    try {
      const response = await api.put(`/invoices/${id}`, invoiceData);
      return response.data;
    } catch (error) {
      console.error('Update invoice error:', error);
      throw error;
    }
  },

  delete: async (id) => {
    try {
      const response = await api.delete(`/invoices/${id}`);
      return response.data;
    } catch (error) {
      console.error('Delete invoice error:', error);
      throw error;
    }
  },
};

export default api;
