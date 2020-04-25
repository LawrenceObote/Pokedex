import React, { Component } from 'react'
import axios from 'axios'
import AdditionalInfo from './AdditionalInfo'
import PokemonImage from './PokemonImage'
import Button from 'react-bootstrap/Button';


class SearchByNumber extends Component {
    //setting state. The value component will be used to search through the API
    state = {
        value: ""
    }

    //Asynchronous search function. Pulls API data then stores it in state
    search = async value => {
        //storing API data in a variable
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
    onChangeHandler = e => {
        console.log(e.target.value);
        this.search(e.target.value);
        this.setState({value: e.target.value.toLowerCase()})
    };

    //Function that handles the previous pokemon press.
    handlePreviousPokemonButton = () => {
        //stores state in a variable
        let counter = this.state.id;
        //sets the variable to 1 less than state.
        counter = this.state.id - 1;
        //runs the search method with state - 1.
        this.search(counter)
        //updates the state value property to 1 less than the previous state.
        this.setState({ value: counter});
        
    }

    //Function that handles the previous pokemon press.
    handleNextPokemonButton = () => {
        //stores state in a variable
        let counter = this.state.id;
        //sets the variable to 1 more than state.
        counter = this.state.id + 1;
        //runs the search method with state + 1.
        this.search(counter);
        //updates the state value property to 1 more than the previous state
        this.setState({ value: counter});
        
    }


    
    render() {
        
        return (
            <div>
                {/* Setting up input field for the search bar */}
                <input 
                    id="search"
                    value={this.state.value}
                    onChange={e => this.onChangeHandler(e)}
                    placeholder="Enter Pokemon"
                />
                
            {/* render the aditional info on the page. pass it as props */}
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

                {/* Displays pokemon image on the page. passing it as props */}
                <PokemonImage id="image"
                    image={this.state.image}
                 />
                {/* Buttons that move the id to previous and next pokemon */}
                <Button variant="dark" className="previous" onClick={this.handlePreviousPokemonButton}>Previous</Button> 
                <Button variant="dark"  className="next" onClick={this.handleNextPokemonButton}>Next</Button>
            </div>
        )
    }
}

export default SearchByNumber;
