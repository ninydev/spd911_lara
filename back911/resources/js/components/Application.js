import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from "react-router-dom";
import { Routes, Route, Link } from "react-router-dom";

// Мои компоненты
import Home from "../design/Home";
import About from "../design/About";
import Contact from "../design/Contact";
import PagesCollection from "./pages/Pages.Collection";


function Application() {
    return (
        <BrowserRouter>
            <div className="container">
                <nav>
                    <Link to="/">Home</Link>
                    <Link to="/about">About</Link>
                    <Link to="/contact">Contact</Link>
                    <Link to="/pages">All Pages</Link>
                </nav>

                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/about" element={<About />} />
                    <Route path="/contact" element={<Contact />} />
                    <Route path="/pages" element={<PagesCollection />} />
                </Routes>
            </div>
        </BrowserRouter>
    );
}

export default Application;

if (document.getElementById('app')) {
    ReactDOM.render(<Application />, document.getElementById('app'));
}
