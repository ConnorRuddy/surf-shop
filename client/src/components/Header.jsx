import React from 'react'
import { Link, NavLink } from 'react-router-dom'
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faSkullCrossbones} from '@fortawesome/free-solid-svg-icons';


 
export default function Header(){

  //Hunter I added Nav link to the headers so that when the user is on a certian page it adds the effect of the page vistited

  return (
    <header>
    <Link className="site-logo" to="/">RedSkull Surfshop <FontAwesomeIcon icon={faSkullCrossbones} className="site-skull"></FontAwesomeIcon></Link>
   
    <nav>
      <NavLink 
      to="/surfboards"
      className={({isActive}) => isActive ? "active-link" : null}>Surfboards</NavLink>
      <NavLink 
      to="/wetsuits"
      className={({isActive}) => isActive ? "active-link" : null}>Wetsuits</NavLink>
      <NavLink 
      to="/accessories"
      className={({isActive}) => isActive ? "active-link" : null}>Surf Accessories</NavLink>
      <NavLink 
      to="/cart"
      className={({isActive}) => isActive ? "active-link" : null}>Cart</NavLink>
    
    </nav>
</header>
  )
}