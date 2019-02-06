import React from "react";
import "./style.css";

function BookSearch(props) {
    return (
        <div className="booksearch">
            <form>
                <h3>Book Search</h3>
                <p>Book</p>
                <input type="text" name="book"></input>
                <input type="submit" value="Submit"></input>
            </form>
        </div>
    );
}

export default BookSearch;