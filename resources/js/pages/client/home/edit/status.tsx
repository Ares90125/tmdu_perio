import React, { useState } from "react";
import Box from '@mui/material/Box';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select, { SelectChangeEvent } from '@mui/material/Select';
import axios, { AxiosResponse } from 'axios';
import TypeHeader from "../../../../components/type";
import DefaultButton from "../../../../components/button";
import {  useAppSelector } from '../../../.././redux/hooks'
import Timepicker from "../../../../components/timepicker";

const Status = () => {
    const index=useAppSelector((state) => state.index.value);
    const data=useAppSelector((state) => state.data.value[index]);
    const update = () => {
        let date = new Date();
        ; const config = {
            headers: {
                'Content-Type': 'application/json',
            }
        };
        const body = JSON.stringify({"update":{"id":data.id,"value":selectindex,"time":time1.time+":"+time1.min+":00"}});
        try {
            axios.post('/api/client/update', body, config).then((response: AxiosResponse) => {
                if (response.data["success"] == true) {
                    window.alert("success");
                } else {

                }
            });
        }
        catch (err) {

        }
    }
    const [selectindex,setSelect]=useState(data.value);
    const [time1,settime1]=useState({"time":Number(data.time.split(':')[0]),"min":Number(data.time.split(':')[1])});
    function settime_1(isup:boolean){
        if(isup){
            if(time1.min==59){
                if(time1.time==23){
                    settime1({"time":0,"min":0})
                }
                settime1({"time":time1.time+1,"min":0})
            }else{
                settime1({"time":time1.time,"min":time1.min+1})
            }
        }else{
            if(time1.min==0){
                if(time1.time==0)
                    settime1({"time":23,"min":59})
                settime1({"time":time1.time-1,"min":59})
            }else{
                settime1({"time":time1.time,"min":time1.min-1})
            }
        }
    }
    return (
        <div >
            <p className="text-4xl text-mainColor py-8 font-black text-center pb-2">{"記録を編集する"}</p>
            <p className="text-base text-mainColor pt-2 pb-4 font-light text-center pb-2">{"朝のお口の状態を編集しましょう"}</p>
            <TypeHeader text="朝のお口の状態"/>
            <p className="font-bold text-mainColor px-8 mt-8 mb-4 text-xs">今朝のお口の状態はいかがでしたか？</p>
            <div className="bg-white text-mainColor  py-2 text-2xl font-bold w-full rounded-lg border-2 border-mainColor ">
                <select id="fruits" value={selectindex!} className="w-11/12 outline outline-0 text-center ml-2 object-center"
                    onChange={(e) => setSelect(e.target.value)}>
                    <option value={1}>すっきりしている</option>
                    <option value={2}>特に問題なし</option>
                    <option value={3}>軽い違和感</option>
                    <option value={4}> 痛みあり</option>
                </select>
            </div>
            <div className="mt-4 bg-white">
                <Timepicker time={time1.time} min={time1.min} onClickUp={settime_1} />
            </div>
            <DefaultButton text="記録をする" buttonClick={update}  />
        </div>
    );
};

export default Status;
