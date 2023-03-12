import React from 'react'
import { NavLink } from 'react-router-dom'

import './style.css'

const Navbar = () => {

    const activeClass = (({ isActive }) => isActive ? 'current' : 'nav-item')

    return (

        <div role='nav' className='nav-div'>
            <NavLink style={{textDecoration: "none"}} to="/" end>Waste Warriors!</NavLink>
            <nav>

                <NavLink className={activeClass} to="/" end>Home</NavLink>
                <NavLink className={activeClass} to='Fridge'>Fridge</NavLink>
                <NavLink className={activeClass} to="Login">Login</NavLink>
                <NavLink className={activeClass} to="Newsfeed">Newsfeed</NavLink>
                <NavLink className={activeClass} to="Recipes">Recipes</NavLink>
                <NavLink className={activeClass} to="Rewards">Rewards</NavLink>
            
            
            </nav>
        </div>
    )
}

export default Navbar