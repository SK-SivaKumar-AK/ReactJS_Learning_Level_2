import { useState } from "react";

function MyForm(){
    return (
        <>
            <form>
                <label htmlFor="myname">Enter Your Name:</label>
                <input type="text" name="myname" id="myname" />
            </form>
        </>
    );
}

export default MyForm;