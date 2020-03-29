import React from "react";
import styled from "styled-components";
import { BrowserRouter as Router, Route, Switch, Link } from "react-router-dom";
import { CookiesProvider } from "react-cookie";
import Home from "./Views/Home";
import "./App.css";

function App() {
  return (
    <CookiesProvider>
      <Router>
        <div className="App">
          <header className="App-header">
            <Link to="/"></Link>
          </header>
          {/* <div className="nav-links"></div> */}
        </div>
        <Switch>
          <Route exact path="/" component={Home} />
        </Switch>
      </Router>
    </CookiesProvider>
  );
}

export default App;
