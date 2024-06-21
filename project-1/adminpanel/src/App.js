import logo from './logo.svg';
import './App.css';

import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Attendance from './components/Attendance';
import Employees from './components/Employees';
import Sites from './components/Sites';
import Projects from './components/Projects';
import Settings from './components/Settings';
import Themes from './components/Themes';
import Logout from './components/Logout';
import Home from './components/Home';
import DashBoard from './components/DashBoard';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />}>
        <Route path="dashboard" element={<DashBoard/>}/>
          <Route path="attendance" element={<Attendance />} />
          <Route path="employees" element={<Employees />} />
          <Route path="sites" element={<Sites />} />
          <Route path="projects" element={<Projects />} />
          <Route path="settings" element={<Settings />} />
         
          <Route path="logout" element={<Logout />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
