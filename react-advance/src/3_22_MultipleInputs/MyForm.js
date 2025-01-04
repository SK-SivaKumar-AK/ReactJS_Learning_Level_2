import { useState } from "react";

function MyForm(){

    // const [name , SetName] = useState('');
    // const [age , SetAge] = useState('');
    // const [email , setEmail] = useState('');
    
    const [inputs , setInputs] = useState({});

    function handleSubmit(e){
        e.preventDefault();
        //console.log(name , age , email);
        console.log(inputs);
    }

    return (
        <>
            <form onSubmit={handleSubmit}>
                <label htmlFor="myname">Enter Your Name:</label>
                <input type="text" name="myname" id="myname" onChange={ (e) => { setInputs( (preVal) => { return {...preVal , name : e.target.value} } ) } }/>
                <label htmlFor="myage">Enter Your Age:</label>
                <input type="text" name="myage" id="myage" onChange={ (e) => { setInputs( (preVal) => { return {...preVal , age : e.target.value} } ) } }/>
                <label htmlFor="myemail">Enter Your Email:</label>
                <input type="text" name="myemail" id="myemail" onChange={ (e) => { setInputs( (preVal) => { return {...preVal , email : e.target.value} } ) } }/>
                <input type="submit" name="submit" id="submit" />
            </form>
        </>
    );
}

export default MyForm;