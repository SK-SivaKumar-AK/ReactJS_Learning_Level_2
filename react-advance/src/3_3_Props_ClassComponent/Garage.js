import Car from "./Car";
import Apple from "./Apple";

function Garage(){
  /* const brand = 'Maruti';
  const color = 'Black'; */

  const carInfo = {
    brand : 'Maruti',
    color : 'Black'
  }

  const appleInfo = {
    type : 'Fuji',
    color : 'Red'
  }

    return(
      <>
        <h1>Who are You?</h1>
        {/* <Car brand = {brand} color = {color}/> */}
        <Car carInfo = {carInfo}/>
        <Apple appleInfo={appleInfo}/>
      </>
    );
}


export default Garage;