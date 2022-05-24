import React from 'react';
import {Route,Routes, Navigate } from 'react-router-dom';
import PatientEdit from './patientedit';
import PatientInfoEdit from './patientinfoedit';
import PatientList from './patientlist';
import Register from './register';
import TreatSet from './treatset';

const PatientManager = () => {
    return (
        <Routes>
            <Route path='/' element={<PatientList />} />
            <Route path='/register' element={<Register />} />
            <Route path='/patientedit' element={<PatientEdit />} />
            <Route path='/patientinfoedit' element={<PatientInfoEdit />} />
            <Route path='/treatset' element={<TreatSet />} />
        </Routes>
    )
  }
  export default PatientManager;
