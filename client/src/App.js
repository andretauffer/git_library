import React from "react";
import styled from "styled-components";
import { BrowserRouter as Router, Route, Switch, Link } from "react-router-dom";
import { CookiesProvider } from "react-cookie";
import Home from "./Views/Home";
import "./App.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCat } from "@fortawesome/free-solid-svg-icons";

const Header = styled.div`
  color: var(--red);
  background-color: var(--darker);
  text-transform: uppercase;
  font-weight: bold;
  width: 100%;
  height: 80px;
  font-size: 0.9rem;
  position: fixed;
  top: 0;
  left: 0;
  z-index: 1;
  display: flex;
  flex-flow: row;
  align-items: center;
  justify-content: center;
  font-size: 2rem;
`;

const Icon = styled.div`
  color: var(--blue);
  font-size: 3rem;
  text-indent: 5px;
  transform: translate(0, -15%);
`;

const G = styled.p`
  color: var(--blue);
`;

function App() {
  return (
    <CookiesProvider>
      <Router>
        <div className="App">
          <Header>
            <G>Git</G>
            Library
            <Icon>
              <FontAwesomeIcon icon={faCat} />
            </Icon>
          </Header>

          {/* <header className="App-header">

            <Link to="/"></Link>
          </header> */}
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
