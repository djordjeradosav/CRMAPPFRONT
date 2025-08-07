import api from '../services/api';

export const invoiceService = {
  // Get all invoices
  getAll: () => api.get('/invoices'),

  // Get single invoice
  getById: (id) => api.get(`/invoices/${id}`),

  // Create new invoice
  create: (invoiceData) => api.post('/invoices', invoiceData),

  // Update invoice
  update: (id, invoiceData) => api.put(`/invoices/${id}`, invoiceData),

  updateStatus: (id, statusData) => api.put(`/invoices/${id}`, statusData),
  // Delete invoice
  delete: (id) => api.delete(`/invoices/${id}`),

  // Export invoices
  export: () =>
    api.get('/invoices/export', {
      responseType: 'blob',
    }),
};
