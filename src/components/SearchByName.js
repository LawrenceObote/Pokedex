import React, { Component } from 'react'
import axios from 'axios';

class SearchByName extends Component {
    constructor(props){
        super(props);
    }

    state = {
        value: ""
    }

     storePokemon = async (event) => {
        this.setState({value: event.target.value});
        let pokemonName = this.state.value;
        console.log(pokemonName)
    }

    onSubmit = (pokemonName) => {
        <Redirect to={ '/${pokemonName}'} /> 
    }
    // goToPokemon = async (e) => {
    //     try {
    //         const pokemon = await get('https://pokeapi.co/api/v2/pokemon/' + pokemonName);
    //     }
    
    // }

    render() {
        return (
            <div>
                <form onSubmit={this.storePokemon}>
                    <label htmlFor="name">Enter Name</label>
                    <input type="text" value={this.state.value} onChange={this.storePokemon} placeholder="Enter Pokemon Name"></input>
                    <button type="submit" value="submit">Search By Name</button>
                </form>
            </div>
        )
    }
}

export default SearchByName;
