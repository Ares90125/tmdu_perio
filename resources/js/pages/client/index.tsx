import React, { useEffect } from 'react';
import {Route,Routes, Navigate, useNavigate } from 'react-router-dom';
import {  useAppSelector } from '../../redux/hooks';
import Alignemnt from './auth/alignment';
import Login from './auth/login';
import ResetPass from './auth/resetpassword';
import Home from './home';
import axios, { AxiosResponse } from 'axios';
import {  setclient } from '../.././redux/reducers/authentication'
import {  useAppDispatch } from '../.././redux/hooks'
const Client = () => {
    const dispatch = useAppDispatch();
    const isauth = useAppSelector((state) => state.authenticater.client);
    const pathname = window.location.pathname.split('/')[2];
    const navigate = useNavigate();
    const Me=()=>{
        const config={
            headers:{
                'Content-Type':'application/json'
            }
        };
        try{
            axios.get('/api/client/me',config).then((response:AxiosResponse)=>{
                if(response.data["success"]==true){
                    dispatch(setclient(true));
                    return true;
                }else{
                    localStorage.removeItem('token');
                    return false;
                }
            });
        }
        catch(err){
            return false;
        }
    }
    useEffect(() => {
        if(!localStorage.getItem("token") &&(pathname!="login")){
            // console.log("dfd");
            // if(!Me()){
                window.location.href="/client/login";
            // }
        }
    },[]);
    return (
        <Routes >
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
