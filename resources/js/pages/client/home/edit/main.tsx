import React, { useState , useEffect} from "react";
import Button from "../../../../components/button";
import {Route,Routes,NavLink,Link } from 'react-router-dom';
import axios, { AxiosResponse } from 'axios';
import ToolButton from "../../../../components/toolcomponent";
import DefaultButton from "../../../../components/button";
import {  useAppDispatch,useAppSelector } from '../../../.././redux/hooks'
import {  changedata,changedate } from '../../../.././redux/reducers/dataslice'
import {  changeByAmount } from '../../../.././redux/reducers/indexslice'
import {BRESH_TIME, BRESH_TOOL, MO_STATUS} from "../../../../redux/type";

const Main = () => {
    const dispatch = useAppDispatch();
    const date = useAppSelector((state) => state.data.date);
    const data=useAppSelector((state) => state.data.value);
    const loaddata = () => {
        let datestr=date.getFullYear() + "-" + (date.getMonth() + 1) + "-" + date.getDate();
        const config = {
            headers: {
                'Content-Type': 'application/json',
            }
        };
        try {
            axios.get(`/api/client/loaddata?date=${datestr}`, config).then((response: AxiosResponse) => {
                if (response.data["success"] == true) {
                    dispatch(changedata(response.data["data"][0]));
                } else {
                }
            });
        }
        catch (err) {

        }
    }
    useEffect(() => {
        loaddata();
    },[date])
    var weekday = ["日", "月", "火", "水", "木", "金", "土"];
    let day=new Date();
    function changeDay(val:boolean){
       if(val){
           day=new Date(date);
           day.setDate(day.getDate()-1);
           dispatch(changedate(day));
       }
       else{
            day=new Date(date);
            day.setDate(day.getDate()+1);
            dispatch(changedate(day));
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
                        <span className="text-2xl">{date.getFullYear()}</span>
                        <span className="text-4xl font-semibold">/{date.getMonth()}/{date.getDate()}</span>
                        <span>({weekday[date.getDay()]})</span>
                    </p>
                </div>
                <div>
                <button type="button" onClick={() => { changeDay(false) }}>
                    <p className="text-xl text-center underline text-btnbgColor text-2xl">翌日</p>
                </button>
                </div>
            </div>
            <div className="bg-btnbgColor h-0.5 mx-2 "></div>
            {
                data && data.map((v,index) =>
                    {
                        switch(v.type){
                            case 1: return <div key={index}>
                                        <div className="bg-white rounded-2xl p-4 flex flex-row mt-12 shadow-[-1px_-1px_4px_4px_rgba(0,0,0,0.03)]">
                                            <p className="basis-1/6 text-center text-btnbgColor text-xl">{v.time.split(":")[0]}:{v.time.split(":")[1]}</p>
                                            <p className="basis-1/6 text-center text-mainColor text-xl font-extrabold">起床</p>
                                            <p className="basis-1/2"></p>
                                            <NavLink to="getup" className="basis-1/6">
                                                <button onClick={()=>{dispatch(changeByAmount(index));}}>
                                                    <p className=" text-center text-btnbgColor text-xl underline font-bold">編集</p>
                                                </button>
                                            </NavLink>
                                        </div>
                                        <div className="bg-white rounded-2xl p-4 mt-12 shadow-[-1px_-1px_4px_4px_rgba(0,0,0,0.03)]">
                                            <div className="flex flex-row ">
                                                <p className="basis-1/6 text-center text-btnbgColor text-xl">{v.time.split(":")[0]}:{v.time.split(":")[1]}</p>
                                                <p className="basis-1/2 text-center text-mainColor text-xl font-extrabold"> </p>
                                                <p className="basis-1/6"></p>
                                                <NavLink to="status" className="basis-1/6">
                                                    <button onClick={()=>{dispatch(changeByAmount(index));}}>
                                                        <p className=" text-center text-btnbgColor text-xl underline font-bold">編集</p>
                                                    </button>
                                                </NavLink>
                                            </div>
                                            <p className="basis-1/6 text-mainColor text-sm  font-bold px-8 py-2">{MO_STATUS[Number(v.value!)-1]}</p>
                                        </div>
                                    </div>;
                            case 2:return <div key={index}>
                                        <div className="bg-white rounded-2xl p-4 mt-12 shadow-[-1px_-1px_4px_4px_rgba(0,0,0,0.03)]">
                                            <div className="flex flex-row ">
                                                <p className="basis-1/6 text-center text-btnbgColor text-xl">{v.time.split(":")[0]}:{v.time.split(":")[1]}</p>
                                                <p className="basis-1/2 text-center text-mainColor text-xl font-extrabold">歯みがき記録</p>
                                                <p className="basis-1/6"></p>
                                                <NavLink to="diary" className="basis-1/6">
                                                    <button onClick={()=>{dispatch(changeByAmount(index));}}>
                                                        <p className=" text-center text-btnbgColor text-xl underline font-bold">編集</p>
                                                    </button>
                                                </NavLink>
                                            </div>
                                            <div className="flex  flex-row items-cneter justify-around mt-8">
                                                <ToolButton size="w-20 h-28" buttonClick={()=>{}} text={BRESH_TIME[Number(v.value!.split("|")[1])]} className={"bg-btnbgColor text-white"} path={"comb.png"}/>
                                                <ToolButton size="w-20 h-28" buttonClick={()=>{}} text="" className={(Number(v.value!.split("|")[0]))==1?"bg-btnbgColor text-white":"bg-white text-mainColor shadow-[-1px_-1px_4px_4px_rgba(0,0,0,0.03)]"} path={(Number(v.value!.split("|")[0]))==1?"bresh.png":"bresh-none.png"}/>
                                                <ToolButton size="w-20 h-28" buttonClick={()=>{}} text="" className={(Number(v.value!.split("|")[0]))==2?"bg-btnbgColor text-white":"bg-white text-mainColor shadow-[-1px_-1px_4px_4px_rgba(0,0,0,0.03)]"} path={(Number(v.value!.split("|")[0]))==2?"material.png":"material-none.png"}/>
                                                <ToolButton size="w-20 h-28" buttonClick={()=>{}} text="" className={(Number(v.value!.split("|")[0]))==3?"bg-btnbgColor text-white":"bg-white text-mainColor shadow-[-1px_-1px_4px_4px_rgba(0,0,0,0.03)]"} path={(Number(v.value!.split("|")[0]))==3?"flox.png":"flox-none.png"}/>
                                            </div>
                                        </div>
                                    </div>;
                            case 3:return <div key={index}>
                                        <div className="bg-white rounded-2xl p-4 mt-12 shadow-[-1px_-1px_4px_4px_rgba(0,0,0,0.03)]">
                                            <div className="flex flex-row ">
                                                <p className="basis-1/6 text-center text-btnbgColor text-xl">{v.time.split(":")[0]}:{v.time.split(":")[1]}</p>
                                                <p className="basis-1/2 text-center text-mainColor text-xl font-extrabold">食事の記録</p>
                                                <p className="basis-1/6"></p>
                                                <NavLink to="meal" className="basis-1/6">
                                                    <button onClick={()=>{dispatch(changeByAmount(index));}}>
                                                        <p className=" text-center text-btnbgColor text-xl underline font-bold">編集</p>
                                                    </button>
                                                </NavLink>
                                            </div>
                                            <div>
                                                <img src={v.value!.split("|")[1]} className="w-full py-4"></img>
                                            </div>
                                            <p className="basis-1/6 text-mainColor text-sm w-full  font-bold px-8 py-2 " style={{overflowWrap:"break-word"}}>{v.value!.split("|")[0]}</p>
                                        </div>
                                    </div>;
                            case 4:return <div key={index}>
                                        <div className="bg-white rounded-2xl p-4 flex flex-row mt-12 shadow-[-1px_-1px_4px_4px_rgba(0,0,0,0.03)]">
                                            <p className="basis-1/6 text-center text-btnbgColor text-xl">{v.time.split(":")[0]}:{v.time.split(":")[1]}</p>
                                            <p className="basis-1/6 text-center text-mainColor text-xl font-extrabold">就寝</p>
                                            <p className="basis-1/2"></p>
                                            <NavLink to="bedtime" className="basis-1/6">
                                                <button onClick={()=>{dispatch(changeByAmount(index));}}>
                                                    <p className=" text-center text-btnbgColor text-xl underline font-bold">編集</p>
                                                </button>
                                            </NavLink>
                                        </div>
                                    </div>;
                        }
                    }
                )
            }
          {  data.length!=0 && <DefaultButton text="記録をする" buttonClick={() => {}}></DefaultButton>}
        </div>
    );
};

export default Main;
