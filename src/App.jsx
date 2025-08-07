// import React, { useState, useEffect } from 'react';
// import AuthPages from './pages/AuthPages';

// import Dashboard from './pages/Dash';
// import { AuthProvider, useAuth } from './context/AuthContext';
// import './App.css';
// import { BrowserRouter } from 'react-router';

// function AppContent() {
//   const { user, loading } = useAuth();

//   if (loading) {
//     return (
//       <div className="min-h-screen flex items-center justify-center bg-gray-50">
//         <div className="text-center">
//           <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-600 mx-auto mb-4"></div>
//           <p className="text-gray-600">Loading...</p>
//         </div>
//       </div>
//     );
//   }

//   // If user exists, show Dashboard; otherwise show AuthPages
//   return <div className="App">{user ? <Dashboard /> : <AuthPages />}</div>;
// }

// function App() {
//   return (
//     <AuthProvider>
//       <BrowserRouter>
//         <AppContent />
//       </BrowserRouter>
//     </AuthProvider>
//   );
// }

// export default App;

import React from 'react';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import AuthPages from './pages/AuthPages';
import Dashboard from './pages/Dash';
import ClientsPage from './pages/Clients';
import InvoicesPage from './pages/Invoices';
import SettingsPage from './pages/Settings';
import Layout from './components/Layout';
import { AuthProvider, useAuth } from './context/AuthContext';
import './App.css';

// Protected Route Component
function ProtectedRoute({ children }) {
  const { user, loading } = useAuth();

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gray-50">
        <div className="text-center">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-600 mx-auto mb-4"></div>
          <p className="text-gray-600">Loading...</p>
        </div>
      </div>
    );
  }

  return user ? children : <Navigate to="/auth" replace />;
}

// Public Route Component (for auth pages)
function PublicRoute({ children }) {
  const { user, loading } = useAuth();

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gray-50">
        <div className="text-center">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-600 mx-auto mb-4"></div>
          <p className="text-gray-600">Loading...</p>
        </div>
      </div>
    );
  }

  return user ? <Navigate to="/dashboard" replace /> : children;
}

function AppContent() {
  return (
    <Routes>
      {/* Public Routes */}
      <Route
        path="/auth"
        element={
          <PublicRoute>
            <AuthPages />
          </PublicRoute>
        }
      />

      {/* Protected Routes with Layout */}
      <Route
        path="/"
        element={
          <ProtectedRoute>
            <Layout />
          </ProtectedRoute>
        }
      >
        <Route index element={<Navigate to="/dashboard" replace />} />
        <Route path="dashboard" element={<Dashboard />} />
        <Route path="clients" element={<ClientsPage />} />
        <Route path="invoice" element={<InvoicesPage />} />
        <Route path="settings" element={<SettingsPage />} />
      </Route>

      {/* Fallback route */}
      <Route path="*" element={<Navigate to="/dashboard" replace />} />
    </Routes>
  );
}

function App() {
  return (
    <AuthProvider>
      <BrowserRouter>
        <div className="App">
          <AppContent />
        </div>
      </BrowserRouter>
    </AuthProvider>
  );
}

export default App;
