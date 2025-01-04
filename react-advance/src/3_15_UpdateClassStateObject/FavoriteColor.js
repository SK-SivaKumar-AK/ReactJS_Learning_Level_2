import  React  from "react";

class FavoriteColor extends React.Component{

    constructor(){
        super();
        this.state = {
            color : 'Red' ,
            model : 'Maruti'
        };
    }
    render(){
        return(
            <>
                <h1>My car color is {this.state.color} {this.state.model}!</h1>
                <button onClick={ () => { this.setState( (preVal) => { return {...preVal , color:'Blue'} } ) } }>Change Value</button>
            </>
        );
    }
}

export default FavoriteColor;