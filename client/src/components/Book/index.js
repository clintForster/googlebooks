import React from "react";
import "./style.css";

function Book(props) {
    if (!props.image) {
        return (
            <div>
                <h3>{props.title}</h3>
                <p>no image</p>
                <p>{props.description}</p>
                <a href={props.link} className="view btn btn-primary">View</a>
                <button onClick={() => props.handleSave(props.book)} className="save btn btn-primary">Save</button>
            </div>

        );
    }
    
    return (
        <div>
            <h3>{props.title}</h3>
            <img alt="" src={props.image}/>
            <p>{props.description}</p>
            <a href={props.link} className="view btn btn-primary">View</a>
            <button onClick={() => props.handleSave(props.book)} className="save btn btn-primary">Save</button>
        </div>
    );
}

export default Book;