import React from "react";
import './App.css';
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import Buttons from "./screens/Buttons";
import Inputs from './screens/Inputs';



function App() {
  return (
    <div className="container-fluid">
      <Router>
        <div className="row">
          <div className="col-xs-12 col-md-2 menu p-0">
            <ul className="p-0 m-0">
              <li>
                <Link to="/buttons">Buttons</Link>
              </li>
              <li>
                <Link to="/inputs">Inputs</Link>
              </li>
            </ul>
          </div>
          <div className="col-xs-12 col-md-10">
            <Switch>
              <Route path="/buttons">
                <Buttons />
              </Route>
              <Route path="/inputs">
                <Inputs />
              </Route>
            </Switch>
          </div>
        </div>
      </Router>
    </div>
  );
}

export default App;
