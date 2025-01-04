import  React  from "react";

class FavoriteColor extends React.Component{

    constructor(){
        super();
        this.state = {color : 'Red'};
    }
    render(){
        return(
            <>
                <h1>My car color is {this.state.color}!</h1>
                <button onClick={ () => { this.setState( {color : 'Blue'} ) } }>Change Value</button>
            </>
        );
    }
}

export default FavoriteColor;