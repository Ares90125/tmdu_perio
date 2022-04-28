import React, { useState } from "react";
import {Route,Routes, NavLink } from 'react-router-dom';
import { BiLayout, BiPencil, BiEnvelope, BiArrowBack, BiCalendar } from "react-icons/bi";
import Register from "../home/register";
import Editer from "../home/edit";
const Home = () => {
    let path=window.location.pathname.split("/");
    let flag=false;
    const [selectindex, setSelect]=useState(1);
    function SetIndex(val:number){
        setSelect(val);
    }
    return (
        <div>
            <div className="flex justify-between pt-8 pb-2 mx-2">
            <p className="text-base text-mainColor  font-semibold text-center ">松田 聖子 さん</p>
            </div>
            <div className="bg-btnbgColor h-0.5 mx-2"></div>
            <div className="px-4 pb-20">
                <Routes >
                    <Route  path="/register/*" element={ <Register />}/>
                    <Route  path="/edit/*" element={ <Editer />}/>
                    <Route  path="/email/*" element={ <Register />}/>
                </Routes>
            </div>
            <footer className="p-4 bg-white fixed bottom-0 h-16 w-full rounded-t-xl">
                <div className="flex flew-row" >
                    <NavLink to="register/" className={"basis-1/3 " + (selectindex==1?"text-mainColor":"text-gray-400" )}>
                        <button type="button" onClick={() => { SetIndex(1) }} className="mx-auto w-full" >
                            <BiPencil className=" text-xl flex flex-col mx-auto" />
                            <p className="text-xs text-center">記録する</p>
                        </button>
                    </NavLink>
                    <NavLink to="edit/" className={"basis-1/3 " + (selectindex==2?"text-mainColor":"text-gray-400" )} >
                        <button type="button" onClick={() => { SetIndex(2) }} className="mx-auto w-full" >
                            <BiLayout className=" text-xl flex flex-col mx-auto" />
                            <p className="text-xs  text-center">記録を見る</p>
                        </button>
                    </NavLink>
                    <NavLink to="email/" className={"basis-1/3 " + (selectindex==3?"text-mainColor":"text-gray-400" )} >
                        <button type="button" onClick={() => { SetIndex(3) }} className="mx-auto w-full">
                            <BiEnvelope className=" text-xl flex flex-col mx-auto"  />
                            <p className="text-xs  text-center">お知らせ</p>
                        </button>
                    </NavLink>
                </div>
            </footer>

        </div>
    );
};

export default Home;