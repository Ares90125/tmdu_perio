import React, { useState } from "react";
import Button from "../../components/button";
import {Route,Routes,NavLink } from 'react-router-dom';
import { BsLayoutTextWindow, BsPencil, BsEnvelope } from "react-icons/bs";
import Bresh from "./register/bresh";
import Meal from "./register/meal";
import Sleep from "./register/sleep";
const Home = () => {
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
            <p className="text-base text-mainColor pt-8 font-semibold text-center pb-2">松田 聖子 さん</p>
            <div className="bg-btnbgColor h-0.5 mx-2"></div>
            <div className="px-4 pb-20">
                <p className="text-4xl text-mainColor py-8 font-black text-center pb-2">{tabindex!=3? "記録をする":"就寝／起床の入力"}</p>
                <p className="text-base text-mainColor pt-2 pb-4 font-light text-center pb-2">{tabindex!=3?"歯磨きや食事の内容を記録しましょう":"睡眠時間を記録しましょう"}</p>
                <div className="mt-4 border-y border-mainColor">
                    <ul className="flex flex-row -mb-px text-sm font-medium text-center" id="myTab" data-tabs-toggle="#myTabContent" role="tablist">
                        <li className="basis-1/3 " role="presentation">
                            <NavLink to="bresh">
                                <button onClick={() => { setTabIndex(1) }} className={"border-mainColor text-sm w-full inline-block px-4 py-1  border-b-2 font-black border-transparent  "+(tabindex==1?"bg-btnbgColor text-white":"text-mainColor bg-white")} id="profile-tab" data-tabs-target="#profile" type="button" role="tab" aria-controls="profile" aria-selected="false">歯みがき</button>
                            </NavLink>
                        </li>
                        <li className="basis-1/3 border-x border-teal-400" role="presentation">
                            <NavLink to="meal">
                            <button onClick={() => { setTabIndex(2) }} className={"border-mainColor text-sm w-full inline-block px-4 py-1  border-b-2 font-black border-transparent  "+(tabindex==2?"bg-btnbgColor text-white":"text-mainColor bg-white")} id="dashboard-tab" data-tabs-target="#dashboard" type="button" role="tab" aria-controls="dashboard" aria-selected="false">食事</button>
                            </NavLink>
                        </li>
                        <li className="basis-1/3" role="presentation">
                            <NavLink to="sleep">
                            <button onClick={() => { setTabIndex(3) }} className={"border-mainColor text-sm w-full inline-block px-4 py-1  border-b-2 font-black border-transparent  "+(tabindex==3?"bg-btnbgColor text-white":"text-mainColor bg-white")} id="settings-tab" data-tabs-target="#settings" type="button" role="tab" aria-controls="settings" aria-selected="false">睡眠</button>
                            </NavLink>
                        </li>
                    </ul>
                </div>
                <div>
                <Routes >
                    <Route  path="/bresh" element={ <Bresh />}/>
                    <Route  path="/meal" element={ <Meal />}/>
                    <Route  path="/sleep" element={ <Sleep />}/>
                </Routes>
                </div>
            </div>
            <footer className="p-4 bg-white fixed bottom-0 h-16 w-full rounded-t-xl">
                <div className="flex flew-row" >
                    <button type="button" onClick={() => { SetIndex(1) }} className={"basis-1/3 " + (selectindex==1?"text-mainColor":"text-gray-400" )} >
                        <BsPencil className=" text-xl flex flex-col mx-auto" />
                        <p className="text-xs text-center">記録する</p>
                    </button>
                    <button type="button" onClick={() => { SetIndex(2) }} className={"basis-1/3 " + (selectindex==2?"text-mainColor":"text-gray-400" )} >
                        <BsLayoutTextWindow className=" text-xl flex flex-col mx-auto" />
                        <p className="text-xs  text-center">記録を見る</p>
                    </button>
                    <button type="button" onClick={() => { SetIndex(3) }} className={"basis-1/3 " + (selectindex==3?"text-mainColor":"text-gray-400" )} >
                        <BsEnvelope className=" text-xl flex flex-col mx-auto" />
                        <p className="text-xs  text-center">お知らせ</p>
                    </button>
                </div>
            </footer>

        </div>
    );
};

export default Home;