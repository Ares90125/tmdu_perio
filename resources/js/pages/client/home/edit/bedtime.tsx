import React, { useEffect, useState } from "react";
import DefaultButton from "../../../../components/button";
import Timepicker from "../../../../components/timepicker";
import TypeHeader from "../../../../components/type";
import axios, { AxiosResponse } from 'axios';
import {useAppSelector } from '../../../.././redux/hooks'
const BedTime = () => {
    const [tabindex, setTabIndex] = useState(1);
    const index=useAppSelector((state) => state.index.value);
    const date = useAppSelector((state) => state.data.date);
    const data=useAppSelector((state) => state.data.value[index]);
    const [time1,settime1]=useState({"time":Number(data.time.split(':')[0]),"min":Number(data.time.split(':')[1])});
    const update = () => {
        ; const config = {
            headers: {
                'Content-Type': 'application/json',
            }
        };
        const body = JSON.stringify({"update":{"id":data.id,"time":time1.time+":"+time1.min+":00","date": date.getFullYear() + ":" + (date.getMonth() + 1) + ":" + (date.getDate()+tabindex-2),}});
        try {
            axios.post('/api/client/update', body, config).then((response: AxiosResponse) => {
                if (response.data["success"] == true) {
                    window.alert("success");
                } else {

                }
            });
        }
        catch (err) {

        }
    }
    useEffect(() => {
    },[])
    function getDate(next:boolean) {
        let newDate = date;
        let month = newDate.getMonth() + 1;
        let day = newDate.getDay();
        return next?`${month}月${newDate.getDate()-1}日`:`${month}月${newDate.getDate()}日`;
    }
    function settime_1(isup:boolean){
        if(isup){
            if(time1.min==59){
                if(time1.time==23){
                    settime1({"time":0,"min":0})
                }
                settime1({"time":time1.time+1,"min":0})
            }else{
                settime1({"time":time1.time,"min":time1.min+1})
            }
        }else{
            if(time1.min==0){
                if(time1.time==0)
                    settime1({"time":23,"min":59})
                settime1({"time":time1.time-1,"min":59})
            }else{
                settime1({"time":time1.time,"min":time1.min-1})
            }
        }
    }
    return (
        <div >
            <p className="text-4xl text-mainColor py-8 font-black text-center pb-2">{"記録を編集する"}</p>
            <p className="text-base text-mainColor pt-2 pb-4 font-light text-center pb-2">{"就寝時間を編集しましょう"}</p>
            <TypeHeader text="就寝"/>
            <p className="text-sm text-mainColor font-bold text-left pb-2 mt-8">就寝時間</p>
            <div >
                <ul className="flex flex-row text-sm font-medium text-center" id="myTab" data-tabs-toggle="#myTabContent" role="tablist">
                    <li className="basis-1/2 " role="presentation">
                        <button onClick={() => { setTabIndex(1) }} className={"rounded-l-2xl py-4  text-sm w-full inline-block px-4 py-1  font-black "+(tabindex==1?"bg-btnbgColor text-white":"text-mainColor bg-white")} id="profile-tab" data-tabs-target="#profile" type="button" role="tab" aria-controls="profile" aria-selected="false">{getDate(true)}</button>
                    </li>
                    <li className="basis-1/2 " role="presentation">
                        <button onClick={() => { setTabIndex(2) }} className={"rounded-r-2xl py-4  text-sm w-full inline-block px-4 py-1  font-black "+(tabindex==2?"bg-btnbgColor text-white":"text-mainColor bg-white")} id="dashboard-tab" data-tabs-target="#dashboard" type="button" role="tab" aria-controls="dashboard" aria-selected="false">{getDate(false)}</button>
                    </li>
                </ul>
            </div>
            <div>
            </div><div className="mt-4 bg-white">
                <Timepicker time={time1.time} min={time1.min} onClickUp={settime_1} />
            </div>
            <DefaultButton text="記録をする" buttonClick={update}  />
        </div>
    );
};

export default BedTime;
