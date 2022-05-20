import React from 'react';
import {Route,Routes, Navigate } from 'react-router-dom';
import PatientList from './patientlist';
import Register from './register';

const PatientManager = () => {
    return (

        <Routes>
            <Route path='/' element={<PatientList />} />
            <Route path='/register' element={<Register />} />
            <Route path='/registersucc' element={<div />} />
            <Route path='/patientedit' element={<div />} />
            <Route path='/patientinfoedit' element={<div />} />
            <Route path='/treatset' element={<div />} />
        </Routes>
    )
  }
  export default PatientManager;
