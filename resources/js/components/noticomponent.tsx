 import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import DefaultButton from "./button";
interface ButtonProps {
    index: number;
    buttonClick: ()=>void;
  }
function NotifiComponent(props:ButtonProps){
    const [visible, setVisible]=useState(true);
    return (
    <div key={props.index} className="w-full">
        <button className="w-full flex flex-col items-start font-black pt-[10px]" onClick={()=>{setVisible(!visible)}}>
            <p className=" text-dateColor text-[10px] ">
                2022.01.05 12:11
            </p>
            <p className="text-mainColor text-[13px] pt-[5px]">
                セルフ検査をしてください
            </p>
        </button>
        <div className={(visible?"h-0 opacity-0 invisible":"h-auto opacity-100 visible")}>
            <div className="px-[10px] text-[13px] font-normal text-mainColor pt-[8px]">
                定期的なセルフ検査は重要です。食事２時間後に検査しましょう試薬はあらかじめ室温に戻しておきましょうこちらのリンクから、セルフ検査をしましょう。
            </div>
            <div className="my-[10px]">
                <NavLink to="selfcheck">
                    <DefaultButton text="検査する" buttonClick={props.buttonClick}></DefaultButton>
                </NavLink>

            </div>
        </div>
        <div className="w-full h-[1px] bg-divColor mt-[5px]">
        </div>
    </div>
    );
};
export default NotifiComponent;
