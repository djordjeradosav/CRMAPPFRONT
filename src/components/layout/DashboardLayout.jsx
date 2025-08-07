import React from 'react';
import { Menu, Transition } from '@headlessui/react';
import { Fragment } from 'react';
import { data, Link } from 'react-router-dom';
import Sidebar from './Sidebar';

const DashboardLayout = () => {
  return (
    <div className="min-h-screen flex bg-gray-100">
      <main className="flex-1 py-6">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center mb-6">
            <h1 className="text-3xl font-bold text-gray-900">
              Welcome to CRM Dashboard
            </h1>
          </div>
          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {/* Chart Sekcija */}
            {/* Chart showing new clients over time and revenue generated */}
            <div className="col-span-1 sm:col-span-2 lg:col-span-4 bg-white p-6 rounded-lg shadow flex flex-col items-center">
              <h2 className="text-xl font-semibold text-gray-900 mb-4">
                New Clients & Revenue Over Time
              </h2>
              {/* Simple mock chart using SVG */}
              <div className="w-full h-64 flex items-center justify-center">
                <svg viewBox="0 0 400 200" className="w-full h-full">
                  {/* X and Y axes */}
                  <line
                    x1="40"
                    y1="10"
                    x2="40"
                    y2="180"
                    stroke="#d1d5db"
                    strokeWidth="2"
                  />
                  <line
                    x1="40"
                    y1="180"
                    x2="380"
                    y2="180"
                    stroke="#d1d5db"
                    strokeWidth="2"
                  />
                  {/* Mock data for new clients (blue line) */}
                  <polyline
                    fill="none"
                    stroke="#3b82f6"
                    strokeWidth="3"
                    points="40,160 90,140 140,120 190,100 240,80 290,60 340,50 380,40"
                  />
                  {/* Mock data for revenue (green line) */}
                  <polyline
                    fill="none"
                    stroke="#10b981"
                    strokeWidth="3"
                    points="40,170 90,150 140,130 190,110 240,90 290,70 340,60 380,55"
                  />
                  {/* Legend */}
                  <rect x="60" y="20" width="12" height="4" fill="#3b82f6" />
                  <text x="80" y="26" fontSize="12" fill="#374151">
                    New Clients
                  </text>
                  <rect x="160" y="20" width="12" height="4" fill="#10b981" />
                  <text x="180" y="26" fontSize="12" fill="#374151">
                    Revenue
                  </text>
                  {/* X-axis labels */}
                  <text x="40" y="195" fontSize="10" fill="#6b7280">
                    Jan
                  </text>
                  <text x="90" y="195" fontSize="10" fill="#6b7280">
                    Feb
                  </text>
                  <text x="140" y="195" fontSize="10" fill="#6b7280">
                    Mar
                  </text>
                  <text x="190" y="195" fontSize="10" fill="#6b7280">
                    Apr
                  </text>
                  <text x="240" y="195" fontSize="10" fill="#6b7280">
                    May
                  </text>
                  <text x="290" y="195" fontSize="10" fill="#6b7280">
                    Jun
                  </text>
                  <text x="340" y="195" fontSize="10" fill="#6b7280">
                    Jul
                  </text>
                  <text x="380" y="195" fontSize="10" fill="#6b7280">
                    Aug
                  </text>
                </svg>
              </div>
              <div className="flex justify-between w-full mt-4 text-sm text-gray-500">
                <span>New Clients (Blue)</span>
                <span>Revenue (Green)</span>
              </div>
            </div>
            {/* Recent Customers Table */}
            <div className="col-span-1 sm:col-span-2 lg:col-span-4 bg-white p-6 rounded-lg shadow">
              <h2 className="text-xl font-semibold text-gray-900 mb-4">
                Recent Clients
              </h2>
              <div className="overflow-x-auto">
                <table className="min-w-full divide-y divide-gray-200">
                  <thead>
                    <tr>
                      <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                        Name
                      </th>
                      <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                        Email
                      </th>
                      <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                        Status
                      </th>
                    </tr>
                  </thead>
                  {/* CLIENT TABEL:A */}

                  <tbody className="bg-white divide-y divide-gray-200">
                    <tr>
                      <td className="px-6 py-4 whitespace-nowrap">John Doe</td>
                      <td className="px-6 py-4 whitespace-nowrap">
                        john@example.com
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap">
                        <span className="px-2 inline-flex text-xs leading-5 font-semibold rounded-full bg-green-100 text-green-800">
                          Active
                        </span>
                      </td>
                    </tr>
                    <tr>
                      <td className="px-6 py-4 whitespace-nowrap">
                        Jane Smith
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap">
                        jane@example.com
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap">
                        <span className="px-2 inline-flex text-xs leading-5 font-semibold rounded-full bg-green-100 text-green-800">
                          Active
                        </span>
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default DashboardLayout;
