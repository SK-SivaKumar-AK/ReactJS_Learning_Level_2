import './Main.css';
import Home from './pages/Home';
import Header from './components/Header';
import Footer from './components/Footer';
import ProductDetail from './pages/ProductDetail';
import React , { useState } from 'react';
import { BrowserRouter , Routes , Route } from "react-router-dom";
import {ToastContainer} from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';
import Cart from './pages/Cart';

function Main() {

    const [cartItems , setCartItems] = useState([]);

  return (
    <div className="App">
      
      <BrowserRouter>
            <ToastContainer theme='dark'/>
            <Header cartItems={cartItems}/>
            <Routes>
                <Route path='/' element={ <Home /> }/>
                <Route path='/search' element={ <Home /> }/>
                <Route path='/product/:id' element={ <ProductDetail cartItems={cartItems} setCartItems={setCartItems}/> }/>
                <Route path='/cart' element={ <Cart cartItems={cartItems} setCartItems={setCartItems}/> }/>
            </Routes>
            <Footer />
      </BrowserRouter>
      
    </div>
  );
}

export default Main;
