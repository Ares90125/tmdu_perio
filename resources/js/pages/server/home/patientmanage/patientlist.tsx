import React, { useState , useEffect} from "react";
import Button from "../../../../components/button";
import {Route,Routes,NavLink,Link } from 'react-router-dom';
import axios, { AxiosResponse } from 'axios';
import ToolButton from "../../../../components/toolcomponent_none";
import DefaultButton from "../../../../components/button";
import {  useAppDispatch,useAppSelector } from '../../../.././redux/hooks'
import {  changedata,changedate } from '../../../.././redux/reducers/dataslice'
import {  changeByAmount } from '../../../.././redux/reducers/indexslice'
import {BRESH_TIME, BRESH_TOOL, MO_STATUS} from "../../../../redux/type";
import { changeDate } from "../../../../redux/reducers/addslice";

const PatientList = () => {
    // const dispatch = useAppDispatch();
    // const date = useAppSelector((state) => state.data.date);
    // const data=useAppSelector((state) => state.data.value);
    // const loaddata = () => {
    //     let datestr=date.getFullYear() + "-" + (date.getMonth() + 1) + "-" + date.getDate();
    //     const config = {
    //         headers: {
    //             'Content-Type': 'application/json',
    //         }
    //     };
    //     try {
    //         axios.get(`/api/client/loaddata?date=${datestr}`, config).then((response: AxiosResponse) => {
    //             if (response.data["success"] == true) {
    //                 dispatch(changedata(response.data["data"][0]));
    //             } else {
    //             }
    //         });
    //     }
    //     catch (err) {

    //     }
    // }
    // useEffect(() => {
    //     loaddata();
    // },[date])
    // var weekday = ["日", "月", "火", "水", "木", "金", "土"];
    // let day=new Date();
    // function changeDay(val:Boolean){
    //    if(val){
    //        day=new Date(date);
    //        day.setDate(day.getDate()-1);
    //        dispatch(changedate(day));
    //    }
    //    else{
    //         day=new Date(date);
    //         day.setDate(day.getDate()+1);
    //         dispatch(changedate(day));
    //    }
    // }
    return (
        <>
            <div className="flex flex-row items-center">
                <p className="">
                    患者一覧
                </p>
            </div>
        </>
    );
};

export default PatientList;
