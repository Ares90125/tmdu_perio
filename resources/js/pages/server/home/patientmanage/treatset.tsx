import React, { useState, useEffect } from "react";
import { Route, Routes, NavLink, Link } from 'react-router-dom';
import axios, { AxiosResponse } from 'axios';
import AdminSmButton from "../../../../components/admindefaultbutton";
import { useAppDispatch, useAppSelector } from '../../../.././redux/hooks'
import { BRESH_TIME, BRESH_TOOL, MO_STATUS,PROGRAM} from "../../../../redux/type";
import { format } from "date-fns";

const TreatSet = () => {
    const index = useAppSelector((state) => state.index.value);
    const selectuser = useAppSelector((state) => state.user.value)[index];
    const [selectindex, setSelect] = useState(selectuser.type==null?"1":selectuser.type!.toString());
    const firstcheck=selectuser.date;
    const resettreat = () => {

        const config = {
            headers: {
                'Content-Type': 'application/json'
            }
        };
        const body = JSON.stringify({ "id": selectuser.id, "type": selectindex});
        try {
            axios.post('/api/admin/resettreat', body, config).then((response: AxiosResponse) => {
                if (response.data["success"] == true) {
                    window.alert("success");
                } else {

                }
            });
        }
        catch (err) {

        }
    }
    return (
        <div className="mx-[230px] mt-[20px] min-h-screen h-full bg-white">
            <div className="flex flex-row items-center pt-[39px] pl-[94px]">
                <p className="text-[24px] font-bold">
                    治療設定
                </p>
            </div>
            <div className="flex items-center justify-center">
                <p className="text-[20px] font-bold pr-[56px]">
                    初回セルフ検査日
                </p>
                <input value={firstcheck!} disabled={true} className="w-[382px] tracking-[.3em] rounded-xl text-base  border border-adminborderColor focus:outline-none focus:border-black bg-white px-4 py-3 border-cyan-400 font-semibold" type={"date" }/>
            </div>
            <div className="flex items-center pt-[30px] justify-center">
                <p className="text-[20px] font-bold pr-[56px]">
                    セルフケアタイプ
                </p>
                <select style={{WebkitAppearance: "none", appearance: "none",textAlignLast: "center",WebkitAlignContent:"center", textAlign:"center"}} id="fruits" value={selectindex} className="w-[382px] tracking-[.3em] rounded-xl text-base  border border-adminborderColor focus:outline-none focus:border-black bg-white px-4 py-3 border-cyan-400 font-semibold"
                            onChange={(e) => setSelect(e.target.value)}>
                            <option value={1}>{PROGRAM[0]}</option>
                            <option value={2}>{PROGRAM[1]}</option>
                            <option value={3}>{PROGRAM[2]}</option>
                            <option value={4}> {PROGRAM[3]}</option>
                        </select>
            </div>
            <div className="pt-[140px] flex justify-center">
                <AdminSmButton text="更新" buttonClick={resettreat} px={20} />
            </div>
        </div>
    );
};

export default TreatSet;
