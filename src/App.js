//All of the relevant imports
import React, { Component } from 'react';
import {Route, Switch, BrowserRouter as Router} from "react-router-dom";
import './App.css';
import SearchByName from './components/SearchByName'
import SearchByNumber from './components/SearchByNumber'
import Home from './components/Home'
import NavBar from "./components/NavBar"
import 'bootstrap/dist/css/bootstrap.min.css';


//declaring class component
class App extends Component {


//render method to display my components on the page
  render() {
    return (

      //react router so I can have a functional navbar
      <Router>
        {/* div for my etire App */}
        <div className="App">
          
        {/* Switch for the router */}
        <Switch>

          {/* route for home that shows what is going to be displayed */}
          <Route path="/" exact component={"/"}>
            {/* displaying the home component on / page */}
            <Home />
          </Route>

          {/* route for the main page */}
          <Route path="/pokemon" exact component={"/pokemon"}>
            {/* putting navbar on the main page */}
          <NavBar />
            {/* putting a search by name option on the /pokemon page. Also allows user to search by number */}
            <SearchByName /> 
          </Route>
          {/* route for the additional info page */}
          <Route path="/pokemon2" exact component={"/pokemon2"}>
            {/* putting nav bar on additional info page */}
            <NavBar />
            {/* displaying search by number component on the /pokemon2 page. allows user to search by name or number */}
          <SearchByNumber />
          
          </Route>

        </Switch>

        </div>
      </Router>
    )
  }
}

export default App;
