import { useState } from "react";

function MyForm(){

    const [name , SetName] = useState('');

    function handleSubmit(e){
        e.preventDefault();
        console.log(name);
    }

    return (
        <>
            <form onSubmit={handleSubmit}>
                <label htmlFor="myname">Enter Your Name:</label>
                <input type="text" name="myname" id="myname" onChange={ (e) => { SetName(e.target.value) } }/>
                <input type="submit" name="submit" id="submit" />
            </form>
        </>
    );
}

export default MyForm;