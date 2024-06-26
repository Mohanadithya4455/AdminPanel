import React, { useState } from 'react';

const Attendance = () => {
  const initialData = [
    { dp: 'DP1', name: 'John Doe', phone: '123-456-7890', clockIn: '08:00 AM', clockOut: '04:00 PM', loginTime: '8 hours' },
    { dp: 'DP2', name: 'Jane Smith', phone: '123-456-7891', clockIn: '08:30 AM', clockOut: '04:30 PM', loginTime: '8 hours' },
    { dp: 'DP3', name: 'Jim Brown', phone: '123-456-7892', clockIn: '09:00 AM', clockOut: '05:00 PM', loginTime: '8 hours' },
    { dp: 'DP4', name: 'Jake White', phone: '123-456-7893', clockIn: '08:15 AM', clockOut: '04:15 PM', loginTime: '8 hours' },
    { dp: 'DP5', name: 'Julia Green', phone: '123-456-7894', clockIn: '08:45 AM', clockOut: '04:45 PM', loginTime: '8 hours' },
    { dp: 'DP6', name: 'Jack Black', phone: '123-456-7895', clockIn: '09:15 AM', clockOut: '05:15 PM', loginTime: '8 hours' },
    { dp: 'DP7', name: 'Jill Red', phone: '123-456-7896', clockIn: '08:00 AM', clockOut: '04:00 PM', loginTime: '8 hours' },
    { dp: 'DP8', name: 'Jerry Blue', phone: '123-456-7897', clockIn: '08:30 AM', clockOut: '04:30 PM', loginTime: '8 hours' },
    { dp: 'DP9', name: 'Janet Purple', phone: '123-456-7898', clockIn: '09:00 AM', clockOut: '05:00 PM', loginTime: '8 hours' },
    { dp: 'DP10', name: 'James Orange', phone: '123-456-7899', clockIn: '08:15 AM', clockOut: '04:15 PM', loginTime: '8 hours' },
  ];

  const [data, setData] = useState(initialData);
  const [searchDate, setSearchDate] = useState('');

  const handleDateChange = (event) => {
    setSearchDate(event.target.value);
  };

  const handleSearch = () => {
    if (searchDate.trim() === '') {
      setData(initialData); 
    } else {
      const filteredData = initialData.filter(item => {
      
        const clockInDate = new Date(`01/01/2024 ${item.clockIn}`);
        const searchDateObj = new Date(searchDate);
        return (
          clockInDate.getDate() === searchDateObj.getDate() &&
          clockInDate.getMonth() === searchDateObj.getMonth() &&
          clockInDate.getFullYear() === searchDateObj.getFullYear()
        );
      });
      setData(filteredData);
    }
  };

  return (
    <div className='flex-grow bg-gray-800 h-full'>
      <div>
        <h3 className='text-white p-5 font-semibold text-lg'>Attendance</h3>
        <div className='flex items-center'>
          <label htmlFor='searchDate' className='text-white mx-3'>Search Date:</label>
          <input
            type='date'
            id='searchDate'
            value={searchDate}
            onChange={handleDateChange}
            className='px-3 py-1 rounded-md bg-gray-700 text-white border border-gray-600 focus:outline-none focus:border-blue-500'
          />
          <button
            onClick={handleSearch}
            className='px-4 py-1 ml-3 bg-blue-500 rounded-md text-white hover:bg-blue-600 focus:outline-none focus:bg-blue-600'
          >
            Search
          </button>
        </div>
      </div>
      <div className='mt-5 ml-3'>
        <table className='min-w-full table-auto'>
          <thead>
            <tr className='bg-gray-700 text-white'>
              <th className='p-3 text-left'>Dp</th>
              <th className='p-3 text-left'>Name</th>
              <th className='p-3 text-left'>Phone</th>
              <th className='p-3 text-left'>Clock-In</th>
              <th className='p-3 text-left'>Clock-Out</th>
              <th className='p-3 text-left'>Login time</th>
            </tr>
          </thead>
          <tbody>
            {data.map((row, index) => (
              <tr key={index} className='odd:bg-gray-700 even:bg-gray-600 text-white'>
                <td className='p-3 border-t border-gray-500'>{row.dp}</td>
                <td className='p-3 border-t border-gray-500'>{row.name}</td>
                <td className='p-3 border-t border-gray-500'>{row.phone}</td>
                <td className='p-3 border-t border-gray-500'>{row.clockIn}</td>
                <td className='p-3 border-t border-gray-500'>{row.clockOut}</td>
                <td className='p-3 border-t border-gray-500'>{row.loginTime}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Attendance;
