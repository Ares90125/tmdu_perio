import React from 'react';
import {Route,Routes, Navigate } from 'react-router-dom';

const Patient = () => {
    return (
        
        <Routes> 
            <Route path='/programA' element={<div />} />
            <Route path='/programB' element={<div />} />
            <Route path='/programC' element={<div />} />
            <Route path='/programD' element={<div />} />
        </Routes>
    ) 
  }
  export default Patient;