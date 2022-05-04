import React, { useEffect } from "react";
import {Route,Routes, Navigate } from 'react-router-dom';
import Alignemnt from '../pages/client/auth/alignment';
import Login from '../pages/client/auth/login';
import ResetPass from '../pages/client/auth/resetpassword';
import Home from '../pages/client/home';
import Admin from '../pages/server';
import { useAppSelector, useAppDispatch } from '.././redux/hooks'
import {  increment } from '.././redux/reducers/counterslice'
import Client from "../pages/client";

const Router = () => {
    const dispatch = useAppDispatch();
    const count = useAppSelector((state) => state.counter.value);
    useEffect(() => {
        dispatch(increment());
    }, []);
    return (
        <div>
            <div>{count}</div>
            <Routes>
                <Route path="/admin/*" element={<Admin/>}/>
                <Route path='/' element={<Navigate to="/client"/>} />
                <Route path="/client/*" element={<Client/>}/>
            </Routes>
        </div>
    )
  }

  export default Router;
