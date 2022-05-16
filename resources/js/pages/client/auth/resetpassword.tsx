import React, { useState } from "react";
import { Box, ButtonBase, InputBase } from "@mui/material";
import DefaultButton from "../../../components/button";
export interface IUser {
    name: string;
    age: number;
}
const ResetPass = () => {
    const [userid,setUserId]=useState("");
    const [password,setPassword]=useState("1230191");
    const handleChange=(e:React.ChangeEvent<HTMLInputElement>)=>{
        setUserId(e.target.value);
    }
    return (
        <div className="">
            <p className="text-6xl text-teal-700 pt-40 font-semibold text-center pb-40">PERIO</p>
            <div className="px-12">
                <p className="mb-15 text-xl font-bold text-teal-700 pb-2 text-center">パスワードを変更してください</p>
                <p className="pt-5 text-sm font-bold text-teal-700 pb-2">パスワード</p>
                <Box className="rounded-xl  border bg-white px-2 py-1 border-cyan-700 mb-32">
                    <InputBase placeholder=""/>
                </Box>
                <DefaultButton buttonClick={()=>{window.alert("Reset")}} text="パスワードを変更する"/>
            </div>
        </div>
    );
};

export default ResetPass;
