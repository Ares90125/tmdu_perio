import React, { useEffect, useState } from "react";
import {Route,Routes,NavLink,useLocation, Navigate} from 'react-router-dom';
import { BiArrowBack,BiCalendar} from "react-icons/bi";
import Main from "./main";
import Calender from "./calender";
import GetUp from "./getup";
import Status from "./status";
import Diary from "./diary";
import SetMeal from "./setmeal";
import BedTime from "./bedtime";
import Adder from "./add";

const Editer = () => {
    const [flag, setFlag]=useState(false);
    const location = useLocation();
    const path=location.pathname.split("/");
    useEffect(() => {
        if(path.length>4&&path[4]!=""){
            setFlag(true);
        }else{
            setFlag(false);
        }
    }, [location])
    return (
        <div>
            <div className="flex justify-between pt-4 pb-2 px-4">
                <NavLink to={path[4]=="add"?"calender":""} className={flag?"":"invisible"}>
                    <div className="bg-mainColor text-white rounded-md w-[1.875rem] h-[1.875rem] p-[3px]">
                        <img src={'/images/back.png'} className="w-full h-full"/>
                    </div>
                </NavLink>
                <p className="text-base text-mainColor  font-semibold text-center">松田 聖子 さん</p>
                <NavLink to="calender" className={flag?"invisible":""}>
                    <div className="bg-mainColor text-white rounded-md w-[1.875rem] h-[1.875rem] p-[3px]">
                        <img src={'/images/calender.png'} className="w-full h-full"/>
                    </div>
                </NavLink>
            </div>
            <div className="text-xl bg-btnbgColor h-0.5"></div>
            <Routes >
                <Route  path="/" element={ <Main />}/>
                <Route  path="/add/*" element={ <Adder />}/>
                <Route  path="/calender" element={ <Calender />}/>
                <Route  path="/getup" element={ <GetUp />}/>
                <Route  path="/status" element={ <Status />}/>
                <Route  path="/diary" element={ <Diary />}/>
                <Route  path="/meal" element={ <SetMeal />}/>
                <Route  path="/bedtime" element={ <BedTime />}/>
            </Routes>
        </div>
    );
};
export default Editer;
