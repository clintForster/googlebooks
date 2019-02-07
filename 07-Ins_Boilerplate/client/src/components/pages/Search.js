import React, { Component } from "react";
import Container from "./components/Container/index.js";
import BookSearch from "./components/BookSearch/index.js";
import NavBar from "./components/NavBar/index.js";
import Title from "./components/Title/index.js";
import Book from "./components/Book/index.js";
import axios from "axios";

const apiKey = "dc6zaTOxFJmzC&limit=20";

class Search extends Component {

    state = {
        books
    };

    removeBook = id => {
        const books = this.state.books.filter(book => book.id !== id);

        this.setState({ books });
    };

    getBooks = () => {
        axios.get("https://www.googleapis.com/books/v1/volumes?q=" + query + ":keyes&key=" + apiKey)
    };

    render() {
        return (
            <div>
                <NavBar />
                <Title />
                <BookSearch />
                <Container>
                    {this.state.books.map(book => (
                        <Book
                            removeBook={this.removeBook}
                            title={book.title}
                            authors={book.authors}
                            description={book.description}
                            image={book.image}
                            link={book.link}
                        />
                    ))}
                </Container>
            </div>
        );
    }

}

export default Search;