import React, { Component } from 'react';
import {Route, Switch, Link , BrowserRouter as Router} from "react-router-dom";
import './App.css';
import SearchByName from './components/SearchByName'
import PokemonPage from './PokemonPage'

class App extends Component {
  constructor(props) {
    super(props);
  }
state = {
  name: "",
  value: ""
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
                <Link to="/pokemon">Previous<br></br>Pokemon</Link>
              </li>
              <li>
                <Link to="/pokemon">Next<br/>Pokemon</Link>
              </li>
            </ul>
          </nav>
        </div>

        <Switch>
          <Route path="/pokemon">
            <PokemonPage />
          </Route>
        </Switch>

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
