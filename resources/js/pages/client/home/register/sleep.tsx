import React, { useEffect, useState } from "react";
import axios, { AxiosResponse } from 'axios';
import Timepicker from "../../../../components/timepicker";
import DefaultButton from "../../../../components/button";
import { textTransform } from "@mui/system";
import $ from 'jquery'

const Sleep = () => {
    const [tabindex, setTabIndex] = useState(1);
    const [selectindex, setSelect] = useState('1');
    const [time1, settime1] = useState("23:00");
    const [time2, settime2] = useState("07:00");
    const create = () => {
        let date = new Date();
        ; const config = {
            headers: {
                'Content-Type': 'application/json',
            }
        };
        const body = JSON.stringify({
            "date": date.getFullYear() + ":" + (date.getMonth() + 1) + ":" + (date.getDate()+tabindex-2),
            "time1": time1+":"+"00",
            "update": date.getFullYear() + ":" + (date.getMonth() + 1) + ":" + date.getDate(),
            "time2": time2+":"+"00",
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
    function getDate(last: boolean) {
        let newDate = new Date();
        let date = newDate.getDate();
        let month = newDate.getMonth() + 1;
        let day = newDate.getDay();
        return last ? `${month}月${date - 1}日` : `${month}月${date}日`;
    }
    useEffect(() => {
        $(document).ready(function() {
            $('#resizing_select').change(function(){
               $("#width_tmp_option").html($('#resizing_select option:selected').text());
               console.log($("#width_tmp_select").width() );
               $(this).width($("#width_tmp_select").width()! + 60);
            });
           });
    }, [])
    return (
        <div className="w-full">
            <div className="mt-8 mx-8 font-bold bg-bgColor">
                <p className="text-sm text-mainColor font-bold text-left pb-2">昨夜の就寝時間</p>
                <div >
                    <ul className="flex flex-row text-[22px] font-bold text-center" id="myTab" data-tabs-toggle="#myTabContent" role="tablist">
                        <li className="basis-1/2  " role="presentation">
                            <button onClick={() => { setTabIndex(1) }} className={"shadow-[0px_-1px_4px_4px_rgba(0,0,0,0.03)] rounded-l-2xl py-3 w-full inline-block px-4   font-black " + (tabindex == 1 ? "bg-btnbgColor text-white" : "text-mainColor bg-white")} id="profile-tab" data-tabs-target="#profile" type="button" role="tab" aria-controls="profile" aria-selected="false">{getDate(true)}</button>
                        </li>
                        <li className="basis-1/2 " role="presentation">
                            <button onClick={() => { setTabIndex(2) }} className={"shadow-[0px_-1px_4px_4px_rgba(0,0,0,0.03)] rounded-r-2xl py-3 w-full inline-block px-4  font-black " + (tabindex == 2 ? "bg-btnbgColor text-white" : "text-mainColor bg-white")} id="dashboard-tab" data-tabs-target="#dashboard" type="button" role="tab" aria-controls="dashboard" aria-selected="false">{getDate(false)}</button>
                        </li>
                    </ul>
                </div>
                  <input style={{WebkitAppearance: "none"}} className="flex items-center justify-center  focus:outline-none focus:border-mainColor tracking-[.3em] text-center rounded-lg border border-mainColor text-[26px] text-mainColor font-bold  px-2 w-full mt-4 bg-white" type="time"  value={time1} onChange={(ev) => {settime1(ev.target.value);}} />
                <div className="mt-8,mb-4">
                    <p className="text-sm text-mainColor text-left mt-6 mb-2">起床時間</p>
                </div>
                <input style={{WebkitAppearance: "none"}} className="flex items-center justify-center  focus:outline-none focus:border-mainColor tracking-[.3em] text-center rounded-lg border border-mainColor text-[26px] text-mainColor font-bold  px-2 w-full mt-4 bg-white" type="time"  value={time2} onChange={(ev) => {settime2(ev.target.value);}} />
                <div className="my-4">
                    <p className="text-sm text-mainColor text-left pb-2">今朝のお口の状態はいかがでしたか？</p>
                    <div className="c-mouthStatus__container u-m-auto onIndexMS">
                        <label className="c-mouthStatus-label">
                            <select id="resizing_select" value={selectindex} className="flex items-center justify-center c-mouthStatus__container-status c-timeSelect__timeInput bg-white text-mainColor text-[26px] font-bold w-full rounded-lg border border-mainColor    outline-0 text-center object-center"
                                onChange={(e) => setSelect(e.target.value)}>
                                <option className="c-mouthStatus-choices" value={1}>すっきりしている</option>
                                <option className="c-mouthStatus-choices" value={2}>特に問題なし</option>
                                <option className="c-mouthStatus-choices" value={3}>軽い違和感</option>
                                <option className="c-mouthStatus-choices"  value={4}> 痛みあり</option>
                            </select>
                            <select id="width_tmp_select w-0" style={{display:"none"}}>
                                <option id="width_tmp_option"></option>
                            </select>
                        </label>
                    </div>

                    <DefaultButton text="記録をする" buttonClick={create}></DefaultButton>
                </div>
            </div>
        </div>
    ); 4
};

export default Sleep;
