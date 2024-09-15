import React from 'react'
import './NavBar.css'

// Icon Imports
import { CiSettings, CiHome, CiSearch } from 'react-icons/ci';
import { CgProfile } from "react-icons/cg";
import { Link } from 'react-router-dom';

const NavBar = () => {
  return (
    <nav className='nav_container'>
      <Link className='link' to=""><CiSearch className='icon'/></Link>
      <Link className='link' to="/Home"><CgProfile className='icon'/></Link>
      <Link className='link' to=""><CiHome className='icon'/></Link>
      <Link className='link' to=""><CiSettings className='icon'/></Link>
    </nav>
  )
}

export default NavBar
