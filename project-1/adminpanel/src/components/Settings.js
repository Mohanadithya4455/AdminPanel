

import React, { useState } from 'react';

const Settings = () => {
  const [theme, setTheme] = useState('dark');
  const [language, setLanguage] = useState('en');

  const handleThemeChange = (e) => {
    setTheme(e.target.value);
  };

  const handleLanguageChange = (e) => {
    setLanguage(e.target.value);
  };

  return (
    <div className="p-6 h-screen overflow-hidden">
      <h1 className="text-3xl font-bold mb-6">Settings</h1>
      <div className="bg-gray-700 p-6 rounded-lg shadow-md mb-6">
        <h2 className="text-2xl font-semibold mb-4">General Settings</h2>
        <div className="mb-6">
          <label className="block text-gray-200 mb-2" htmlFor="theme">Theme</label>
          <select
            id="theme"
            value={theme}
            onChange={handleThemeChange}
            className="block w-full bg-gray-800 text-white p-2 rounded"
          >
            <option value="dark">Dark</option>
            <option value="light">Light</option>
          </select>
        </div>
        <div className="mb-6">
          <label className="block text-gray-200 mb-2" htmlFor="language">Language</label>
          <select
            id="language"
            value={language}
            onChange={handleLanguageChange}
            className="block w-full bg-gray-800 text-white p-2 rounded"
          >
            <option value="en">English</option>
            <option value="es">Spanish</option>
            <option value="fr">French</option>
            <option value="de">German</option>
          </select>
        </div>
        <div className="mb-6">
          <button className="w-full bg-blue-600 hover:bg-blue-700 text-white p-2 rounded">Save Changes</button>
        </div>
      </div>
      <div className="bg-gray-700 p-6 rounded-lg shadow-md mb-6">
        <h2 className="text-2xl font-semibold mb-4">User Preferences</h2>
        <p className="text-gray-200">Additional user preferences can be added here.</p>
      </div>
      <div className="bg-gray-700 p-6 rounded-lg shadow-md">
        <h2 className="text-2xl font-semibold mb-4">Appearance</h2>
        <p className="text-gray-200">Customize the appearance of the admin panel here.</p>
      </div>
    </div>
  );
};

export default Settings;
