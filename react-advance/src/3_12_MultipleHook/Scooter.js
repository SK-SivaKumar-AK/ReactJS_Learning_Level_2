import { useState } from "react";

function Scooter(){

    const [color , setColor] = useState('Red');
    const [brand , setBrand] = useState('Honda');
    const [model , setModel] = useState('Activa 6G');
    const [year , setYear] = useState('2024');

    return(
        <>
            <h1>My Scooter!</h1>
            <p>Color : {color}</p>
            <p>Brand : {brand}</p>
            <p>Model : {model}</p>
            <p>Year : {year}</p>
        </>
    );
}

export default Scooter;