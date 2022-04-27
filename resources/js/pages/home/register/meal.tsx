import React, { useState } from "react";
import MealComponent from "../../../components/mealcomponent";
import DefaultButton from "../../../components/button";
const Meal = () => {
    const [userid, setUserId] = useState("");
    const [password, setPassword] = useState("1230191");
    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setUserId(e.target.value);
    }
    return (
        <div >
            <div className="mt-16">
                <MealComponent />
            </div>
        </div>
    );
};

export default Meal;