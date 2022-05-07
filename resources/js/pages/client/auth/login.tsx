import React, { useState } from "react";
import { Box, ButtonBase, InputBase } from "@mui/material";
import DefaultButton from "../../../components/button";
import axios, { AxiosResponse } from 'axios';
import {useNavigate } from 'react-router-dom';
import {  setclient } from '../../.././redux/reducers/authentication'
import {  useAppDispatch } from '../../.././redux/hooks'
const Login = () => {
    const dispatch = useAppDispatch();
    const navigate = useNavigate();
    const [userid,setUserId]=useState("");
    const [password,setPassword]=useState("");
    const handleChange=(e:React.ChangeEvent<HTMLInputElement>)=>{
        setUserId(e.target.value);
    };
    const logIn=(id:string,pass:string)=>{
        const config={
            headers:{
                'Content-Type':'application/json'
            }
        };
        const body=JSON.stringify({"userid":id,"password":pass});
        try{
            axios.post('/api/client/login',body,config).then((response:AxiosResponse)=>{
                if(response.data["success"]==true){
                    localStorage.setItem("token",response.data["data"]["token"]);
                    localStorage.setItem("user",response.data["data"]["user"]);
                    dispatch(setclient(true));
                    navigate('/client');
                }else{

                }
            });
        }
        catch(err){

        }
    }
    const signUp=(id:string,pass:string)=>{
        const config={
            headers:{
                'Content-Type':'application/json'
            }
        };
        const body=JSON.stringify({"userid":id,"password":pass});
        try{
            axios.post('/api/client/register',body,config).then((response:AxiosResponse)=>{
            });
        }
        catch(err){

        }
    }
    return (
        <div className="">
            <p className="text-6xl text-teal-700 pt-44 font-semibold text-center pb-32">PERIO</p>
            <div className="px-12 ">
                <p className="text-sm font-bold text-teal-700 pb-2">PERIO ID</p>
                <Box className="rounded-xl  border bg-white px-2 py-1 border-cyan-700">
                    <InputBase placeholder="a018982" value={userid} onChange={(value:React.ChangeEvent<HTMLInputElement>)=>{handleChange(value);}}/>
                </Box>
                <p className="pt-5 text-sm font-bold text-teal-700 pb-2">パスワード</p>
                <Box className="rounded-xl  border bg-white px-2 py-1 border-cyan-700">
                    <InputBase placeholder="a018982" value={password} onChange={(e:React.ChangeEvent<HTMLInputElement>)=>{setPassword(e.target.value);}} />
                </Box>
                <div className="my-20">
                <div  className="btn btn-primary"><DefaultButton buttonClick={()=>{logIn(userid,password)}} text="ログイン"/></div>
                </div>
                <p className="text-center text-base font-bold pb-2 text-black">パスワードがわからない場合は、<br></br>お問い合わせをお願いします</p>
            </div>
        </div>
    );
};

export default Login;

// signUp(userid,password);
