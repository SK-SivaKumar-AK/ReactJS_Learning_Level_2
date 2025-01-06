import React from "react";
import Home from "./Home";
import About from "./About";
import Contact from "./Contact";
import { BrowserRouter , Routes , Route } from 'react-router-dom';

function Main(){
    return (
        <div>
            <BrowserRouter>
                <Routes>
                    <Route path="/" element={<Home />}/>
                    <Route path="/about" element={<About />}/>
                    <Route path="/contact-us" element={<Contact />}/>
                </Routes>
            </BrowserRouter>
        </div>
    );
}

export default Main;