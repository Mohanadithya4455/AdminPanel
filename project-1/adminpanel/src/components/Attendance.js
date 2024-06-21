import React from 'react';

const Attendance = () => {
  const data = [
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

  return (
    <div className='flex-grow bg-gray-800 h-full'>
      <div>
        <h3 className='text-white p-5 font-semibold text-lg'>Attendance</h3>
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
}

export default Attendance;
