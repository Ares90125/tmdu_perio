import React, { useState } from "react";
import BreshComponent from "../../../components/breshcomponent";
import DefaultButton from "../../../components/button";
import ToolButton from "../../../components/toolcomponent";
const Bresh = () => {
    const [userid,setUserId]=useState("");
    const [password,setPassword]=useState("1230191");
    const handleChange=(e:React.ChangeEvent<HTMLInputElement>)=>{
        setUserId(e.target.value);
    }
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
        </div>        
    );
};

export default Bresh;