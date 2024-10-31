// Register.js
import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate, Link } from 'react-router-dom';

const Register = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState(null);
  const navigate = useNavigate();

  const handleInputChange = (setter) => (e) => {
    setter(e.target.value);
    setError(null); // Clear error on input change
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      // Adjust the URL here if needed
      await axios.post('http://localhost:5000/api/auth/register', { name, email, password });
      alert('Registration successful! Please login.');
      navigate('/login');
    } catch (error) {
      console.error('Registration failed:', error);
      setError(error.response?.data?.error || 'An unexpected error occurred. Please try again.');
    }
  };

  return (
    <div className="d-flex justify-content-center align-items-center vh-100">
      <form onSubmit={handleSubmit} className="bg-light p-4 rounded shadow">
        <h2 className="mb-4">Register</h2>
        <div className="mb-3">
          <input type="text" className="form-control" placeholder="Name" value={name} onChange={handleInputChange(setName)} required />
        </div>
        <div className="mb-3">
          <input type="email" className="form-control" placeholder="Email" value={email} onChange={handleInputChange(setEmail)} required />
        </div>
        <div className="mb-3">
          <input type="password" className="form-control" placeholder="Password" value={password} onChange={handleInputChange(setPassword)} required />
        </div>
        <button type="submit" className="btn btn-primary">Register</button>
        <div className="mt-3">
          <Link to="/login">Already have an account? Login here</Link>
        </div>
        {error && <p className="text-danger">{error}</p>}
      </form>
    </div>
  );
};

export default Register;
