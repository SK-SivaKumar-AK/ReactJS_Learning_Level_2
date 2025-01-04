import { useState } from "react";

function MyForm(){

    // const [name , SetName] = useState('');
    // const [age , SetAge] = useState('');
    // const [email , setEmail] = useState('');
    
    const [inputs , setInputs] = useState({
        myemail : '@gmail.com',
        myphone : '+91',
        mycountry : 'India'
    });

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
                <input type="text" name="myemail" id="myemail" value={inputs.myemail} onChange={ handleChange }/>
                <label htmlFor="myphone">Enter Your Phone:</label>
                <input type="text" name="myphone" id="myphone" value={inputs.myphone} onChange={ handleChange }/>
                <label htmlFor="mycountry">Enter Your Country:</label>
                <select name="mycountry" id="mycountry" value={inputs.mycountry} onChange={ handleChange }>
                    <option value="">Select Country</option>
                    <option value="Russia">Russia</option>
                    <option value="India">India</option>
                    <option value="America">America</option>
                </select>
                <label htmlFor="myabout">About:</label>
                <textarea name="myabout" id="myabout" value={inputs.myabout} onChange={ handleChange }></textarea>
                <input type="submit" name="submit" id="submit" />
            </form>
        </>
    );
}

export default MyForm;