import React, { Component } from "react";
import Container from "../Container/index.js";
import BookSearch from "../BookSearch/index.js";
import NavBar from "../NavBar/index.js";
import Title from "../Title/index.js";
import Book from "../Book/index.js";
import axios from "axios";

class Search extends Component {

    state = {
        books: [],
        search: ""
    };

    getBooks = (query) => {
        axios.get("https://www.googleapis.com/books/v1/volumes?q=" + query)
        .then((response) => {
            console.log(response.data);
                this.setState({
                   books: response.data.items
                });
            });
        }

    handleFormSubmit = (event) => {
        event.preventDefault();
        this.getBooks(this.state.search);
    }

    handleInputChange = (event) => {
        const search = event.target.name;
        const value = event.target.value;

        this.setState({
            [search]: value
        });
    }


    handleSave = (book) => {
        axios.post("/api/book", {
            title: book.volumeInfo.title,
            authors: book.volumeInfo.authors,
            description: book.volumeInfo.description,
            image: book.volumeInfo.imageLinks.thumbnail,
            link: book.volumeInfo.infoLink
        });
    }
   

    render() {
        return (
            <div>
                <NavBar />
                <Title />
                <BookSearch 
                getBooks={this.getBooks}
                handleFormSubmit={this.handleFormSubmit}
                handleInputChange={this.handleInputChange}
                />
                <Container>
                    {this.state.books.map(book => (
                        <Book
                            key={book.id}
                            removeBook={this.removeBook}
                            title={book.volumeInfo.title}
                            authors={book.volumeInfo.authors}
                            description={book.volumeInfo.description}
                            book = {book}
                            image={book.volumeInfo.imageLinks.thumbnail}
                            link={book.volumeInfo.infoLink}
                            handleSave = {this.handleSave}
                        />
                    ))}
                </Container>
            </div>
        );
    }
}

export default Search;