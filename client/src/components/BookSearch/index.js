import React from "react";
import "./style.css";

function BookSearch(props) {
    return (
        <div className="booksearch">
            <form>
                <h3>Book Search</h3>
                <p>Book</p>
                <input id="book" onChange={props.handleInputChange} type="text" name="search"></input>
                <input onClick={props.handleFormSubmit} type="submit" value="Submit"></input>
            </form>
        </div>
    );
}

export default BookSearch;