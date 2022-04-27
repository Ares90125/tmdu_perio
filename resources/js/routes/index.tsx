import React from 'react';
import {Route,Routes, Navigate } from 'react-router-dom';
import Alignemnt from '../pages/auth/alignment';
import Login from '../pages/auth/login';
import ResetPass from '../pages/auth/resetpassword';
import Home from '../pages/home';
import Editer  from '../pages/home/edit';

const Router = () => {
    return (
        <Routes> 
            <Route path='/' element={<Navigate to="/login"/>} />
            <Route path='/login' element={<Login/> }/>
            <Route path='/resetpass' element={<ResetPass/>} />
            <Route path='/alignment' element={<Alignemnt/>} />
            <Route path='/home' element={<Navigate to="/home/register/bresh"/>} />
            <Route path='/home/register' element={<Navigate to="/home/register/bresh"/>} />
            <Route path='/home/editer' element={<Editer/>} />
            <Route path='/home/*' element={<Home/>} />
        </Routes>
    ) 
  }
  
  export default Router;