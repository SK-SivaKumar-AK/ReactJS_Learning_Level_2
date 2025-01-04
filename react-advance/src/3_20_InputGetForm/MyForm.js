import { useState } from "react";

function MyForm(){

    const [name , SetName] = useState('');

    console.log('getName:' , name);

    return (
        <>
            <form>
                <label htmlFor="myname">Enter Your Name:</label>
                <input type="text" name="myname" id="myname" onChange={ (e) => { SetName(e.target.value) } }/>
            </form>
        </>
    );
}

export default MyForm;