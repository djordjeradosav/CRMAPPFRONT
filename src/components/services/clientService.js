import api from '../services/api';

export const clientService = {
  // Get all clients
  getAll: () => api.get('/clients'),

  // Get single client
  getById: (id) => api.get(`/clients/${id}`),

  // Create new client
  create: (clientData) => api.post('/clients', clientData),

  // Update client
  update: (id, clientData) => api.put(`/clients/${id}`, clientData),

  // Delete client
  delete: (id) => api.delete(`/clients/${id}`),
};
