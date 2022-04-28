import React, { useState } from "react";
import {Route,Routes,NavLink } from 'react-router-dom';
import Main from "./main";
const Editer = () => {
    return (
        <div>
            <Routes >
                <Route  path="/" element={ <Main />}/>
            </Routes>
        </div>
    );
};

export default Editer;