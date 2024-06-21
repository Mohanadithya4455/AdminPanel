import React from 'react';
import { HomeIcon, UserGroupIcon, UserIcon, MapPinIcon, BriefcaseIcon, Cog6ToothIcon, SwatchIcon, ArrowRightOnRectangleIcon } from '@heroicons/react/24/solid';
import { useNavigate, Outlet, Route, Routes } from 'react-router-dom';

const Home = () => {
  const navigate = useNavigate();

  return (
    <div className="flex h-screen">
     
      <div className="w-1/3 lg:w-1/4 border-r shadow-lg bg-gray-900 text-white">
        <div className="text-2xl font-bold p-8 border-b border-gray-700">My Dashboard</div>
        
        <nav className="flex flex-col space-y-1">
          <a
            href="#"
            className="flex items-center py-4 px-8 hover:bg-gray-700 transition ease-in-out duration-300"
            onClick={() => navigate('/dashboard')}
          >
            <HomeIcon className="w-6 h-6 mr-3" />
            Dashboard
          </a>
          <a
            href="#"
            className="flex items-center py-4 px-8 hover:bg-gray-700 transition ease-in-out duration-300"
            onClick={() => navigate('/attendance')}
          >
            <UserGroupIcon className="w-6 h-6 mr-3" />
            Attendance
          </a>
          <a
            href="#"
            className="flex items-center py-4 px-8 hover:bg-gray-700 transition ease-in-out duration-300"
            onClick={() => navigate('/employees')}
          >
            <UserIcon className="w-6 h-6 mr-3" />
            Employees
          </a>
          <a
            href="#"
            className="flex items-center py-4 px-8 hover:bg-gray-700 transition ease-in-out duration-300"
            onClick={() => navigate('/sites')}
          >
            <MapPinIcon className="w-6 h-6 mr-3" />
            Sites
          </a>
          <a
            href="#"
            className="flex items-center py-4 px-8 hover:bg-gray-700 transition ease-in-out duration-300"
            onClick={() => navigate('/projects')}
          >
            <BriefcaseIcon className="w-6 h-6 mr-3" />
            Projects
          </a>
          <a
            href="#"
            className="flex items-center py-4 px-8 hover:bg-gray-700 transition ease-in-out duration-300"
            onClick={() => navigate('/settings')}
          >
            <Cog6ToothIcon className="w-6 h-6 mr-3" />
            Settings
          </a>
          
          <a
            href="#"
            className="flex items-center py-4 px-8 hover:bg-gray-700 transition ease-in-out duration-300"
          onClick={()=>navigate("/logout")}
          >
            <ArrowRightOnRectangleIcon className="w-6 h-6 mr-3" />
            Logout
          </a>
        </nav>
      </div>

      <div className="w-2/3 lg:w-3/4 bg-gray-800 p-8 text-white">
        
        <Outlet />
      </div>
    </div>
  );
};

export default Home;
