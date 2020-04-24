import React from 'react'
import { Link ,} from "react-router-dom";

export default function Home() {
    return (

        <div id="welcome-div">
            <nav id="welcome">
                <Link to="/pokemon">Welcome to Pokedex</Link>
            </nav>
            
        
        </div>
        
    )
}
