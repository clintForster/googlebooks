import React from "react";
import "./style.css";


function SavedBooks(props) {
    // console.log(props.book._id);
    return (
        <div>
            <h3>{props.title}</h3>
            <img alt="" src={props.image}/>
            <p>{props.description}</p>
            <a href={props.link} className="view btn btn-primary">View</a>
            <button onClick={() => props.removeBook(props.book._id)} className="delete btn btn-primary">Delete</button>
        </div>
    );
}

export default SavedBooks;