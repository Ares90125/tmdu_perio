import React, { useState } from "react";
import { Button, Card, CardContent, CardActions, Container, TextareaAutosize, Typography } from '@mui/material';
import BreshComponent from "../../../components/breshcomponent";
import DefaultButton from "../../../components/button";
import ToolButton from "../../../components/toolcomponent";
const Bresh = () => {
    const [userid,setUserId]=useState("");
    const [password,setPassword]=useState("1230191");
    const [hour, setHour] = useState(0);
    const [minutes, setMinutes] = useState(0);
    const handleChange=(e:React.ChangeEvent<HTMLInputElement>)=>{
        setUserId(e.target.value);
    }
    function getCurrentDate() {
        var weekday = ["日", "月", "火", "水", "木", "金", "土"];

        let newDate = new Date();
        let date = newDate.getDate();
        let month = newDate.getMonth() + 1;
        let day = newDate.getDay();

        return `${month}月${date}日(${weekday[day]})`;
    }
    function getCurrentTime() {
        console.log("asdf");
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
                <ToolButton buttonClick={()=>{}} text="歯間ブラシ" className="bg-cyan-600 text-white" path="bresh.png"/>
                <ToolButton buttonClick={()=>{}} text="歯間ブラシ" className="bg-white text-teal-700" path="material.png"/>
                <ToolButton buttonClick={()=>{}} text="歯間ブラシ" className="bg-white text-teal-700" path="flox.png"/>
            </div>
            <Container maxWidth="sm" className="mt-5 text-center">
                <Typography variant="h5" display="inline" className="text-teal-800">
                    {getCurrentDate()}&nbsp;
                </Typography>
                <Typography variant="h3" display="inline" className="text-teal-800 text-2xl">
                    {hour}:{minutes}
                </Typography>
            </Container>
            <DefaultButton text="記録をする" buttonClick={() => {}}></DefaultButton>
        </div>        
    );
};

export default Bresh;