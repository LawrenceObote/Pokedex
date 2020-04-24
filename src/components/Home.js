import React from 'react'
import {Route, Switch, Link , BrowserRouter as Router} from "react-router-dom";

export default function Home() {
    return (
        <div>
            <nav>
                <Link to="/pokemon">Pokemon</Link>
            </nav>
            
        
        </div>
        
    )
}
