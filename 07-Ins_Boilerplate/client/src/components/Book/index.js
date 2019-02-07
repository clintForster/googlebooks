import React from "react";
import "./style.css";

function Book(props) {
    return (
        <div>
            <h3>{props.title}</h3>
            <img src={props.image}/>
            <p>{props.description}</p>
            <button className="view">View</button>
            <button className="save">Save</button>
        </div>
    );
}

export default Book;