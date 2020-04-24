import React from 'react'
import {Route, Switch, Link , BrowserRouter as Router} from "react-router-dom";

export default function Home() {
    return (
        <div id="welcome-div">
            <nav id="welcome">
                <Link to="/pokemon">Welcome to Pokedex</Link>
            </nav>
            
        
        </div>
        
    )
}
