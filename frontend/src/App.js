import React from 'react';
import { Route, Routes } from 'react-router-dom';
import JobListings from './components/JobListings';
import JobDetail from './components/JobDetail';
import Login from './components/Login';
import Register from './components/Register';
import Dashboard from './components/Dashboard';

const App = () => (
  <Routes>
    <Route path="/" element={<JobListings />} />
    <Route path="/jobs/:id" element={<JobDetail />} />
    <Route path="/login" element={<Login />} />
    <Route path="/register" element={<Register />} />
    <Route path="/dashboard" element={<Dashboard />} />
  </Routes>
);

export default App;