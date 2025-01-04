import { useState } from "react";

function Scooter(){

    let scooterInfo = {
        color : 'Red',
        brand : 'Honda',
        model : 'Activa 6G',
        year : 2024
    }
    const [scooter , setCScooter] = useState(scooterInfo);

    return(
        <>
            <h1>My Scooter!</h1>
            <p>Color : {scooter.color}</p>
            <p>Brand : {scooter.brand}</p>
            <p>Model : {scooter.model}</p>
            <p>Year : {scooter.year}</p>
        </>
    );
}

export default Scooter;