import React from "react";
import { useNavigate } from "react-router-dom";

function Login(){

    const navigate = useNavigate();

    function onSubmit(){
        /* credentials check code */
        navigate('/');
    }

    return (
        <>
            <h1>Login Page</h1>
            <button onClick={onSubmit}>Login</button>
        </>
    );
}

export default Login;