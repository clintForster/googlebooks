import React from "react";
import Container from "./components/Container/index.js";
import BookSearch from "./components/BookSearch/index.js";
import NavBar from "./components/NavBar/index.js";
import Title from "./components/Title/index.js";
import Book from "./components/Book/index.js";

function App() {
    return (
        <div>
            <NavBar />
            <Title />
            <BookSearch />
            <Container>
                <Book />
            </Container>
        </div>
    );
}

export default App;