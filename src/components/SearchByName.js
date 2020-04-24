import React, { Component } from 'react'
import axios from 'axios';
import PokemonPage from './PokemonPage'
import PokemonImage from './PokemonImage'


class SearchByName extends Component {
    constructor(props){
        super(props);
    }

    state = {
        value: ""
    }
    

   

    // getData = async (value) => {
    //     try {
    //     const pokemon = await axios.get(`https://pokeapi.co/api/v2/pokemon/${value}/`)
            
    //     this.setState({
    //         name: pokemon.data.species.name,
    //         type: pokemon.data.types[0].type.name,
    //         type2: pokemon.data.types[1].type.name,
    //         id: pokemon.data.id,
    //         speed: pokemon.data.stats[0].base_stat,
    //         specialDefense: pokemon.data.stats[1].base_stat,
    //         specialAttack: pokemon.data.stats[2].base_stat,
    //         defense: pokemon.data.stats[3].base_stat,
    //         attack: pokemon.data.stats[4].base_stat,
    //         hp: pokemon.data.stats[5].base_stat,
    //         height: pokemon.data.height,
    //         weight: pokemon.data.weight

    //     })
    //     } catch(e) {
    //         console.error(e)
    //     }
        
    // } 


    // onSubmit = (pokemonName) => {
    //     <Redirect to={ '/${pokemonName}'} /> 
    // }
    // goToPokemon = async (e) => {
    //     try {
    //         const pokemon = await get('https://pokeapi.co/api/v2/pokemon/' + pokemonName);
    //     }
    
    // }

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
        this.setState({value: e.target.value})
    };

    // renderPokemon = () => {
    //     let pokemon = <h1>There's no pokemon</h1>
    //     if(this.state.pokemon) {
    //         pokemon = <PokemonPage 
    //         name={this.state.name}
    //         type={this.state.type}
    //         type2={this.state.type2}
    //         id={this.state.id}
    //         speed={this.state.speed}
    //         specialDefense={this.state.specialDefense}
    //         specialAttack={this.state.specialAttack}
    //         defense={this.state.defense}
    //         attack={this.state.attack}
    //         hp={this.state.hp}
    //         height={this.state.height}
    //         weight={this.state.weight}
    //         />
    //     }

    //     return pokemon;
    // }

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
            <div id="info">
                <form onSubmit={this.storePokemon}>
                    {/* <label htmlFor="name">Enter Name</label>
                    <input type="text" value={this.state.value} onChange={this.storePokemon} placeholder="Enter Pokemon Name"></input> */}
                    {/* <button type="submit" value="submit" onSubmit={this.getData}>Search By Name</button>
                    <button type="submit" onSubmit={this.getData}></button> */}
                </form>
                <input id="search"
                value={this.state.value}
                onChange={e => this.onChangeHandler(e)}
                placeholder="Enter Pokemon"
                />
                
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
                weight={this.state.weight}
                image={this.state.image} />
                
                <PokemonImage
                image={this.state.image}
                 />
                
                <button id="previous" onClick={this.handlePreviousPokemonButton}>Previous Pokemon</button>
                <button id="next" onClick={this.handleNextPokemonButton}>Next Pokemon</button>


            </div>
        )
    }
}

export default SearchByName;