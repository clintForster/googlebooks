import React from "react";
import "./style.css";

function NavBar(props) {
    return (
        <nav>
            <h3>Google Books</h3>
            <ul>
                <li>Search</li>
                <li>Saved</li>
            </ul>
        </nav>
    );
}

export default NavBar;