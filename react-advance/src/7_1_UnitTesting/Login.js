import React, { useState } from "react";

function Login(){

    const [email , setEmail] = useState('');
    const [password , setPassword] = useState('');
    const [message , setMessage] = useState('');

    function signInHandler(){
        if(email === 'sk@gmail.com' && password === '123'){
            setMessage('Loading...');
            setTimeout(() => {
                setMessage('Success');
            } , 2000);
        }else{
            setMessage('Loading...');
            setTimeout(() => {
                setMessage('Failed');
            } , 2000);
        }
    }

    return (
        <>
            <h1>Login</h1>
            <input type="text" name="" id="" placeholder="Email" onChange={(e) => {setEmail(e.target.value)}}/><br />
            <input type="password" name="" id="" placeholder="Password" onChange={(e) => {setPassword(e.target.value)}}/>
            <button onClick={signInHandler}>SignIn</button>
            {
                (message)? <p>{message}</p> : null
            }
        </>
    );
}

export default Login;