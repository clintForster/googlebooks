import React from "react";
import "./style.css";


function SavedBooks(props) {
    return (
        <div>
            <h3>{props.title}</h3>
            <img src={props.image}/>
            <p>{props.description}</p>
            <button className="view">View</button>
            <button className="save">Delete</button>
        </div>
    );
}

export default SavedBooks;