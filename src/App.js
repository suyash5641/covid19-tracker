
import './App.css';
import Details from  './Details';
import State from './State';
import React from 'react';
import Track from './Track';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

function App()
 {
  
  
  return (
    <Router>
      <div>
        <nav>
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/state">Statewise </Link>
            </li>
            <li>
              <Link to="/track">Country</Link>
            </li>
          </ul>
        </nav>

        {/* A <Switch> looks through its children <Route>s and
            renders the first one that matches the current URL. */}
        <Switch>
          <Route path="/state">
            <State />
          </Route>
          <Route path="/track">
            <Track />
          </Route>
          <Route path="/">
            <Details />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
