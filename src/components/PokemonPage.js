import React, { Component } from 'react'
import axios from 'axios';
import SearchByNumber from './SearchByNumber'
import SearchByName from './SearchByName'
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

    // getData = async () => {
    //     try {
    //         const pokemon = await axios.get('https://pokeapi.co/api/v2/pokemon/');
    //         console.log(pokemon.data);
    //     } catch(e) {
    //         console.error(e);
    //     }
    // } 


    render() {
        console.log(this.props);
        return (
            <div className="pokedex">
                <div>
                    <h1>Pokemon: <br/>{this.props.name}</h1>
                </div>
                <div>
                    <h2>Type: {this.props.type}</h2>
                    <h2>Type2: {this.props.type2}</h2>
                    <h2>Weight: {this.props.weight}</h2>
                </div>
                <div>
                    <h2>Order Number: {this.props.id}</h2>
                    <h2>Stats: </h2>
                    <h2>Height: {this.props.height}</h2>
                    <img src={this.props.image}></img>
                </div>

                
                
                
            </div>
        )
    }
}
