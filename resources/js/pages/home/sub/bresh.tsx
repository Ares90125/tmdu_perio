import React, { useState } from "react";
import BreshComponent from "../../../components/breshcomponent";
import DefaultButton from "../../../components/button";
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
        </div>        
    );
};

export default Bresh;