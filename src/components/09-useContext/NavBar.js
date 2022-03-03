import React from 'react'
import { Link, NavLink } from "react-router-dom";
export const NavBar = () => {
    return (
        // <nav>
        //     <ul>
        //         <li><Link to="./">home</Link> </li>
        //         <li><Link to="./about">about</Link></li>
        //         <li><Link to="./login">login</Link></li>
        //     </ul>
        // </nav>
        <nav className="navbar navbar-expand-sm navbar-dark bg-dark">
            <div className="container-fluid">
                <Link className="navbar-brand" to="./">React Router</Link> 
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
                    <div className="navbar-nav">
                        <NavLink to="./" exact="true" className={({ isActive }) => (!isActive ? "nav-link" : "nav-link active")}>home</NavLink > 
                        <NavLink to="./about" exact="true" className={({ isActive }) => (!isActive ? "nav-link" : "nav-link active")}>about</NavLink >
                        <NavLink to="./login" exact="true" className={({ isActive }) => (!isActive ? "nav-link" : "nav-link active")}>login</NavLink >
                    </div>
                </div>
            </div>
        </nav>
    )
}
