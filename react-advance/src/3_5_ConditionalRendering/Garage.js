import Car from "./Car";
import Apple from "./Apple";

function Garage(){

  const carInfo = {
    brand : 'Maruti',
    color : 'Black'
  }

  const appleInfo = {
    type : 'Fuji',
    color : 'Red'
  }

  const showAppleInfo = appleInfo.type !== undefined && appleInfo.color !== undefined;
    return(
      <>
        <h1>Who are You?</h1>
        <Car carInfo = {carInfo}/>
        { (showAppleInfo)? <Apple appleInfo={appleInfo}/> : null }        
        { (showAppleInfo)&& <Apple appleInfo={appleInfo}/> }        
      </>
    );
}


export default Garage;