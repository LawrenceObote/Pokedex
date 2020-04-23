import React, { Component } from 'react'
import axios from 'axios';
import {Route, Switch, Link , BrowserRouter as Router} from "react-router-dom";

export default class PokemonPage extends Component {
    constructor(props){
        super(props)
    }

    state = {
        name: "",
        type: "",
        image: "",
        Weight: "",
        orderNumber: 0,
        stats: "",
        height: ""
    }

    getData = async () => {
        try {
            const pokemon = await axios.get('https://pokeapi.co/api/v2/pokemon/');
            console.log(pokemon.data);
        } catch(e) {
            console.error(e);
        }
    } 
    previousPokemon = (id) => {
        this.setState((state) => {
            console.log(this.state.id)
          return {id: this.state.id - 1};
        });
        console.log(this.state.id)
      }
      
      nextPokemon = (id) => {
        this.setState((state) => {
          return {id: this.state.id + 1}
        });
      }


    render() {
        console.log(this.props);
        return (
            <div>
            <div>
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
        </div>
            <div>
                <div>
                    <h1>Pokemon: <br/>{this.props.name}</h1>
                </div>
                <div>
                    <h2>Type: {this.props.type}</h2>
                    <h2>Type 2: {this.props.type2}</h2>
                    {/* <img>Sprite</img> */}
                    <h2>Weight: {this.props.weight}</h2>
                </div>
                <div>
                    <h2>Order Number: {this.props.id}</h2>
                    <h2>Stats: </h2>
                    <h2>Height: {this.props.height}</h2>
                </div>
                
            </div>
            </div>
        )
    }
}
