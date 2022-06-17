import React, { useState } from "react";
import { Box, ButtonBase, InputBase } from "@mui/material";
import DefaultButton from "../../../components/button";
export interface IUser {
    name: string;
    age: number;
}
const Alignemnt = () => {
    const [userid,setUserId]=useState("");
    const [password,setPassword]=useState("1230191");
    const handleChange=(e:React.ChangeEvent<HTMLInputElement>)=>{
        setUserId(e.target.value);
    }
    return (
        <div className="">
            <p className="text-6xl text-teal-700 pt-40 font-semibold text-center pb-32">PERIO</p>
            <div className="px-12">
                <p className="mb-15 text-xl font-bold text-teal-700 pb-28 text-center"> LINEと連携する</p>
                <DefaultButton buttonClick={()=>{window.alert("Reset")}} text="連携"/>
            </div>
        </div>
    );
};

export default Alignemnt;
