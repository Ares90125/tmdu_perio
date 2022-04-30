import React, { useState } from "react";
import Button from "../../../../components/button";
import {Route,Routes,NavLink,Link } from 'react-router-dom';

import ToolButton from "../../../../components/toolcomponent";
import DefaultButton from "../../../../components/button";
const Main = () => {
    var weekday = ["日", "月", "火", "水", "木", "金", "土"];
    const [tabindex, settTab]=useState(1);
    function setTabIndex(val:number){
        settTab(val);
    }
    let day=new Date();
    const [selectday, setDay]=useState({
        year:day.getFullYear(),
        month:day.getMonth(),
        date:day.getDate(),
        day:day.getDay()
    });
    const [index,setIndex]=useState(0);
    const [tindex,setTindex]=useState(0);
    const [image, setImage]=useState("../../images/image.png");
    const [uptime,setUptime]=useState({
        hour:day.getHours(),
        minute:day.getMinutes()
    });
    function changeDay(val:boolean){
       if(val){
           day.setFullYear(selectday.year,selectday.month,selectday.date);
           day.setDate(day.getDate()-1);
            setDay({year:day.getFullYear(),
            month:day.getMonth(),
            date:day.getDate(),
            day:day.getDay()});
       }
       else{
           day.setFullYear(selectday.year,selectday.month,selectday.date);
           day.setDate(day.getDate()+1);
            setDay({year:day.getFullYear(),
            month:day.getMonth(),
            date:day.getDate(),
            day:day.getDay()});
       }
    }
    return (
        <div>
            <p className="text-4xl text-mainColor py-8 font-black text-center pb-2">{"歯みがき記録"}</p>
            <p className="text-base text-mainColor pt-2 pb-4 font-light text-center pb-2">{"自分の記録をみてみましょう"}</p>
            <div className="flex justify-evenly items-end ">
                <div>
                    <button type="button" onClick={() => { changeDay(true) }}>
                        <p className="text-2xl  text-center underline text-btnbgColor text-2xl">前日</p>
                    </button>
                </div>
                <div >
                    <p className="text-mainColor">
                        <span className="text-2xl">{selectday.year}</span>
                        <span className="text-4xl font-semibold">/{selectday.month}/{selectday.date}</span>
                        <span>({weekday[selectday.day]})</span>
                    </p>
                </div>
                <div>
                <button type="button" onClick={() => { changeDay(false) }}>
                    <p className="text-xl text-center underline text-btnbgColor text-2xl">翌日</p>
                </button>
                </div>
            </div>
            <div className="bg-btnbgColor h-0.5 mx-2 "></div>
            <div className="bg-white rounded-2xl p-4 flex flex-row mt-12 shadow-[-1px_-1px_4px_4px_rgba(0,0,0,0.03)]">
                <p className="basis-1/6 text-center text-btnbgColor text-xl">{uptime.hour}:{uptime.minute}</p>
                <p className="basis-1/6 text-center text-mainColor text-xl font-extrabold">起床</p>
                <p className="basis-1/2"></p>
                <NavLink to="getup" className="basis-1/6">
                 <p className=" text-center text-btnbgColor text-xl underline font-bold">編集</p>
                </NavLink>
            </div>
            <div className="bg-white rounded-2xl p-4 mt-12 shadow-[-1px_-1px_4px_4px_rgba(0,0,0,0.03)]">
                <div className="flex flex-row ">
                    <p className="basis-1/6 text-center text-btnbgColor text-xl">{uptime.hour}:{uptime.minute}</p>
                    <p className="basis-1/2 text-center text-mainColor text-xl font-extrabold">朝のお口の状態</p>
                    <p className="basis-1/6"></p>
                    <NavLink to="status" className="basis-1/6">
                        <p className=" text-center text-btnbgColor text-xl underline font-bold">編集</p>
                    </NavLink>
                </div>
                <p className="basis-1/6 text-mainColor text-sm  font-bold px-8 py-2">スッキリしている</p>
            </div>
            <div className="bg-white rounded-2xl p-4 mt-12 shadow-[-1px_-1px_4px_4px_rgba(0,0,0,0.03)]">
                <div className="flex flex-row ">
                    <p className="basis-1/6 text-center text-btnbgColor text-xl">{uptime.hour}:{uptime.minute}</p>
                    <p className="basis-1/2 text-center text-mainColor text-xl font-extrabold">歯みがき記録</p>
                    <p className="basis-1/6"></p>
                    <NavLink to="diary" className="basis-1/6">
                        <p className=" text-center text-btnbgColor text-xl underline font-bold">編集</p>
                    </NavLink>
                </div>
                <div className="flex  flex-row items-cneter justify-around mt-8">
                    <ToolButton size="w-20 h-28" buttonClick={()=>{}} text="10分以上" className={"bg-btnbgColor text-white"} path={"comb.png"}/>
                    <ToolButton size="w-20 h-28" buttonClick={()=>{}} text="" className={index==1?"bg-btnbgColor text-white":"bg-white text-mainColor shadow-[-1px_-1px_4px_4px_rgba(0,0,0,0.03)]"} path={index==1?"bresh.png":"bresh-none.png"}/>
                    <ToolButton size="w-20 h-28" buttonClick={()=>{}} text="" className={index==2?"bg-btnbgColor text-white":"bg-white text-mainColor shadow-[-1px_-1px_4px_4px_rgba(0,0,0,0.03)]"} path={index==2?"material.png":"material-none.png"}/>
                    <ToolButton size="w-20 h-28" buttonClick={()=>{}} text="" className={index==3?"bg-btnbgColor text-white":"bg-white text-mainColor shadow-[-1px_-1px_4px_4px_rgba(0,0,0,0.03)]"} path={index==3?"flox.png":"flox-none.png"}/>
                </div>
            </div>
            <div className="bg-white rounded-2xl p-4 mt-12 shadow-[-1px_-1px_4px_4px_rgba(0,0,0,0.03)]">
                <div className="flex flex-row ">
                    <p className="basis-1/6 text-center text-btnbgColor text-xl">{uptime.hour}:{uptime.minute}</p>
                    <p className="basis-1/2 text-center text-mainColor text-xl font-extrabold">食事の記録</p>
                    <p className="basis-1/6"></p>
                    <NavLink to="meal" className="basis-1/6">
                        <p className=" text-center text-btnbgColor text-xl underline font-bold">編集</p>
                    </NavLink>
                </div>
                <div>
                    <img src={image} className="w-full py-4"></img>
                </div>
                <p className="basis-1/6 text-mainColor text-sm  font-bold px-8 py-2">家系ラーメン</p>
            </div>
            <div className="bg-white rounded-2xl p-4 mt-12 shadow-[-1px_-1px_4px_4px_rgba(0,0,0,0.03)]">
                <div className="flex flex-row ">
                    <p className="basis-1/6 text-center text-btnbgColor text-xl">{uptime.hour}:{uptime.minute}</p>
                    <p className="basis-1/2 text-center text-mainColor text-xl font-extrabold">歯みがき記録</p>
                    <p className="basis-1/6"></p>
                    <NavLink to="status" className="basis-1/6">
                        <p className=" text-center text-btnbgColor text-xl underline font-bold">編集</p>
                    </NavLink>
                </div>
                <div className="flex  flex-row items-cneter justify-around mt-8 ">
                    <ToolButton size="w-20 h-28" buttonClick={()=>{}} text="10分以上" className={"bg-btnbgColor text-white"} path={"comb.png"}/>
                    <ToolButton size="w-20 h-28" buttonClick={()=>{}} text="" className={index==1?"bg-btnbgColor text-white":"bg-white text-mainColor shadow-[-1px_-1px_4px_4px_rgba(0,0,0,0.03)]"} path={tindex==1?"bresh.png":"bresh-none.png"}/>
                    <ToolButton size="w-20 h-28" buttonClick={()=>{}} text="" className={index==2?"bg-btnbgColor text-white":"bg-white text-mainColor shadow-[-1px_-1px_4px_4px_rgba(0,0,0,0.03)]"} path={tindex==2?"material.png":"material-none.png"}/>
                    <ToolButton size="w-20 h-28" buttonClick={()=>{}} text="" className={index==3?"bg-btnbgColor text-white":"bg-white text-mainColor shadow-[-1px_-1px_4px_4px_rgba(0,0,0,0.03)]"} path={tindex==3?"flox.png":"flox-none.png"}/>
                </div> 
            </div>
            <div className="bg-white rounded-2xl p-4 flex flex-row mt-12 shadow-[-1px_-1px_4px_4px_rgba(0,0,0,0.03)]">
                <p className="basis-1/6 text-center text-btnbgColor text-xl">{uptime.hour}:{uptime.minute}</p>
                <p className="basis-1/6 text-center text-mainColor text-xl font-extrabold">就寝</p>
                <p className="basis-1/2"></p>
                <NavLink to="bedtime" className="basis-1/6">
                 <p className=" text-center text-btnbgColor text-xl underline font-bold">編集</p>
                </NavLink>
            </div>
            <DefaultButton text="記録をする" buttonClick={() => {}}></DefaultButton>
        </div>
    );
};

export default Main;