function Header(){

    const myStyle = {
        color: 'red' , 
        backgroundColor : 'lightblue',
        padding : '10px',
        fontFamily: 'sans-serif'
    }
    
    return(
        <>
            <h1 style={ myStyle }>Hello Styling</h1>
            <p>Add a little Style.</p>
        </>
    );
}

export default Header;