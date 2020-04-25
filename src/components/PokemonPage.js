import React from 'react'


export default function PokemonPage(props) {

    
        return (
            // creating a dig with the class name of pokedex
            <div className="pokedex">
                {/* creating a div with the class name of text */}
                <div id="text">
                    {/* rendering the info and displaying props */}
                    <h1>Pokemon Name: <br/>{props.name}</h1>
                    <h4>Type: {props.type}</h4>
                    <h4>Type2: {props.type2}</h4>
                    <h4>Weight: {props.weight}</h4>
                    <h4>Order Number: {props.id}</h4>
                    <h4>Height: {props.height}</h4>
                </div>
                

                
                
                
            </div>
        )
    
}
