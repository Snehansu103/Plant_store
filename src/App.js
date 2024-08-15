import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Login from './Components/Login';
import UserRoleBasedRender from './Components/UserRoleBasedRender';
import Home from './Components/Home';
import Profile from './Components/Profile';
import ContactUs from './Components/ContactUs';
import PrivateRoute from './Components/PrivateRoute';
import './App.css';

const App = () => (
    <Router>
      <Routes>
        <Route path="/plant-house" element={<Login />} />
        <Route path="/" element={<Login />} />
        <Route path="/profile" element={<PrivateRoute> <Profile /> </PrivateRoute>} />
        <Route path="/contactus" element={<PrivateRoute> <ContactUs /> </PrivateRoute>} />
        <Route path="/product/:id" element={<PrivateRoute> <UserRoleBasedRender /> </PrivateRoute>} />
        <Route path="/home" element={<PrivateRoute> <Home /> </PrivateRoute>} />
      </Routes>
    </Router>
);

export default App;
