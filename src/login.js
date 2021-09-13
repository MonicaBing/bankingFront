import React, { useState } from "react";

const Login = () => {
//function 

    //   const userId = '';
    const [userId, setuserId] = useState("");
    const submit = (event) => {
        // store userId to localStorage
        event.preventDefault();
        sessionStorage.setItem(`userId`, userId);
        console.log(userId);
    };

    const handleChange = (event) => {
        setuserId(event.target.value);
    };

    // logout 

    const logout = () => {
        // do something 
        sessionStorage.removeItem('userId');
    }

    // display

    return (
        // this is one element
        <div className="Login"> 
            <form onSubmit={submit}>
                <label>
                    Username:
                    <input value={userId} onChange={handleChange} />
                </label>
                <input type="submit" value="Submit" />
            </form>

            <button onClick={logout}> Logout</button> 

        </div>

        
    );
};

export default Login;

// export it to index.js
