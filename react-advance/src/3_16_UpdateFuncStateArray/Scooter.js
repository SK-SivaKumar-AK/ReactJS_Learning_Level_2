import { useState } from "react";

function Scooter(){

    const [list , setList] = useState([]);
    const [count , setCount] = useState(1);

    const numbers = [1 , 2 , 3 , 4 , 5];

    function addItem(){
        const itemName = 'Item'+count;
        setList( (preVal) => {
            return [...preVal , itemName]
        } );

        setCount( (preVal) => {
            return preVal + 1;
        } );
    } 

    return(
        <>
            <h1>Array State</h1>
            <button onClick={addItem}>Add Item</button>
            <ul>
                {
                    list.map( (value , index) => {
                        return ( <li key={index}>{value}</li> )
                    } )
                }
            </ul> 
        </>
    );
}

export default Scooter;