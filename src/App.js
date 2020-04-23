import React, { Component } from 'react';
import {Route, Switch, Link , BrowserRouter as Router} from "react-router-dom";
import './App.css';
import SearchByName from './components/SearchByName'
import SearchByNumber from './components/SearchByNumber'
import PokemonPage from './PokemonPage'
import axios from 'axios'
import { Redirect } from 'react-router-dom'


class App extends Component {
  constructor(props) {
    super(props);
  }
state = {
  name: "",
  value: "",
  toPokemon: false,
  id: 0
}


// getData = async (e, value) => {
//   try {
//   const pokemon = await axios.get(`https://pokeapi.co/api/v2/pokemon/${value}`)
//       console.log(pokemon.data.species.name);
//   this.setState({
//       name: pokemon.data.species.name,
//       type: pokemon.data.types[0].type.name,
//       type2: pokemon.data.types[1].type.name,
//       id: pokemon.data.id,
//       speed: pokemon.data.stats[0].base_stat,
//       specialDefense: pokemon.data.stats[1].base_stat,
//       specialAttack: pokemon.data.stats[2].base_stat,
//       defense: pokemon.data.stats[3].base_stat,
//       attack: pokemon.data.stats[4].base_stat,
//       hp: pokemon.data.stats[5].base_stat,
//       height: pokemon.data.height,
//       weight: pokemon.data.weight

//   })
//   } catch(e) {
//       console.error(e)
//   }
  

  
// } 
previousPokemon = (id) => {
  this.setState((state) => {
    return {id: state.id - 1};
  });
  console.log(this.state.id)
}

nextPokemon = (id) => {
  this.setState((state) => {
    return {id: this.state.id + 1}
  });
}


  render() {
    return (
      <Router>
        <div className="App">
          {/* <div>
          <nav>
            <ul id="nav">
              <li>
                <Link to="/">Home</Link>
              </li>
              <li>
                <Link to="/pokemon" onClick={this.previousPokemon}>Previous<br></br>Pokemon</Link>
              </li>
              <li>
                <Link to="/pokemon" onClick={this.nextPokemon}>Next<br/>Pokemon</Link>
              </li>
            </ul>
          </nav>
        </div> */}

        <Switch>
          <Route path="/" exact component={"/"}>
            <SearchByName />
            <SearchByNumber />
          </Route>


          <Route path="/pokemon" exact component={"/pokemon"}>
            <SearchByName /> 
          </Route>

        </Switch>

        </div>
      </Router>
    )
  }
}

export default App;
