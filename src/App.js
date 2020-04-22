import React, { Component } from 'react';
import {Route, Switch, Link , BrowserRouter as Router} from "react-router-dom";
import './App.css';
import SearchByName from './components/SearchByName'

class App extends Component {
  constructor(props) {
    super(props);
  }



  render() {
    return (
      <Router>
        <div className="App">
          <div>
          <nav>
            <ul id="nav">
              <li>
                <Link to="/">Home</Link>
              </li>
              <li>
                <Link to="/">Previous<br></br>Pokemon</Link>
              </li>
              <li>
                <Link to="/">Next<br/>Pokemon</Link>
              </li>
            </ul>
          </nav>
        </div>

        <div>
          <h1 id="welcome">Welcome to your Pokedex</h1>
        </div>

        <div>
          <SearchByName />
        </div>
        </div>
      </Router>
    )
  }
}

export default App;
