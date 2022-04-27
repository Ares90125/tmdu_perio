import React from "react";
interface ButtonProps {
    text: string;
    buttonClick: ()=>any;
  }
function DefaultButton(props:ButtonProps){
    return (
        <div>
            <select name="hours"  className="bg-transparent text-xl appearance-none outline-none">
               {
               }
            </select>
        </div>
    );
};
export default DefaultButton;