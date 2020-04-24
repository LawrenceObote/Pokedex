import React from 'react'
import PokemonImage from './PokemonImage'

export default function PokemonPage(props) {


    // getData = async () => {
    //     try {
    //         const pokemon = await axios.get('https://pokeapi.co/api/v2/pokemon/');
    //         console.log(pokemon.data);
    //     } catch(e) {
    //         console.error(e);
    //     }
    // } 


    
        return (
            <div className="pokedex">
                <div>
                    <h1>Pokemon: <br/>{props.name}</h1>
                </div>
                <div>
                    <h2>Type: {props.type}</h2>
                    <h2>Type2: {props.type2}</h2>
                    <h2>Weight: {props.weight}</h2>
                </div>
                <div>
                    <h2>Order Number: {props.id}</h2>
                    <h2>Stats: </h2>
                    <h2>Height: {props.height}</h2>
                </div>
                <PokemonImage />

                
                
                
            </div>
        )
    
}
