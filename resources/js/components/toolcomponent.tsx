import React from "react";
interface ButtonProps {
    text: string;
    buttonClick: ()=>void;
    className:string;
    path:string;
  }
function ToolButton(props:ButtonProps){
    return (
        <div className="w-28 h-36">
            <button onClick={props.buttonClick} className={"flex flex-col justify-center items-center rounded-xl h-full text-xs w-full border-b-2 font-black border-transparent "+props.className} id="profile-tab" data-tabs-target="#profile" type="button" role="tab" aria-controls="profile" aria-selected="false">
                <img src={"../../images/"+props.path} alt="Icon" />
                {props.text}
            </button>
        </div>
    );
};
export default ToolButton;
