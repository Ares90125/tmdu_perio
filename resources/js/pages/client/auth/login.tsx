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
            <p className="text-6xl  text-mainColor pt-48 font-semibold text-center pb-28 tracking-[.05em]">PERIO</p>
            <div className="px-10" style={{ fontFamily: '"ヒラギノ角ゴ ProN W3", "Hiragino Kaku Gothic ProN", "メイリオ", "Meiryo", "verdana", sans-serif'}}>
                <p className="text-sm font-bold  pb-2 text-mainColor">PERIO ID</p>
                <input   className="tracking-[.3em] rounded-xl text-base  border border-borderColor focus:outline-none focus:border-focusColor bg-white px-4 py-3 border-cyan-400 font-semibold w-full" placeholder="ID" value={userid} onChange={(value:React.ChangeEvent<HTMLInputElement>)=>{handleChange(value);}}/>
                <p className="pt-5 text-sm font-bold  pb-2 text-mainColor">パスワード</p>
                <input   className="tracking-[.3em] rounded-xl text-base  border border-borderColor focus:outline-none focus:border-focusColor bg-white px-4 py-3 border-cyan-400 font-semibold w-full" placeholder="PASSWORD" type="password" value={password} onChange={(e:React.ChangeEvent<HTMLInputElement>)=>{setPassword(e.target.value);}}/>
                <div className="my-10">
                <div  className=" btn btn-primary"><DefaultButton buttonClick={()=>{logIn(userid,password)}} text="ログイン"/></div>
                </div>
                <p className="text-center text-base font-bold pb-2 text-black">パスワードがわからない場合は、<br></br>お問い合わせをお願いします</p>
            </div>
        </div>
    );
};

export default Login;

// signUp(userid,password);
