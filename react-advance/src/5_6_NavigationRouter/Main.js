import React from "react";
import Home from "./Home";
import About from "./About";
import Contact from "./Contact";
import User from "./User";
import OldBooks from "./OldBooks";
import NewBooks from "./NewBooks";
import Login from "./Login";
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
                    <li>
                        <Link to={'/user/1'}>User 1</Link>
                    </li>
                    <li>
                        <Link to={'/user/2'}>User 2</Link>
                    </li>
                    <li>
                        <Link to={'/books/old_books'}>Old Books</Link>
                    </li>
                    <li>
                        <Link to={'/books/new_books'}>New Books</Link>
                    </li>
                    <li>
                        <Link to={'/login'}>Login</Link>
                    </li>
                </ul>
                <Routes>
                    <Route path="/" element={<Home />}/>
                    <Route path="/about" element={<About />}/>
                    <Route path="/contact-us" element={<Contact />}/>
                    <Route path="/User/:id" element={<User />}/>
                    <Route path="/books">

                        {/* No slash in front of child routes */}
                        <Route path="old_books" element={<OldBooks />}/>
                        <Route path="new_books" element={<NewBooks />}/>
                    </Route>
                    <Route path="/login" element={<Login />}/>
                </Routes>
            </BrowserRouter>
        </div>
    );
}

export default Main;