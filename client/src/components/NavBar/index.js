import React from "react";
import { Link } from 'react-router-dom';
import "./style.css";

function NavBar(props) {
    return (
        <nav>
            <h3>Google Books</h3>
            <ul>
                <li><Link to="/" className="badge badge-primary">Search</Link></li>
                <li><Link to="/Saved" className="badge badge-primary">Saved</Link></li>
            </ul>
        </nav>
    );
}

export default NavBar;