import React from 'react'
import {NavLink} from 'react-router-dom'

function NavBar({setSearch}) {

    const link = {
        width: '100px',
        padding: '12px',
        margin: '0 6px 6px',
        background: 'rgb(68, 71, 73)',
        textDecoration: 'none',
        color: 'white',
      }

      function handleClick(e) {
          setSearch('')
      }

    return(
            <div>
                <h1>Realtor App</h1>
                <NavLink to='/listings' style={link} onClick={handleClick}>Home</NavLink>
                <NavLink to='/listings/new' style={link}>Create a New Listing</NavLink>
                <NavLink to='/listings/favorites' style={link}>Favorite Listings</NavLink>

        </div>
    )
}

export default NavBar;