import Car from "./Car";

function Garage(){

  const carList = [
    {
      id: 1,
      brand: 'BMW',
      color: 'Red'
    },
    {
      id: 2,
      brand: 'Ford',
      color: 'Green'
    },
    {
      id: 3,
      brand: 'Tesla',
      color: 'Black'
    },
  ];
  
  return(
    <>
      <h1>Who are You?</h1>

      <ul>
        {
          carList.map( (carInfo) => {
            return ( <li key={carInfo.id}> <Car carInfo = {carInfo}/> </li> )
          } )
        }
      </ul>       
    </>
  );
}


export default Garage;