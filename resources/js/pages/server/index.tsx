import React from 'react';
import {Route,Routes, Navigate } from 'react-router-dom';
import Login from './auth/login';
import Home from './home';

const Admin = () => {
    return (
        <Routes>
            <Route path='/' element={<Navigate to="/admin/login"/>} />
            <Route path='/login' element={<Login />} />
            <Route path='/main' element={<Navigate to="/admin/main/patientmamage"/>} />
            <Route path='/main/*' element={<Home />} />
        </Routes>
    )
  }
  export default Admin;
