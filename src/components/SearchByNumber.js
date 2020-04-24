import React, { Component } from 'react'
import axios from 'axios'
import AdditionalInfo from './AdditionalInfo'
import PokemonImage from './PokemonImage'
import Button from 'react-bootstrap/Button';


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


    handlePreviousPokemonButton = () => {
        let counter = this.state.id;
        counter = this.state.id - 1;
        this.search(counter)
        this.setState({ value: counter});
        
    }

    handleNextPokemonButton = () => {
        let counter = this.state.id;
        counter = this.state.id + 1;
        this.search(counter);
        this.setState({ value: counter});
        
    }


    
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

                <Button variant="dark" className="previous" onClick={this.handlePreviousPokemonButton}>Previous</Button> 
                <Button variant="dark"  className="next" onClick={this.handleNextPokemonButton}>Next</Button>
            </div>
        )
    }
}

export default SearchByNumber;
