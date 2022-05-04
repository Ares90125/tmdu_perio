import React from 'react';
import {Route,Routes, Navigate, useNavigate } from 'react-router-dom';
import {  useAppSelector } from '../../redux/hooks';
import Alignemnt from './auth/alignment';
import Login from './auth/login';
import ResetPass from './auth/resetpassword';
import Home from './home';
const Client = () => {
    const isauth = useAppSelector((state) => state.authenticater.client);
    const pathname = window.location.pathname.split('/')[2];
    const navigate = useNavigate();
    // if(!isauth&&pathname!="login"){
    //     navigate('/client/login');
    // }
    return (
        <Routes>
            <Route path='/' element={<Navigate to="/client/home"/>} />
            <Route path='/login' element={<Login/> }/>
            <Route path='/resetpass' element={<ResetPass/>} />
            <Route path='/alignment' element={<Alignemnt/>} />
            <Route path='/home' element={<Navigate to="/client/home/register/bresh"/>} />
            <Route path='/home/register' element={<Navigate to="/client/home/register/bresh"/>} />
            <Route path='/home/*' element={<Home/>} />
        </Routes>
    )
  }
  export default Client;
