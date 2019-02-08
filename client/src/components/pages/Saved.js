import React, { Component } from "react";
import NavBar from "../NavBar/index.js";
import Title from "../Title/index.js";
import Container from "../Container/index.js";
import SavedBooks from "../SavedBooks/index.js"
import axios from "axios";

class Saved extends Component {

    state = {
        saved: []
    };

    removeBook = (id) => {
        const savedBooks = this.state.saved.filter(book => book.id !== id);

        this.setState({ saved: savedBooks });
    };

    componentDidMount() {

        axios.get("/api/books").then((response) => {
            console.log(response.data);
            this.setState({
                saved: response.data
            });
        });
    }


    render() {
        return (
            <div>
                <NavBar />
                <Title />
                <Container>
                    {this.state.saved.map(book => (
                        <SavedBooks
                            key={book.id}
                            removeBook={this.removeBook}
                            title={book.title}
                            authors={book.authors}
                            description={book.description}
                            book={book}
                            image={book.image}
                            link={book.link}
                            handleSave={this.handleSave}
                        />
                    ))}
                </Container>
            </div>
        );
    };
}



export default Saved;