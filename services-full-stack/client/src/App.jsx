import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './components/navbar/Navbar';
import './App.css';
import Services from './components/services/Services';
import Contact from './components/contact/Contact';
import Home from './components/home/Home';
import SignIn from './components/sign-up/SignIn';
import SignUp from './components/sign-in/SignUp';


function App() {
  return (
    <Router>
      <Navbar />
      <div style={{ paddingTop: '4rem' }}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/services" element={<Services />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/signIn" element={<SignIn />} />
          <Route path="/signUp" element={<SignUp />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
