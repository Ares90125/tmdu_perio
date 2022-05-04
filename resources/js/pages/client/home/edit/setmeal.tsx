import React, { useState } from "react";
import TypeHeader from "../../../../components/type";
import DefaultButton from "../../../../components/button";
import MealComponent from "../../../../components/mealcomponent";

const SetMeal = () => {
    const [value, setValue] = React.useState<Date | null>(new Date());
    return (
        <div >
            <p className="text-4xl text-mainColor py-8 font-black text-center pb-2">{"記録を編集する"}</p>
            <p className="text-base text-mainColor pt-2 pb-4 font-light text-center pb-2">{"歯磨きや食事の内容を記録しましょう"}</p>
            <TypeHeader text="食事"/>
            <div className="mt-4">

            </div>
            <MealComponent />
            {/* <DefaultButton text="記録をする" buttonClick={()=>{}}  /> */}
        </div>
    );
};

export default SetMeal;
