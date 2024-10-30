import React, { useEffect, useState } from 'react';
import axios from 'axios';

const Dashboard = () => {
    const [applications, setApplications] = useState([]);
    const [jobs, setJobs] = useState([]);
    
    useEffect(() => {
        const fetchUserData = async () => {
            const token = localStorage.getItem('token');
            if (!token) return;

            try {
                const config = { headers: { Authorization:
                    `Bearer ${token}`}};

                    const applicationsRes = await
                    axios.get('/api/applications', config);
                    setApplications(applicationsRes.data);

                    const jobsRes = await axios.get('/api/jobs', config);
                    setJobs(jobsRes.data.filter(job => job.status === 'active'));
            } catch (error) {
                console.error('Error fetching user data:', error);
            }
        };
        fetchUserData();
    }, []);

    return (
        <div>
            <h1>Dashboard</h1>
            <section>
                <h2>My Applications</h2>
                <ul>
                    {applications.map(app => (
                        <li key={app._id}>{app.jobId.title} - {app.status}</li>
                    ))}
                </ul>
            </section>
            <section>
                <h2>Saved Jobs</h2>
                <ul>
                    {jobs.map(job => (
                        <li key={job._id}>{job.title}</li>
                    ))}
                </ul>
            </section>
        </div>
    );
};

export default Dashboard;