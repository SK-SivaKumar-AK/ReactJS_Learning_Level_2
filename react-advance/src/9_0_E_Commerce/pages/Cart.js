import {Fragment} from 'react';
import { Link } from 'react-router-dom';

function Cart({ cartItems , setCartItems }){

    function increaseQty(item){
        if(item.product.stock == item.qty){
            return ;
        }
        const updateItems = cartItems.map((i) => {
            if(i.product._id == item.product._id){
                i.qty++;
            }
            return i;
        })
        setCartItems(updateItems);
    }

    function decreaseQty(item){
        if(item.qty == 0){
            return ;
        }
        const updateItems = cartItems.map((i) => {
            if(i.product._id == item.product._id){
                i.qty--;
            }
            return i;
        })
        setCartItems(updateItems);
    }

    function removeItem(item){
        const updateItems = cartItems.filter((i) => {
            if(i.product._id !== item.product._id){
                return true;
            }
        })
        setCartItems(updateItems);
    }

    function placeOrderHandler(){
        fetch(`${process.env.REACT_APP_API_URI}/order` , {
            method: 'POST',
            headers: {'Content-Type' : 'application/json'},
            body: JSON.stringify(cartItems)
        }).then((res) => {
            setCartItems([]);
        })
    }


    return(
        <>
            {
                (cartItems.length > 0)? (
                    <div className="container container-fluid">
                        <h2 className="mt-5">Your Cart: <b>{cartItems.length} items</b></h2>
                        
                        <div className="row d-flex justify-content-between">
                            <div className="col-12 col-lg-8">
                                {
                                    cartItems.map((item) => {
                                        return(
                                            <Fragment key={item.product._id}>
                                                <hr />
                                                <div className="cart-item">
                                                    <div className="row">
                                                        <div className="col-4 col-lg-3">
                                                            <img src={item.product.images[0].image} alt={item.product.name} height="90" width="115"/>
                                                        </div>
                    
                                                        <div className="col-5 col-lg-3">
                                                            <Link to={'/product/'+item.product._id}>{item.product.name}</Link>
                                                        </div>
                    
                    
                                                        <div className="col-4 col-lg-2 mt-4 mt-lg-0">
                                                            <p id="card_item_price">${item.product.price}</p>
                                                        </div>
                    
                                                        <div className="col-4 col-lg-3 mt-4 mt-lg-0">
                                                            <div className="stockCounter d-inline">
                                                                <span className="btn btn-danger minus" onClick={() => {decreaseQty(item)}}>-</span>
                                                                <input type="number" className="form-control count d-inline" value={item.qty} readOnly />
                    
                                                                <span className="btn btn-primary plus" onClick={() => {increaseQty(item)}}>+</span>
                                                            </div>
                                                        </div>
                    
                                                        <div className="col-4 col-lg-1 mt-4 mt-lg-0">
                                                            <i id="delete_cart_item" className="fa fa-trash btn btn-danger" onClick={() => {removeItem(item)}}></i>
                                                        </div>
                    
                                                    </div>
                                                </div>
                                            </Fragment>     
                                        )
                                    })
                                }
                            </div>

                            <div className="col-12 col-lg-3 my-4">
                                <div id="order_summary">
                                    <h4>Order Summary</h4>
                                    <hr />
                                    <p>Subtotal:  <span className="order-summary-values">{cartItems.reduce((preval , item) => { return (preval + item.qty) } , 0 )} (Units)</span></p>
                                    <p>Est. total: <span className="order-summary-values">${cartItems.reduce((preval , item) => { return (preval + item.product.price * item.qty) } , 0 )}</span></p>
                    
                                    <hr />
                                    <button id="checkout_btn" className="btn btn-primary btn-block" onClick={placeOrderHandler}>Place Order</button>
                                </div>
                            </div>
                        </div>
                    </div>
                ) : ( <h1 classNameName='mt-5'>Successfully Submitted! or Your cart is empty!</h1> )
            }
            
        </>
    )
}

export default Cart;