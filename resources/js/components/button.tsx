import React from "react";
interface ButtonProps {
    text: string;
    buttonClick: ()=>void;
  }
function DefaultButton(props:ButtonProps){
    return (
        <button onClick={props.buttonClick} className=" flex flex-col mx-auto my-5 text-center px-5 py-3 bg-gradient-to-r from-cyan-300 to-teal-700 rounded-full text-white text-xs">{props.text}</button>                     
    );
};
export default DefaultButton;