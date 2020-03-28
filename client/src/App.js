import React from "react";
import { BrowserRouter as Router, Route, Switch, Link } from "react-router-dom";
import { CookiesProvider } from "react-cookie";
import Home from "./Views/Home";
import "./App.css";

function App() {
  return (
    <CookiesProvider>
      <Router>
        <div className="App">
          <div className="nav-links">
            <header className="App-header">
              <Link to="/">
                <img src={Home} className="nav-btn"></img>
              </Link>
            </header>
          </div>
        </div>
        <Switch>
          <Route exact path="/" component={Home} />
        </Switch>
      </Router>
    </CookiesProvider>
  );
}

export default App;
