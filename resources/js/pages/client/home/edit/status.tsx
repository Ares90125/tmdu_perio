import React, { useState } from "react";
import Box from '@mui/material/Box';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select, { SelectChangeEvent } from '@mui/material/Select';
import TypeHeader from "../../../../components/type";
import DefaultButton from "../../../../components/button";

const Status = () => {
    const [selectindex,setSelect]=useState('');
    return (
        <div >
            <p className="text-4xl text-mainColor py-8 font-black text-center pb-2">{"記録を編集する"}</p>
            <p className="text-base text-mainColor pt-2 pb-4 font-light text-center pb-2">{"朝のお口の状態を編集しましょう"}</p>
            <TypeHeader text="朝のお口の状態"/>
            <p className="font-bold text-mainColor px-8 mt-8 mb-4 text-xs">今朝のお口の状態はいかがでしたか？</p>
            <div className="bg-white text-mainColor  py-2 text-2xl font-bold w-full rounded-lg border-2 border-mainColor ">
                <select id="fruits" value={selectindex} className="w-11/12 outline outline-0 text-center ml-2 object-center"
                    onChange={(e) => setSelect(e.target.value)}>
                    <option value={1}>すっきりしている</option>
                    <option value={2}>特に問題なし</option>
                    <option value={3}>軽い違和感</option>
                    <option value={4}> 痛みあり</option>
                </select>
            </div>
            <DefaultButton text="記録をする" buttonClick={()=>{}}  />
        </div>
    );
};

export default Status;
