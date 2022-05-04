import axios, { AxiosResponse } from 'axios';
import {useNavigate } from 'react-router-dom';

export const signUp=(id:string,pass:string)=>{
    const config={
        headers:{
            'Content-Type':'application/json'
        }
    };
    const body=JSON.stringify({"userid":id,"password":pass});
    try{
        axios.post('api/client/register',body,config).then((response:AxiosResponse)=>{
        });
    }
    catch(err){

    }
}
