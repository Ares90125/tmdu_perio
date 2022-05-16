import React from 'react';
import {Route,Routes, Navigate } from 'react-router-dom';

const PatientManager = () => {
    return (

        <Routes>
            <Route path='/patientlist' element={<div />} />
            <Route path='/register' element={<div />} />
            <Route path='/registersucc' element={<div />} />
            <Route path='/patientedit' element={<div />} />
            <Route path='/patientinfoedit' element={<div />} />
            <Route path='/treatset' element={<div />} />
        </Routes>
    )
  }
  export default PatientManager;
