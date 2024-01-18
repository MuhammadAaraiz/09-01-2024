import React from "react";


// *************************** Child Component ***************************

const Component_01 = (props) => {
    const update_props_handle = () => {
        props.value_update_handle("Updated label value")
    }
    return (
        <>
            <div className="first_div">{props.label}</div>
            <button className="btn" onClick={update_props_handle} >Updated Value</button>
        </>
    )
}

export { Component_01 }