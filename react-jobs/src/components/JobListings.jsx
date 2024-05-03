
import { useEffect, useState } from 'react';
import JobListing from './JobListing';

const JobListings = ({ isHome = false }) => {
    const [jobs, setJobs] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const apiUrl = isHome ?
            '/api/jobs?_limit=3' :
            '/api/jobs';
        const fetchJobs = async () => {
            try {
                const res = await fetch(apiUrl);
                const data = await res.json();
                setJobs(data);
                setLoading(false);
            } catch (error) {
                console.error(error)
            } finally {
                setLoading(false)
            }
        };
        fetchJobs();
    }, []);

    return (
        <>
            <section className="bg-blue-50 px-4 py-10">
                <div className="container-xl lg:container m-auto">
                    <h2 className="text-3xl font-bold text-indigo-500 mb-6 text-center">
                        {isHome ? 'Recent Jobs' : 'Browse Jobs'}
                    </h2>
                    <div>
                        {loading ? (
                            <h2 style={{ textAlign: "center" }}>Loading... </h2>
                        ) : (
                            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                                {jobs.map((job) => (
                                    <JobListing key={job.id} job={job} />
                                ))}
                            </div>
                        )}
                    </div>
                </div>
            </section>
        </>
    )
}

export default JobListings