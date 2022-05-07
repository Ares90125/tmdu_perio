import React, { useState } from "react";
import axios, { AxiosResponse } from 'axios';
import Timepicker from "../../../../components/timepicker";
import DefaultButton from "../../../../components/button";

const Sleep = () => {
    const [tabindex, setTabIndex] = useState(1);
    const [selectindex, setSelect] = useState('1');
    const [time1, settime1] = useState({ "time": 13, "min": 10 });
    const [time2, settime2] = useState({ "time": 20, "min": 30 });
    function settime_1(isup: boolean) {
        if (isup) {
            if (time1.min == 59) {
                if (time1.time == 23) {
                    settime1({ "time": 0, "min": 0 })
                }
                settime1({ "time": time1.time + 1, "min": 0 })
            } else {
                settime1({ "time": time1.time, "min": time1.min + 1 })
            }
        } else {
            if (time1.min == 0) {
                if (time1.time == 0)
                    settime1({ "time": 23, "min": 59 })
                settime1({ "time": time1.time - 1, "min": 59 })
            } else {
                settime1({ "time": time1.time, "min": time1.min - 1 })
            }
        }
    }
    const create = () => {
        let date = new Date();
        ; const config = {
            headers: {
                'Content-Type': 'application/json',
            }
        };
        const body = JSON.stringify({
            "date": date.getFullYear() + ":" + (date.getMonth() + 1) + ":" + (date.getDate()+tabindex-2),
            "time1": time1.time+":"+time1.min+":"+"00",
            "update": date.getFullYear() + ":" + (date.getMonth() + 1) + ":" + date.getDate(),
            "time2": time2.time+":"+time2.min+":"+"00",
            "value": `${selectindex}`});
        try {
            axios.post('/api/client/createsleep', body, config).then((response: AxiosResponse) => {
                if (response.data["success"] == true) {
                    window.alert("success");
                } else {

                }
            });
        }
        catch (err) {

        }
    }
    function settime_2(isup: boolean) {
        if (isup) {
            if (time2.min == 59) {
                if (time1.time == 23) {
                    settime1({ "time": 0, "min": 0 })
                }
                settime2({ "time": time2.time + 1, "min": 0 })
            } else {
                settime2({ "time": time2.time, "min": time2.min + 1 })
            }
        } else {
            if (time2.min == 0) {
                if (time1.time == 0)
                    settime2({ "time": 23, "min": 59 })
                settime2({ "time": time2.time - 1, "min": 59 })
            } else {
                settime2({ "time": time2.time, "min": time2.min - 1 })
            }
        }
    }
    function getDate(last: boolean) {
        let newDate = new Date();
        let date = newDate.getDate();
        let month = newDate.getMonth() + 1;
        let day = newDate.getDay();
        return last ? `${month}月${date - 1}日` : `${month}月${date}日`;
    }
    return (
        <div >
            <div className="mt-16 mx-8 font-bold">
                <p className="text-sm text-mainColor font-bold text-left pb-2">昨夜の就寝時間</p>
                <div >
                    <ul className="flex flex-row text-sm font-medium text-center" id="myTab" data-tabs-toggle="#myTabContent" role="tablist">
                        <li className="basis-1/2 " role="presentation">
                            <button onClick={() => { setTabIndex(1) }} className={"rounded-l-2xl py-4  text-sm w-full inline-block px-4 py-1  font-black " + (tabindex == 1 ? "bg-btnbgColor text-white" : "text-mainColor bg-white")} id="profile-tab" data-tabs-target="#profile" type="button" role="tab" aria-controls="profile" aria-selected="false">{getDate(true)}</button>
                        </li>
                        <li className="basis-1/2 " role="presentation">
                            <button onClick={() => { setTabIndex(2) }} className={"rounded-r-2xl py-4  text-sm w-full inline-block px-4 py-1  font-black " + (tabindex == 2 ? "bg-btnbgColor text-white" : "text-mainColor bg-white")} id="dashboard-tab" data-tabs-target="#dashboard" type="button" role="tab" aria-controls="dashboard" aria-selected="false">{getDate(false)}</button>
                        </li>
                    </ul>
                </div>
                <div className="mt-4 bg-white">
                    <Timepicker time={time1.time} min={time1.min} onClickUp={settime_1} />
                </div>
                <div className="mt-8,mb-4">
                    <p className="text-sm text-mainColor text-left mt-6 mb-2">起床時間</p>
                </div>
                <div className="bg-white">
                    <Timepicker time={time2.time} min={time2.min} onClickUp={settime_2} />
                </div>
                <div className="my-4">
                    <p className="text-sm text-mainColor text-left pb-2">今朝のお口の状態はいかがでしたか？</p>
                    <div className="bg-white text-mainColor  py-2 text-2xl font-bold w-full rounded-lg border-2 border-mainColor ">
                        <select id="fruits" value={selectindex} className="w-11/12 outline outline-0 text-center ml-2 object-center"
                            onChange={(e) => setSelect(e.target.value)}>
                            <option value={1}>すっきりしている</option>
                            <option value={2}>特に問題なし</option>
                            <option value={3}>軽い違和感</option>
                            <option value={4}> 痛みあり</option>
                        </select>
                    </div>
                    <DefaultButton text="記録をする" buttonClick={create}></DefaultButton>
                </div>
            </div>
        </div>
    ); 4
};

export default Sleep;
