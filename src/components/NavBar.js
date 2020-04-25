import React from 'react'
import { Link } from "react-router-dom";


export default function NavBar() {
    return (
        //setting up a navbar and connecting each individual link to the appropriate page
        <div id="nav">
            <Link  id="link-to-home" to="/">Home</Link>
            <Link id="link-to-pokemon-page" to="/pokemon">Pokedex</Link>
            <Link id="link-to-more-info" to="/pokemon2">More Info</Link>
        </div>
    )
}
