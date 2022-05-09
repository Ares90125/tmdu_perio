import React, { ChangeEvent, useState } from "react";
import axios, { AxiosResponse } from 'axios';
import { Button, Card, CardContent, CardActions, Container, TextareaAutosize, Typography } from '@mui/material';
import DefaultButton from "../../../../components/button";

interface ButtonProps {
    // text: string;
    // buttonClick: ()=>void;
}

function Meal(props: ButtonProps) {
    const [image, setImage] = useState<any | null>(null);
    const [statetext,setText]=useState("");
    const [imageurl,setImageurl]=useState("");
    const [hour, setHour] = useState(0);
    const [minutes, setMinutes] = useState(0);
    const handleSetImage = (event: ChangeEvent<HTMLInputElement>) => {
        if(event.target.files?.length!=0){
            setImage(event.target.files![0]);
            setImageurl(URL.createObjectURL(event.target.files![0]));
        }
        window.removeEventListener('focus', handleFocusBack);
    };
    function handleFocusBack(){
        console.log("adsfadsfa");
        setImageurl("");
        setImage(null);
        window.removeEventListener('focus', handleFocusBack);
    }
    function clickedFileInput(){
        window.addEventListener('focus', handleFocusBack);
    }
    const create = () => {
        let date = new Date();
        ; const config = {
            headers: {
                'Content-Type': 'multipart/form-data',
            }
        };

        const formData = new FormData();
        formData.append("image", image);
        formData.append("time", date.toTimeString().split(' ')[0].substring(0,6)+"00");
        formData.append("date", date.getFullYear() + ":" + (date.getMonth() + 1) + ":" + date.getDate());
        formData.append('value',`${statetext}`);
        try {
            axios.post('/api/client/createfile', formData, config).then((response: AxiosResponse) => {
                if (response.data["success"] == true) {
                    window.alert("success");
                } else {

                }
            });
        }
        catch (err) {

        }
    }
    function getCurrentDate() {
        var weekday = ["日", "月", "火", "水", "木", "金", "土"];
        let newDate = new Date();
        let date = newDate.getDate();
        let month = newDate.getMonth() + 1;
        let day = newDate.getDay();
        return `${month}月${date<10?date+"0":date}日(${weekday[day]})`;
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
        <div>
            <div className="mt-4 pb-4 mx-auto rounded-lg font-bold text-center text-lg text-mainColor w-4/5 border-solid border border-mainColor bg-white" >
                {
                    (imageurl!="")?<img src={imageurl} alt="" className="w-full p-2"/>:
                    <div className={(imageurl!="")?"opacity-0":""}>
                        <p className="my-2">食事の画像を</p>
                        <p className="my-2">撮影／アップロード</p>
                        <p className="my-2">してください</p>
                    </div>
                }
                <div >
                    <label htmlFor="image_upload" className="bg-white px-1 border-solid border border-mainColor text-xl rounded-full my-2">撮影／アップロード</label>
                    <input type="file" className="opacity-0 w-0" id="image_upload" accept=".gif,.jpg,.jpeg,.png" onChange={(e) => {handleSetImage(e);}} onClick={clickedFileInput} />
                </div>
            </div>
            <div className="mt-10 w-4/5 mx-auto">
                <p className="text-lg text-mainColor font-bold"> 食事のメモ</p>
            <TextareaAutosize aria-label="minimum height" className="text-mainColor" minLength={3} maxLength={40} minRows={4} placeholder={"家系ラーメン"} onChange={(value)=>{setText(value.target.value)}} style={{ width: '100%', borderRadius: 8, border: '2px solid #88BFBF', padding: 5 }} />
            </div>
            <Container maxWidth="sm" className="mt-5 text-center">
                <Typography variant="h5" display="inline" className="text-dayColor">
                    {getCurrentDate()}&nbsp;
                </Typography>
                <Typography variant="h3" display="inline" className="text-timeColor text-2xl">
                    {hour}:{minutes}
                </Typography>
            </Container>
            <DefaultButton text="記録をする" buttonClick={create}></DefaultButton>
        </div>
    );
};
export default Meal;
