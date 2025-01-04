import { useEffect, useState } from "react";

function Timer(){

    const [count , setCount] = useState(0);

    function checkCount(){
        if(count > 10){
            setCount(1);
        }
    }
    useEffect( checkCount , [count] );

    
    function wayOne(){
        setCount(1);
    }
    useEffect( wayOne , [] );


    function wayTwo(){
        setTimeout( () => {
            setCount( (preVal) => {
                return preVal + 1;
            } );
        } , 1000 );
    }
    useEffect( wayTwo , []);
    

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