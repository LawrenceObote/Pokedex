import React, { Component } from 'react'

export default class PokemonPage extends Component {
    constructor(props){
        super(props)
    }

    state = {
        
    }

    render() {
        return (
            <div>
                <div>
                    <h1>Pokemon<br/>Name</h1>
                </div>
                <div>
                    <h2>Type: </h2>
                    {/* <img>Sprite</img> */}
                    <h2>Weight: </h2>
                </div>
                <div>
                    <h2>Order Number: </h2>
                    <h2>Stats: </h2>
                    <h2>Height: </h2>
                </div>
                
            </div>
        )
    }
}
