import React from 'react'
import { Link ,} from "react-router-dom";

export default function Home() {
    return (
        //setting parent div for welcome page
        <div id="welcome-div">
            {/* setting a link that navigates to the main page */}
            <nav id="welcome">
                {/* link to take user to the main page */}
                <Link to="/pokemon">Welcome to Pokedex</Link>
            </nav>
            
        
        </div>
        
    )
}
