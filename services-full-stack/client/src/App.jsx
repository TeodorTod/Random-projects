import React, { useContext } from 'react';
import { BrowserRouter as Router, Route, Routes, Navigate } from 'react-router-dom';
import Navbar from './components/navbar/Navbar';
import './App.css';
import Services from './components/services/Services';
import Contact from './components/contact/Contact';
import Home from './components/home/Home';
import SignIn from './components/sign-up/SignIn';
import SignUp from './components/sign-in/SignUp';
import { AuthContext } from './contexts/AuthContext'
import AddService from './components/add-service/AddService';

function App() {
  const { currentUser } = useContext(AuthContext);

  return (
    <Router>
      <Navbar />
      <div style={{ paddingTop: '4rem' }}>
        <Routes>
          {currentUser ? (
            <>
              <Route path="/services" element={<Services />} />
              <Route path="/add-service" element={<AddService />} />
              <Route path="/contact" element={<Contact />} />
              <Route path="*" element={<Navigate to="/" />} />
            </>
          ) : (
            <>
              <Route path="/signin" element={<SignIn />} />
              <Route path="/signup" element={<SignUp />} />
              <Route path="*" element={<Navigate to="/signin" />} />
            </>
          )}
        </Routes>
      </div>
    </Router>
  );
}

export default App;
