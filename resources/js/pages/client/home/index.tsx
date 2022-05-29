import React, { useState, useEffect } from "react";
import { Route, Routes, NavLink, useLocation } from 'react-router-dom';
import { BiLayout, BiPencil, BiEnvelope } from "react-icons/bi";
import Register from "./register";
import Editer from "./edit";
import Notification from './notification'
import axios, { AxiosResponse } from "axios";

const Home = () => {
    const location = useLocation();
    const path = location.pathname.split("/");
    useEffect(() => {
        if (path[3] == 'edit') {
            setSelect(2);
        } else if (path[3] == 'email') {
            setSelect(3);
        }
    }, [location])
    const [selectindex, setSelect] = useState(1);
    function SetIndex(val: number) {
        setSelect(val);
    }
    const notification = () => {
        let date = new Date();
        const config = {
            headers: {
                'Content-Type': 'application/json'
            }
        };
        const body = JSON.stringify({ "time": date.toTimeString().split(' ')[0].substring(0, 6) + "00", "date": date.getFullYear() + "-" + (date.getMonth() + 1) + "-" + date.getDate() });
        try {
            axios.post('/api/client/notification', body, config).then((response: AxiosResponse) => {
                if (response.data["success"] == true) {
                    return true;
                } else {
                    return false;
                }
            });
        }
        catch (err) {
            return false;
        }
    }
    useEffect(() => {
        notification();
    }, [selectindex])
    return (
        <div >
            <div className="pb-20">
                <Routes >
                    <Route path="/register/*" element={<Register />} />
                    <Route path="/edit/*" element={<Editer />} />
                    <Route path="/email/*" element={<Notification />} />
                </Routes>
            </div>
            <footer className="p-4 bg-white fixed bottom-0 h-20 w-full rounded-t-[40px] shadow-[-1px_-1px_4px_4px_rgba(0,0,0,0.1)]">
                <div className="flex flew-row" >
                    <NavLink to="register/" className={"basis-1/3 " + (selectindex == 1 ? "text-footColor" : "text-gray-400")}>
                        <button type="button" onClick={() => { SetIndex(1) }} className="mx-auto w-full" >
                            <div className="text-white rounded-md w-[1.5625rem] h-[1.5625rem] text-xl flex flex-col mx-auto">
                                <img src={selectindex == 1 ? '/images/add-icon-hover.png' : '/images/add-icon.png'} className="w-full h-full" />
                            </div>
                            <p className="text-xs text-center">記録する</p>
                        </button>
                    </NavLink>
                    <NavLink to="edit/" className={"basis-1/3 " + (selectindex == 2 ? "text-footColor" : "text-gray-400")} >
                        <button type="button" onClick={() => { SetIndex(2) }} className="mx-auto w-full" >
                            <div className="text-white rounded-md w-[1.5625rem] h-[1.5625rem] text-xl flex flex-col mx-auto">
                                <img src={selectindex == 2 ? '/images/chk-icon-hover.png' : '/images/chk-icon.png'} className="w-full h-full" />
                            </div>
                            <p className="text-xs  text-center">記録を見る</p>
                        </button>
                    </NavLink>
                    <NavLink to="email/" className={"basis-1/3 " + (selectindex == 3 ? "text-footColor" : "text-gray-400")} >
                        <button type="button" onClick={() => { SetIndex(3) }} className="mx-auto w-full">
                            <div className="text-white rounded-md w-[1.5625rem] h-[1.5625rem] text-xl flex flex-col mx-auto">
                                <img src={selectindex == 3 ? '/images/msg-icon-hover.png' : '/images/msg-icon.png'} className="w-full h-full" />
                            </div>
                            <p className="text-xs  text-center">お知らせ</p>
                        </button>
                    </NavLink>
                </div>
            </footer>

        </div>
    );
};

export default Home;
