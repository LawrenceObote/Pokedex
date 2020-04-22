import React, { Component } from 'react'
import axios from 'axios';

class SearchByName extends Component {

     storePokemon = async (e) => {
        let pokemonName = document.getElementById('name').value;
        console.log(pokemonName);
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
                    <label for="name">Enter Name</label>
                    <input type="text" value={this.state.value} onChange={this.storePokemon} placeholder="Enter Pokemon Name"></input>
                    <button type="submit" value="submit" onSubmit={this.storePokemon()}>Search By Name</button>
                </form>
            </div>
        )
    }
}

export default SearchByName;
