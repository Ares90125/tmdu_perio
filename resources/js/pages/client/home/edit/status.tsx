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
    const [time1, settime1] = useState(data.time);
    const update = () => {
        let date = new Date();
        ; const config = {
            headers: {
                'Content-Type': 'application/json',
            }
        };
        const body = JSON.stringify({"update":{"id":data.id,"value":selectindex,"time":time1}});
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
    return (
        <div >
            <p className="text-4xl text-mainColor py-8 font-black text-center pb-2">{"記録を編集する"}</p>
            <p className="text-base text-mainColor pt-2 pb-4 font-light text-center pb-2">{"朝のお口の状態を編集しましょう"}</p>
            <TypeHeader text="朝のお口の状態"/>
            <div className="px-8 pt-4">
                <p className="text-sm text-mainColor text-left pb-2">今朝のお口の状態はいかがでしたか？</p>
                <select style={{WebkitAppearance: "none", appearance: "none",textAlignLast: "center",WebkitAlignContent:"center", textAlign:"center"}} value={selectindex!} className="flex items-center justify-center bg-white text-mainColor  my-2 text-[26px] font-bold w-full rounded-lg border border-mainColor    outline-0 text-center"
                    <option value={1}>すっきりしている</option>
                    <option value={2}>特に問題なし</option>
                    <option value={3}>軽い違和感</option>
                    <option value={4}> 痛みあり</option>
                </select>
            </div>
            <DefaultButton text="記録をする" buttonClick={update}  />
        </div>
    );
};

export default Status;
