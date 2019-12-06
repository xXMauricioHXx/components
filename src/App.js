import React from "react";
import './App.css';
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import Buttons from "./screens/Buttons";
import Inputs from './screens/Inputs';
import Cards from './screens/Cards';


function App() {
  return (
    <div className="container-fluid">
      <Router>
        <div className="row position-relative">
          <div className="col-xs-12 col-md-2 menu p-0 position-fixed">
            <ul className="p-0 m-0">
              <li>
                <Link to="/buttons">Buttons</Link>
              </li>
              <li>
                <Link to="/inputs">Inputs</Link>
              </li>
              <li>
                <Link to="/cards">Cards</Link>
              </li>
            </ul>
          </div>
          <div className="col-xs-12 col-md-10 content">
            <Switch>
              <Route path="/buttons">
                <Buttons />
              </Route>
              <Route path="/inputs">
                <Inputs />
              </Route>
              <Route path="/cards">
                <Cards />
              </Route>
            </Switch>
          </div>
        </div>
      </Router>
    </div>
  );
}

export default App;
