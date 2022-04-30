import React, { useState } from "react";
import DefaultButton from "../../../../components/button";
import TypeHeader from "../../../../components/type";
const BedTime = () => {
    const [tabindex, setTabIndex] = useState(1);
    function getDate(last:boolean) {
        let newDate = new Date();
        let date = newDate.getDate();
        let month = newDate.getMonth() + 1;
        let day = newDate.getDay();
        return last?`${month}月${date-1}日`:`${month}月${date}日`;
    }
    return (
        <div >
            <p className="text-4xl text-mainColor py-8 font-black text-center pb-2">{"記録を編集する"}</p>
            <p className="text-base text-mainColor pt-2 pb-4 font-light text-center pb-2">{"就寝時間を編集しましょう"}</p>
            <TypeHeader text="就寝"/>
            <p className="text-sm text-mainColor font-bold text-left pb-2 mt-8">就寝時間</p>
            <div > 
                <ul className="flex flex-row text-sm font-medium text-center" id="myTab" data-tabs-toggle="#myTabContent" role="tablist">
                    <li className="basis-1/2 " role="presentation">
                        <button onClick={() => { setTabIndex(1) }} className={"rounded-l-2xl py-4  text-sm w-full inline-block px-4 py-1  font-black "+(tabindex==1?"bg-btnbgColor text-white":"text-mainColor bg-white")} id="profile-tab" data-tabs-target="#profile" type="button" role="tab" aria-controls="profile" aria-selected="false">{getDate(true)}</button>
                    </li>
                    <li className="basis-1/2 " role="presentation">
                        <button onClick={() => { setTabIndex(2) }} className={"rounded-r-2xl py-4  text-sm w-full inline-block px-4 py-1  font-black "+(tabindex==2?"bg-btnbgColor text-white":"text-mainColor bg-white")} id="dashboard-tab" data-tabs-target="#dashboard" type="button" role="tab" aria-controls="dashboard" aria-selected="false">{getDate(false)}</button>
                    </li>
                </ul>
            </div> 
            <div>
                
            </div>
            <DefaultButton text="記録をする" buttonClick={()=>{}}  />
        </div>
    );
};

export default BedTime;
