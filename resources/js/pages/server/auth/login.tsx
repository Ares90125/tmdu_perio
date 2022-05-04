import React, { useState } from "react";
import { Link } from 'react-router-dom';
import { Box, ButtonBase, InputBase } from "@mui/material";
import AdminDefaultButton from "../../../components/adminbutton";
const Login = () => {
    const [userid,setUserId]=useState("");
    const [password,setPassword]=useState("1230191");
    const handleChange=(e:React.ChangeEvent<HTMLInputElement>)=>{
        setUserId(e.target.value);
    }
    const OnLogin=()=>{
    }
    return (
        <div className="bg-white">
            <p className="text-9xl text-teal-700 pt-44 font-semibold text-center pb-32">PERIO</p>
            <div className="w-1/2 mx-auto">
                <p className="text-sm font-bold text-teal-700 pb-2">クリニックID</p>
                <Box className="rounded-xl  border bg-white px-2 py-1 border-cyan-700">
                    <InputBase placeholder="a018982" value={userid} onChange={(value)=>{}}/>
                </Box>
                <p className="pt-5 text-sm font-bold text-teal-700 pb-2">パスワード</p>    
                <Box className="rounded-xl  border bg-white px-2 py-1 border-cyan-700">
                    <InputBase placeholder="a018982"/>
                </Box> 
                <div className="my-20">
                <Link to="/admin/main" className="btn btn-primary"><AdminDefaultButton buttonClick={()=>{}} text="ログイン"/></Link>
                </div>
            </div>
        </div>        
    );
};

export default Login;