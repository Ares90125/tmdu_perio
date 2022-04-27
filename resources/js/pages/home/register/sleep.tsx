import React, { useState } from "react";

const Sleep = () => {
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
            <div className="mt-16 mx-8">
                <p className="text-sm text-mainColor font-light text-left pb-2">昨夜の就寝時間</p>
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
                <div className="mt-8,mb-4">
                    <p className="text-sm text-mainColor font-light text-left pb-2">起床時間</p>
                </div>
                <div className="my-4">
                <p className="text-sm text-mainColor font-light text-left pb-2">今朝のお口の状態はいかがでしたか？</p>
                </div>
            </div>
        </div>
    );4
};

export default Sleep;