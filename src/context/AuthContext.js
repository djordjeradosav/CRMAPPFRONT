import React, { createContext, useContext, useState, useEffect } from 'react';
import { authAPI } from '../components/services/api';

const AuthContext = createContext();

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error('useAuth must be used within an AuthProvider');
  }
  return context;
};

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    checkAuthStatus();
  }, []);

  const checkAuthStatus = async () => {
    const token = localStorage.getItem('auth_token');
    if (token) {
      try {
        const userData = await authAPI.me();
        setUser(userData);
      } catch (error) {
        localStorage.removeItem('auth_token');
      }
    }
    setLoading(false);
  };

  const login = async (credentials) => {
    try {
      const response = await authAPI.login(credentials);
      localStorage.setItem('auth_token', response.token);
      setUser(response.user);
      return { success: true };
    } catch (error) {
      return {
        success: false,
        error: error.response?.data?.message || 'Login failed',
      };
    }
  };

  const register = async (userData) => {
    try {
      const response = await authAPI.register(userData);
      localStorage.setItem('auth_token', response.token);
      setUser(response.user);
      return { success: true };
    } catch (error) {
      return {
        success: false,
        error:
          error.response?.data?.errors ||
          error.response?.data?.message ||
          'Registration failed',
      };
    }
  };

  const logout = async () => {
    try {
      await authAPI.logout();
    } catch (error) {
      console.error('Logout error:', error);
    } finally {
      localStorage.removeItem('auth_token');
      setUser(null);
    }
  };

  const hasPermission = (permission) => {
    return user?.permissions?.[permission] || false;
  };

  const isAdmin = () => {
    return user?.role === 'Admin';
  };

  const isClient = () => {
    return user?.role === 'Client';
  };

  const isUser = () => {
    return user?.role === 'User';
  };

  const canAccess = (section) => {
    switch (section) {
      case 'clients':
        return hasPermission('canViewClients');
      case 'invoices':
        return hasPermission('canViewInvoices');
      case 'settings':
        return hasPermission('canViewSettings');
      default:
        return false;
    }
  };

  const value = {
    user,
    login,
    register,
    logout,
    loading,
    hasPermission,
    isAdmin,
    isClient,
    isUser,
    canAccess,
  };

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
};
