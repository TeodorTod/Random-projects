import React from 'react'
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import HomeCards from './components/HomeCards';
import JobListinngs from './components/JobListinngs';
import ViewAllJobs from './components/ViewAllJobs';

const App = () => {
  return (
    <>
      <Navbar />
      <Hero title="Become a React Dev" subtitle="Find the React job that fits your skills and needs" />
      <HomeCards />
      <JobListinngs />
      <ViewAllJobs />
    </>
  )
}

export default App;