import React, { useEffect } from "react";
import {Route,Routes, Navigate, useNavigate } from 'react-router-dom';
import Admin from '../pages/server';
import Client from "../pages/client";

const Router = () => {
    const navigate = useNavigate();
    useEffect(() => {
        console.log(window.location.hostname,"sdfdf",window.location.pathname);
        if(window.location.hostname.includes('admin.')&& window.location.pathname.includes('/client'))
        {
            window.location.href='/admin';
        }
    },[])
    if(window.location.pathname=='/linelogin'){
        localStorage.setItem('lineid','1');
    }
    return (
        <div>
            <Routes>
            <Route path='/linelogin' element={<Navigate to="/client"/>} />
                <Route path="/admin/*" element={<Admin/>}/>
                <Route path='/' element={<Navigate to="/client"/>} />
                <Route path="/client/*" element={<Client/>}/>
            </Routes>
        </div>
    )
  }

  export default Router;
