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
            <FormControl fullWidth>
                <InputLabel className="text-mainColor text-center" id="demo-simple-select-autowidth-label ">すっきりしている</InputLabel>
                <Select
                    className="bg-white rounded-lg border-mainColor text-mainColor text-center"
                    labelId="demo-simple-select-autowidth-label"
                    id="demo-simple-select"
                    value={selectindex}
                    label="すっきりしている"
                    onChange={(event:SelectChangeEvent)=>{
                        setSelect(event.target.value);
                    }}
                    >
                    <MenuItem value={''}><em>None</em></MenuItem>
                    <MenuItem value={1}>特に問題なし</MenuItem>
                    <MenuItem value={2}>軽い違和感</MenuItem>
                    <MenuItem value={3}>Thirty</MenuItem>
                </Select>
            </FormControl>
            <DefaultButton text="記録をする" buttonClick={()=>{}}  />
        </div>
    );
};

export default Status;
