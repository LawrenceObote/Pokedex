import React, { Component } from 'react'
import axios from 'axios';
import PokemonPage from './PokemonPage'
import PokemonImage from './PokemonImage'
import Button from 'react-bootstrap/Button';




class SearchByName extends Component {


    state = {
        value: ""
    }
    

//Asynchronous search function. Pulls API data then stores it in state
    search = async value => {
        //storing API data in a variable
        this.setState({loading: true});
        const pokemon = await axios.get(
            `https://pokeapi.co/api/v2/pokemon/${value}/`
        );
        //Not all pokemon have a second type. The If statement adjusts the data depnding on if they have a second type or not
        if(pokemon.data.types[1] === undefined){
                    //storing each piece of data in state. 
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

    //Handles the input field text and runs the search function to update state to re render the dom.
    //Then state is updated to make sure that the dom renders with every key stroke.
    onChangeHandler = async e => {
        console.log(e.target.value);
        this.search(e.target.value);
        this.setState({value: e.target.value.toLowerCase()})
    };

    
    //Function that handles the previous pokemon press.
    handlePreviousPokemonButton = () => {
        let counter = this.state.id;
        counter = this.state.id - 1;
        this.search(counter)
        this.setState({ value: counter});
        
    }
    //Function that handles the next pokemon press.
    handleNextPokemonButton = () => {
        let counter = this.state.id;
        counter = this.state.id + 1;
        this.search(counter);
        this.setState({ value: counter});
        
    }

    

    render() {
        return (
            <div id="info">

                {/* Setting up input field for the search bar */}
                <input id="search"
                value={this.state.value}
                onChange={e => this.onChangeHandler(e)}
                placeholder="Enter Pokemon"
                />
                  {/* render the pokemon info on the page. passing it as props */}
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
                 />
                {/* Displays pokemon image on the page. passing it as props */}
                <PokemonImage id="image"
                image={this.state.image}
                 />
                
                {/* Bootstrap buttons for next pokemon and previous pokemon */}
                <Button variant="dark" className="previous" onClick={this.handlePreviousPokemonButton}>Previous</Button> 
                <Button variant="dark"  className="next" onClick={this.handleNextPokemonButton}>Next</Button>


            </div>
        )
    }
}

export default SearchByName;