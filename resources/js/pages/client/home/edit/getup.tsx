import React, { useState } from "react";
import TypeHeader from "../../../../components/type";
import DefaultButton from "../../../../components/button";

const GetUp = () => {
    const [value, setValue] = React.useState<Date | null>(new Date());
    return (
        <div >
            <p className="text-4xl text-mainColor py-8 font-black text-center pb-2">{"記録を編集する"}</p>
            <p className="text-base text-mainColor pt-2 pb-4 font-light text-center pb-2">{"起床時間を編集しましょう"}</p>
            <TypeHeader text="起床"/>
            <p className="font-bold text-mainColor px-8 mt-8 mb-4 text-xs">起床時間</p>
            <div>

            </div>
            <DefaultButton text="記録をする" buttonClick={()=>{}}  />
        </div>
    );
};

export default GetUp;
