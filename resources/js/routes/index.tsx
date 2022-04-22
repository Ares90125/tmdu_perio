import React from 'react';
import {Route,Routes } from 'react-router-dom';
import Alignemnt from '../pages/auth/alignment';
import Login from '../pages/auth/login';
import ResetPass from '../pages/auth/resetpassword';
import Home from '../pages/home';

const Router = () => {
    return (
        <Routes> 
            <Route path='/' element={<Login/>} />
            <Route path='/login' element={<Login/> }/>
            <Route path='/resetpass' element={<ResetPass/>} />
            <Route path='/alignemnt' element={<Alignemnt/>} />
            <Route path='/home/*' element={<Home/>} />
        </Routes>
    )
  }
  
  export default Router;