import React, { ChangeEvent, useEffect, useState } from "react";
import { Route, Routes, NavLink, useLocation, Navigate } from 'react-router-dom';
import { BiArrowBack, BiCalendar } from "react-icons/bi";
import DefaultButton from "../../../../components/button";
import TypeHeader from "../../../../components/type";
import { useAppSelector } from "../../../../redux/hooks";

const Record = () => {
    const name=useAppSelector((state) => state.authenticater.name);
    const [image, setImage] = useState<any | null>(null);
    const [imageurl, setImageurl] = useState("");
    const handleSetImage = (event: ChangeEvent<HTMLInputElement>) => {
        if (event.target.files?.length != 0) {
            setImage(event.target.files![0]);
            setImageurl(URL.createObjectURL(event.target.files![0]));
        }
    };
    return (
        <div className="mx-[3px]">
            <div className="flex justify-center items-center pt-4 pb-2 px-4 relatvice">
                <p className="text-base text-mainColor  font-semibold text-center">{name+" さん"} </p>
                <NavLink to={"../selfcheck"} className={"absolute left-0 ml-[15px]"}>
                    <div className="bg-mainColor text-white rounded-md w-[1.875rem] h-[1.875rem] p-[3px]">
                        <img src={'/images/back.png'} className="w-full h-full" />
                    </div>
                </NavLink>
            </div>
            <div className="text-xl bg-btnbgColor h-0.5"></div>
            <div className=" mx-[24px] flex flex-col">
                <p className="text-4xl text-mainColor py-8 font-black text-center pb-2">{"セルフ検査"}</p>
                <p className="text-base text-mainColor pt-2 pb-4 font-light text-center">{"セルフ検査を記録しましょう"}</p>
                <TypeHeader text="セルフ検査" />
            </div>
            <div className="mt-4 pb-4 mx-auto rounded-lg font-bold text-center text-lg text-mainColor w-4/5 border-solid border border-mainColor bg-white" >
                {
                    (imageurl != "") ? <img src={imageurl} alt="" className="w-full p-2" /> :
                        <div className={(imageurl != "") ? "opacity-0" : ""}>
                            <p className="my-2">検査の画像を</p>
                            <p className="my-2">撮影／アップロード</p>
                            <p className="my-2">してください</p>
                        </div>
                }
                <div >
                    <label htmlFor="image_upload" className="bg-white px-1 border-solid border border-mainColor text-xl rounded-full my-2">撮影／アップロード</label>
                    <input type="file" className="opacity-0 w-0" id="image_upload" accept=".gif,.jpg,.jpeg,.png" onChange={(e) => { handleSetImage(e); }} />
                </div>

            </div>
            <div className="px-[44px] w-full ">
                <div className="w-full h-[23px] bg-white mt-[20px] px-[5px] py-[2px] relative rounded-[9px]">
                    <div className="h-full w-[50%] bg-checkColor  absolute right-0">
                    </div>
                </div>
                <p className="text-mainColor text-[10px] mt-[4px] font-black">陽性・陰性の判断基準：右半分が赤い</p>
            </div>
            <div className="mt-[19px] mx-[23px] flex justify-between">
                <button className="px-[60px] py-[15px] bg-btnbgColor rounded-[10px]">陽性</button>
                <button className="px-[60px] py-[15px] bg-btnbgColor rounded-[10px]">陽性</button>
            </div>
            <div className="flex items-center mt-[20px]">
                <button className="mx-auto px-[60px] py-[15px] bg-btnbgColor rounded-[10px]">陽性</button>
            </div>
            <div className="my-[24px]">
                <DefaultButton text="記録をする" buttonClick={() => { }}></DefaultButton>
            </div>
        </div>
    );
};
export default Record;
