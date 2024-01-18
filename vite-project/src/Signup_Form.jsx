import React, { useState } from "react";
import { Input_Field } from "./Input_field";
const Signup_Form = () => {
    const [user_data, setUserData] = useState({
        // username:'',
        // email:'',
        // password:''
    });

    //   user_data.username ='user'
    //   user_data['username'] ='user'
    // let arr = [1,3,4,5,6]
    // arr[2]

    const userDataHandle = (val, key) => {
        // console.log("val:", val);
        // console.log("key:", key);
        const obj = { ...user_data };

        obj[key] = val;

        setUserData(obj);
    };

    //   userDataHandle("user 01", "username");

    console.log(user_data);

    //   const submitHandle = () => {};

    return (
        <div>
            <h1>Signup_Form</h1>

            <div>
                <Input_Field
                    id="username"
                    placeholder="Enter Username"
                    type="text"
                    onChangeHandle={userDataHandle}
                />
                
                <Input_Field
                    id="email"
                    placeholder="Email"
                    type="email"
                    onChangeHandle={userDataHandle}
                />
                <Input_Field
                    id="password"
                    placeholder="Password"
                    type="password"
                    onChangeHandle={userDataHandle}
                />
                <Input_Field
                    id="confirm_password"
                    placeholder="Confirm Password"
                    type="password"
                    onChangeHandle={userDataHandle}
                />
            </div>

            {/* <button onClick={submitHandle}>Submit Details</button> */}
        </div>
    );
};

export { Signup_Form };

