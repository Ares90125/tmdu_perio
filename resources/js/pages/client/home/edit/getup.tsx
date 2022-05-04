import React, { useState } from "react";
import TypeHeader from "../../../../components/type";
import DefaultButton from "../../../../components/button";
import Timepicker from "../../../../components/timepicker";

const GetUp = () => {
    const [time1,settime1]=useState({"time":13,"min":10});
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
            <p className="text-base text-mainColor pt-2 pb-4 font-light text-center pb-2">{"起床時間を編集しましょう"}</p>
            <TypeHeader text="起床"/>
            <p className="font-bold text-mainColor px-8 mt-8 mb-4 text-xs">起床時間</p>
            <div className="mt-4 bg-white">
                <Timepicker time={time1.time} min={time1.min} onClickUp={settime_1} />
            </div>
            <DefaultButton text="記録をする" buttonClick={()=>{}}  />
        </div>
    );
};

export default GetUp;
