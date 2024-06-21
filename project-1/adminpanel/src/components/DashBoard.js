import React from 'react';
import { ChartBarIcon, UserGroupIcon, BriefcaseIcon, CheckCircleIcon, Cog6ToothIcon } from '@heroicons/react/24/solid';

const DashBoard = () => {
  return (
    <div className="p-8">
      <h1 className="text-4xl font-bold text-white">Welcome to the Dashboard</h1>
      <p className="mt-4 text-gray-300">
        Overview of the system's status and quick access to various sections.
      </p>
      <div className="mt-8 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {/* Example cards */}
        <div className="bg-gray-700 p-6 rounded-lg shadow-lg flex items-center space-x-4">
          <ChartBarIcon className="w-12 h-12 text-green-500" />
          <div>
            <h2 className="text-xl font-semibold text-white">Attendance</h2>
            <p className="mt-2 text-gray-300">View and manage attendance records.</p>
          </div>
        </div>
        <div className="bg-gray-700 p-6 rounded-lg shadow-lg flex items-center space-x-4">
          <UserGroupIcon className="w-12 h-12 text-blue-500" />
          <div>
            <h2 className="text-xl font-semibold text-white">Employees</h2>
            <p className="mt-2 text-gray-300">Manage employee information and records.</p>
          </div>
        </div>
        <div className="bg-gray-700 p-6 rounded-lg shadow-lg flex items-center space-x-4">
          <BriefcaseIcon className="w-12 h-12 text-yellow-500" />
          <div>
            <h2 className="text-xl font-semibold text-white">Projects</h2>
            <p className="mt-2 text-gray-300">Track and update project statuses.</p>
          </div>
        </div>
        <div className="bg-gray-700 p-6 rounded-lg shadow-lg flex items-center space-x-4">
          <CheckCircleIcon className="w-12 h-12 text-red-500" />
          <div>
            <h2 className="text-xl font-semibold text-white">Completed Tasks</h2>
            <p className="mt-2 text-gray-300">View completed tasks and achievements.</p>
          </div>
        </div>
        <div className="bg-gray-700 p-6 rounded-lg shadow-lg flex items-center space-x-4">
          <Cog6ToothIcon className="w-12 h-12 text-purple-500" />
          <div>
            <h2 className="text-xl font-semibold text-white">Settings</h2>
            <p className="mt-2 text-gray-300">Adjust system settings and preferences.</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DashBoard;
