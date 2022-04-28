import React, { useState } from "react";
import { Button, Card, CardContent, CardActions, Container, TextareaAutosize, Typography } from '@mui/material';
import BreshComponent from "../../../components/breshcomponent";
import DefaultButton from "../../../components/button";
import ToolButton from "../../../components/toolcomponent";
const Bresh = () => {
    const [index,setIndex]=useState(1);
    const [hour, setHour] = useState(0);
    const [minutes, setMinutes] = useState(0);
    function getCurrentDate() {
        var weekday = ["日", "月", "火", "水", "木", "金", "土"];
        let newDate = new Date();
        let date = newDate.getDate();
        let month = newDate.getMonth() + 1;
        let day = newDate.getDay();

        return `${month}月${date}日(${weekday[day]})`;
    }
    function getCurrentTime() {
        let newDate = new Date();
        setHour(newDate.getHours());
        setMinutes(newDate.getMinutes());
    }
    window.setInterval(function () {
        getCurrentTime();
    }, 1000);
    return (
        <div >
            <div className="mt-16">
            <BreshComponent/>
            </div>
            <div className="flex  flex-row items-cneter justify-between mt-8">
                <ToolButton size="w-28 h-36" buttonClick={()=>{ setIndex(1)}} text="歯間ブラシ" className={index==1?"bg-btnbgColor text-white":"bg-white text-mainColor"} path={index==1?"bresh.png":"bresh-none.png"}/>
                <ToolButton size="w-28 h-36" buttonClick={()=>{ setIndex(2)}} text="歯間ブラシ" className={index==2?"bg-btnbgColor text-white":"bg-white text-mainColor"} path={index==2?"material.png":"material-none.png"}/>
                <ToolButton size="w-28 h-36" buttonClick={()=>{ setIndex(3)}} text="歯間ブラシ" className={index==3?"bg-btnbgColor text-white":"bg-white text-mainColor"} path={index==3?"flox.png":"flox-none.png"}/>
            </div>
            <Container maxWidth="sm" className="mt-5 text-center">
                <Typography variant="h5" display="inline" className="text-dayColor">
                    {getCurrentDate()}&nbsp;
                </Typography>
                <Typography variant="h3" display="inline" className="text-mainColor text-2xl">
                    {hour}:{minutes}
                </Typography>
            </Container>
            <DefaultButton text="記録をする" buttonClick={() => {}}></DefaultButton>
        </div>        
    );
};

export default Bresh;