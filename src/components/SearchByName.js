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
        return pokemonName;
    }

    getData = async () => {
        try {
        const pokemon = await axios.get('https://pokeapi.co/api/v2/pokemon/bulbasaur/')

        console.log("aaaaa", pokemon);
        this.setState({
            name: pokemon.data.species.name,
            type: pokemon.data.types[0].type.name,
            type2: pokemon.data.types[1].type.name,
            id: pokemon.data.id,
            speed: pokemon.data.stats[0].base_stat,
            specialDefense: pokemon.data.stats[1].base_stat,
            specialAttack: pokemon.data.stats[2].base_stat,
            height: pokemon.data.height,
            weight: pokemon.data.weight

        })
        console.log(this.state.name)
        console.log(this.state.type);
        console.log(this.state.type2);
        console.log(this.state.id);
        console.log(this.state.specialDefense)
        } catch(e) {
            console.error(e)
        }
        
    } 

    componentDidMount() {
        this.getData()
    }

    // onSubmit = (pokemonName) => {
    //     <Redirect to={ '/${pokemonName}'} /> 
    // }
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
