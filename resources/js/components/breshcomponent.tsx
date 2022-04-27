import React, { useState } from "react";
interface ButtonProps {
    // text: string;
    // buttonClick: ()=>void;
}
function BreshComponent(props: ButtonProps) {
    const [tabindex, settTab] = useState(1);
    const [hour, setHour] = useState(0);
    const [minutes, setMinutes] = useState(0);

    function setTabIndex(val: number) {
        settTab(val);
    }
    function getCurrentDate() {
        var weekday = ["日", "月", "火", "水", "木", "金", "土"];

        let newDate = new Date();
        let date = newDate.getDate();
        let month = newDate.getMonth() + 1;
        let day = newDate.getDay();

        return `${month}月${date}日(${weekday[day]})`;
    }
    function getCurrentTime() {
        let newDate = new Date();
        setHour(newDate.getHours());
        setMinutes(newDate.getMinutes());
    }
    window.setInterval(function () {
        getCurrentTime();
    }, 1000);
    return (
        <div className="rounded-xl mt-4  border-y  border-mainColor h-20 bg-white">
            <ul className=" h-full flex flex-row  text-sm font-medium text-center" id="myTab" data-tabs-toggle="#myTabContent" role="tablist">
                <li className=" basis-2/6 h-full " role="presentation">
                    <button onClick={() => { }} className={"flex justify-center items-center rounded-xl h-full text-xs w-full  font-black border-transparent bg-btnbgColor text-white"} id="profile-tab" data-tabs-target="#profile" type="button" role="tab" aria-controls="profile" aria-selected="false">
                        <img src="../../images/comb.png" alt="Icon" />
                        歯みがき
                    </button>
                </li>
                <li className="mx-2 basis-1/6 h-full py-2" role="presentation">
                    <button onClick={() => { setTabIndex(1) }} className={"rounded-xl h-full text-xs w-full    font-black border-transparent  " + (tabindex == 1 ? "bg-btnbgColor text-white" : "text-mainColor bg-white")} id="dashboard-tab" data-tabs-target="#dashboard" type="button" role="tab" aria-controls="dashboard" aria-selected="false"><span className="font-black text-xl">3</span>分<br></br>未満</button>
                </li>
                <li className="mx-2 basis-1/6 py-2" role="presentation h-full">
                    <button onClick={() => { setTabIndex(2) }} className={"rounded-xl h-full text-xs w-full    font-black border-transparent  " + (tabindex == 2 ? "bg-btnbgColor text-white" : "text-mainColor bg-white")} id="settings-tab" data-tabs-target="#settings" type="button" role="tab" aria-controls="settings" aria-selected="false"><span className="font-black text-xl">3-5</span><br></br>分</button>
                </li>
                <li className="mx-2 basis-1/6 py-2" role="presentation h-full">
                    <button onClick={() => { setTabIndex(3) }} className={"rounded-xl h-full text-xs w-full    font-black border-transparent  " + (tabindex == 3 ? "bg-btnbgColor text-white" : "text-mainColor bg-white")} id="settings-tab" data-tabs-target="#settings" type="button" role="tab" aria-controls="settings" aria-selected="false"><span className="font-black text-xl">5-10</span><br></br>分</button>
                </li>
                <li className="mx-2 basis-1/6 py-2" role="presentation h-full">
                    <button onClick={() => { setTabIndex(4) }} className={"rounded-xl h-full text-sm w-full    font-black border-transparent  " + (tabindex == 4 ? "bg-btnbgColor text-white" : "text-mainColor bg-white")} id="settings-tab" data-tabs-target="#settings" type="button" role="tab" aria-controls="settings" aria-selected="false"><span className="font-black text-xl">10</span>分<br></br>以上</button>
                </li>
            </ul>
        </div>
    );
};
export default BreshComponent;