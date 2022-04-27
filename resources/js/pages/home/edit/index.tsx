import React, { useState } from "react";
import Button from "../../../components/button";
import {Route,Routes,NavLink } from 'react-router-dom';
import { BsLayoutTextWindow, BsPencil, BsEnvelope } from "react-icons/bs";
const Editer = () => {
    const [selectindex, setSelect]=useState(1);
    function SetIndex(val:number){
        setSelect(val);
    }
    const [tabindex, settTab]=useState(1);
    function setTabIndex(val:number){
        settTab(val);
    }
    return (
        <div>
        </div>
    );
};

export default Editer;