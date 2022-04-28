import React, { useState } from "react";

const Calender = () => {
    const [value, setValue] = React.useState<Date | null>(new Date());
    return (
        <div>
            <p className="text-4xl text-mainColor py-8 font-black text-center pb-2">{"歯みがき記録"}</p>
            <p className="text-base text-mainColor pt-2 pb-4 font-light text-center pb-2">{"自分の記録をみてみましょう"}</p>
            
        </div>
    );
};

export default Calender;