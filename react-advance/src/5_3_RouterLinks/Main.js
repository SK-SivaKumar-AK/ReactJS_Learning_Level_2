import React from "react";
import Home from "./Home";
import About from "./About";
import Contact from "./Contact";
import { BrowserRouter , Routes , Route , Link } from 'react-router-dom';

function Main(){
    return (
        <div>
            <BrowserRouter>
                <ul>
                    <li>
                        <Link to={'/'}>Home</Link>
                    </li>
                    <li>
                        <Link to={'/about'}>About</Link>
                    </li>
                    <li>
                        <Link to={'/contact-us'}>Contact</Link>
                    </li>
                </ul>
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