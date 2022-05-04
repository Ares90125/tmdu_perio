import React from "react";
interface TimepickerButton {
    time:number;
    min:number;
    change:(index:number)=>void;
  }
function Timepicker(props:TimepickerButton){
    return (
        <div className="flex justify-center rounded-lg border-2 border-mainColor text-3xl text-mainColor font-bold my-8 py-2">
            <p className="">{props.time}</p>
            <p className="px-2">:</p>
            <p className="">{props.min}</p>
        </div>
    );
};
export default Timepicker;
