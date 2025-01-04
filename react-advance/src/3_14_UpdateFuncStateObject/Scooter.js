import { useState } from "react";

function Scooter(){

    let scooterInfo = {
        color : 'Red',
        brand : 'Honda',
        model : 'Activa 6G',
        year : 2024
    }
    const [scooter , setScooter] = useState(scooterInfo);

    function updateObject(){

        setScooter( (preValue) => {
            return {...preValue , color: 'Blue'}
        } );
        
    }

    return(
        <>
            <h1>My Scooter!</h1>
            <p>Color : {scooter.color}</p>
            <p>Brand : {scooter.brand}</p>
            <p>Model : {scooter.model}</p>
            <p>Year : {scooter.year}</p>
            <button onClick={updateObject}>Object Value Change</button>
        </>
    );
}

export default Scooter;