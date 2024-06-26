import React, { useState } from 'react';

const Projects = () => {
  const [projects, setProjects] = useState([
    { id: 1, name: 'Project Alpha', manager: 'Alice Johnson', status: 'In Progress', deadline: '2024-12-31', update: 'Initial phase completed' },
    { id: 2, name: 'Project Beta', manager: 'Bob Smith', status: 'Completed', deadline: '2024-06-15', update: 'All milestones achieved' },
    { id: 3, name: 'Project Gamma', manager: 'Charlie Davis', status: 'Pending', deadline: '2024-07-20', update: 'Awaiting resources' },
    { id: 4, name: 'Project Delta', manager: 'Diana Green', status: 'In Progress', deadline: '2024-09-30', update: 'Phase 2 development ongoing' },
    { id: 5, name: 'Project Epsilon', manager: 'Edward White', status: 'In Progress', deadline: '2024-11-05', update: 'Design phase complete' },
  ]);

  const addProject = () => {
    const newProject = {
      id: projects.length + 1,
      name: `Project ${String.fromCharCode(65 + projects.length)}`, 
      manager: 'New Manager',
      status: 'Pending',
      deadline: 'YYYY-MM-DD',
      update: 'No updates yet',
    };
    setProjects([...projects, newProject]);
  };

  return (
    <div className='flex-grow bg-gray-800 h-full'>
      <div className='flex justify-between'>
        <div>
          <h3 className='text-white p-5 font-semibold text-lg'>Projects</h3>
        </div>
        <div>
          <button
            onClick={addProject}
            className='px-4 py-2 mt-5 mr-5 bg-blue-500 rounded-md text-white hover:bg-blue-600 focus:outline-none focus:bg-blue-600'
          >
            Add Project
          </button>
        </div>
      </div>
      <div className='mt-5 ml-3'>
        <table className='min-w-full table-auto'>
          <thead>
            <tr className='bg-gray-700 text-white'>
              <th className='p-3 text-left'>ID</th>
              <th className='p-3 text-left'>Name</th>
              <th className='p-3 text-left'>Manager</th>
              <th className='p-3 text-left'>Status</th>
              <th className='p-3 text-left'>Deadline</th>
              <th className='p-3 text-left'>Status Update</th>
            </tr>
          </thead>
          <tbody>
            {projects.map((project) => (
              <tr key={project.id} className='odd:bg-gray-700 even:bg-gray-600 text-white'>
                <td className='p-3 border-t border-gray-500'>{project.id}</td>
                <td className='p-3 border-t border-gray-500'>{project.name}</td>
                <td className='p-3 border-t border-gray-500'>{project.manager}</td>
                <td className='p-3 border-t border-gray-500'>{project.status}</td>
                <td className='p-3 border-t border-gray-500'>{project.deadline}</td>
                <td className='p-3 border-t border-gray-500'>{project.update}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Projects;
