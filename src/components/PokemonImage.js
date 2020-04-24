import React from 'react'


 function PokemonImage(props) {
    
    return (
        <div>
            
            <img id="image" src={props.image}></img>
            
        </div>
    )
    
}
export default PokemonImage;
