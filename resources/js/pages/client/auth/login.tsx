import React, { useState } from "react";
import { Link } from 'react-router-dom';
import { Box, ButtonBase, InputBase } from "@mui/material";
import DefaultButton from "../../../components/button";
const Login = () => {
    const [userid,setUserId]=useState("");
    const [password,setPassword]=useState("1230191");
    const handleChange=(e:React.ChangeEvent<HTMLInputElement>)=>{
        setUserId(e.target.value);
    }
    const OnLogin=()=>{
    }
    return (
        <div className="">
            <p className="text-6xl text-teal-700 pt-44 font-semibold text-center pb-32">PERIO</p>
            <div className="px-12 ">
                <p className="text-sm font-bold text-teal-700 pb-2">PERIO ID</p>
                <Box className="rounded-xl  border bg-white px-2 py-1 border-cyan-700">
                    <InputBase placeholder="a018982" value={userid} onChange={(value)=>{}}/>
                </Box>
                <p className="pt-5 text-sm font-bold text-teal-700 pb-2">パスワード</p>    
                <Box className="rounded-xl  border bg-white px-2 py-1 border-cyan-700">
                    <InputBase placeholder="a018982"/>
                </Box> 
                <div className="my-20">
                <Link to="/home" className="btn btn-primary"><DefaultButton buttonClick={()=>{}} text="ログイン"/></Link>
                </div>
                <p className="text-center text-base font-bold pb-2 text-black">パスワードがわからない場合は、<br></br>お問い合わせをお願いします</p>
            </div>
        </div>        
    );
};

export default Login;