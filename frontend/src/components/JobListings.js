// JobListings.js
import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';

const JobListings = () => {
  const [jobs, setJobs] = useState([]);

  useEffect(() => {
    const fetchJobs = async () => {
      try {
        // Ensure the URL matches your backend route
        const response = await axios.get('http://localhost:5000/api/jobs');
        setJobs(response.data);
      } catch (error) {
        console.error('Error fetching job listings:', error);
      }
    };
    fetchJobs();
  }, []);

  return (
    <div>
      <h1>Job Listings</h1>
      <ul className="list-group">
        {jobs.map(job => (
          <li key={job._id} className="list-group-item">
            <Link to={`/jobs/${job._id}`} className="text-decoration-none">{job.title}</Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default JobListings;
