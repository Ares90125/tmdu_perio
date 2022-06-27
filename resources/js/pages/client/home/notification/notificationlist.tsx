import axios, { AxiosResponse } from "axios";
import React, { useEffect, useState } from "react";
import { Route, Routes, NavLink, useLocation, Navigate } from 'react-router-dom';
import NotifiComponent from "../../../../components/noticomponent";
import { useAppDispatch, useAppSelector } from "../../../../redux/hooks";
import { changecount, changedata, changepage } from "../../../../redux/reducers/notificationslice";
interface NotifyIndex {
    index: number;
    buttonClick: (val:number)=>void;
  }
const NotificationList = (props:NotifyIndex) => {
    const dispatch = useAppDispatch();
    const data = useAppSelector((state) => state.notification.value);
    const page = useAppSelector((state) => state.notification.page);
    const name=useAppSelector((state) => state.authenticater.name);
    const tabindex = props.index;
    return (
        <div className="pb-10 mx-[3px]">
            <div className="flex justify-center items-center pt-4 pb-2 px-4 relatvice">
                <p className="text-base text-mainColor  font-semibold text-center">{name+" さん"} </p>
                <NavLink to="breshnotify" className="absolute right-0 mr-[15px]" >
                    <div className="bg-mainColor text-white rounded-md px-[9px] py-[8px]">
                        <p className="text-[12px] text-bold">通知設定</p>
                    </div>
                </NavLink>
            </div>
            <div className="text-xl bg-btnbgColor h-0.5">
            </div>
            <p className="text-4xl text-mainColor py-8 font-black text-center pb-[15px]">{"お知らせ"}</p>
            <div className="mx-[20px]">
                <div className=" flex flex-row items-center justify-center">
                    {
                        Array(page).fill(0).map((element, index) => {
                            return <div key={index} className={"flex items-center justify-center ml-[20px] w-[32px] h-[32px] rounded-[50%] " + (tabindex == index + 1 ? "bg-mainColor text-white" : "")}>
                                <button onClick={() => { props.buttonClick(index + 1) }} className="text-[14px] mx-[2px] sm:py-2 font-content">{index + 1}</button>
                            </div>
                        })
                    }
                </div>
                <div className="mt-[25px] shadow-[-1px_-1px_4px_4px_rgba(0,0,0,0.03)] w-full rounded-[10px] bg-white px-[20px] pb-[10px]">
                    {
                       data.map((element, index) => {
                            return <div key={index} className="w-full">
                                <NotifiComponent element={element} index={index} buttonClick={()=>{}} />
                            </div>

                        })
                    }
                </div>
            </div>
        </div>
    );
};
export default NotificationList;
