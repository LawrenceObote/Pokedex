import React from 'react'


export default function AdditionalInfo(props) {
    return (
        <div>
            <h2>name: {props.name}</h2>
            <h3>speed: {props.speed}</h3>
            <h3>Special Defense: {props.specialDefense}</h3>
            <h3>Special Attack: {props.specialAttack}</h3>
            <h3>defense: {props.defense}</h3>
            <h3>attack: {props.attack}</h3>
            <h3>hp: {props.hp}</h3>
        </div>
    )
}

