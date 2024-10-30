import React, { useEffect, useState } from 'react';
import axios from 'axios';

const JobListings = () => {
    const [jobs, setJobs] = useState([]);

    useEffect(() => {
        const fetchJobs = async () => {
            try {
                const response = await axios.get('/api/jobs');
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
            <ul>
                {jobs.map(job => (
                    <li key={job._id}>
                        <a href={`/jobs/${job._id}`}>{job.title}</a>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default JobListings;
