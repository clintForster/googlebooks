import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Search from "./components/pages/Search.js";
import Saved from "./components/pages/Saved.js";

const App = () => (
    <Router>
        <div>
            <Route exact path="/Search" component={Search} />
            <Route exact path="/Saved" component={Saved} />
        </div>
    </Router>
);

export default App;