import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom'; 

const Employees = () => {
  
  const [employees, setEmployees] = useState([]);

 
  useEffect(() => {
    
    const fetchEmployees = async () => {
      try {
        
        const response = await fetch('https://api.example.com/employees');
        if (!response.ok) {
          throw new Error('Failed to fetch employees');
        }
        const data = await response.json();
        setEmployees(data); 
      } catch (error) {
        console.error('Error fetching employees:', error);
      }
    };

    fetchEmployees();
  }, []); 

  return (
    <div>
      <div className="flex items-center justify-between mb-4">
        <h2 className="text-2xl font-bold">Employees</h2>
        <Link to="/employees/add" className="bg-blue-500 hover:bg-blue-700 text-white py-2 px-4 rounded">
          Add Employee
        </Link>
      </div>

      <div className="bg-white shadow-md rounded my-6">
        <table className="min-w-max w-full table-auto">
          <thead>
            <tr className="bg-gray-200 text-gray-600 uppercase text-sm leading-normal">
              <th className="py-3 px-6 text-left">ID</th>
              <th className="py-3 px-6 text-left">Name</th>
              <th className="py-3 px-6 text-left">Email</th>
              <th className="py-3 px-6 text-left">Role</th>
              <th className="py-3 px-6 text-center">Actions</th>
            </tr>
          </thead>
          <tbody className="text-gray-600 text-sm font-light">
            {employees.map((employee) => (
              <tr key={employee.id} className="border-b border-gray-200 hover:bg-gray-100">
                <td className="py-3 px-6 text-left whitespace-nowrap">{employee.id}</td>
                <td className="py-3 px-6 text-left">{employee.name}</td>
                <td className="py-3 px-6 text-left">{employee.email}</td>
                <td className="py-3 px-6 text-left">{employee.role}</td>
                <td className="py-3 px-6 text-center">
                  <Link to={`/employees/${employee.id}`} className="text-indigo-600 hover:text-indigo-900 mr-4">
                    Edit
                  </Link>
                  <button className="text-red-600 hover:text-red-900">Delete</button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Employees;
