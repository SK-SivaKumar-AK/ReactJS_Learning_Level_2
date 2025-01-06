import React from "react";

function Result(props){

    const { secretNumber , term } = props
    let result;

    if(term){
        if(term > secretNumber){
            result = 'Higher';
        }else if(term < secretNumber){
            result = 'Lower';
        }else if(term === secretNumber){
            result = 'Yipee! correct';
        }else{
            result = 'Enter Valid input!';
        }
    }
    

    return(
        <h3>You Guessed : {result}</h3>
    );
}

export default Result;