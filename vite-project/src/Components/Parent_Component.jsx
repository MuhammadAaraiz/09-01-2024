import React, { useState } from "react";
import { Component_01 } from "./Component_01";


// *************************** Parent Component ***************************

const Parent_Component = () => {
    const [label, setlabel] =
        useState("Component label")

    const value_update_handle = (val) => {
        console.log(val)
        setlabel(val)
    }
    return <Component_01
        value_update_handle={value_update_handle}
        label={label}
    />
}

export { Parent_Component }