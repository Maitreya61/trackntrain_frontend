import React from "react";
import {Outlet} from 'react-router-dom'

function Navbar() {
    return ( <>
    <div>
    <div className="navbar">
        <h2>TracknTrain</h2>
    </div>
    
    <Outlet/>
    
    </div>
    

    </> );
}

export default Navbar;