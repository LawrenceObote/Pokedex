import React, { Component } from 'react'
import axios from 'axios';

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


    render() {
        console.log(this.props);
        return (
            <div>
                <div>
                    <h1>Pokemon: <br/>{this.props.name}</h1>
                </div>
                <div>
                    <h2>Type: </h2>
                    {/* <img>Sprite</img> */}
                    <h2>Weight: </h2>
                </div>
                <div>
                    <h2>Order Number: </h2>
                    <h2>Stats: </h2>
                    <h2>Height: </h2>
                </div>
                
            </div>
        )
    }
}
