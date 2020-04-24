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
                <div id="text">
                    <h1>Pokemon: <br/>{props.name}</h1>
                    <h4>Type: {props.type}</h4>
                    <h4>Type2: {props.type2}</h4>
                    <h4>Weight: {props.weight}</h4>
                    <h4>Order Number: {props.id}</h4>
                    <h4>Height: {props.height}</h4>
                </div>
                

                
                
                
            </div>
        )
    
}
