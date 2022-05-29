import React, { useEffect, useState } from "react";
import {Route,Routes,NavLink,useLocation, Navigate} from 'react-router-dom';
import { BiArrowBack,BiCalendar} from "react-icons/bi";
import NotificationList from "./notificationlist";
import BreshNotify from "./breshnotify"
import SelfCheck from "./selfcheck";
import Record from "./record";

const Notification = () => {
   return (
    <Routes >
        <Route  path="/" element={ <NotificationList />}/>
        <Route  path="/breshnotify" element={ <BreshNotify />}/>
        <Route  path="/selfcheck" element={ <SelfCheck />}/>
        <Route  path="/record" element={ <Record />}/>
    </Routes>
   )
};
export default Notification;
