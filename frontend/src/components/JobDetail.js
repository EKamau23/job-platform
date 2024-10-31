import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';

const JobDetail = () => {
    const { id } = useParams();
    const [job, setJob] = useState(null);

    useEffect(() => {
        const fetchJob = async () => {
            const response = await
            axios.get(`http://localhost:5000/api/jobs/${id}`);
            setJob(response.data);
        };
        fetchJob();
    }, [id]);

    if (!job) return <div>Loading...</div>;

    return (
        <div>
            <h2>{job.title}</h2>
            <p>{job.description}</p>
            <p>{job.location}</p>
            <p>{job.requirements}</p>
        </div>
    );
};

export default JobDetail;