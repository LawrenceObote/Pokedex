import React, { Component } from 'react'
import axios from 'axios'
import PokemonPage from '../PokemonPage'

class SearchByNumber extends Component {
    constructor(props){
        super(props)
    }

    state = {
        value: ""
    }

    search = async value => {
        this.setState({loading: true});
        const pokemon = await axios.get(
            `https://pokeapi.co/api/v2/pokemon/${value}/`
        );
        console.log(pokemon);
        if(pokemon.data.types[1] === undefined){
        this.setState({
            name: pokemon.data.species.name,
            type: pokemon.data.types[0].type.name,
            // type2: pokemon.data.types[1].type.name,
            id: pokemon.data.id,
            speed: pokemon.data.stats[0].base_stat,
            specialDefense: pokemon.data.stats[1].base_stat,
            specialAttack: pokemon.data.stats[2].base_stat,
            defense: pokemon.data.stats[3].base_stat,
            attack: pokemon.data.stats[4].base_stat,
            hp: pokemon.data.stats[5].base_stat,
            height: pokemon.data.height,
            weight: pokemon.data.weight

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
                weight: pokemon.data.weight
    
            })
            
        }
        

    };


    onChangeHandler = async e => {
        console.log(e.target.value);
        this.search(e.target.value);
        this.setState({value: e.target.value})
    };



    render() {
        return (
            <div>
                <form onSubmit={this.storePokemon}>
                    {/* <label htmlFor="name">Enter Name</label>
                    <input type="text" value={this.state.value} onChange={this.storePokemon} placeholder="Enter Pokemon Name"></input> */}
                    {/* <button type="submit" value="submit" onSubmit={this.getData}>Search By Name</button>
                    <button type="submit" onSubmit={this.getData}></button> */}
                </form>
                <input
                value={this.state.value}
                onChange={e => this.onChangeHandler(e)}
                placeholder="Enter Pokemon"
                />
                {/* {this.renderPokemon} */}
                <PokemonPage
                name={this.state.name}
                type={this.state.type}
                type2={this.state.type2}
                id={this.state.id}
                speed={this.state.speed}
                specialDefense={this.state.specialDefense}
                specialAttack={this.state.specialAttack}
                defense={this.state.defense}
                attack={this.state.attack}
                hp={this.state.hp}
                height={this.state.height}
                weight={this.state.weight} />
            </div>
        )
    }
}

export default SearchByNumber;
