import React from 'react';
import DashboardLayout from '../components/layout/DashboardLayout';
import Sidebar from '../components/layout/Sidebar';

function Dashboard() {
  return (
    <div className="min-h-screen flex flex-col md:flex-row bg-gray-100">
      <div className="w-full md:w-64 flex-shrink-0 bg-white shadow-lg">
        {/* Basic Sidebar */}
        <Sidebar />
      </div>
      <div className="flex-1 p-4 overflow-auto">
        <div className="container mx-auto">
          <DashboardLayout />
        </div>
      </div>
    </div>
  );
}

export default Dashboard;
