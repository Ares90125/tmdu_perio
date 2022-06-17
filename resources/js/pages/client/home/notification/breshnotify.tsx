import React, { useEffect, useState } from "react";
import { Route, Routes, NavLink, useLocation, Navigate } from 'react-router-dom';
import { BiArrowBack, BiCalendar } from "react-icons/bi";
import DefaultButton from "../../../../components/button";
import axios, { AxiosResponse } from "axios";
import { useAppDispatch, useAppSelector } from "../../../../redux/hooks";
import { changedata, removeindex } from "../../../../redux/reducers/breshtimeslice";
import BreshTime from "../../../../components/breshtime";

const BreshNotify = () => {
    const name=useAppSelector((state) => state.authenticater.name);
    const data = useAppSelector((state) => state.breshtime.value);
    const dispatch = useAppDispatch();
    const [visible, setVisible] = useState(false);
    const [id, setId] = useState(-1);
    const [time1, settime1] = useState("__:__");
    const loadbreshtime = () => {
        const config = {
            headers: {
                'Content-Type': 'application/json',
            }
        };
        try {
            axios.get(`/api/client/loadbreshtime`, config).then((response: AxiosResponse) => {
                if (response.data["success"] == true) {
                    dispatch(changedata(response.data["data"][0]));
                } else {
                }
            });
        }
        catch (err) {

        }
    }
    const deletebreshtime = (id:number,index:number) => {
        const config = {
            headers: {
                'Content-Type': 'application/json',
            }
        };
        try {
            axios.get(`/api/client/deletebreshtime?id=${id}`, config).then((response: AxiosResponse) => {
                if (response.data["success"] == true) {
                    dispatch(removeindex(index));
                    setVisible(false); settime1('__:__');
                    setId(-1);
                } else {

                }
            });
        }
        catch (err) {

        }
    }
    useEffect(() => {
        if (!visible) {
            loadbreshtime();
        }
    }, [visible])
    const create = () => {
        const config = {
            headers: {
                'Content-Type': 'application/json',
            }
        };
        try {
            if (id == -1) {
                const body = JSON.stringify({ "time": time1 });
                axios.post('/api/client/createbreshtime', body, config).then((response: AxiosResponse) => {
                    if (response.data["success"] == true) {
                        setVisible(false); settime1('__:__');
                        setId(-1);
                    } else {
                    }
                });
            }
            else {
                const body = JSON.stringify({ "time": time1,"id":data[id].id });
                axios.post('/api/client/updatebreshtime', body, config).then((response: AxiosResponse) => {
                    if (response.data["success"] == true) {
                        setVisible(false); settime1('__:__');
                    setId(-1);
                    } else {

                    }
                });
            }
        }
        catch (err) {

        }
    }
    return (
        <div>
            <div className="flex justify-center items-center pt-4 pb-2 px-4 relatvice">
                <p className="text-base text-mainColor  font-semibold text-center">{name+" さん"} </p>
                <NavLink to={"../"} className={"absolute left-0 ml-[15px]"}>
                    <div className="bg-mainColor text-white rounded-md w-[1.875rem] h-[1.875rem] p-[3px]">
                        <img src={'/images/back.png'} className="w-full h-full" />
                    </div>
                </NavLink>
            </div>
            <div className="text-xl bg-btnbgColor h-0.5">
            </div>
            <div className="mx-[24px] flex flex-col">
                <p className="text-4xl text-mainColor py-8 font-black text-center pb-2">{"歯磨き通知設定"}</p>
                {
                    data.map((element, index) =>
                        <div key={index}>
                            <BreshTime deleteClick={()=>{deletebreshtime(element.id,index);}} time={element.time}  buttonClick={(visible) => { setVisible(visible); setId(index);settime1(element.time); }} />
                        </div>

                    )
                }
                <div className="self-center">
                    <button onClick={() => { setVisible(true) }} className=" w-[60px] h-[60px] mx-auto">
                        <img src={'/images/notify-add-icon.png'} className="w-full h-full" />
                    </button>
                </div>
            </div>
            <div className={"w-full h-screen bg-opacity-70 bg-black fixed top-0 right-0 px-[30px] " + (visible ? "z-50 opacity-100 pointer-events-auto" : "z-0 opacity-0 pointer-events-none")}>
                <button onClick={() => {
                    setVisible(false); settime1('__:__');
                    setId(-1);
                }} className={"absolute right-0 mt-[30px] px-[15px]"}>
                    <div className="text-white rounded-md w-[1.875rem] h-[1.875rem] p-[3px]">
                        <img src={'/images/quit.svg'} className="w-full h-full" />
                    </div>
                </button>
                <input style={{ WebkitAppearance: "none" }} className="flex items-center justify-center h-[43px] mt-[325px] focus:outline-none focus:border-mainColor tracking-[.3em] text-center rounded-lg border border-mainColor text-[26px] text-mainColor font-bold  px-2 w-full bg-white" type="time" value={time1} onChange={(ev) => { settime1(ev.target.value); }} />
                <div className="my-[50px]">
                    <DefaultButton text="記録をする" buttonClick={create}></DefaultButton>
                </div>
            </div>
        </div>
    );
};
export default BreshNotify;
