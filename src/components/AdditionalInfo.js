import React from 'react'

//Setting up a functional component to display additional information
export default function AdditionalInfo(props) {
    return (
        //Parent div with a classname of Pokedex to hold all of the info
        <div className="pokedex">
            {/* div with a class name of text to style the text */}
            <div id="text">
            {/* displaying all of the props that have been passed from the stateful components */}
            <h2>name: {props.name}</h2>
            <h3>speed: {props.speed}</h3>
            <h3>Special Defense: {props.specialDefense}</h3>
            <h3>Special Attack: {props.specialAttack}</h3>
            <h3>defense: {props.defense}</h3>
            <h3>attack: {props.attack}</h3>
            <h3>hp: {props.hp}</h3>
            </div>
        </div>
    )
}

