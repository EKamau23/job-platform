// App.js
import React from 'react';
import { Route, Routes } from 'react-router-dom';
import JobListings from './components/JobListings';
import JobDetail from './components/JobDetail';
import Login from './components/Login';
import Register from './components/Register';
import Dashboard from './components/Dashboard';
import PrivateRoute from './components/PrivateRoute';
import Navbar from './components/Navbar'; // Import the Navbar component

const App = () => (
  <div>
    <Navbar /> {/* Include the Navbar here */}
    <Routes>
      <Route path="/" element={<JobListings />} />
      <Route path="/jobs/:id" element={<JobDetail />} />
      <Route path="/login" element={<Login />} />
      <Route path="/register" element={<Register />} />
      <Route path="/dashboard" element={<PrivateRoute><Dashboard /></PrivateRoute>} />
    </Routes>
  </div>
);

export default App;
