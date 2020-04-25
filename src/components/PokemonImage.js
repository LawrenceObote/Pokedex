import React from 'react'


 function PokemonImage(props) {
    
    return (
        <div>
            {/* displaying the props image that we passed from the parent */}
            <img id="image" src={props.image} alt="Pokemon Image"></img>
            
        </div>
    )
    
}
export default PokemonImage;
