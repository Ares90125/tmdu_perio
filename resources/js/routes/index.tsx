import React from "react";
import {Route,Routes, Navigate } from 'react-router-dom';
import Admin from '../pages/server';
import Client from "../pages/client";

const Router = () => {
    return (
        <div>
            <Routes>
                <Route path="/admin/*" element={<Admin/>}/>
                <Route path='/' element={<Navigate to="/client"/>} />
                <Route path="/client/*" element={<Client/>}/>
            </Routes>
        </div>
    )
  }

  export default Router;
