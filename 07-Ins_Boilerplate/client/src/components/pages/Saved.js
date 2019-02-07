import React, { Component } from "react";
import NavBar from "./components/NavBar/index.js";
import Title from "./components/Title/index.js";
import axios from "axios";

function Saved(props) {
    return (
        <div>
            <NavBar />
            <Title />
            <Container>
                <SavedBooks />
            </Container>
        </div>
    );
}

export default Saved;