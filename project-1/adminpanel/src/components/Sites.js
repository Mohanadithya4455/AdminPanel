import React, { useState } from 'react';

const Sites = () => {
  const [sites, setSites] = useState([
    { id: 1, name: 'Site 1', location: 'Location 1' },
    { id: 2, name: 'Site 2', location: 'Location 2' },
  ]);
  const [selectedSite, setSelectedSite] = useState(null);
  const [isEditing, setIsEditing] = useState(false);
  const [form, setForm] = useState({ name: '', location: '' });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setForm({ ...form, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (isEditing) {
      // Update site in local state
      setSites(sites.map(site => (site.id === selectedSite.id ? { ...site, ...form } : site)));
      setIsEditing(false);
    } else {
      // Add new site to local state
      const newSite = { id: sites.length + 1, ...form };
      setSites([...sites, newSite]);
    }
    setForm({ name: '', location: '' });
  };

  const handleEdit = (site) => {
    setSelectedSite(site);
    setForm(site);
    setIsEditing(true);
  };

  const handleDelete = (id) => {
    setSites(sites.filter(site => site.id !== id));
  };

  return (
    <div className="p-8">
      <h2 className="text-2xl font-bold mb-4">Sites</h2>
      
      <form onSubmit={handleSubmit} className="mb-4">
        <div className="mb-2">
          <label className="block text-sm font-medium">Site Name</label>
          <input
            type="text"
            name="name"
            value={form.name}
            onChange={handleInputChange}
            className="w-full p-2 border rounded"
          />
        </div>
        <div className="mb-2">
          <label className="block text-sm font-medium">Location</label>
          <input
            type="text"
            name="location"
            value={form.location}
            onChange={handleInputChange}
            className="w-full p-2 border rounded"
          />
        </div>
        <button type="submit" className="bg-blue-500 text-white p-2 rounded">
          {isEditing ? 'Update Site' : 'Add Site'}
        </button>
      </form>
      
      <ul>
        {sites.map(site => (
          <li key={site.id} className="flex justify-between items-center mb-2 p-2 border rounded">
            <div>
              <p className="font-bold">{site.name}</p>
              <p>{site.location}</p>
            </div>
            <div>
              <button
                onClick={() => handleEdit(site)}
                className="bg-yellow-500 text-white p-1 rounded mr-2"
              >
                Edit
              </button>
              <button
                onClick={() => handleDelete(site.id)}
                className="bg-red-500 text-white p-1 rounded"
              >
                Delete
              </button>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Sites;
