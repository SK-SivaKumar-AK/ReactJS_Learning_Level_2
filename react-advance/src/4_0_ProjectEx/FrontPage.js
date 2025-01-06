import React from 'react';
import { useState } from 'react';
import Result from './Result';
import './FrontPage.css';

/* its no need to render because function only render not all page */
const secretNumber = Math.floor( Math.random() * 10 ) + 1 ;

function FrontPage() {

  const [term , setTerm] = useState('');

  const handleChange = (e) => {
      setTerm(e.target.value);
  }

  return (
    <div className="container">
        <div className="head">
            <label htmlFor="term">Guess the number between 1 to 10 (Anser : {secretNumber})</label>
        </div>
        <input type="text" name="term" id="term" onChange={ handleChange }/>
        <Result secretNumber={secretNumber} term={term}/>
    </div>
  );
}

export default FrontPage;
