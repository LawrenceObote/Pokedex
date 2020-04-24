import React, { Component } from 'react'
import axios from 'axios'
import { Link } from "react-router-dom";
import AdditionalInfo from './AdditionalInfo'
import PokemonImage from './PokemonImage'


class SearchByNumber extends Component {
    constructor(props){
        super(props)
    }

    state = {
        value: "",
        toPokemon: null
    }

    search = async value => {
        
        const pokemon = await axios.get(
            `https://pokeapi.co/api/v2/pokemon/${value}/`
        );
        console.log(pokemon);
        if(pokemon.data.types[1] === undefined){
        this.setState({
            name: pokemon.data.species.name,
            type: pokemon.data.types[0].type.name,
            type2: "",
            id: pokemon.data.id,
            speed: pokemon.data.stats[0].base_stat,
            specialDefense: pokemon.data.stats[1].base_stat,
            specialAttack: pokemon.data.stats[2].base_stat,
            defense: pokemon.data.stats[3].base_stat,
            attack: pokemon.data.stats[4].base_stat,
            hp: pokemon.data.stats[5].base_stat,
            height: pokemon.data.height,
            weight: pokemon.data.weight,
            image: pokemon.data.sprites.front_default

        })
        
        } else {
            this.setState({
                name: pokemon.data.species.name,
                type: pokemon.data.types[0].type.name,
                type2: pokemon.data.types[1].type.name,
                id: pokemon.data.id,
                speed: pokemon.data.stats[0].base_stat,
                specialDefense: pokemon.data.stats[1].base_stat,
                specialAttack: pokemon.data.stats[2].base_stat,
                defense: pokemon.data.stats[3].base_stat,
                attack: pokemon.data.stats[4].base_stat,
                hp: pokemon.data.stats[5].base_stat,
                height: pokemon.data.height,
                weight: pokemon.data.weight,
                image: pokemon.data.sprites.front_default
    
            })
            
        }
        

    };


    onChangeHandler = async e => {
        console.log(e.target.value);
        this.search(e.target.value);
        this.setState({value: e.target.value.toLowerCase()})
    };


    
    render() {
        
        return (
            <div>

                <input 
                    id="search"
                    value={this.state.value}
                    onChange={e => this.onChangeHandler(e)}
                    placeholder="Enter Pokemon"
                />
                
            
                <AdditionalInfo 
                    name={this.state.name}
                    speed={this.state.speed}
                    specialDefense={this.state.specialDefense}
                    specialAttack={this.state.specialAttack}
                    defense={this.state.defense}
                    attack={this.state.attack}
                    hp={this.state.hp}
                    image={this.state.image}
                />

                <PokemonImage id="image"
                    image={this.state.image}
                 />

                <button id="previous" onClick={this.handlePreviousPokemonButton}>Previous Pokemon</button>
                <button id="next" onClick={this.handleNextPokemonButton}>Next Pokemon</button>
            </div>
        )
    }
}

export default SearchByNumber;
