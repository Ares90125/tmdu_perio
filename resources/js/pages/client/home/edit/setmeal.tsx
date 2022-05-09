import React, { ChangeEvent, useState } from "react";
import axios, { AxiosResponse } from 'axios';
import { Button, Card, CardContent, CardActions, Container, TextareaAutosize, Typography } from '@mui/material';
import DefaultButton from "../../../../components/button";
import TypeHeader from "../../../../components/type";
import Timepicker from "../../../../components/timepicker";
import {  useAppSelector } from '../../../.././redux/hooks'

interface ButtonProps {
    // text: string;
    // buttonClick: ()=>void;
}

function SetMeal(props: ButtonProps) {
    const index=useAppSelector((state) => state.index.value);
    const data=useAppSelector((state) => state.data.value[index]);
    const [time1, settime1] = useState(data.time);
    const [image, setImage] = useState<any | null>(null);
    const [statetext,setText]=useState(data.value?.split("|")[0]);
    const [imageurl,setImageurl]=useState(data.value?.split("|")[1]);
    const handleSetImage = (event: ChangeEvent<HTMLInputElement>) => {
        if(event.target.files?.length!=0){
            setImage(event.target.files![0]);
            setImageurl(URL.createObjectURL(event.target.files![0]));
        }
    };
    const updatemeal = () => {
        let date = new Date();
        ; const config = {
            headers: {
                'Content-Type': 'multipart/form-data',
            }
        };

        const formData = new FormData();
        formData.append("id", data.id.toString());
        formData.append("image", image);
        formData.append("time",(time1+":00"));
        formData.append('value',`${statetext}|${imageurl}`);
        try {
            axios.post('/api/client/updatemeal', formData, config).then((response: AxiosResponse) => {
                if (response.data["success"] == true) {
                    window.alert("success");
                } else {

                }
            });
        }
        catch (err) {

        }
    }
    return (
        <div>
            <p className="text-4xl text-mainColor py-8 font-black text-center pb-2">{"記録を編集する"}</p>
            <p className="text-base text-mainColor pt-2 pb-4 font-light text-center pb-2">{"歯磨きや食事の内容を記録しましょう"}</p>
            <TypeHeader text="食事"/>
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
                    <input type="file" className="opacity-0 w-0" id="image_upload" accept=".gif,.jpg,.jpeg,.png" onChange={(e) => {handleSetImage(e);}}/>
                </div>
            </div>
            <div className="mt-10 w-4/5 mx-auto">
                <p className="text-lg text-mainColor font-bold"> 食事のメモ</p>
            <TextareaAutosize aria-label="minimum height" minRows={4} placeholder={"家系ラーメン"} value={statetext} onChange={(value)=>{setText(value.target.value)}} style={{ width: '100%', borderRadius: 8, border: '2px solid #88BFBF', padding: 5 }} />
            </div>
            <div className="px-8 pt-4">
                <input className="focus:outline-none focus:border-mainColor tracking-[.3em] text-center rounded-lg border border-mainColor text-[26px] text-mainColor font-bold  px-2 w-full mt-4 bg-white" type="time"  value={time1} onChange={(ev) => {settime1(ev.target.value);}} />
            </div>
            <DefaultButton text="記録をする" buttonClick={updatemeal}></DefaultButton>
        </div>
    );
};
export default SetMeal;
