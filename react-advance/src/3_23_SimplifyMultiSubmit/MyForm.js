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

    function handleChange(e){
        const field = e.target.name;
        const value = e.target.value;
        setInputs( (preVal) => {
            return {...preVal , [field] : value }   // [use key inside]
        } )
    }

    return (
        <>
            <form onSubmit={handleSubmit}>
                <label htmlFor="myname">Enter Your Name:</label>
                <input type="text" name="myname" id="myname" onChange={ handleChange }/>
                <label htmlFor="myage">Enter Your Age:</label>
                <input type="text" name="myage" id="myage" onChange={ handleChange }/>
                <label htmlFor="myemail">Enter Your Email:</label>
                <input type="text" name="myemail" id="myemail" onChange={ handleChange }/>
                <label htmlFor="myphone">Enter Your Phone:</label>
                <input type="text" name="myphone" id="myphone" onChange={ handleChange }/>
                <input type="submit" name="submit" id="submit" />
            </form>
        </>
    );
}

export default MyForm;