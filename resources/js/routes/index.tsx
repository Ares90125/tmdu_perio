import React from 'react';
import {Route,Routes, Navigate } from 'react-router-dom';
import Alignemnt from '../pages/client/auth/alignment';
import Login from '../pages/client/auth/login';
import ResetPass from '../pages/client/auth/resetpassword';
import Home from '../pages/client/home';

const Router = () => {
    return (
        
        <Routes> 
            <Route path='/' element={<Navigate to="/login"/>} />
            <Route path='/login' element={<Login/> }/>
            <Route path='/resetpass' element={<ResetPass/>} />
            <Route path='/alignment' element={<Alignemnt/>} />
            <Route path='/home' element={<Navigate to="/home/register/bresh"/>} />
            <Route path='/home/register' element={<Navigate to="/home/register/bresh"/>} />
            <Route path='/home/*' element={<Home/>} />
        </Routes>
    ) 
  }
  
  export default Router;