import { useEffect, useState } from "react";

function Timer(){

    const [count , setCount] = useState(0);

    function checkCount(){
        if(count > 10){
            setCount(1);
        }
    }

    useEffect( checkCount , [count] );

    
    function updateCount(){
        setCount( (preval) => {
            return preval + 1;
        } );
    }

    return(
        <>
            <h1>I have rendered count {count} times!</h1>
            <button onClick={updateCount}>Increase Count</button>
        </>
    );
}

export default Timer;