import React from "react";
interface TimepickerButton {
    time:number;
    min:number;
    change:(index:number)=>void;
  }
function Timepicker(props:TimepickerButton){
    return (
        <div className="flex items-stretch rounded-lg border-2 border-mainColor">
            <p className="">{props.time}</p>
            <p>:</p>
            <p className="">{props.min}</p>
        </div>
    );
};
export default Timepicker;