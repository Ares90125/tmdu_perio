import React, { useState, useEffect } from "react";
import {Route,Routes,NavLink, useLocation } from 'react-router-dom';
import TypeHeader from "../../../../../components/type";
import Meal from "./meal";
const Adder = () => {
    return (
        <div>
            <p className="text-3xl text-mainColor py-4 font-black text-center pb-2">{ "記録をする"}</p>
            <p className="text-base text-mainColor pt-2 font-light text-center pb-2">{"歯磨きや食事の内容を記録しましょう"}</p>
            <TypeHeader text="食事"/>
            <div className="mx-4">
                <Meal />
            </div>
        </div>
    );
};

export default Adder;
