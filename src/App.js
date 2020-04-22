import React, { Component } from 'react';
import {Route, Switch, Link , BrowserRouter as Router} from "react-router-dom";

class App extends Component {
  constructor(props) {
    super(props);
  }


  render() {
    return (
      <Router>
        <div className="App">
          <nav>
            <ul>
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
      </Router>
    )
  }
}

export default App;
