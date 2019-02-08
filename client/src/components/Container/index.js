import React from "react";
import "./style.css";

function Container(props) {
    return (
        <div className="container">
        <h3>Results</h3>
            {props.children}
        </div>
    );
}

export default Container;